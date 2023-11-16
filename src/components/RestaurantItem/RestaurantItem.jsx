import React from 'react';
import Button from "../Button/Button";
import './RestaurantItem.css'
import '../../Common.css'

import { useNavigate } from 'react-router-dom';


const RestaurantItem = ({restaurant, className, onMenu, onBook}) => {

    const navigate = useNavigate();

    const onMenuHandler = () => {
        navigate(`/menu/${restaurant.id}`)
    }
    const onBookHandler = () => {
        onBook(restaurant.id);
    }

    return (
        <div className={'main restaurant ' + className}>
            <img src={restaurant.photo} className={'img'} />
            <div className={'rating font-face-hussar'}>⭐ {restaurant.rating}, {restaurant.shortInfo}</div>
            <div className={'rest-name'}>{restaurant.name}</div>
            <div className={'btn-block'}>
                <Button className={'btn'} onClick={onMenuHandler}>
                    Меню
                </Button>
                <Button className={'btn'} onClick={onBookHandler}>
                    Забронировать
                </Button>
            </div>

        </div>
    );
};

export default RestaurantItem;