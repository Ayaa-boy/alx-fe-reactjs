import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Yup validation schema
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("Formik form submitted:", values);
        alert("Formik form submitted successfully!");
        resetForm();
      }}
    >
      {() => (
        <Form className="max-w-md mx-auto bg-white shadow-md rounded px-8 py-6 mt-6">
          <h2 className="text-2xl font-bold mb-4">Formik Registration</h2>

          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <Field
              type="text"
              name="username"
              className="w-full px-3 py-2 border rounded"
            />
            <ErrorMessage
              name="username"
              component="p"
              className="text-red-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <Field
              type="email"
              name="email"
              className="w-full px-3 py-2 border rounded"
            />
            <ErrorMessage
              name="email"
              component="p"
              className="text-red-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <Field
              type="password"
              name="password"
              className="w-full px-3 py-2 border rounded"
            />
            <ErrorMessage
              name="password"
              component="p"
              className="text-red-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
