import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const FormikForm = () => {
  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        alert("User registered successfully!");
        resetForm();
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="max-w-sm mx-auto p-4 border rounded shadow space-y-4">
          <h2 className="text-xl font-bold">Formik Registration Form</h2>

          <Field name="username" placeholder="Username" className="w-full p-2 border rounded" />
          <ErrorMessage name="username" component="p" className="text-red-500" />

          <Field name="email" type="email" placeholder="Email" className="w-full p-2 border rounded" />
          <ErrorMessage name="email" component="p" className="text-red-500" />

          <Field name="password" type="password" placeholder="Password" className="w-full p-2 border rounded" />
          <ErrorMessage name="password" component="p" className="text-red-500" />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-green-500 text-white p-2 rounded"
          >
            {isSubmitting ? "Submitting..." : "Register"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
