import { ReactNode } from 'react';

import { MButton } from '@location-tips/location-tips-uikit/atoms/MButton';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';

type ConfirmModalProps = {
  content?: ReactNode;
  confirmButtonText?: string;
  rejectButtonText?: string;
  confirmCallback: () => void;
  rejectCallback: () => void;
};

export const ConfirmModal = ({
  content,
  confirmButtonText = 'OK',
  rejectButtonText = 'Cancel',
  confirmCallback,
  rejectCallback,
}: ConfirmModalProps) => {
  return (
    <MFlex direction="column" justify="center">
      {content && content}
      <MFlex justify="center">
        <MButton onClick={() => confirmCallback()} mode="primary">
          {confirmButtonText}
        </MButton>
        <MButton onClick={() => rejectCallback()} mode="secondary">
          {rejectButtonText}
        </MButton>
      </MFlex>
    </MFlex>
  );
};

export default ConfirmModal;
