import React, {useEffect, useState} from 'react';
import './MenuList.css'
import '../../Common.css'

import MenuItem from "../MenuItem/MenuItem";
import { useParams } from 'react-router-dom';
import {getMenuItems} from "../../service/ApiService";

const MenuList = () => {
    const { restId} = useParams();

    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        getMenuItems(restId, (data) => setMenuItems(data))
    }, []);


    return (
        <div className={'main list'}>
            {menuItems.map(item => {
                return <MenuItem
                    menuItem={item}
                    className={'item'}
                />
            })}

        </div>
    );
};

export default MenuList;