import React from 'react';
import classes from './Navigate.module.css'
import NavbarLink from "../NavbarLink/NavbarLink";

const links = ['About', 'Services', 'Pricing', 'Blog'];

const Navigate = () => {

    return (
        <div className={classes.nav}>
            {links.map((link) => <NavbarLink key={link} link={link}/>)}
        </div>
    );
};

export default Navigate;