import React, { Component } from 'react';
import Box from './Box'

class BoxList extends Component {
    state = {
        width: '',
        height: '',
        background: '',
        boxes: [
            { width: '10', height: '20', background: 'orange' },
            { width: '20', height: '20', background: 'red' }
        ]
    }
    render() {
        
        return (
            <div>
                <form>
                    <label>Enter Width</label>
                    <input type="text"/>
                    <label>Enter Height</label>
                    <input type="text"/>
                    <label>Enter Background</label>
                    <input type="text"/>
                    <button>Generate Box</button>
                </form>
                {this.state.boxes.map(box => <Box width={box.width} height={box.height} background={box.background} />)}
            </div>
        );
    }
}

export default BoxList;