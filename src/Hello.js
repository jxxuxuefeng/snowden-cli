import React, { Component } from 'react';
import './lessstyle.less';
import Errors from './ErrorS';
import { connect } from 'react-redux';

class Hello extends Component {
    componentDidMount() {
        Errors();
    }

    render() {
        console.log('this.props.inputValue', this.props.inputValue);
        return (
            <div>
                <h3>你好啊</h3>
                <input value={this.props.inputValue} onChange={this.props.handleInputChange} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        inputValue: state.inputValue
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleInputChange(e) {
            const action = {
                type: 'CHANGE_INPUT_VALUE',
                value: e.target.value
            };
            dispatch(action);
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Hello);
