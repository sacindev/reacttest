import React, { ChangeEventHandler, SyntheticEvent } from "react";
import useTodo from "./services/useTodo";
import Item from "./Item";
import "./TaskList.css";

interface PostType {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const TaskList = () => {
  const { deleteOnePost, posts, editOnePost } = useTodo();

  const handleOnClickOnAccept = (event: SyntheticEvent) => {
    event.preventDefault()
    const idItem = event.currentTarget.id;
    const newValue = document.querySelector("inpu[name = editableItem_" + idItem);
    
  };

  const handleDelete = (event: SyntheticEvent) => {
    const idItem = event.currentTarget.id.split("item_btn_")[1]
     deleteOnePost(parseInt(idItem))
  } 

  return (
    <div className="tasklist_container">
      <ul className="lista">
        {posts?.map((item: PostType) => (
          <Item
            key={item.id}
            handleOnClickOnAccept={handleOnClickOnAccept}
            idItem={item.id}
            handleDelete={deleteOnePost}
            title={item.title}
          />
        ))}
      </ul>
    </div>
  );
};
export default TaskList;
