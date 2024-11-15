import { LocationEntity, LocationSetEntity } from '@types';

export type TLocationSetItemEntity = {
  id?: string;
  locationId: LocationEntity['id'];
  setId: LocationSetEntity['id'];
  name: string;
  description?: string;
  order?: number;
};
