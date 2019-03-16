import React, { Component } from 'react';

class Test extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: ''
        };
    }

    onChangeInputValue = e => {
        this.setState({
            inputValue: e.target.value
        });
    };

    render() {
        const { inputValue } = this.state;
        return (
            <div>
                <input value={inputValue} onChange={this.onChangeInputValue} />
            </div>
        );
    }
}

export default Test;
