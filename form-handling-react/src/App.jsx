import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm"; // ✅ lowercase file

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-10 p-6">
      <RegistrationForm />
      <FormikForm />
    </div>
  );
}

export default App;
