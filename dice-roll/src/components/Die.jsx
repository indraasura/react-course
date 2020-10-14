import React, { Component } from 'react';

class Die extends Component {

    getDieClass = () => {
        let dieClass = "fas fa-dice-"
        if(this.props.value === 1){
            dieClass += "one"
        } else if(this.props.value === 2){
            dieClass += "two"
        } else if(this.props.value === 3){
            dieClass += "three"
        } else if(this.props.value === 4){
            dieClass += "four"
        } else if(this.props.value === 5){
            dieClass += "five"
        } else if(this.props.value === 6){
            dieClass += "six"
        }
        console.log(dieClass)
        return dieClass
    }


    render() { 
        return ( 
            <div className="die">
                <i className={this.getDieClass()}></i>
            </div>
         );
    }
}
 
export default Die;