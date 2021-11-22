import React from "react";
import todoHook from "./services/useTodo";
import Item from "./Item";
import "./TaskList.css";
interface PostType {
    id: number;
    title: String;
    body: String;
    userId: number;
  }
  
const TaskList = (): JSX.Element => {
  const [getAllPosts, getOnePost] = todoHook();
  const posts = getAllPosts();
  return (
    <div className="tasklist_container">
      <ul className="lista">
        {posts?.map((item: PostType ) => (
          <Item key={item.id}  title={item.title}/>
        ))}
      </ul>
    </div>
  );
};
export default TaskList;
