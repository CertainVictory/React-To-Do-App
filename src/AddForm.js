import React, { Component } from 'react';
import { connect } from "react-redux";
import { add_todo } from "./actions"
import './AddForm.css'


const mapStateToProps = state => ({
    todos: state
});

class AddForm extends Component {
    state = {
        content: ''
    };
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    };
    handleSubmit = (e) => {
        e.preventDefault();
        let todo = this.state
        this.props.dispatch(add_todo(todo))

        this.setState({
            content: ''
        });
        console.log(todo.id) //checking that ID is being appended
    };
    render() {
        return (
            <div className="form-container">
                <form onSubmit={this.handleSubmit}>
                    <label for="new-todo">Add New To-Do:</label>
                    <input id="new-todo" type="text" onChange={this.handleChange} value={this.state.content} />
                </form>
            </div>
        );
    };
};

export default connect(mapStateToProps)(AddForm);
