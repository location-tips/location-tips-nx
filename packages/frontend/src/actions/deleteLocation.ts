'use server';

import { revalidateTag } from 'next/cache';
import { LocationsState, TLocationInResult } from '@types';

const SERVER = process.env.SERVER || 'http://localhost:3000';

export async function deleteLocation(
  _prevState: LocationsState,
  item: TLocationInResult,
) {
  const id = item.id;
  const uid = item.uid;

  try {
    const response = await fetch(`${SERVER}/api/location`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });

    revalidateTag(`locations_user_${uid}`);

    return response.json();
  } catch (error) {
    console.error('Error:', error);
    return { error };
  }
}
