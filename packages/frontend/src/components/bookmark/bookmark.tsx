import { MdiBookmark } from '@front/icons/MdiBookmark';
import { MdiBookmarkOutline } from '@front/icons/MdiBookmarkOutline';
import { MButton } from '@location-tips/location-tips-uikit/atoms/MButton';
import React from 'react';

type BookmarkProps = {
  isBookmarked: boolean;
  toggleBookmark: () => void;
};

const Bookmark = ({ isBookmarked, toggleBookmark }: BookmarkProps) => {
  return (
    <MButton style={{ padding: 0 }} onClick={toggleBookmark} mode="transparent">
      {isBookmarked ? (
        <MdiBookmark width={36} height={36} />
      ) : (
        <MdiBookmarkOutline width={36} height={36} />
      )}
    </MButton>
  );
};

export default Bookmark;
