import React from "react";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
class AddToDo extends React.Component {
    state = {
        title: ''
    }
    handleOnChangeTitle = (e) => {
        this.setState({ title: e.target.value });
    }
    handleOnClickAdd = () => {
        if (!this.state.title) {
            toast.error("Please enter title");
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 1000),
            title: this.state.title
        }
        this.props.addNewToDO(todo);
        this.setState({ title: '' });
    }
    render() {
        let { title } = this.state;
        return (
            <div className="add-to-do">
                <input type="text" value={title}
                    onChange={this.handleOnChangeTitle} />
                <button type="button" className="add-button"
                    onClick={this.handleOnClickAdd}>Add</button>
            </div>)
    }
}
export default AddToDo;