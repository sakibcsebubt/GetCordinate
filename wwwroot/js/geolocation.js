document.addEventListener('DOMContentLoaded', function () {
    const getLocationBtn = document.getElementById('getLocationBtn');
    const locationResult = document.getElementById('locationResult');

    getLocationBtn.addEventListener('click', () => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(position => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                fetch('/api/location/getlocation', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ Latitude: latitude, Longitude: longitude })
                })
                    .then(response => response.json())
                    .then(data => {
                        locationResult.innerHTML = `Latitude: ${data.latitude}, Longitude: ${data.longitude}`;
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        locationResult.innerHTML = 'Error retrieving location.';
                    });
            });
        } else {
            locationResult.innerHTML = 'Geolocation is not supported by this browser.';
        }
    });
});
