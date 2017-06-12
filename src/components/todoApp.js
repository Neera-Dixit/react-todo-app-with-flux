import React,{Component} from 'react';
import todoCss from './todoAppStyles';
import TodoTitle from './todoTitle';
import TodoForm from './todoForm';
import TodoList from './todoList';

//TodoApp container which has subcomponents TodoTitle,TodoForm and TodoList
export default class TodoApp extends Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div id="reactApp">
                <TodoTitle title="React Todo App"/>
                <TodoForm placeHolder="What needs to be Done?"/>
                <TodoList />
            </div>
        )
    }
}