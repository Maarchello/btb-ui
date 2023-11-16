import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import {Route, Routes} from 'react-router-dom'
import RestaurantList from "./components/RestaurantList/RestaurantList";
import Form from "./components/Form/Form";
import MenuList from "./components/MenuList/MenuList";

function App() {
    const {tg, onToggleButton} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, []);

  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route index element={<RestaurantList/>} />
            <Route path={'form'} element={<Form/>} />
            <Route path={'menu/:restId'} element={<MenuList/>} />
            {/*<Route path={'menu-'} element={<MenuList/>} />*/}
        </Routes>
    </div>
  );
}

export default App;
