import React, {useEffect, useState} from 'react';
import classes from "./CardsList.module.css";
import CardItem from "../CardItem/CardItem";
import { useSelector} from "react-redux";


const CardsList = ({limit}) => {
    const {cardsList, cardSelected, activeFilter} = useSelector(state => state.cards)
    const [cards, setCards] = useState([])

    useEffect(() => {
        if(activeFilter === 'Show All'){
            setCards(cardsList.slice(0,limit))
        }else{
            setCards(cardsList.filter((card) => card.type === activeFilter).slice(0,limit))
        }
    },[activeFilter, cardsList,limit])



    return (
        <div className={classes.list}>
            {cards.map((card) => <CardItem key={card.name} card={card} cardSelected={cardSelected}   /> )}
        </div>
    );
};

export default CardsList;