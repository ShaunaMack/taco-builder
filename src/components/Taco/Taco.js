import React from 'react';

import classes from './Taco.module.css';
import TacoIngredient from './TacoIngredient/TacoIngredient'

const taco = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
    .map( igKey => {
        return [...Array(props.ingredients[igKey])].map( (_, i) => {
            return <TacoIngredient key={igKey + i} type={igKey} />
        } )
    })
    return (
        <div className={classes.Taco}>
            {transformedIngredients}
            <TacoIngredient type="bread-bottom" />
        </div>
    );
};

export default taco;