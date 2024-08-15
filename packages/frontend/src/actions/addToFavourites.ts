'use server';

import { FavouritesState } from '@types';

const SERVER = process.env.SERVER || 'http://localhost:3000';

export async function addToFavourites(
  _prevState: FavouritesState,
  formData: FormData,
) {
  const token = formData.get('token') as string;

  console.log('formData', formData.get('locationId'));

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

    return response.json();
  } catch (error) {
    console.error('Error:', error);
    return { error };
  }
}
