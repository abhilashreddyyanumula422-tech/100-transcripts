import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiMail,
  FiLock,
  FiUser,
  FiArrowRight,
  FiPhone,
  FiEye,
  FiEyeOff
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const navigate = useNavigate();

  // ✅ ADD THESE STATES (missing before)
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // email validation
    if (
      !form.email.endsWith("@gmail.com") &&
      !form.email.endsWith("@admin.org")
    ) {
      alert("Use @gmail.com for Students or @admin.org for Staff");
      return;
    }

    // phone validation
    if (!/^\d{10}$/.test(form.phone)) {
      alert("Enter a valid 10-digit phone number");
      return;
    }

    // password match
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(
        "http://192.168.1.43:8000/api/register/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            phone: form.phone,
            password: form.password
          })
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert(`Registered successfully `);

        setForm({
          name: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: ""
        });
        navigate("/login");
      } else {
        alert(data.error || JSON.stringify(data));
      }
    } catch (error) {
      // Error handled
      alert("Server error");
    }
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-32 pb-12 flex flex-col items-center px-4">
      <div className="max-w-md w-full">

        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-black">Create Account</h1>
        </motion.div>

        <motion.div
          className="bg-white p-8 rounded-2xl shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <form onSubmit={handleRegister} className="space-y-5">

            {/* NAME */}
            <div className="relative">
              <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full p-4 pl-10 rounded-lg bg-gray-100"
              />
            </div>

            {/* EMAIL */}
            <div className="relative">
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-4 pl-10 rounded-lg bg-gray-100"
              />
            </div>

            {/* PHONE */}
            <div className="relative">
              <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full p-4 pl-10 rounded-lg bg-gray-100"
              />
            </div>

            {/* PASSWORD */}
            <div className="relative">
              <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full p-4 pl-10 pr-10 rounded-lg bg-gray-100"
              />
              <div
                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEye /> : <FiEyeOff />}
              </div>
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="relative">
              <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={handleChange}
                required
                className="w-full p-4 pl-10 pr-10 rounded-lg bg-gray-100"
              />
              <div
                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              >
                {showConfirmPassword ? <FiEye /> : <FiEyeOff />}
              </div>
            </div>

            <button className="w-full bg-[#2f4a6d] text-white py-4 rounded-lg flex justify-center items-center gap-2">
              Register <FiArrowRight />
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link to="/login">Already have an account?</Link>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default Register;