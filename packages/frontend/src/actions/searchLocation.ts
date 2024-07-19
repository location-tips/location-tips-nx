'use server'

const SERVER = process.env.SERVER || 'http://localhost:3000';

export async function searchLocation(_prevState: any, formData: FormData) {
    const search = formData.get('searchText') as string;

    try {
        const response = await fetch(`${SERVER}/api/locations`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ searchText: search }),
        });
        
        return response.json();
    } catch (error) {
        console.error('Error:', error);
        return { error };
    }
}