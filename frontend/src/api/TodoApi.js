import {doRequest, doRequestWithBody, doDeleteRequest} from './BaseApi'

const TODO_PATH = "/todoList";

export const getTodos = () => {
     return doRequest(TODO_PATH)
    .then(response => response.json());
}

export const addTodo = (todo) => {
	return doRequestWithBody(TODO_PATH, 'post', todo)
    .then(response => response.json());
}

export const updateTodo = (todo) => {
	return doRequestWithBody(TODO_PATH + "/" + todo.id, 'put', todo)
    .then(response => response.json());
}

export const deleteTodo = (todo) => {	
    return doDeleteRequest(TODO_PATH + "/" + todo.id)
    .then(response => response.json());
}