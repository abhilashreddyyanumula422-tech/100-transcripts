import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMail, FiLock, FiArrowRight, FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // ✅ added

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://192.168.1.43:8000/api/verify/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: form.email,
          password: form.password
        })
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login Successful ✅");

        localStorage.setItem("user", JSON.stringify(data));

        // ✅ ONLY THIS
        if (form.email.endsWith("@admin.org")) {
          navigate("/admin");
        } else {
          navigate("/");
        }

        setForm({
          email: "",
          password: ""
        });
      }
    } catch (error) {
      // Error handled
      alert("Server Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#f5f7fb] min-h-screen flex items-center justify-center px-4">

      <motion.div
        className="w-full max-w-md bg-white p-10 rounded-[32px] shadow-xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >

        {/* TITLE */}
        <div className="text-center mb-6">
          <h2 className="text-4xl font-extrabold text-[#0f172a] whitespace-nowrap">
            Welcome Back
          </h2>
          <p className="text-gray-400 text-sm mt-2 tracking-wide">
            SIGN IN TO TRACK YOUR FILES
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">

          {/* EMAIL */}
          <div className="relative">
            <FiMail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full bg-gray-100 py-4 pl-14 pr-4 rounded-full outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          {/* PASSWORD */}
          <div className="relative">
            <FiLock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full bg-gray-100 py-4 pl-14 pr-12 rounded-full outline-none focus:ring-2 focus:ring-blue-400 transition"
            />

            <div
              className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEye /> : <FiEyeOff />}
            </div>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#2f4a6d] text-white py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-[#1e3552] transition shadow-lg disabled:opacity-50"
          >
            {loading ? "Signing In..." : "Sign In"} <FiArrowRight />
          </button>

        </form>

        {/* FOOTER */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-500 font-medium hover:underline">
            Register
          </Link>
        </p>

      </motion.div>
    </div>
  );
};

export default Login;