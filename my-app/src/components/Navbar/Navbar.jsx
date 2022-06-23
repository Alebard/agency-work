import React from 'react';
import classes from './Navbar.module.css'
import Logo from "../Logo/Logo";
import Navigate from "../Navigate/Navigate";
import NavbarContactButton from "../NavbarContactButton/NavbarContactButton";
import {useWindowSize} from "../../hooks/useWindowSize";

const Navbar = () => {
    const desktop = useWindowSize()
    return (
        <div className={classes.navbar}>
            <Logo />
            {desktop && <Navigate />}
            {desktop && <NavbarContactButton /> }

        </div>
    );
};

export default Navbar;