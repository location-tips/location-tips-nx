import { TImageEntity, TLocationEntity } from '@types';

export type TCoordinates = {
  latitude: number;
  longitude: number;
};

export type TBounds = {
  north: number;
  south: number;
  east: number;
  west: number;
};

export type TPossibleLocation = {
  name: string;
  type: string;
  description?: string;
  coordinates: TCoordinates;
};

export type TGeminiResponseDescribeImage = {
  title: string;
  keywords: string[];
  description: string;
  location?: Location;
};

export type TBoundedPoint = TPossibleLocation & {
  boundingBox: TBounds;
};

export type TLocationData = Omit<TLocationEntity, 'image' | 'embedding'> & {
  images: Pick<TImageEntity, 'original' | 'medium' | 'small'>;
};

export type TLocationSearchDescription = {
  near?: TPossibleLocation[];
  in?: TBoundedPoint[];
  location: TPossibleLocation[];
  distance?: string;
  description: string;
  originalPrompt: string;
  prompt: string;
  image?: string;
  voice?: string;
  voiceKeywords?: string;
};

export type TLocationInResult = TLocationData & {
  nearest: TLocationData[];
};
