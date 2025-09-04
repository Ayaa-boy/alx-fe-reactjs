import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("Submitting:", values);
        alert("✅ User registered successfully (Formik)!");
        resetForm();
      }}
    >
      {() => (
        <Form className="flex flex-col gap-4 max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-center">Formik Form</h2>

          <Field
            name="username"
            type="text"
            placeholder="Username"
            className="p-2 border rounded"
          />
          <ErrorMessage
            name="username"
            component="p"
            className="text-red-500"
          />

          <Field
            name="email"
            type="email"
            placeholder="Email"
            className="p-2 border rounded"
          />
          <ErrorMessage
            name="email"
            component="p"
            className="text-red-500"
          />

          <Field
            name="password"
            type="password"
            placeholder="Password"
            className="p-2 border rounded"
          />
          <ErrorMessage
            name="password"
            component="p"
            className="text-red-500"
          />

          <button
            type="submit"
            className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;
