// const baseUrl = 'http://localhost:8080';
const baseUrl = 'https://39cd-92-100-177-16.ngrok-free.app';

const requestOptions = {
    headers: { 'ngrok-skip-browser-warning': 'anyValueHere' },
};
export function getRestaurants(callback) {



    fetch(`${baseUrl}/api/restaurants`, requestOptions)
        .then((res) => res.json())
        .then((data) => {
            callback(data);
        }).catch((err) => {
        console.log('catch request error');
        console.log(err);
    });
}

export function getRestaurantById(restaurantId, callback) {
    fetch(`${baseUrl}/api/restaurants/${restaurantId}`, requestOptions)
        .then((res) => res.json())
        .then((data) => {
            callback(data);
        }).catch((err) => {
        console.log('catch request error');
        console.log(err);
    });
}

export function getMenuItems(restaurantId, callback) {
    fetch(`${baseUrl}/api/restaurants/${restaurantId}/menu`, requestOptions)
        .then((res) => res.json())
        .then((data) => {
            callback(data);
        }).catch((err) => {
        console.log('catch request error');
        console.log(err);
    });
}

export function doBooking(requestBody, callback) {
    let json = JSON.stringify(requestBody);
    console.log(json);

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: json
    };

    fetch(`${baseUrl}/api/bookings`, requestOptions)
        .then(res => callback());
}


export function getRestaurantLocation(restaurantId, chatId, callback) {
    console.log(restaurantId);
    console.log(chatId);

    fetch(`${baseUrl}/api/restaurants/${restaurantId}/location?chatId=${chatId}`, requestOptions)
        .then(res => callback());
}
