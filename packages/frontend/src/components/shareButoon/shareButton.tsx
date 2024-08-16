import { ReactNode } from 'react';

import { MButton } from '@location-tips/location-tips-uikit/atoms/MButton';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';

import { MdiShareOutline } from '@front/icons/MdiShareOutline';

type ShareButtonProps = {
  url: string;
  label?: ReactNode;
};

const ShareButton = ({ url, label }: ShareButtonProps) => {
  const onShare = () => {
    if (navigator.share && navigator.canShare({ url })) {
      navigator.share({ url });
    } else {
      console.log('Web Share API is not supported');
    }
  };

  return (
    <MButton mode="transparent" onClick={onShare} size="l">
      <MFlex direction="row" gap="s" justify="end" align="center">
        <MdiShareOutline width={32} height={32} />
        {label}
      </MFlex>
    </MButton>
  );
};

export default ShareButton;
