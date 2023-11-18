import React, {useState} from 'react';
import './Booking.css';
import '../../Common.css'

import {useParams} from "react-router-dom";
import {LocalizationProvider, MobileDatePicker, MobileTimePicker} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {ruRU} from '@mui/x-date-pickers/locales';
import "dayjs/locale/ru";
import {FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, Switch, TextField} from "@mui/material";
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
// import {NumberInput} from "../DurationPicker";

const Booking = () => {

    const {restId} = useParams();
    const [startDate, setStartDate] = useState(new Date());
    const [startTime, setStartTime] = useState("10:00");
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        setChecked(!checked);
    };

    const {tg} = useTelegram();


    return (
        <LocalizationProvider adapterLocale={'ru'}
                              localeText={ruRU.components.MuiLocalizationProvider.defaultProps.localeText}
                              dateAdapter={AdapterDayjs}>
            <div className={`container-${tg.colorScheme} main`}>
                <div className={'b1'}>
                    <img
                        src={'https://img.restoclub.ru/uploads/place/6/b/1/7/6b177ade39bfcf9670ca0471cc2e76c3_w958_h835--big.webp'}
                        width={'100px'} height={'100px'}/>

                    <div className={'name-and-street'}>

                        <div className={'bold'}>Name</div>
                        <div>ул. Мира, 1, Центральный внутригородской округ</div>
                        <div>Время работы 12:00 - 01:00</div>

                    </div>

                </div>

                <div className={'booking-date'}>

                    <MobileDatePicker disablePast={true} slotProps={{textField: {size: 'small'}}} label={'Выберите день'}/>
                    <MobileTimePicker label={'Выберите время начала'} ampm={false}
                                      slotProps={{textField: {size: 'small'}}}/>
                </div>


                <div className={'duration'}>
                    <div>
                        <FormControl className={'btn'} disabled={checked} fullWidth style={{minWidth: 250}}>
                            <InputLabel id="duration-select-label">Продолжительность в часах</InputLabel>
                            <Select
                                labelId="duration-select-label"
                                id="duration-select"
                                label="Продолжительность в часах">
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
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
                        <InputLabel id="duration-select-label">Количество гостей</InputLabel>
                        <Select
                            labelId="duration-select-label"
                            id="duration-select"
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
                            <MenuItem value={-1}>Больше 10</MenuItem>
                        </Select>
                    </FormControl>
                </div>



                <div>
                    <TextField fullWidth={true} id="standard-basic"
                               label="Напишите, что важно учесть"
                               variant="standard" />
                </div>

                <Button className={'btn'}>Забронировать</Button>


            </div>
        </LocalizationProvider>

    );
};

export default Booking;