'use server'

const SERVER = process.env.SERVER || 'http://localhost:3000';

export async function updateLocation(_prevState: any, formData: FormData) {
    const id = formData.get('id') as string;
    const title = formData.get('title') as string;
    const userDescription = formData.get('userDescription') as string;

    try {
        const response = await fetch(`${SERVER}/api/location`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, title, userDescription }),
        });
        
        return response.json();
    } catch (error) {
        console.error('Error:', error);
        return { error };
    }
}