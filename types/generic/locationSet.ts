import { TLocationEntity } from "../generic/location";
import { UidIdentifier } from "../generic/auth";

export type TFavouriteLocation = {
    id?: TLocationEntity['id'];
    authorDescription?: string;
    order?: number;
};

export type TLocationsSet = {
    id?: string;
    uid: UidIdentifier;
    name: string;
    description?: string;
    locations: TFavouriteLocation[];
};
