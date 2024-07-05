'use server'

export async function searchLocation(_prevState: any, formData: FormData) {
    console.log("search:", formData.get('searchText'));

    const search = formData.get('searchText') as string;

    try {
        const response = await fetch('http://localhost:3000/api/locations', {
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