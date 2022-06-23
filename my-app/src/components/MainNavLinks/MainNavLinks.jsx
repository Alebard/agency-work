import React from 'react';
import classes from './MainNavLinks.module.css'
import MainNavLinksItem from "../MainNavLinksItem/MainNavLinksItem";


const cardNavLinks = ['Show All', 'Design', 'Branding', 'Illustration', 'Motion']

const MainNavLinks = () => {
    return (
        <div className={classes.nav}>
            {cardNavLinks.map((link) => <MainNavLinksItem key={link} link={link} />)}
        </div>
    );
};

export default MainNavLinks;