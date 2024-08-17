import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import { MHeading } from '@location-tips/location-tips-uikit/atoms/MHeading';

import { MdiClose } from '@front/icons/MdiClose';
import useModal from '@front/stores/useModal';

import styles from './modalHeader.module.css';

type ModalHeaderProps = {
  title: string;
};

export const ModalHeader = ({ title }: ModalHeaderProps) => {
  const modalStore = useModal();

  const onClose = () => {
    modalStore.hideModal();
  };

  return (
    <MFlex direction="row" justify="space-between" align="center">
      <MHeading mode="h3">{title}</MHeading>
      <button
        onClick={onClose}
        aria-label="Close modal"
        className={styles.closeButton}
      >
        <MdiClose aria-hidden="true" width={24} height={24} />
      </button>
    </MFlex>
  );
};

export default ModalHeader;
