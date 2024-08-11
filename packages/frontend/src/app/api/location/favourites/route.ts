import { NextRequest, NextResponse } from 'next/server';

const SERVER = process.env.SERVER || 'http://localhost:3000';

export async function GET(req: NextRequest) {
  try {
    const token = req.headers.get('Authorization') || '';

    const response = await fetch(`${SERVER}/api/locations/favourites`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    });

    if (response.status >= 200 && response.status < 300) {
        const jsonData = await response.json();

        return NextResponse.json(jsonData);
    } else {
        const error = await response.json();
        return NextResponse.json({ error }, { status: response.status });
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
