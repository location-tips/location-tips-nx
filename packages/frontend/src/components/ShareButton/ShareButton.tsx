import { ReactNode, useState } from 'react';

import { MButton } from '@location-tips/location-tips-uikit/atoms/MButton';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import { MDropdown } from '@location-tips/location-tips-uikit/atoms/MDropdown';

import { MdiShareOutline } from '@front/icons/MdiShareOutline';
import { ShareMenu } from '@front/components/ShareMenu';

type ShareButtonProps = {
  url: string;
  label?: ReactNode;
  media?: string;
};

export const ShareButton = ({ url, label, media }: ShareButtonProps) => {
  const [open, setOpen] = useState(false);

  const onShare = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <MDropdown
      open={open}
      align="right"
      dropdownContent={<ShareMenu url={url} media={media} />}
      stretch={false}
    >
      <MButton mode="transparent" onClick={onShare} size="l">
        <MFlex direction="row" gap="s" justify="end" align="center">
          <MdiShareOutline width={32} height={32} />
          {label}
        </MFlex>
      </MButton>
    </MDropdown>
  );
};

export default ShareButton;
