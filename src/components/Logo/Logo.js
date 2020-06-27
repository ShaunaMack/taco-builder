import React from 'react';

import tacoLogo from '../../assets/images/original.jpeg'
import classes from './Logo.module.css'

const logo = (props) => {
    return (
        <div className={classes.Logo}>
            <img src={tacoLogo} alt='taco cat'/>
        </div>
    );
};

export default logo;