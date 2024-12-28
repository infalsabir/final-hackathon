import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";


const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",

  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match", { position: "top-center" });
      return;
    }
  
    const data = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };
  
    console.log(data); // Debug log to check the data before sending
  
    try {
      // Sending the data to the backend with correct headers
      const response = await axios.post("http://localhost:5000/api/users", data, {
        headers: {
          'Content-Type': 'application/json', // Explicitly setting content type to JSON
        },
      });
  
      console.log(response); // Log the response to see what comes back
  
      // Success notification
      toast.success(response.data.message || "User created successfully", { position: "top-center" });
  
      // Reset form data
      setFormData({ name: "", email: "", password: "", confirmPassword: "" });
  
      // Redirect to the home page after successful registration
      navigate("/");
  
    } catch (error) {
      // Log error details for debugging
      console.log(error);
  
      // Show error toast notification in case of an error
      if (error.response) {
        toast.error(error.response.data.message || "An error occurred. Please try again.", { position: "top-center" });
      } else {
        toast.error("An unexpected error occurred. Please check the server.", { position: "top-center" });
      }
    }
  };
  

  return (
    <div className="min-h-screen bg-blue-600 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-4 w-full max-w-md">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-4 relative">
            <label htmlFor="name" className="block text-sm font-medium text-blue-600">
              Full Name
            </label>
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FaUser />
            </span>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-10 mt-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
            />
          </div>

          {/* Email */}
          <div className="mb-4 relative">
            <label htmlFor="email" className="block text-sm font-medium text-blue-600">
              Email Address
            </label>
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FaEnvelope />
            </span>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 mt-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
            />
          </div>

          {/* Password */}
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-sm font-medium text-blue-600">
              Password
            </label>
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FaLock />
            </span>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full pl-10 mt-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-6 relative">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-blue-600">
              Confirm Password
            </label>
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FaLock />
            </span>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full pl-10 mt-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            // onClick={hand}
            className="w-full bg-yellow-400 text-blue-600 py-2 rounded-lg font-semibold text-lg hover:scale-105 hover:shadow-xl hover:bg-yellow-500 transition-transform duration-300"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <p className="text-sm text-blue-600 text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-yellow-400 font-semibold hover:underline">
            Login
          </a>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RegisterForm;




