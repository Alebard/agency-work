import React from 'react';
import {ReactComponent as LogoSvg } from '../../svg/logo.svg'
import classes from './Logo.module.css'


const Logo = () => {
    return (
        <div className={classes.logo}>
            <LogoSvg  />
            <span className={classes.logo_title}>Agency</span>
        </div>
    );
};

export default Logo;