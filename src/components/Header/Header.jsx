import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css'
import {useLocation, useNavigate} from "react-router-dom";

const Header = () => {

    const {onClose} = useTelegram();
    const location = useLocation();
    const navigate = useNavigate();
    const onBack = () => {
        navigate(-1);
    }

    let isMainLocation = location.pathname === `/`;

    return (
        <div className={'header'}>
            <Button onClick={isMainLocation ? onClose : onBack}>{isMainLocation ? 'Закрыть' : 'Назад'}</Button>
        </div>
    );
};

export default Header;