import React from 'react';

import classes from './Taco.module.css';
import TacoIngredient from './TacoIngredient/TacoIngredient'

const taco = (props) => {
    return (
        <div className={classes.Taco}>
            <TacoIngredient type="cheese" />
            <TacoIngredient type="salsa" />
            <TacoIngredient type="meat" />
            <TacoIngredient type="salad" />
            <TacoIngredient type="bread-bottom" />
        </div>
    );
};

export default taco;