import React, {useState} from 'react';
import './RestaurantItem.css'
import '../../Common.css'

import {useNavigate} from 'react-router-dom';
import {useTelegram} from "../../hooks/useTelegram";
// import {ExpandMore} from "@mui/icons-material";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    IconButton,
    IconButtonProps,
    styled,
    Typography
} from "@mui/material";
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

    const onDetailsHandler = () => {
        navigate(`/restaurant/${restaurant.id}/details`);
    }
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
            <Card>
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
                            <Button size="small" onClick={onDetailsHandler}>Подробнее</Button>
                            <Button size="small" onClick={onBookHandler}>Забронировать</Button>
                    {/*<ExpandMore*/}
                    {/*    expand={expanded}*/}
                    {/*    onClick={handleExpandClick}*/}
                    {/*    aria-expanded={expanded}*/}
                    {/*    aria-label="show more">*/}
                    {/*    <ExpandMoreIcon />*/}
                    {/*</ExpandMore>*/}
                </CardActions>
                {/*<Collapse in={expanded} timeout="auto" unmountOnExit>*/}
                {/*    <CardContent>*/}
                {/*        <Typography paragraph>*/}
                {/*            {restaurant.description}*/}
                {/*        </Typography>*/}
                {/*    </CardContent>*/}
                {/*</Collapse>*/}
            </Card>

        </div>
    );
};

export default RestaurantItem;