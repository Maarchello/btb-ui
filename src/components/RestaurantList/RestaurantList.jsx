import React from 'react';
import './RestaurantList.css'
import RestaurantItem from "../RestaurantItem/RestaurantItem";
import { useNavigate } from 'react-router-dom';

const restaurants = [
    {id: 1, name: 'Mama tata', rating: '5.0', photo: 'https://img.restoclub.ru/uploads/place/6/b/1/7/6b177ade39bfcf9670ca0471cc2e76c3_w958_h835--big.webp', shortInfo: 'Грузинская нео-рюмочная' },
    {id: 2, name: 'McDonald`s', rating: '4.6', photo: 'https://assets.turbologo.ru/blog/ru/2021/05/24060504/mcdonalds-logo-2018.png', shortInfo: 'Фаст-фуд' },
    {id: 3, name: 'Tokio City', rating: '4.8', photo: 'https://www.tokyo-city.ru/images/oglogo.png', shortInfo: 'Суши-бар' },
]
const RestaurantList = () => {

    const navigate = useNavigate();
    const onMenu = (restId) => {
        console.log(restId);
        navigate(`/menu/${restId}`)
    }

    const onBook = (restId) => {
        console.log(restId)
    }

    return (
        <div className={'list'}>
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