import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const PostForm = ({ initialValues, onSubmit, buttonText }) => {
  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    image: Yup.string().url("Must be a valid URL").required("Image is required"),
    content: Yup.string().required("Content is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
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

        <button type="submit" className="submit-btn">{buttonText}</button>
      </Form>
    </Formik>
  );
};

export default PostForm;
