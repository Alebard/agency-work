import React from 'react';
import classes from './Main.module.css'
import MainNavLinks from "../MainNavLinks/MainNavLinks";
import CardsList from "../CardsList/CardsList";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {deleteCard} from "../../store/action-creators/action-creators";
import {useWindowSize} from "../../hooks/useWindowSize";
import MainNavLinksMobile from "../MainNavLinksMobile/MainNavLinksMobile";
import {CARDS_TYPES} from "../../cards/cards";

function keyHandler(e, dispatch) {
    if (e.key === 'Delete') {
        dispatch(deleteCard(e))
    }
}
const cardNavLinks = Object.values(CARDS_TYPES)

const Main = () => {
    const {cardsList} = useSelector(state => state.cards)
    const [limit, setLimit] = useState(9)
    const dispatch = useDispatch()
    const desktop = useWindowSize()

    useEffect(() => {
        document.addEventListener('keydown', (e) => (keyHandler(e,dispatch)))
    }, [])


    return (
        <div className={classes.main}>
            {desktop
                ?
                <MainNavLinks cardNavLinks={cardNavLinks} />
                :
                <MainNavLinksMobile cardNavLinks={cardNavLinks} />}
            <CardsList limit={limit}/>
            { limit < cardsList.length && <ShowMoreButton setLimit={setLimit}/> }
        </div>
    );
};

export default Main;