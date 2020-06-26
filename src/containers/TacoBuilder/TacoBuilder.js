import React, {Component} from 'react';

import Aux from '../../hoc/Aux'
import Taco from '../../components/Taco/Taco'

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
                <div>Build Controls</div>
            </Aux>

        );
    }
}

export default TacoBuilder;