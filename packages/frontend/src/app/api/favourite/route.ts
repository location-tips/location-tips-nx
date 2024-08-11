import { NextRequest, NextResponse } from 'next/server';

const SERVER = process.env.SERVER || 'http://localhost:3000';

type Params = {
  params: {
    id: string;
  };
};

export async function GET(req: NextRequest, context: Params) {
  try {
    const response = await fetch(`${SERVER}/api/locations/favourite`, {
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
