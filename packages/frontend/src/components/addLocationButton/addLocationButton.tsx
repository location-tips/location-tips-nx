import { MButton } from '@location-tips/location-tips-uikit/atoms/MButton';

import useModal, { MODALS } from '@front/stores/useModal';
import { MdiAdd } from '@front/icons/MdiAdd';

const AddLocationButton = () => {
  const modalStore = useModal();

  const onAddLocationButtonClick = () => {
    modalStore.showModal(MODALS.ADD_LOCATION);
  };

  return (
    <MButton
      before={<MdiAdd width={24} height={24} />}
      mode="secondary"
      onClick={onAddLocationButtonClick}
    >
      Add location
    </MButton>
  );
};

export default AddLocationButton;
