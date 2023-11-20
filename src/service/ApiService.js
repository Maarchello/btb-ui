// const baseUrl = 'http://localhost:8080';
const baseUrl = 'https://09ef-92-100-177-16.ngrok-free.app';
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