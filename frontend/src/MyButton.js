import React, { Component } from 'react';

import $ from  'jquery'
class MyButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icon_content : 'circular huge edit outline icon'
        }
    }
    
    handleMoveIn = () => {
        this.props.change_header()
        const icon = $('#header_icon')

        icon.transition({
            animation  : 'horizontal flip out',
            duration   : '100ms',
            onComplete : function() { 
                this.setState({icon_content : 'circular huge plus icon'})
                icon.transition({
                    animation  : 'horizontal flip in',
                    duration   : '100ms'
                })

            }.bind(this)
        })
    }

    handleMoveOut = () => {
        this.props.recover_header()
        const icon = $('#header_icon')
        icon.transition({
            animation  : 'horizontal flip out',
            duration   : '100ms',   
            onComplete : function() {  
                this.setState({icon_content : 'circular huge edit outline icon' })
                icon.transition({
                    animation  : 'horizontal flip in',
                    duration   : '100ms'
                })
            }.bind(this)
        })
    }

    render() {
        return (
            <div onClick={this.props.show_input_modal} onMouseEnter={this.handleMoveIn} onMouseLeave={this.handleMoveOut}>
                <i id='header_icon' className={this.state.icon_content}></i>
            </div>
                    
        );
    }
}

export default MyButton;