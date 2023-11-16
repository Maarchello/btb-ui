import React from 'react';
import Button from "../Button/Button";
import './MenuItem.css';
import {useTelegram} from "../../hooks/useTelegram";

const MenuItem = ({menuItem, className}) => {

    const {tg} = useTelegram();

    return (
        <div className={`item-${tg.colorScheme} ` + className}>
            <img src={menuItem.photo} className={'img'} />
            <div className={'font-face-hussar'}>{menuItem.name}</div><br/>
            <div className={'price'}>{menuItem.price} ₽</div>
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