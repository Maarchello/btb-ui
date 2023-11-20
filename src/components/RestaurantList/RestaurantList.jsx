import React, {useEffect, useState} from 'react';
import './RestaurantList.css'
import '../../Common.css'
import RestaurantItem from "../RestaurantItem/RestaurantItem";
import {CircularProgress} from "@mui/material";
import {getRestaurants} from "../../service/ApiService";
const RestaurantList = () => {

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        getRestaurants((data) => setRestaurants(data))
    }, []);

    return (
        <div className={'main list'}>
            {restaurants.length === 0 ? <CircularProgress /> : restaurants.map(item => {
                return <RestaurantItem
                    restaurant={item}
                    className={'item'}
                />
            })}

        </div>
    );
};

export default RestaurantList;