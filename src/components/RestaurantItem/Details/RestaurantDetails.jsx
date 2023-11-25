import React, {useEffect, useState} from 'react';
import ImageSlider from "../../ImageSlider/ImageSlider";
import {Button, CardActions, CardContent, Typography} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";
import {getRestaurantById} from "../../../service/ApiService";

const images = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Bird',
        imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Bali, Indonesia',
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
    },
    {
        label: 'Goč, Serbia',
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
];
const RestaurantDetails = () => {

    const { restId} = useParams();
    let navigate = useNavigate();

    const onMenuHandler = () => {
        navigate(`/menu/${restaurant.id}`);
    }
    const onBookHandler = () => {
        navigate(`/booking/${restaurant.id}`);
    }

    const [restaurant, setRestaurant] = useState({});

    useEffect(() => {
        getRestaurantById(restId, (data) => setRestaurant(data))
    }, []);

    // const restaurant = state.restaurant;

    return (
        <div className={'main'}>
            <ImageSlider images={restaurant?.photos} />

            <CardContent>

                <Typography sx={{mb: 1.5}} color="text.secondary">
                    Ⓜ️️ {restaurant?.nearMetro}<br/>
                    <span>📍 {restaurant?.address?.fullStreet}</span><br/>
                    ⭐ {restaurant?.rating}<br/>
                    💸 Средний чек {restaurant?.averageBill} ₽<br/>
                    <a href={"tel:" + restaurant?.phone}>{restaurant?.phone}</a>
                </Typography>

                <Typography gutterBottom variant="h6" component="div">
                    <b>{restaurant?.name}</b>
                </Typography>

                <Typography gutterBottom paragraph>
                    {restaurant?.description}
                </Typography>

                <CardActions disableSpacing fullWidth>
                    <Button size="small" onClick={onMenuHandler}>Меню</Button>
                    <Button size="small" onClick={onBookHandler}>Забронировать</Button>
                </CardActions>

            </CardContent>
        </div>
    );
};

export default RestaurantDetails;