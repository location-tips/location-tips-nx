import { ReactNode, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { MdiLoadingLoop } from '@front/icons/MdiLoadingLoop';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';

type TFormStatusProps = {
  loadingText?: ReactNode;
};

const FormStatus = ({ loadingText = 'Searching ...' }: TFormStatusProps) => {
  const { pending } = useFormStatus();

  return (
    <>
      {pending && (
        <MFlex justify="end" align="center">
          <MdiLoadingLoop />
          {loadingText}
        </MFlex>
      )}
    </>
  );
};

export default FormStatus;
