import React,{Component} from 'react';
import todoStore from '../stores/todoStore';
import TodoItem from './todoItem';

//Todolist component which displays the todo items
export default class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = { items : []};
    }

    componentWillMount = () => {
        todoStore.on('itemsChanged',this.updateList);
    }

    componentWillUnmount = () => {
        todoStore.removeListener('itemsChanged');
    }

    updateList = () => {
        this.setState({items : todoStore.getItems()});
    }

    render(){

        const todoItems = this.state.items.map((itemObj,index)=>{
            return (<TodoItem {...itemObj} key={index} />);
        });

        return (
            <div id="todoList">
                {todoItems}
            </div>
        )
    }
}