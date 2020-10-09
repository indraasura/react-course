import React, { Component } from 'react';

class Machine extends Component {
    render() { 
        const { slot1, slot2, slot3 } = this.props
        return ( 
            <div>
                <span>{slot1} | {slot2} | {slot3}</span>
                <p>{ (slot1 === slot2 && slot1 === slot3) ? "You win :D !" : "You lose :( !" }</p>
            </div>
        );
    }
}
 
export default Machine;