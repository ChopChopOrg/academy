import ky from 'ky';

export const geocode = async address => {
    const response = await ky
        .get('https://maps.googleapis.com/maps/api/geocode/json', {
            searchParams: {
                address: encodeURIComponent(address),
                key: 'YOUR_API_KEY',
            },
        })
        .json();

    return response.results[0].geometry.location;
};
