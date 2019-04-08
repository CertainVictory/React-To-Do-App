import React from 'react'
import './ToDos.css'
import { connect } from "react-redux";
import { delete_todo } from "./actions"

const mapStateToProps = state => ({
    todos: state
});

class ToDos extends React.Component {

    deleteTodo = (id) => { this.props.dispatch(delete_todo(id)) };

    render() {
        return this.props.todos.length ? (
            this.props.todos.map((todo, id) => {
                return todo.content > '' ? (
                    <div className="todo-task" key={todo.id}>
                        <p>{todo.content}</p>
                        <button onClick={() => { this.deleteTodo(id) }}>Delete To-Do</button>
                    </div>
                ) : this.deleteTodo(id) // run delete function is todo.content is an empty string
            })
        ) : (
                <p className="default-msg">You have no To-Do's!</p>
            );
    };
};

//This is kinda cheap but if you submit while the field is empty, the to-do is immediately deleted and "You have no To-Do's left!" displays. This allows for non-empty strings to display and deleted as intended.

export default connect(mapStateToProps)(ToDos);

