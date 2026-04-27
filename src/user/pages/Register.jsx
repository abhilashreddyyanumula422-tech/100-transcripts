import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, User, ArrowRight, Phone, Eye, EyeOff, ShieldCheck } from "lucide-react";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!form.email.endsWith("@gmail.com") && !form.email.endsWith("@admin.org")) {
      alert("Use @gmail.com for Students or @admin.org for Staff");
      return;
    }

    if (!/^\d{10}$/.test(form.phone)) {
      alert("Enter a valid 10-digit phone number");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://192.168.1.43:8000/api/register/", {
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
      });

      const data = await response.json();

      if (response.ok) {
        alert("Registered successfully ✅");
        navigate("/login");
      } else {
        alert(data.error || "Registration Failed");
      }
    } catch (error) {
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      
      {/* DECORATIVE ELEMENTS */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px] -mr-40 -mt-40" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] -ml-20 -mb-20" />

      <motion.div
        className="w-full max-w-xl bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="text-center mb-10">
          <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-600/20">
            <ShieldCheck className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-black text-slate-800 tracking-tight">Create Account</h2>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-[0.2em] mt-3">Start your application journey</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* NAME */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-4">Full Name</label>
              <div className="relative group">
                <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-500 transition-colors w-5 h-5" />
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 py-4 pl-14 pr-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white border border-transparent focus:border-blue-500/30 transition-all font-medium text-slate-700"
                />
              </div>
            </div>

            {/* PHONE */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-4">Phone Number</label>
              <div className="relative group">
                <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-500 transition-colors w-5 h-5" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="1234567890"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 py-4 pl-14 pr-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white border border-transparent focus:border-blue-500/30 transition-all font-medium text-slate-700"
                />
              </div>
            </div>
          </div>

          {/* EMAIL */}
          <div className="space-y-2">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-4">Email Address</label>
            <div className="relative group">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-500 transition-colors w-5 h-5" />
              <input
                type="email"
                name="email"
                placeholder="name@example.com"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-slate-50 py-4 pl-14 pr-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white border border-transparent focus:border-blue-500/30 transition-all font-medium text-slate-700"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* PASSWORD */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-4">Password</label>
              <div className="relative group">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-500 transition-colors w-5 h-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 py-4 pl-14 pr-12 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white border border-transparent focus:border-blue-500/30 transition-all font-medium text-slate-700"
                />
                <button
                  type="button"
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-4">Confirm Password</label>
              <div className="relative group">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-500 transition-colors w-5 h-5" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="••••••••"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 py-4 pl-14 pr-12 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white border border-transparent focus:border-blue-500/30 transition-all font-medium text-slate-700"
                />
                <button
                  type="button"
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-slate-800 text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-slate-900 transition-all shadow-xl active:scale-95 disabled:opacity-50 mt-4"
          >
            {loading ? "Creating Account..." : "Create Account"} <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <div className="text-center mt-10">
          <p className="text-sm font-medium text-slate-500">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 font-black hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;