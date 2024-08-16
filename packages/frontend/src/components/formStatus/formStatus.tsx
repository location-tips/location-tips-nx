import { ReactNode } from 'react';
import { useFormStatus } from 'react-dom';

import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';

import { MdiLoadingLoop } from '@front/icons/MdiLoadingLoop';

type TFormStatusProps = {
  loadingText?: ReactNode;
  iconWidth?: number;
  iconHeight?: number;
  className?: string;
};

const FormStatus = ({
  loadingText = 'Searching ...',
  iconWidth = 24,
  iconHeight = 24,
  className,
}: TFormStatusProps) => {
  const { pending } = useFormStatus();

  return (
    <>
      {pending && (
        <MFlex justify="end" align="center" className={className}>
          <MdiLoadingLoop width={iconWidth} height={iconHeight} />
          {loadingText}
        </MFlex>
      )}
    </>
  );
};

export default FormStatus;
