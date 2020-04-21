import { getTodos, addTodo, deleteTodo, updateTodo } from "./api/TodoApi";
import TodoListHeader from './TodoListHeader'
import TodoList from './TodoList'
import InputModal from "./InputModal";
import './style.css'
import React, { Component } from 'react';
window.$ = window.jQuery = require('jquery')
require('semantic-ui-css/semantic.css')
require('semantic-ui-css/semantic.js')

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoListContents: [
        {id: 1, content: 'Loding...', status: false}
      ]
    }
    getTodos().then(data => {
      this.setState({
        todoListContents: data
      })
    }).catch(() => {
      alert('request failed')
    })

  }

  add_todo_item = (todo_item) => {
    const new_todoListContent = [
      ...this.state.todoListContents,
      {content: 'Adding...', status: false}
    ]
    addTodo({content: todo_item, status: false}).then(data => {
      this.setState({todoListContents: data})
    }).catch(error => {
        console.log('Add new item failed')
      }
    )
    this.setState({todoListContents: new_todoListContent})
  }

  mark_item_done = (index) => {
    this.setState(() => {
      this.state.todoListContents[index].status = true
      return this.state
    })
  }
 
  show_input_modal = () => {
    this.refs.input_modal.setState({open: true})
  }

  get_list_test = () => {
    getTodos().then(data => {
      // alert(data)
      let s = JSON.stringify(data)
      alert(s)
    }).catch(() => {
      alert('request failed')
    })
  }

  render() {
    return (
          <div className="App">
              <div className="ui centered relaxed grid container">
                  <div className="row"/>
                  <div className="row"/>
                  <div className='row'>
                    <div className="border-1 ten wide column">
                      <div className='ui centered grid'>
                        <div className='ten wide column'>
                        <TodoListHeader show_input_modal={this.show_input_modal}/>
                        </div>
                      </div>
                      <div className='row'>
                      <TodoList
                        todoListContents={this.state.todoListContents}
                        mark_item_done={this.mark_item_done}
                      />
                      </div>
                    </div>
                  </div>
                  <button onClick={this.get_list_test}>Test</button>
              </div>
              <InputModal add_todo_item={this.add_todo_item} ref='input_modal'/>
          </div>
    );
  }
}

export default App;