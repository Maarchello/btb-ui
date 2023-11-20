import './App.css';
import React, {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import {Route, Routes} from 'react-router-dom'
import RestaurantList from "./components/RestaurantList/RestaurantList";
import Form from "./components/Form/Form";
import MenuList from "./components/MenuList/MenuList";
import Booking from "./components/Booking/Booking";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";

function App() {
    const {tg, onToggleButton} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, []);

    const theme = createTheme({
        palette: {
            mode: tg.colorScheme,
        },
    })

  return (
    <div className="App">
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <Header/>
            <Routes>
                <Route index element={<RestaurantList/>} />
                <Route path={'form'} element={<Form/>} />
                <Route path={'menu/:restId'} element={<MenuList/>} />
                <Route path={'booking/:restId'} element={<Booking/>} />
            </Routes>

        </ThemeProvider>

    </div>
  );
}

export default App;
