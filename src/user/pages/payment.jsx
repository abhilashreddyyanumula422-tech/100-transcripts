import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck, CreditCard, Lock, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Payment() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handlePayment = () => {
    setLoading(true);
    setTimeout(() => {
      alert("Payment Successful ✅");
      navigate("/track");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-6 py-12 relative overflow-hidden">
      
      {/* DECORATIVE ELEMENTS */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px] -mr-40 -mt-40" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] -ml-20 -mb-20" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100 relative z-10"
      >
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-black text-slate-800 tracking-tight">Secure Payment</h2>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-[0.2em] mt-3">Finalize your application</p>
        </div>

        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 mb-10 space-y-4">
          <div className="flex justify-between items-center text-slate-500 font-medium">
            <span>Service Fee</span>
            <span>₹450.00</span>
          </div>
          <div className="flex justify-between items-center text-slate-500 font-medium">
            <span>GST (18%)</span>
            <span>₹81.00</span>
          </div>
          <div className="h-[1px] bg-slate-200 w-full" />
          <div className="flex justify-between items-center text-slate-800 font-black text-xl">
            <span>Total</span>
            <span>₹531.00</span>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3 text-slate-500 text-xs font-bold uppercase tracking-widest pl-2">
            <Lock className="w-4 h-4" />
            256-bit Secure Encryption
          </div>

          <button
            onClick={handlePayment}
            disabled={loading}
            className="w-full bg-slate-800 text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-slate-900 transition-all shadow-xl active:scale-95 disabled:opacity-50"
          >
            {loading ? "Processing..." : "Pay Securely Now"} <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6 opacity-30 grayscale">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-6" alt="Paypal" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4" alt="Visa" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6" alt="Mastercard" />
        </div>
      </motion.div>
    </div>
  );
}