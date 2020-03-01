import React, { Fragment } from 'react';

import Button from '../../UI/Button/Button';

class OrderSummary extends React.Component {
    // This could be a functional, doesn't have to be a class
    componentWillUpdate() {
        console.log('[OrderSummary] Will Update');
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map( key => {
            return <li key={key}><span style={{textTransform: "capitalize"}}>{key}</span>: {this.props.ingredients[key]}</li>
        })
        return (
            <Fragment>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Fragment>
        )
    }
}

export default OrderSummary;