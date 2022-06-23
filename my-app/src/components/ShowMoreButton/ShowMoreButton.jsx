import React from 'react';
import classes from "./ShowMoreButton.module.css";
const ShowMoreButton = ({setLimit}) => {
    return (
        <div>
            <button className={classes.btn} onClick={()=> setLimit(18)}>LOAD MORE</button>
        </div>
    );
};

export default ShowMoreButton;