import { getAuth } from 'firebase/auth';

import type { TLocationInResult } from '@types';

export async function fetchFavourites(): Promise<TLocationInResult[]> {
  const auth = getAuth();

  const token = await auth.currentUser?.getIdToken();

  try {
    const response = await fetch(`/api/location/favourites`, {
      method: 'GET',
      headers: {
        Authorization: `${token}`,
        'Content-Type': 'application/json',
      },
      next: {
        tags: [
          'favourites',
          `favourites_user_${auth.currentUser?.uid}`,
          `user_${auth.currentUser?.uid}`,
        ],
      },
    });

    const data = await response.json();

    return data.favourites;
  } catch (error) {
    console.error(error);
    return [];
  }
}
