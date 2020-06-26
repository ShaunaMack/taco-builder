import React, {Component} from 'react';

import Aux from '../../hoc/Aux'
import Taco from '../../components/Taco/Taco'
import BuildControls from '../../components/Taco/BuildControls/BuildControls';

class TacoBuilder extends Component {
    state = {
        ingredients: {
            cheese: 0,
            salsa: 0,
            meat: 0,
            salad: 0,
        }
    }
    render() {
        return (
            <Aux>
                <Taco ingredients={this.state.ingredients}/>
                <BuildControls />
            </Aux>

        );
    }
}

export default TacoBuilder;