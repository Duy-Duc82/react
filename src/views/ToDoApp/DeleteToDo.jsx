import React from "react";
import { toast } from "react-toastify";

const DeleteToDo = ({ ListToDo, setListToDo, id }) => {
    const handleDelete = () => {
        const newList = ListToDo.filter(item => item.id !== id);
        setListToDo(newList);
        toast.success("Deleted to do!");
    };

    return (
        <button
            type="button"
            className="delete"
            onClick={handleDelete}
        >
            Delete
        </button>
    );
};

export default DeleteToDo;