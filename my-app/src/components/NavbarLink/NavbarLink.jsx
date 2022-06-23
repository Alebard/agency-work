import React from 'react';
import classes from "./NavbarLink.module.css";

const NavbarLink = ({link}) => {
    return (
        <div>
            <a href="#" className={classes.link} onSubmit={(e)=> e.preventDefault() }>
                {link}
            </a>
        </div>
    );
};

export default NavbarLink;