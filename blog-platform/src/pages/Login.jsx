

/*import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/Loginservice";

function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim()) {
      login(username.trim());
      navigate("/Blogs");
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;*/ 

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { login } from "../services/Loginservice";

function Login() {
  const navigate = useNavigate();

  // Yup schema for validation
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values) => {
    const trimmedUsername = values.username.trim();
    if (trimmedUsername) {
      login(trimmedUsername);
      navigate("/Blogs");
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="blog-form">
          <label>Username:</label>
          <Field name="username" type="text" className="form-input" />
          <ErrorMessage name="username" component="div" className="error" />

          <label>Password:</label>
          <Field name="password" type="password" className="form-input" />
          <ErrorMessage name="password" component="div" className="error" />

          <button type="submit" className="submit-btn">Login</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Login;
