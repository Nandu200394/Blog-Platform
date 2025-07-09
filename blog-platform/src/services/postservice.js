/*export const getPosts = () => {
  const data = localStorage.getItem("posts");
  return data ? JSON.parse(data) : [];
};

export const addPost = (post) => {
  const posts = getPosts();
  posts.push({ ...post, id: Date.now(), date: new Date().toISOString() });
  localStorage.setItem("posts", JSON.stringify(posts));
};*/
import { getCurrentUser } from "./Loginservice";
export const getPosts = () => {
  const data = localStorage.getItem("posts");
  return data ? JSON.parse(data) : [];
};

export const addPost = (post) => {
  const posts = getPosts();
  posts.push({ 
    ...post, 
    id: Date.now(), 
    date: new Date().toISOString() ,
    author: getCurrentUser(),
  });
  savePosts(posts);
};


const savePosts = (posts) => {
  localStorage.setItem("posts", JSON.stringify(posts));
};


export const deletePost = (id) => {
  const posts = getPosts().filter((post) => post.id !== id);
  savePosts(posts);
};


export const getPostById = (id) => {
  return getPosts().find((post) => post.id === parseInt(id));
};


export const updatePost = (updatedPost) => {
  const posts = getPosts().map((post) =>
    post.id === updatedPost.id ? updatedPost : post
  );
  savePosts(posts);
};

