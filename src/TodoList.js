import React, { Component } from 'react';
import { Input, List, message } from 'antd';
import './TodoList.less';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: ['测试数据一', '测试数据二', '测试数据三'],
            inputValue: ''
        };
    }

    onChangeInputValue = e => {
        this.setState({
            inputValue: e.target.value
        });
    };

    onPressEnter = e => {
        if (!e.target.value) {
            return message.error('请输入内容');
        }
        this.setState({
            dataList: [...this.state.dataList, e.target.value],
            inputValue: ''
        });
    };

    onDeleteItem = index => {
        const dataList = this.state.dataList;
        dataList.splice(index, 1);
        this.setState({ dataList });
    };

    render() {
        return (
            <div className="todo-list">
                <Input
                    placeholder="请输入"
                    value={this.state.inputValue}
                    onChange={this.onChangeInputValue}
                    onPressEnter={this.onPressEnter}
                    className="input-style"
                />
                <List
                    bordered
                    dataSource={this.state.dataList}
                    renderItem={(item, index) => (
                        <List.Item>
                            <div className="hidden w100">
                                <div className="fl">{item}</div>
                                <div
                                    className="item"
                                    onClick={() => this.onDeleteItem(index)}
                                >
                                    x
                                </div>
                            </div>
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}

export default TodoList;
