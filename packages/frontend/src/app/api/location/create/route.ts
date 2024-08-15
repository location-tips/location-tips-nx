import { NextRequest, NextResponse } from 'next/server';

const SERVER = process.env.SERVER || 'http://localhost:3000';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const token = formData.get('token') as string;

    formData.delete('token');

    const response = await fetch(`${SERVER}/api/location`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      method: 'POST',
      body: formData
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
