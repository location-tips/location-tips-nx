import { Injectable } from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';
import { DB_DEFAULT_LIMIT } from '@const';
import {
  ImageEntity,
  LocationData,
  TBounds,
  TCoordinate,
  type LocationEntity,
} from '@types';

type LocationDBColumns = Omit<LocationEntity, 'image' | 'embedded'> &
  Pick<ImageEntity, 'original' | 'medium' | 'small'>;

@Injectable()
export class DBService {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  private getLocationsQuery() {
    return this.knex
      .select<LocationDBColumns[]>([
        'id',
        'uid',
        'title',
        'type',
        'description',
        'userDescription',
        'keywords',
        'geohash',
        'latitude',
        'longitude',
        'altitude',
        'original',
        'small',
        'medium',
      ])
      .from<LocationEntity>('locations')
      .leftJoin<ImageEntity>('images', 'locations.image', 'images.id');
  }

  private mapLocations(data: LocationDBColumns[]): LocationData[] {
    return data.map((doc) => {
      return {
        id: doc.id,
        uid: doc.uid,
        title: doc.title,
        type: doc.type,
        description: doc.description,
        userDescription: doc.userDescription,
        keywords: doc.keywords,
        geohash: doc.geohash,
        latitude: doc.latitude,
        longitude: doc.longitude,
        altitude: doc.altitude,
        images: {
          original: doc.original,
          small: doc.small,
          medium: doc.medium,
        },
      };
    });
  }

  async getLocations(): Promise<LocationData[]> {
    const data = await this.getLocationsQuery().limit(DB_DEFAULT_LIMIT);

    return this.mapLocations(data);
  }

  async getUserLocations(uid: LocationEntity['uid']): Promise<LocationData[]> {
    const data = await this.getLocationsQuery()
      .where('uid', uid)
      .limit(DB_DEFAULT_LIMIT);

    return this.mapLocations(data);
  }

  async getNearestLocations(
    geohash: LocationEntity['geohash'],
  ): Promise<LocationData[]> {
    const data = await this.getLocationsQuery()
      .where('geohash', geohash)
      .limit(DB_DEFAULT_LIMIT);

    return this.mapLocations(data);
  }

  async getLocationsByIds(ids: string[]): Promise<LocationData[]> {
    const data = await this.getLocationsQuery().whereIn('id', ids);

    return this.mapLocations(data);
  }

  async getLocationById(id: string): Promise<LocationData | null> {
    const data = await this.getLocationsByIds([id]);

    return data[0] ? data[0] : null;
  }

  async searchLocationsWithinRadius(
    vector: number[],
    center: TCoordinate,
    radius: number,
  ): Promise<LocationData[]> {
    const data = await this.getLocationsQuery()
      .whereRaw(
        `earth_distance(ll_to_earth(${center.latitude}, ${center.longitude}), ll_to_earth(latitude, longitude)) <= ${radius}`,
      )
      .orderByRaw(`embedding <-> '${vector}'`)
      .limit(DB_DEFAULT_LIMIT);

    return this.mapLocations(data);
  }

  async searchLocationsInBounds(
    vector: number[],
    bounds: TBounds,
  ): Promise<LocationData[]> {
    const data = await this.getLocationsQuery()
      .whereBetween('latitude', [bounds.south, bounds.north])
      .whereBetween('longitude', [bounds.west, bounds.east])
      .orderByRaw(`embedding <-> '${vector}'`)
      .limit(DB_DEFAULT_LIMIT);

    return this.mapLocations(data);
  }

  async insertImages(images: ImageEntity[]): Promise<number> {
    return await this.knex<ImageEntity>('images')
      .insert(images)
      .returning('id');
  }

  async insertLocations(
    locations: Omit<LocationEntity, 'id'>[],
  ): Promise<LocationEntity[]> {
    return await this.knex<LocationEntity>('locations')
      .insert(locations)
      .returning('*');
  }

  async updateLocation(
    id: string,
    data: Partial<LocationEntity>,
  ): Promise<LocationEntity[]> {
    return await this.knex<LocationEntity>('locations')
      .where('id', id)
      .update(data)
      .returning('*');
  }

  async deleteLocation(id: string): Promise<LocationEntity[]> {
    return await this.knex<LocationEntity>('locations')
      .where('id', id)
      .del()
      .returning('*');
  }

  async deleteImage(id: string): Promise<ImageEntity[]> {
    return await this.knex<ImageEntity>('images')
      .where('id', id)
      .del()
      .returning('*');
  }
}
