import React from 'react';
import Button from "../Button/Button";
import './RestaurantItem.css'
const RestaurantItem = ({restaurant, className, onMenu, onBook}) => {

    const onMenuHandler = () => {
        onMenu(restaurant.id)
    }
    const onBookHandler = () => {
        onBook(restaurant.id);
    }

    return (
        <div className={'restaurant ' + className}>
            <img src={restaurant.photo} className={'img'} />
            <div className={'rating'}>{restaurant.rating}</div>
            <div className={'rating'}>{restaurant.kitchenTypes}</div>
            <div className={'name'}>{restaurant.name}</div>
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