'use client';

import { addToFavourites } from '@front/actions/addToFavourites';
import { removeFromFavourites } from '@front/actions/removeFromFavourites';
import AuthorizedForm from '@front/components/authorizedForm/authorizedForm';
import { MdiBookmark } from '@front/icons/MdiBookmark';
import { MdiBookmarkOutline } from '@front/icons/MdiBookmarkOutline';
import useFavourites from '@front/stores/useFavourites';
import { MButton } from '@location-tips/location-tips-uikit/atoms/MButton';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import { FavouritesState } from '@types';
import React, { ReactNode, useEffect } from 'react';
import { useFormState } from 'react-dom';

type BookmarkProps = {
  className?: string;
  id: string;
  label?: ReactNode;
};

const initialState = {
  favourites: [],
};

const Bookmark = ({ className, id, label }: BookmarkProps) => {
  const favouritesStore = useFavourites();

  const isBookmarked = favouritesStore.favourites.includes(id);

  const [addState, formAddAction] = useFormState<FavouritesState, FormData>(
    addToFavourites,
    initialState,
  );

  const [removeState, formRemoveAction] = useFormState<
    FavouritesState,
    FormData
  >(removeFromFavourites, initialState);

  useEffect(() => {
    favouritesStore.setFavourites(addState.favourites);
  }, [addState, favouritesStore]);

  useEffect(() => {
    favouritesStore.setFavourites(removeState.favourites);
  }, [favouritesStore, removeState]);

  return (
    <AuthorizedForm
      action={
        favouritesStore.favourites.includes(id)
          ? formRemoveAction
          : formAddAction
      }
    >
      <input type="hidden" name="locationId" value={id} />
      <MButton
        className={className}
        style={{ padding: 0 }}
        type="submit"
        mode="transparent"
      >
        <MFlex direction="row" gap="s" justify="end" align="center">
          {isBookmarked ? (
            <MdiBookmark width={32} height={32} />
          ) : (
            <MdiBookmarkOutline width={32} height={32} />
          )}
          {label}
        </MFlex>
      </MButton>
    </AuthorizedForm>
  );
};

export default Bookmark;
