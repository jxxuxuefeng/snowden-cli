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
<<<<<<< HEAD
        const { inputValue } = this.state;
        return (
            <div>
                <input value={inputValue} onChange={this.onChangeInputValue} />
            </div>
        );
=======
        return <div>test33K</div>;
>>>>>>> 7e2f5e0815831901ec8895577ba5b6911258b135
    }
}

export default Test;
