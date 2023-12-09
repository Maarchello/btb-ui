import './App.css';
import React, {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import {Route, Routes} from 'react-router-dom'
import RestaurantList from "./components/RestaurantList/RestaurantList";
import MenuList from "./components/MenuList/MenuList";
import BookingForm from "./components/BookingForm/BookingForm";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import BookingList from "./components/BookingList/BookingList";
import RestaurantDetails from "./components/RestaurantItem/Details/RestaurantDetails";
import ReviewForm from "./components/Review/ReviewForm";

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
                <Route path={'menu/:restId'} element={<MenuList/>} />
                <Route path={'booking/:restId'} element={<BookingForm/>} />
                <Route path={'bookings'} element={<BookingList/>} />
                <Route path={'restaurant/:restId/details'} element={<RestaurantDetails />} />
                <Route path={'bookings/:bookingId/review'} element={<ReviewForm />} />
            </Routes>

        </ThemeProvider>

    </div>
  );
}

export default App;
