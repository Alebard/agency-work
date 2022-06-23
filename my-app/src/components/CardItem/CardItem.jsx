import React, {useEffect, useState} from 'react';
import classes from "./CardItem.module.css";
import {useDispatch, useSelector} from "react-redux";
import {changeActiveFilerAction, selectCard} from "../../store/action-creators/action-creators";
import {useWindowSize} from "../../hooks/useWindowSize";

const CardItem = ({card, cardSelected}) => {
    const dispatch = useDispatch();
    const desktop = useWindowSize()

    return (
        <div className={`${classes.card_container} ${cardSelected === card.name? classes.card_selected: classes.card_default}`}>
            <div className={classes.card}
                 style={{backgroundImage: `url("${card.img}")`}}
                 onClick={desktop? () => dispatch(selectCard(card.name, cardSelected )): null}>
                <span className={classes.card_type}
                      onClick={(e) => {
                          e.stopPropagation()
                          dispatch(changeActiveFilerAction(card.type))
                      }}
                >{card.type}</span>
                <h2 className={classes.card_name}>{card.name}</h2>
            </div>
        </div>

    );
};

export default CardItem;