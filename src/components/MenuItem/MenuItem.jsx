import React from 'react';
import Button from "../Button/Button";
import './MenuItem.css';
import {useTelegram} from "../../hooks/useTelegram";

const MenuItem = ({menuItem, className}) => {

    const {tg} = useTelegram();

    return (
        <div className={`item-${tg.colorScheme} ` + className}>
            <img src={menuItem.photo} className={'img'} /><br/>
            <div className={'item-name font-face-hussar'}>{menuItem.name}</div><br/>
            <div className={'price'}>{menuItem.price} ₽</div>
        </div>
    );
};

export default MenuItem;