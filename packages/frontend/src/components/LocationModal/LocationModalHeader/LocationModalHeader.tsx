'use client';

import { MButton } from '@location-tips/location-tips-uikit/atoms/MButton';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import { MText } from '@location-tips/location-tips-uikit/atoms/MText';

import { AuthorizedSection } from '@front/components/AuthorizedSection';
import { Bookmark } from '@front/components/Bookmark';
import { ShareButton } from '@front/components/ShareButton';
import { MdiChevronLeft } from '@front/icons/MdiChevronLeft';

import type { TLocationInResult } from '@types';

type LocationModalHeaderProps = {
  location: TLocationInResult;
  onClose: () => void;
};

export const LocationModalHeader = ({
  location,
  onClose,
}: LocationModalHeaderProps) => {
  return (
    <MFlex direction="row" gap="l" justify="space-between" align="center">
      <MButton mode="transparent" onClick={onClose}>
        <MFlex direction="row" gap="s" justify="end" align="center">
          <MdiChevronLeft width={32} height={32} />
          <MText>Back to search</MText>
        </MFlex>
      </MButton>
      <MFlex direction="row" gap="l" justify="end" align="center">
        <AuthorizedSection>
          {location.id && <Bookmark id={location.id} label="Save" />}
        </AuthorizedSection>
        {window && location.id && (
          <ShareButton
            url={`${window?.location.protocol}//${window?.location.host}/location/${location.id}`}
            label={<MText>Share</MText>}
            media={location.images.original}
          />
        )}
      </MFlex>
    </MFlex>
  );
};

export default LocationModalHeader;
