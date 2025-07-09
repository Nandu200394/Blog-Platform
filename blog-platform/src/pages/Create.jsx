

import PostForm from "../components/PostForm";
import { addPost } from "../services/postservice";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../services/Loginservice"; 

import "../css/Create.css"; 

function Create() {
  const navigate = useNavigate();

  const initialValues = {
    title: "",
    image: "",
    content: "",
  };
  const handleSubmit = (values, { resetForm }) => {
   const newPost = {
    ...values,
    author: getCurrentUser(), 
  };
    addPost(newPost);
    resetForm();
    navigate("/Blogs");
  };

  return (
    <div className="create-page">
      <h1>Create a New Blog</h1>
      <PostForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        buttonText="Create Blog"
      />
      
    </div>
  );
}

export default Create;
