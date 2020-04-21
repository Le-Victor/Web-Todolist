import React, { Component } from 'react';
import ListItem from './ListItem'
class TodoList extends Component {
    
    render() {
        return (
            <div className="ui huge middle aligned selection relaxed divided list">
                {this.props.todoListContents.map((item, index) => {
                    return <ListItem mark_item_done={this.props.mark_item_done} delete_item={this.props.delete_item} key={index} index={index} item={item}/>
                    })
                }
            </div>
        );
    }
}

export default TodoList;