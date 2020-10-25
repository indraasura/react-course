import React, { Component } from 'react';

class Box extends Component {
    render() {
        const { width, height, background } = this.props
        return (
            <div>
                <div style={{
                    width: `${width}em`,
                    height: `${height}em`,
                    background: background
                }} />
                <button>X</button>
            </div>


        );
    }
}

export default Box;