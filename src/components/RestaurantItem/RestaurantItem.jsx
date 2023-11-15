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
            <div className={'img'} />
            <div className={'rating'}>{restaurant.rating}</div>
            <div className={'rating'}>{restaurant.kitchenTypes}</div>
            <div className={'name'}>{restaurant.name}</div>
            <Button className={'add-btn'} onClick={onMenuHandler}>
                Меню
            </Button>
            <Button className={'add-btn'} onClick={onBookHandler}>
                Забронировать
            </Button>
        </div>
    );
};

export default RestaurantItem;