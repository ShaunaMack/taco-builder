import React from 'react';

import classes from './Taco.module.css';
import TacoIngredient from './TacoIngredient/TacoIngredient'

const taco = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
    .map( igKey => {
        return [...Array(props.ingredients[igKey])].map( (_, i) => {
            return <TacoIngredient key={igKey + i} type={igKey} />
        } )
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Add ingredients to your taco</p>
    }
    // console.log(transformedIngredients);
    return (
        <div className={classes.Taco}>
            {transformedIngredients}
            <TacoIngredient type="bread-bottom" />
        </div>
    );
};

export default taco;