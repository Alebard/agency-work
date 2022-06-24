import React from 'react';
import classes from './MainNavLinks.module.css'
import MainNavLinksItem from "../MainNavLinksItem/MainNavLinksItem";

const MainNavLinks = ({cardNavLinks}) => {
    return (
        <div className={classes.nav}>
            {cardNavLinks.map((link) => <MainNavLinksItem key={link} link={link} />)}
        </div>
    );
};

export default MainNavLinks;