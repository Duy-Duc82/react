import React, { useState } from "react";
import './ListToDo.scss';
import AddToDo from "./AddToDo";
import DeleteToDo from "./DeleteToDo";
import EditToDo from "./EditToDo";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ListToDo = () => {
    const [ListToDo, setListToDo] = useState([
        { id: 1, title: 'Learn React' },
        { id: 2, title: 'Learn Vue' },
        { id: 3, title: 'Learn Angular' }
    ]);
    const [editTodo, setEditTodo] = useState({});

    const handleAddToDo = (todo) => {
        setListToDo([...ListToDo, todo]);
        toast.success("New To-Do added successfully");
    };

    const handleEditClick = (todo) => {
        setEditTodo(todo);
    };

    const handleEditComplete = () => {
        setEditTodo({});
    };

    return (
        <>
            <p>simple To Do app</p>
            <div className="list-todo-container">

                <AddToDo addNewToDO={handleAddToDo} />
                <div className="list-content">
                    {ListToDo && ListToDo.length > 0 &&
                        ListToDo.map((item, index) => {
                            return (
                                <div className="To-Do-Child" key={item.id}>
                                    {editTodo.id === item.id ? (
                                        <EditToDo
                                            ListToDo={ListToDo}
                                            setListToDo={setListToDo}
                                            todo={item}
                                            onEditComplete={handleEditComplete}
                                        />
                                    ) : (
                                        <span>
                                            {index + 1}- {item.title}
                                            <button
                                                type="button"
                                                className="edit"
                                                onClick={() => handleEditClick(item)}
                                            >
                                                Edit
                                            </button>
                                        </span>
                                    )}
                                    <DeleteToDo
                                        ListToDo={ListToDo}
                                        setListToDo={setListToDo}
                                        id={item.id}
                                    />
                                </div>
                            );
                        })}
                </div>
            </div>
        </>
    );
};

export default ListToDo;