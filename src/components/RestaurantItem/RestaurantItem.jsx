import React from 'react';
import Button from "../Button/Button";
import './RestaurantItem.css'
import '../../Common.css'

import { useNavigate } from 'react-router-dom';
import {useTelegram} from "../../hooks/useTelegram";


const RestaurantItem = ({restaurant, className, onMenu, onBook}) => {

    const navigate = useNavigate();
    const {tg} = useTelegram();

    const onMenuHandler = () => {
        navigate(`/menu/${restaurant.id}`)
    }
    const onBookHandler = () => {
        onBook(restaurant.id);
    }

    const itemClassName = tg.colorScheme;

    return (
        <div className={`main restaurant-${itemClassName} ` + className}>
            <img src={restaurant.photo} className={'img'} />
            <div className={'rating font-face-hussar'}>⭐ {restaurant.rating}, {restaurant.shortInfo}</div><br/>
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