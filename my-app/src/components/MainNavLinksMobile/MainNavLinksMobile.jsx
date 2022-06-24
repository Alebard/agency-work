import React from 'react';
import classes from './MainNavLinksMobile.module.css'
import {changeActiveFilerAction} from "../../store/action-creators/action-creators";
import {useDispatch, useSelector} from "react-redux";

const MainNavLinksMobile = ({cardNavLinks}) => {
    const dispatch = useDispatch()
    const selectValue = useSelector(state => state.cards.activeFilter)

    return (
        <div className={classes.nav}>
            <select value={selectValue} onChange={(e) => dispatch(changeActiveFilerAction(e.target.value))}>
                {cardNavLinks.map((link)=> <option key={link} value={link}>{link}</option> )}
            </select>
        </div>
    );
};

export default MainNavLinksMobile;