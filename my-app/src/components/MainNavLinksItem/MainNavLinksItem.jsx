import React from 'react';
import classes from "./MainNavLinksItem.module.css";
import {useDispatch, useSelector} from "react-redux";
import {changeActiveFilerAction} from "../../store/action-creators/action-creators";

const MainNavLinksItem = ({link}) => {
    const {activeFilter} = useSelector(state => state.cards)
    const dispatch = useDispatch()

    return (
        <div
            className={`${classes.link} ${activeFilter === link? classes.active: ''}`}
            onClick={() => dispatch(changeActiveFilerAction(link))}
        >
            {link}
        </div>
    );
};

export default MainNavLinksItem;