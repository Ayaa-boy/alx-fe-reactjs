// src/App.jsx
import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>User Registration</h1>
      
      <section>
        <h2>Controlled Components</h2>
        <RegistrationForm />
      </section>

      <hr />

      <section>
        <h2>Formik Form</h2>
        <FormikForm />
      </section>
    </div>
  );
}

export default App;
