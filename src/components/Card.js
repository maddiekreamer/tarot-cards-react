import React, {
    Component
} from 'react';

class Card extends Component {
    render() {
        return ( 
        <div >
            {this.props.card.first} {this.props.card.last}
        </div>
        );
    }
}

export default Card;