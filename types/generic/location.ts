import { VectorValue } from '@google-cloud/firestore';

export type TCoordinate = {
    latitude: number;
    longitude: number;
};

export type TLocation = {
    name: string;
    type: string;
    description?: string;
    coordinates: TCoordinate;
};

export type TGeminiResponseDescribeImage = {
    title: string;
    keywords: string[];
    description: string;
    location?: TLocation;
};

export type TBoundedLocation = TLocation & {
    boundingBox: {
        north: number;
        south: number;
        east: number;
        west: number;
    };
};

export type TLocationSearchDescription = {
    near?: TLocation[];
    in?: TBoundedLocation[];
    location: TLocation[];
    distance?: string;
    description: string;
    prompt: string;
}

export type TLocationEntity = {
    id?: string;
    uid: string;
    createdAt?: Date;
    updatedAt?: Date;
    embedding_field: VectorValue;
    geohash: string;
    location: TLocation;
    keywords: string[];
    title: string;
    userDescription?: string;
    description: string;
    image?: TGeminiResponseDescribeImage & {
        url: string;
        exif?: string;
    };
};

export type TLocationsWithScore = TLocationEntity &{
    score: number;
};