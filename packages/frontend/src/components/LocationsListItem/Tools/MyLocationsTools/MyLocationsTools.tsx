import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { TLocationInResult } from '@types';

import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import { MButton } from '@location-tips/location-tips-uikit/atoms/MButton';
import { MHeading } from '@location-tips/location-tips-uikit/atoms/MHeading';

import { MdiDeleteOutline } from '@front/icons/MdiDeleteOutline';
import { MdiEditOutline } from '@front/icons/MdiEditOutline';
import useModal, { MODALS } from '@front/stores/useModal';
import { EditLocationForm } from '@front/components/LocationsListItem/Tools/MyLocationsTools/EditLocationForm/EditLocationForm';
import { ConfirmDeleteLocation } from '@front/components/LocationsListItem/Tools/MyLocationsTools/ConfirmDeleteLocation/ConfirmDeleteLocation';

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

  const editLocation = () => {
    modals.registerModal(
      MODALS.EDIT_LOCATION,
      null,
      <EditLocationForm item={location} />,
      null,
    );

    modals.showModal(MODALS.EDIT_LOCATION);
  };

  const deleteLocation = () => {
    modals.registerModal(
      MODALS.DELETE_LOCATION,
      <MHeading mode="h3">Are you sure you want to delete location?</MHeading>,
      null,
      <ConfirmDeleteLocation item={location} />,
    );

    modals.showModal(MODALS.DELETE_LOCATION);
  };

  return (
    <MFlex gap="xs" wrap="nowrap" {...restProps}>
      <MButton
        mode="transparent"
        onClick={editLocation}
        className={styles.toolsButton}
      >
        <MdiEditOutline width={24} height={24} />
      </MButton>
      <MButton
        mode="transparent"
        onClick={deleteLocation}
        className={styles.toolsButton}
      >
        <MdiDeleteOutline width={24} height={24} />
      </MButton>
    </MFlex>
  );
};

export default MyLocationTools;
