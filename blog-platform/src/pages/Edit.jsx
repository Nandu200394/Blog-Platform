// src/pages/Edit.jsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPostById, updatePost } from "../services/postservice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const foundPost = getPostById(id);
    if (!foundPost) {
      alert("Blog post not found!");
      navigate("/Blogs");
    } else {
      setPost(foundPost);
    }
  }, [id, navigate]);

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    image: Yup.string().url("Enter a valid image URL").required("Image is required"),
    content: Yup.string().required("Content is required"),
  });

  const handleSubmit = (values) => {
    updatePost({ ...values, id: parseInt(id) });
    navigate("/Blogs");
  };

  if (!post) return <p>Loading...</p>;

  return (
    <div className="create-page">
      <h2>Edit Blog</h2>
      <Formik
        initialValues={post}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        <Form className="blog-form">
          <label>Title:</label>
          <Field name="title" type="text" className="form-input" />
          <ErrorMessage name="title" component="div" className="error" />

          <label>Image URL:</label>
          <Field name="image" type="text" className="form-input" />
          <ErrorMessage name="image" component="div" className="error" />

          <label>Content:</label>
          <Field name="content" as="textarea" rows="5" className="form-input" />
          <ErrorMessage name="content" component="div" className="error" />

          <button type="submit" className="submit-btn">Update Blog</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Edit;
