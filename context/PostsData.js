import { createContext, useContext, useEffect, useState } from 'react';

const PostsContext = createContext();

export const usePostsContext = () => useContext(PostsContext);

export function PostsProvider({ children }) {
  const [posts, setPosts] = useState();
  const API_URL = 'https://stormy-shelf-93141.herokuapp.com/articles';

  const getPosts = async page => {
    try {
      const APIData = await fetch(`${API_URL}/?_page=${page}&_limit=6`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await APIData.json();
      console.log(json);
      return json;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts(1);
  }, []);

  return (
    <PostsContext.Provider value={{ getPosts }}>
      {children}
    </PostsContext.Provider>
  );
}
