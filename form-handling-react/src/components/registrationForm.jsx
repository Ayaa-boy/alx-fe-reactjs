import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.username) tempErrors.username = "Username is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.password) tempErrors.password = "Password is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          setSuccess("User registered successfully!");
          setFormData({ username: "", email: "", password: "" });
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4 border rounded shadow space-y-4">
      <h2 className="text-xl font-bold">Controlled Registration Form</h2>

      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
        className="w-full p-2 border rounded"
      />
      {errors.username && <p className="text-red-500">{errors.username}</p>}

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full p-2 border rounded"
      />
      {errors.email && <p className="text-red-500">{errors.email}</p>}

      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        className="w-full p-2 border rounded"
      />
      {errors.password && <p className="text-red-500">{errors.password}</p>}

      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
        Register
      </button>

      {success && <p className="text-green-500">{success}</p>}
    </form>
  );
};

export default RegistrationForm;
