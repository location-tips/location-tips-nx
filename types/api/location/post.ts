import type { TLocationsWithImages } from "../../generic/location";

export type PostLocationRequest = {
    image: File;
}

export type PostLocationResponse = TLocationsWithImages;
