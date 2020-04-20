import React, { Component } from 'react';

class ListItem extends Component {
    mark_item_done = () => {
        this.props.mark_item_done(this.props.index)
    }
    render() {
        let icon_elem = null
        if(this.props.item.done) {
            icon_elem = <i className="ui check circle outline icon"></i>
        } else {
            icon_elem = <i className="ui circle outline icon"></i>
        }
        return (
            <div onClick={this.mark_item_done} className="item">
                {icon_elem}
                <div className="content">
                    {this.props.item.content}
                </div>
            </div>
        );
    }
}

export default ListItem;