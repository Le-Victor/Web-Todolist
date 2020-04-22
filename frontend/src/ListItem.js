import React, { Component } from 'react';

class ListItem extends Component {
    mark_item_done = () => {
        this.props.mark_item_done(this.props.index)
    }
    delete_item = () => {
        this.props.delete_item(this.props.index)
    }
    render() {
        let icon_elem = null
        if(this.props.item.status) {
            icon_elem = <i onClick={this.mark_item_done}  className="ui check circle outline icon"></i>
        } else {
            icon_elem = <i onClick={this.mark_item_done}  className="ui circle outline icon"></i>
        }
        return (
            <div id={'item' + this.props.item.id} className="item">
                {icon_elem}
                <div className="content">
                    {this.props.item.content}
                </div>
                <i onClick={this.delete_item} className="ui trash alternate outline icon"></i>
            </div>
        );
    }
}

export default ListItem;