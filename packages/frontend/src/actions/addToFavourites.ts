'use server';

import { revalidateTag } from 'next/cache';
import { FavouritesState } from '@types';

const SERVER = process.env.SERVER || 'http://localhost:3000';

export async function addToFavourites(
  _prevState: FavouritesState,
  formData: FormData,
) {
  const token = formData.get('token') as string;
  const uid = formData.get('uid') as string;

  try {
    const response = await fetch(`${SERVER}/api/locations/favourites`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        locationId: formData.get('locationId'),
      }),
    });

    revalidateTag(`favourites_user_${uid}`);

    return response.json();
  } catch (error) {
    console.error('Error:', error);
    return { error };
  }
}
