import React, { Component } from 'react';
import { Button, Input, Modal } from 'semantic-ui-react'

class InputModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input_content: '',
            open: false
        }
        
    }
    
    handleInputChange = (event) => {
        this.setState(
            {input_content: event.target.value}
        )
    }
    add_item = () => {
        this.props.add_todo_item(this.state.input_content)
        this.close()
    }
    
    close = () => {this.setState({
        input_content: '',
        open: false
    })}
    render() {
        const { open } = this.state
        return (
            <div>
                <Modal
                open={open}
                onClose={this.close}
                >
                    <Modal.Header>Input</Modal.Header>
                    <Modal.Content>
                    <Input  
                        focus
                        value={this.state.input_content}
                        onChange={this.handleInputChange}
                        size='huge'
                        fluid placeholder='Please Input Your To-do'
                    />
                    </Modal.Content>
                    <Modal.Actions>
                    <Button
                        onClick={this.close}
                        negative
                        content='Cancel'
                    />
                    <Button
                        onClick={this.close}
                        positive
                        labelPosition='right'
                        onClick={this.add_item}
                        icon='checkmark'
                        content='Add'
                    />
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}

export default InputModal;