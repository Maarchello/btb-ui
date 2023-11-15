import React from 'react';
import './RestaurantList.css'
import RestaurantItem from "../RestaurantItem/RestaurantItem";

const restaurants = [
    {id: 1, name: 'Mama tata', rating: '5.0', photo: 'photo.jpg', kitchenTypes: ['Грузинская'] },
    {id: 2, name: 'McDonald`s', rating: '4.6', photo: 'photo.jpg', kitchenTypes: ['Фаст-фуд'] },
    {id: 3, name: 'Tokio City', rating: '4.8', photo: 'photo.jpg', kitchenTypes: ['Суши-бар'] },
]
const RestaurantList = () => {

    const onMenu = (restId) => {
        console.log(restId);
    }

    const onBook = (restId) => {
        console.log(restId)
    }

    return (
        <div className={'list'}>
            ProductList

            {restaurants.map(item => {
                return <RestaurantItem
                    restaurant={item}
                    onMenu={onMenu}
                    onBook={onBook}
                    className={'item'}
                />
            })}

        </div>
    );
};

export default RestaurantList;