// const baseUrl = 'http://localhost:8080';
const baseUrl = 'https://09ef-92-100-177-16.ngrok-free.app';

export function getRestaurants(callback) {
    fetch(`${baseUrl}/api/restaurants`)
        .then((res) => res.json())
        .then((data) => {
            callback(data);
        }).catch((err) => {
        console.log('catch request error');
        console.log(err);
    });
}

export function getMenuItems(restaurantId, callback) {
    fetch(`${baseUrl}/api/restaurants/${restaurantId}/menu`)
        .then((res) => res.json())
        .then((data) => {
            callback(data);
        }).catch((err) => {
        console.log('catch request error');
        console.log(err);
    });
}