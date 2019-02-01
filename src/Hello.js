import React, { Component } from 'react';
import './lessstyle.less';
import Errors from './ErrorS';
import store from './store';

class Hello extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: store.getState().inputValue
        };
        store.subscribe(this.onSubscribe.bind(this));
    }
    componentDidMount() {
        Errors();
    }

    onChangeHandle(e) {
        console.log(e.target.value, 'e');
        const action = {
            type: 'CHANGE_INPUT_VALUE',
            value: e.target.value
        };

        store.dispatch(action);
    }

    onSubscribe() {
        this.setState({
            inputValue: store.getState().inputValue
        });
    }

    render() {
        return (
            <div>
                <h3>你好啊</h3>
                <input value={this.state.inputValue} onChange={this.onChangeHandle} />
            </div>
        );
    }
}
export default Hello;
