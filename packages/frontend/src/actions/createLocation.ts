'use server';

import { LocationsState } from '@types';

const SERVER = process.env.SERVER || 'http://localhost:3000';

export async function createLocation(
  _prevState: LocationsState,
  formData: FormData,
) {
  const token = formData.get('token') as string;

  try {
    const response = await fetch(`${SERVER}/api/location`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'POST',
      body: formData,
    });

    return response.json();
  } catch (error) {
    console.error('Error:', error);
    return { error };
  }
}
