import React, { Component } from 'react';
import './lessstyle.less';
import Errors from './ErrorS';

class Hello extends Component {
    componentDidMount() {
        Errors();
        const xx = '444';
        console.log('xx', xx);
    }

    render() {
        return (
            <div>
                <h3>你好啊</h3>
            </div>
        );
    }
}
export default Hello;
