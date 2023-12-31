import React, {useEffect, useState} from 'react';
import './RestaurantList.css'
import '../../Common.css'
import RestaurantItem from "../RestaurantItem/RestaurantItem";
import {Box, CircularProgress, Tab, Tabs, Typography} from "@mui/material";
import {getRestaurants} from "../../service/ApiService";

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            className={'pad'}
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}>
            {value === index && (
                <Box sx={{ p: 0 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const RestaurantList = () => {

    const [restaurants, setRestaurants] = useState([]);
    const [categories, setCategories] = useState([]);
    const [value, setValue] = useState(0);


    useEffect(() => {
        getRestaurants((data) => {
            setRestaurants(data);

            let cats = data.map(item => {
                return item.category;
            }).filter((v, i, self) => {
                return v !== undefined && i == self.indexOf(v);
            });
            cats.unshift('Все');
            setCategories(cats);
        })
    }, []);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={'main'}>

            <Box sx={{ marginBottom: 2, borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="scrollable">

                    {
                        categories.map((item, idx) => {
                            return <Tab label={item} {...a11yProps(idx)} />
                        })
                    }

                </Tabs>
            </Box>

            <div>
                {categories.length === 0 ? <CircularProgress /> : categories.map((item, idx) => {

                    return <CustomTabPanel value={value} index={idx}>

                        {
                            <div className={'list'}>

                                {restaurants
                                    .filter((i, v, s) => {
                                        return item === 'Все' ? true : i.category === item;
                                    })
                                    .map(item => {
                                        return <RestaurantItem restaurant={item} />
                                    })
                                }

                            </div>
                        }

                    </CustomTabPanel>


                })}
            </div>


        </div>
    );
};

export default RestaurantList;