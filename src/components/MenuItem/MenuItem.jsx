import React from 'react';
import './MenuItem.css';
import {Card, CardContent, CardMedia, Typography} from "@mui/material";

const MenuItem = ({menuItem, className}) => {

    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={menuItem.photo}
                    alt="menuItem.name"
                />
                <CardContent>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {menuItem.name}
                    </Typography>

                    <Typography variant="body1" className={'price'}>
                        {menuItem.price} ₽
                    </Typography>
                </CardContent>
            </Card>
        </div>

        // <div className={`item-${tg.colorScheme} ` + className}>
        //     <img src={menuItem.photo} className={'img'} /><br/>
        //     <div className={'item-name font-face-hussar'}>{menuItem.name}</div><br/>
        //     <div className={'price'}>{menuItem.price} ₽</div>
        // </div>
    );
};

export default MenuItem;