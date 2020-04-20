import React, { Component } from 'react';
import MyButton from './MyButton'
class TodoListHeader extends Component {
    state = {header_content : "Todo Lists"}
    change_header = () => {
        this.setState(
            {header_content: "Click To Add Todo"})
    }
    recover_header = () => {
        this.setState(
            {header_content : "Todo Lists"})
    }
    render() {
        return (
        <div className='ui centered grid'>
            <div className='row'/>
            <div className='row'>
                <MyButton
                    change_header={this.change_header}
                    recover_header={this.recover_header}
                    show_input_modal={this.props.show_input_modal}
                />
            </div>
            <div className='row'>
                <div className='ui large header'>
                    {this.state.header_content}
                </div>
            </div>
        </div>
        );
    }
}

export default TodoListHeader;