import { LocationsState, TLocationInResult } from '@types';

import { MButton } from '@location-tips/location-tips-uikit/atoms/MButton';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';

import useModal from '@front/stores/useModal';
import { deleteLocation } from '@front/actions/deleteLocation';
import useMyLocations from '@front/stores/useMyLocations';

type ConfirmDeleteLocationProps = {
  item: TLocationInResult;
};

export const ConfirmDeleteLocation = ({ item }: ConfirmDeleteLocationProps) => {
  const { updateLocations } = useMyLocations();
  const { hideModal } = useModal();

  const onDelete = async () => {
    try {
      const result = await deleteLocation({} as LocationsState, item);
      if (result.error) {
        console.log('Error while deleting location:', result.error);
      } else {
        updateLocations('delete', item);
      }
    } catch (error) {
      console.error('Error while updating location:', error);
    }

    hideModal();
  };

  return (
    <MFlex justify="center">
      <MButton onClick={onDelete} mode="primary">
        Delete
      </MButton>
      <MButton onClick={() => hideModal()} mode="secondary">
        Cancel
      </MButton>
    </MFlex>
  );
};

export default ConfirmDeleteLocation;
