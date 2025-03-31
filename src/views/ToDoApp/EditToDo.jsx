import React, { useState } from "react";
import { toast } from "react-toastify";

const EditToDo = ({ ListToDo, setListToDo, todo, onEditComplete }) => {
    const [editTitle, setEditTitle] = useState(todo.title);

    const handleSave = () => {
        const updatedList = ListToDo.map(item => {
            if (item.id === todo.id) {
                return { ...item, title: editTitle };
            }
            return item;
        });
        setListToDo(updatedList);
        toast.success("Updated to do!");
        onEditComplete();
    };

    return (
        <span>
            <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
            />
            <button
                type="button"
                onClick={handleSave}
            >
                Save
            </button>
        </span>
    );
};

export default EditToDo;