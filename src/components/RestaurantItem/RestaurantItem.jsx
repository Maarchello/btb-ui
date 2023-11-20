import React, {useState} from 'react';
import './RestaurantItem.css'
import '../../Common.css'

import { useNavigate } from 'react-router-dom';
import {useTelegram} from "../../hooks/useTelegram";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Collapse,
    IconButton,
    styled,
    Typography
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import {ExpandMore} from "@mui/icons-material";
import {IconButtonProps} from "@mui/material";
import {getRestaurantLocation} from "../../service/ApiService";


const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const RestaurantItem = ({restaurant, className}) => {

    const navigate = useNavigate();
    const {onClose, user} = useTelegram();

    const onMenuHandler = () => {
        navigate(`/menu/${restaurant.id}`);
    }
    const onBookHandler = () => {
        navigate(`/booking/${restaurant.id}`);
    }

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const onAddressClick = () => getRestaurantLocation(restaurant.id, user?.id, onClose);

    return (

        <div>
            <Card sx={{ minWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={restaurant.photo}
                        alt={restaurant.name}
                    />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {restaurant.name}, {restaurant.shortDescription}
                    </Typography>
                    <Typography sx={{mb: 1.5}} color="text.secondary">
                        Ⓜ️️ {restaurant.nearMetro}<br/>
                        <span onClick={onAddressClick}>📍 <u>{restaurant.address.fullStreet}</u></span><br/>
                        ⭐ {restaurant.rating}<br/>
                        💸 Средний чек {restaurant.averageBill} ₽
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                            <Button size="small" onClick={onMenuHandler}>Меню</Button>
                            <Button size="small" onClick={onBookHandler}>Забронировать</Button>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more">
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            {restaurant.description}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>


            {/*<Card sx={{ maxWidth: 345 }}>*/}
            {/*    <CardMedia*/}
            {/*        component="img"*/}
            {/*        height="140"*/}
            {/*        image={restaurant.photo}*/}
            {/*        alt="Chevrolet"*/}
            {/*    />*/}
            {/*    <CardContent>*/}
            {/*        <Typography gutterBottom variant="h6" component="div">*/}
            {/*            {restaurant.name}, {restaurant.shortDescription}*/}
            {/*        </Typography>*/}
            {/*        <Typography sx={{ mb: 1.5 }} color="text.secondary">*/}
            {/*            ⭐ {restaurant.rating} <br/>*/}
            {/*            Ⓜ️️ {restaurant.nearMetro}*/}
            {/*        </Typography>*/}

            {/*        <Typography variant="body1">*/}
            {/*            Грузинская рюмочная на Караванной улице. Концепция заведения вдохновлена барной культурой современного Тбилиси. Здесь ненавязчивая атмосфера, модная публика, а все блюда и напитки строго до 500 рублей.*/}

            {/*            В рюмочной подают фирменные домашние настойки и дистилляты из традиционных для Грузии ингредиентов: кизила, сливы, крыжовника, граната. Виды настоек постоянно обновляются, поэтому всегда можно попробовать новые вкусы. Винная карта пестрит этикетками из Грузии, Дагестана и России. По бокалам разливают домашние и плодовые вина из ежевики, абрикоса, малины и граната, крепленый рислинг и портвейн, неизменный ркацители и саперави. А при оформлении заказа гостей бесплатно угощают домашним вином на выбор.*/}

            {/*            В меню — без откровений, но с интересными нюансами. Так, закусывать предлагают намазками из Тбилиси, грузинскими соленьями, необычным тартаром с аджикой, оливками по-грузински, а традиционно питерский специалитет шаверму здесь подают в хачапури.*/}

            {/*            Среди горячих блюд все внимание на себя перетягивает огромный хинкали, в котором спрятали 40 хинкалей поменьше. Начиняют курицей, сулугуни или говядиной со свининой. Заказ необходимо делать за сутки.*/}

            {/*            Яркий минималистичный интерьер рюмочной скорее напоминает модный тбилисский бар, нежели грузинское заведение в традиционном представлении. Стены украшает авторская роспись, а светлое оформление разбавляют многочисленные акцентные детали вроде аутентичных красных ковров на полу, зеленых растений и плетеных барных стульев.*/}

            {/*            В теплый сезон работает летняя веранда.*/}
            {/*        </Typography>*/}
            {/*    </CardContent>*/}
            {/*    <CardActions>*/}
            {/*        <Button size="small">Меню</Button>*/}
            {/*        <Button size="small">Забронировать</Button>*/}
            {/*    </CardActions>*/}
            {/*</Card>*/}
        </div>

        // <div className={`restaurant-${tg.colorScheme} ` + className}>
        //     <img src={restaurant.photo} className={'img'} />
        //     <div className={'rating font-face-hussar'}>⭐ {restaurant.rating}, {restaurant.shortDescription}</div>
        //     <div>Ⓜ️️ {restaurant.nearMetro}</div><br/>
        //     <div className={'bold'}>{restaurant.name}</div>
        //     <div className={'btn-block'}>
        //         <Button className={'btn'} onClick={onMenuHandler}>
        //             Меню
        //         </Button>
        //         <Button className={'btn'} onClick={onBookHandler}>
        //             Забронировать
        //         </Button>
        //     </div>
        //
        // </div>
    );
};

export default RestaurantItem;