import React, {useEffect, useState} from 'react';
import './MenuList.css'
import '../../Common.css'

import MenuItem from "../MenuItem/MenuItem";
import {useParams} from 'react-router-dom';
import {getMenuItems} from "../../service/ApiService";
import {Box, Tab, Tabs, Typography} from "@mui/material";

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
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

const MenuList = () => {
    const { restId} = useParams();

    const [menuItems, setMenuItems] = useState([]);
    const [value, setValue] = useState(0);
    const [categories, setCategories] = useState([]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        getMenuItems(restId, (data) => {
            setMenuItems(data);
            setCategories(data.map(item => {
                return item.category;
            }).filter((v, i, self) => {
                return i == self.indexOf(v)
            }));
        })
    }, []);



    return (

        <div className={'main'}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="scrollable">

                    {
                        categories.map((item, idx) => {
                            return <Tab label={item} {...a11yProps(idx)} />
                        })
                    }

                </Tabs>
            </Box>


            <div>
                {
                    categories.map((item, idx) => {
                        return <CustomTabPanel value={value} index={idx}>

                            {
                                <div className={'list'}>
                                    {menuItems
                                        .filter((i, v, s) => i.category === item)
                                        .map(item => {
                                            return <MenuItem
                                                menuItem={item}
                                                className={'item'}
                                            />
                                    })}

                                </div>
                            }

                        </CustomTabPanel>
                    })
                }
            </div>
        </div>


    );
};

export default MenuList;