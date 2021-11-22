import { useEffect, useState } from "react";

interface PostType {
  id: number;
  title: String;
  body: String;
  userId: number;
}

function useTodo(): any {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, []);

  const getAllPosts = (): Array<PostType> => {
    return posts;
  };

  const getOnePost = (id: number): PostType => {
    const res = posts?.filter((item: PostType) => item.id === id);
    return res[0];
  };


  return [getAllPosts, getOnePost];
}

export default useTodo;
