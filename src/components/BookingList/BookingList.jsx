import React, {useEffect, useState} from 'react';
import {getRestaurantBookings} from "../../service/ApiService";
import {useTelegram} from "../../hooks/useTelegram";
import {CircularProgress} from "@mui/material";
import '../../Common.css';
import './BookingList.css';
import BookingItem from "./BookingItem/BookingItem";

const BookingList = () => {

    const {user} = useTelegram();

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        getRestaurantBookings(user?.id,(data) => setBookings(data))
    }, []);

    return (
        <div className={'main list'}>

            {bookings.length === 0 ? <CircularProgress /> : bookings.map(item => {
                return <BookingItem booking={item} />
            })}

        </div>
    );
};

export default BookingList;