import { MButton } from '@location-tips/location-tips-uikit/atoms/MButton';

import useModal, { MODALS } from '@front/stores/useModal';
import { MdiAdd } from '@front/icons/MdiAdd';

import './AddLocationButton.vars.css';
import styles from './AddLocationButton.module.css';

export const AddLocationButton = () => {
  const modalStore = useModal();

  const onAddLocationButtonClick = () => {
    modalStore.showModal(MODALS.ADD_LOCATION);
  };

  return (
    <MButton
      before={<MdiAdd width={24} height={24} />}
      mode="primary"
      onClick={onAddLocationButtonClick}
      className={styles.addLocationButton}
    >
      Add location
    </MButton>
  );
};

export default AddLocationButton;
