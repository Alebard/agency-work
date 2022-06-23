import React from 'react';
import classes from "./header.module.css";
import Navbar from "../Navbar/Navbar";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import HeaderSubTitle from "../HeaderSubTitle/HeaderSubTitle";
import {cards} from "../../cards/cards";


const Header = () => {
    return (
        <div className={classes.header}>
            <Navbar />
            <HeaderTitle />
            <HeaderSubTitle />
        </div>
    );
};

export default Header;