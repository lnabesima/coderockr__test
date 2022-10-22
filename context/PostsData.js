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
      json.forEach(obj => {
        obj.title = obj.title.replace(/(&nbsp;|<([^>]+)>|(\\n))/, '');
        obj.article = obj.article.replace(/&nbsp;|<([^>]+)>|(\\n)/, '');
        return obj;
      });
      return json;
    } catch (error) {
      console.log(error);
    }
  };

  const getPost = async id => {
    const APIData = await fetch(`${API_URL}/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await APIData.json();
    return json;
  };

  return (
    <PostsContext.Provider value={{ getPosts, getPost, posts }}>
      {children}
    </PostsContext.Provider>
  );
}
