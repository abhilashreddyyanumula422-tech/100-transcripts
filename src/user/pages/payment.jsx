import React from "react";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const navigate = useNavigate();

  const handlePayment = () => {
    alert("Payment Successful ✅");
    navigate("/track");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">

      <h1 className="text-3xl font-bold mb-4">Payment Page</h1>
      <p className="mb-6">Pay ₹500 for processing</p>

      <button
        onClick={handlePayment}
        className="bg-green-600 text-white px-6 py-3 rounded"
      >
        Pay Now
      </button>

    </div>
  );
}