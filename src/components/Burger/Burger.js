import React from 'react';
import { withRouter } from 'react-router-dom';

import styles from './Burger.css';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    console.log(props);
    let transformedIngredients = Object.keys(props.ingredients).map( key => {
        return [...Array(props.ingredients[key])].map( (_, i) => {
            return <BurgerIngredient key={key+i} type={key} />;
        });
    })
    .reduce( (acc, el) => {
        return acc.concat(el);
    }, []); 
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default withRouter(burger);