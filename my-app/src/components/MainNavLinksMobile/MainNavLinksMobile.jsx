import React from 'react';
import classes from './MainNavLinksMobile.module.css'
import {changeActiveFilerAction} from "../../store/action-creators/action-creators";
import {useDispatch} from "react-redux";


const cardNavLinks = ['Show All', 'Design', 'Branding', 'Illustration', 'Motion']

const MainNavLinksMobile = () => {
    const dispatch = useDispatch()

    return (
        <div className={classes.nav}>
            {/*{cardNavLinks.map((link) => <MainNavLinksItem key={link} link={link} />)}*/}
            <select onChange={(e) => dispatch(changeActiveFilerAction(e.target.value))}>
                {cardNavLinks.map((link)=> <option key={link} value={link}>{link}</option> )}
            </select>
        </div>
    );
};

export default MainNavLinksMobile;