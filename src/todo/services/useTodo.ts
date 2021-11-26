import { SetStateAction, useEffect, useState } from "react";
import Item from "../Item";

interface PostType {
  id: number;
  title: string;
  body: string;
  userId: number;
}

function useTodo() {
  const [posts, setPost] = useState<PostType[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, []);

  const getOnePost = (id: number): PostType => {
    const res = posts?.filter((item: PostType) => item.id === id);
    return res[0];
  };

  const deleteOnePost = (id: number) => {
    const filteredPosts = posts.filter((item: PostType) => item.id !== id);
    setPost(filteredPosts);
  };

  const editOnePost = (id: number, newValue: string) => {
    const editedPost = posts.map((item: any) => {
      if (item.id === id) {
        item.title = newValue;
      }
      return item;
    });

    setPost(editedPost);
  };

  return { deleteOnePost, posts, getOnePost, editOnePost };
}

export default useTodo;
