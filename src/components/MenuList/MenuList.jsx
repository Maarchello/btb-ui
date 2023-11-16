import React from 'react';
import './MenuList.css'
import RestaurantItem from "../RestaurantItem/RestaurantItem";
import MenuItem from "../MenuItem/MenuItem";
import { useParams } from 'react-router-dom';


const menuItems = [
    {
        id: 1,
        restId: 1,
        name: 'Рулетики из баклажанов с грецким орехом',
        price: '375',
        photo: 'https://img.restoclub.ru/uploads/photomenu/1/3/3/2/1332fe8db75428eb908f851072600b95_w958_h835.jpg',
        description: 'Мясо сыр и хуй туды'
    },
    {
        id: 2,
        restId: 1,
        name: 'Биг Тата Хинкали. 40 хинкали внутри одной ',
        price: '2000',
        photo: 'https://img.restoclub.ru/uploads/photomenu/6/3/7/5/63751d7c0146abbdccfdb923e70a58f2_w958_h835.jpg',
        description: 'Мясо сыр и хуй туды'
    },
    {
        id: 3,
        restId: 1,
        name: 'Гурули',
        price: '390',
        photo: 'https://img.restoclub.ru/uploads/photomenu/4/f/6/d/4f6d861275d2632c6e687b935c309cf5_w958_h835.jpg',
        description: 'Мясо сыр и хуй туды'
    },
    {
        id: 4,
        restId: 1,
        name: 'Оджахури со свининой и томатом ',
        price: '435',
        photo: 'https://img.restoclub.ru/uploads/photomenu/3/a/9/d/3a9d53415d205bc6b78ee9ac6ccd3bd5_w958_h835.jpg',
        description: 'Мясо сыр и хуй туды'
    },
    {
        id: 5,
        restId: 1,
        name: 'Оливье от Таты',
        price: '390',
        photo: 'https://img.restoclub.ru/uploads/photomenu/f/8/2/6/f82664c71833ecde953c9829e8b419b8_w958_h835.jpg',
        description: 'Мясо сыр и хуй туды'
    },
    {
        id: 6,
        restId: 1,
        name: 'Батонские развалины',
        price: '230',
        photo: 'https://img.restoclub.ru/uploads/photomenu/7/0/9/0/7090bb604dbd89ab0efe451ab5dc18fd_w958_h835.jpg',
        description: 'Мясо сыр и хуй туды'
    },
    {
        id: 7,
        restId: 1,
        name: 'Хворост с Казбеги',
        price: '185',
        photo: 'https://img.restoclub.ru/uploads/photomenu/3/f/7/5/3f75c2286dad44ccf1b01bed7bda7208_w958_h835.jpg',
        description: 'Мясо сыр и хуй туды'
    },
]

const MenuList = () => {
    const { restId} = useParams();


    return (
        <div className={'list'}>
            {menuItems
                .filter((el) => {
                    return el.restId === parseInt(restId);
                }).map(item => {
                return <MenuItem
                    menuItem={item}
                    className={'item'}
                />
            })}

        </div>
    );
};

export default MenuList;