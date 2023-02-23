import React, { useState } from "react";

const List = React.memo(
  ({
    id,
    title,
    completed,
    todoData,
    setTodoData,
    provided,
    snapshot,
    handleClick
  }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);

    const handleCompChange = (id) => {
      let newTodoData = todoData.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      });
      setTodoData(newTodoData);
      localStorage.setItem("todoData", JSON.stringify(newTodoData));
    };

    const handleEditChange = (event) => {
      setEditedTitle(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      let newTodoData = todoData.map((item) => {
        if (item.id === id) item.title = editedTitle;
        return item;
      });

      setTodoData(newTodoData);
      localStorage.setItem("todoData", JSON.stringify(newTodoData));
      setIsEditing(false);
    };

    if (isEditing) {
      return (
        <div>
          <div
            key={id}
            className={`flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}
          >
            <div className="items-center">
              <form onSubmit={handleSubmit}>
                <input
                  value={editedTitle}
                  onChange={handleEditChange}
                  className="w-full px-3 py-2 mr-4 text-gray-500 rounded"
                />
              </form>
            </div>
            <div className="items-center">
              <button
                type="submit"
                className="px-4 py-2"
                onClick={handleSubmit}
              >
                save
              </button>
              <button
                className="px-4 py-2 float-right"
                onClick={() => setIsEditing(false)}
              >
                X
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div
            key={id}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={`${
              snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"
            } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}
          >
            <div className="items-center">
              <input
                type="checkbox"
                onChange={() => handleCompChange(id)}
                defaultChecked={completed}
              />{" "}
              <span className={completed ? "line-through" : undefined}>
                {title}
              </span>
            </div>
            <div className="items-center">
              <button className="px-4 py-2" onClick={() => setIsEditing(true)}>
                edit
              </button>
              <button
                className="px-4 py-2 float-right"
                onClick={() => handleClick(id)}
              >
                X
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
);

export default List;
