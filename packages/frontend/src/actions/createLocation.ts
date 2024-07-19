'use server'

const SERVER = process.env.SERVER || 'http://localhost:3000';

export async function createLocation(_prevState: any, formData: FormData) {
    try {
        const response = await fetch(`${SERVER}/api/location`, {
            method: 'POST',
            body: formData,
        });
        
        return response.json();
    } catch (error) {
        console.error('Error:', error);
        return { error };
    }
}