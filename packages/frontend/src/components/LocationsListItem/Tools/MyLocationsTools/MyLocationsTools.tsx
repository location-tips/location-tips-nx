import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { LocationsState, TLocationInResult } from '@types';

import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import { MButton } from '@location-tips/location-tips-uikit/atoms/MButton';
import { MHeading } from '@location-tips/location-tips-uikit/atoms/MHeading';

import { MdiDeleteOutline } from '@front/icons/MdiDeleteOutline';
import { MdiEditOutline } from '@front/icons/MdiEditOutline';
import { deleteLocation as deleteLocationAction } from '@front/actions/deleteLocation';
import useModal, { MODALS } from '@front/stores/useModal';
import useMyLocations from '@front/stores/useMyLocations';
import { EditLocationForm } from '@front/components/LocationsListItem/Tools/MyLocationsTools/EditLocationForm/EditLocationForm';
import ConfirmModal from '@front/components/confirmModal/confirmModal';

import styles from './MyLocationTools.module.css';

type MyLocationToolsProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  location: TLocationInResult;
};

export const MyLocationTools = ({
  location,
  ...restProps
}: MyLocationToolsProps) => {
  const modals = useModal();
  const { deleteLocation } = useMyLocations();

  const showEditLocationModal = () => {
    modals.registerModal(
      MODALS.EDIT_LOCATION,
      null,
      <EditLocationForm item={location} />,
      null,
    );

    modals.showModal(MODALS.EDIT_LOCATION);
  };

  const onDelete = async (item: TLocationInResult) => {
    try {
      const result = await deleteLocationAction({} as LocationsState, item);
      if (result.error) {
        console.log('Error while deleting location:', result.error);
      } else {
        deleteLocation(item);
      }
    } catch (error) {
      console.error('Error while updating location:', error);
    }

    modals.hideModal();
  };

  const showDeleteLocationModal = () => {
    modals.registerModal(
      MODALS.DELETE_LOCATION,
      <MHeading mode="h3">Are you sure you want to delete location?</MHeading>,
      null,
      <ConfirmModal
        confirmButtonText="Delete"
        confirmCallback={() => onDelete(location)}
        rejectCallback={() => modals.hideModal()}
      />,
    );

    modals.showModal(MODALS.DELETE_LOCATION);
  };

  return (
    <MFlex gap="xs" wrap="nowrap" {...restProps}>
      <MButton
        mode="transparent"
        onClick={showEditLocationModal}
        className={styles.toolsButton}
      >
        <MdiEditOutline width={24} height={24} />
      </MButton>
      <MButton
        mode="transparent"
        onClick={showDeleteLocationModal}
        className={styles.toolsButton}
      >
        <MdiDeleteOutline width={24} height={24} />
      </MButton>
    </MFlex>
  );
};

export default MyLocationTools;
