import React from 'react';
import Button from "../Button/Button";
import './MenuItem.css';
import {useTelegram} from "../../hooks/useTelegram";

const MenuItem = ({menuItem, className}) => {

    const {tg} = useTelegram();
    const itemClassName = tg.colorScheme;


    return (
        <div className={`item-${itemClassName} ` + className}>
            <img src={menuItem.photo} className={'img'} />
            <div className={'font-face-hussar'}>{menuItem.name}</div>
            <div>{menuItem.price} ₽</div>
            {/*<div className={'btn-block'}>*/}
            {/*    <Button className={'btn'} onClick={onMenuHandler}>*/}
            {/*        Меню*/}
            {/*    </Button>*/}
            {/*    <Button className={'btn'} onClick={onBookHandler}>*/}
            {/*        Забронировать*/}
            {/*    </Button>*/}
            {/*</div>*/}

        </div>
    );
};

export default MenuItem;