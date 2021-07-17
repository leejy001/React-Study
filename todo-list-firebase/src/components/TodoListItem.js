import React, { useState } from "react";
import { Input, Button, Modal } from "@material-ui/core";
import "./TodoListItem.scss";
import { makeStyles } from "@material-ui/core/styles";
import CreateIcon from "@material-ui/icons/Create";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
import db from "../firebase";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const TodoListItem = ({ todo }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const updateTodo = () => {
    // update the todo with the new input text
    db.collection("todos").doc(todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className={classes.paper}>
          <h1>일정 수정 하기</h1>
          <Input
            placeholder={todo.todo}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button onClick={updateTodo}>Update Todo</Button>
        </div>
      </Modal>
      <div className="TodoListItem">
        <div className="text" style={{ width: "200px" }}>
          {todo.todo}
        </div>
        <div onClick={() => setOpen(true)}>
          <CreateIcon color="primary" />
        </div>
        <div
          className="remove"
          onClick={() => db.collection("todos").doc(todo.id).delete()}
        >
          <DeleteTwoToneIcon color="secondary" />
        </div>
      </div>
    </>
  );
};

export default TodoListItem;
