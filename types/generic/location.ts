export type TCoordinate = {
    latitude: number;
    longitude: number;
};

export type TLocation = {
    name: string;
    type: string;
    coordinates: TCoordinate;
};

export type TGeminiResponseDescribeImage = {
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
    createdAt?: Date;
    updatedAt?: Date;
    location: TLocation;
    keywords: string[];
    description: string;
    image?: TGeminiResponseDescribeImage & {
        url: string;
        exif?: string;
    };
};

export type TLocationsWithScore = TLocationEntity &{
    score: number;
};