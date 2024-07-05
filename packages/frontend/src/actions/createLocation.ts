'use server'

export async function createLocation(_prevState: any, formData: FormData) {
    try {
        const response = await fetch('http://localhost:3000/api/location', {
            method: 'POST',
            body: formData,
        });
        
        return response.json();
    } catch (error) {
        console.error('Error:', error);
        return { error };
    }
}