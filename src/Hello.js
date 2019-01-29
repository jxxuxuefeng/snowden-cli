import React , { Component } from 'react';
import './lessstyle.less';
import Errors from './ErrorS';

class Hello extends Component {
    componentDidMount() {
        Errors()
    }
    
    render() {
        return (
            <div>
                <h3>Hell333o world</h3>
            </div>
        );
    }
}

export default Hello;