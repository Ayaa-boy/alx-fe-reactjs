import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold mb-6">User Registration</h1>
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Controlled Component Form */}
        <div className="bg-white p-6 rounded shadow">
          <RegistrationForm />
        </div>

        {/* Formik Form */}
        <div className="bg-white p-6 rounded shadow">
          <FormikForm />
        </div>
      </div>
    </div>
  );
}

export default App;
