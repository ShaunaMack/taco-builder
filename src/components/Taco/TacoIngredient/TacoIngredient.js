import React from 'react';
import PropTypes from 'prop-types';

import classes from './TacoIngredient.module.css'

const tacoIngredient = (props) => {
    let ingredient = null;

    switch (props.type) {
        case ('bread-bottom'):
            ingredient = <div className={classes.BreadBottom}> </div>;
            break;
        case ('meat'):
            ingredient = <div className={classes.Meat}> </div>;
            break;
        case ('cheese'):
            ingredient = <div className={classes.Cheese}> </div>;
            break;
        case ('salad'):
            ingredient = <div className={classes.Salad}> </div>;
            break;
        case ('salsa'):
            ingredient = <div className={classes.Salsa}> </div>;
            break;
        default:
            ingredient = null;

    }
    return ingredient;
};

tacoIngredient.propTypes = {
    type: PropTypes.string.isRequired,
};

export default tacoIngredient;