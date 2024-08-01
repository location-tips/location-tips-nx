'use server'

const SERVER = process.env.SERVER || 'http://localhost:3000';

export async function searchLocation(_prevState: any, formData: FormData) {    
    try {
        const response = await fetch(`${SERVER}/api/locations`, {
            method: 'POST',
            body: formData,
        });
        
        return response.json();
    } catch (error) {
        console.error('Error:', error);
        return { error };
    }
}