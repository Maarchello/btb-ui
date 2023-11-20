import React, {useEffect, useState} from 'react';
import './Booking.css';
import '../../Common.css'

import {useParams} from "react-router-dom";
import {LocalizationProvider, MobileDatePicker, MobileTimePicker} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {ruRU} from '@mui/x-date-pickers/locales';
import "dayjs/locale/ru";
import {FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, Switch, TextField} from "@mui/material";
import Button from "../Button/Button";
import {doBooking, getRestaurantById} from "../../service/ApiService";
import {useTelegram} from "../../hooks/useTelegram";

const Booking = () => {

    const {restId} = useParams();


    const [startDate, setStartDate] = useState(new Date());
    const [startTime, setStartTime] = useState(new Date());
    const [duration, setDuration] = useState(null);
    const [guestCount, setGuestCount] = useState(null);
    const [comment, setComment] = useState(null);
    const [checked, setChecked] = useState(false);

    const [rest, setRest] = useState({address: {}});
    const handleChange = () => {
        setChecked(!checked);
    };

    const {tg, onClose} = useTelegram();

    useEffect(() => {
        getRestaurantById(restId, (data) => setRest(data))
    }, []);


    return (
        <LocalizationProvider adapterLocale={'ru'}
                              localeText={ruRU.components.MuiLocalizationProvider.defaultProps.localeText}
                              dateAdapter={AdapterDayjs}>

            <div className={`container main`}>
                <div className={'b1'}>
                    <img
                        src={rest.photo}
                        width={'100px'} height={'100px'}/>

                    <div className={'name-and-street'}>

                        <div className={'bold'}>{rest.name}</div>
                        <div>{rest.address.city}, {rest.address.fullStreet}</div>
                        <div>Ⓜ️️{rest.nearMetro}</div>
                        <div><strong>Время работы</strong> {rest.openingHours}</div>

                    </div>

                </div>

                <div className={'booking-date'}>

                    <MobileDatePicker format={'DD-MM-YYYY'}
                                      onChange={(d) => setStartDate(d)}
                                      disablePast={true}
                                      slotProps={{textField: {size: 'small'}}}
                                      label={'Выберите день'}/>

                    <MobileTimePicker onChange={(t) => setStartTime(t)}
                                      // minTime={dayjs().set('hour', 12).set('minute', 0)}
                                      // maxTime={dayjs().set('hour', 23).set('minute', 59)}
                                      label={'Выберите время начала'}
                                      ampm={false}
                                      slotProps={{textField: {size: 'small'}}}/>
                </div>


                <div className={'duration'}>
                    <div>
                        <FormControl disabled={checked} fullWidth style={{minWidth: 200}}>
                            <InputLabel id="duration-select-label">Продолжительность</InputLabel>
                            <Select
                                onChange={(v) => setDuration(v.target.value)}
                                labelId="duration-select-label"
                                id="duration-select"
                                label="Продолжительность в часах">
                                <MenuItem value={1}>1ч</MenuItem>
                                <MenuItem value={2}>2ч</MenuItem>
                                <MenuItem value={3}>3ч</MenuItem>
                                <MenuItem value={4}>4ч</MenuItem>
                                <MenuItem value={5}>5ч</MenuItem>
                                <MenuItem value={6}>6ч</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div>
                        <FormGroup>
                            <FormControlLabel control={<Switch checked={checked}
                                                               onChange={handleChange}
                                                               color="secondary"/>}
                                              label="По ситуации"/>
                        </FormGroup>

                    </div>
                </div>


                <div className={'guest-count'}>
                    <FormControl fullWidth>
                        <InputLabel id="guest-count-select-label">Количество гостей</InputLabel>
                        <Select
                            onChange={(v) => setGuestCount(v.target.value)}
                            labelId="guest-count-select-label"
                            id="guest-count-select"
                            label="Количество гостей">
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={101}>Больше 10</MenuItem>
                        </Select>
                    </FormControl>
                </div>



                <div>
                    <TextField onChange={(v) => setComment(v.target.value)} fullWidth={true} id="standard-basic"
                               label="Напишите, что важно учесть"
                               variant="standard" />
                </div>

                <Button className={'btn'} onClick={() => {
                    const requestBody = {
                        // charId: tg.initDataUnsafe?.chat?.id,
                        chatId: 170474633,
                        restaurantId: restId,
                        day: startDate,
                        time: startTime,
                        duration: duration,
                        comment: comment,
                        guestCount: guestCount
                    };

                    console.log(requestBody);
                    doBooking(requestBody, onClose);

                }}>Забронировать</Button>


            </div>
        </LocalizationProvider>

    );
};

export default Booking;