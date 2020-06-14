import React, {Component} from 'react';

import Aux from '../../hoc/Aux'
import Taco from '../../components/Taco/Taco'

class TacoBuilder extends Component {
    state = {
        ingredients: {
            cheese: 1,
            salsa: 1,
            meat: 1,
            salad: 1,
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