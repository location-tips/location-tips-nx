import type { TGeminiResponseDescribeImage } from "../generic/location";

export type PostLocationRequest = {
    image: File;
}

export type PostLocationResponse = TGeminiResponseDescribeImage;