import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

function App() {
  return (
    <Router>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Controlled Form</Link>
        <Link to="/formik">Formik Form</Link>
      </nav>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/formik" element={<FormikForm />} />
      </Routes>
    </Router>
  );
}

export default App;
