import React from "react";

const Dashboard = () => {
  return (
    <div className="p-2">
      {/* HEADER - Premium Gradient */}
      {/* <div className="bg-gradient-to-br from-[#0b2a4a] to-[#123d6b] text-white p-8 rounded-2xl mb-8 shadow-lg">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="mt-1 opacity-80 text-lg">
          Academic Certificate Management
        </p>
      </div> */}

      {/* STATS CARDS - Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Total Requests", value: "1,247", color: "border-blue-500" },
          { title: "Pending", value: "48", color: "border-amber-500" },
          { title: "Approved", value: "892", color: "border-emerald-500" },
          { title: "Delivered", value: "823", color: "border-purple-500" },
        ].map((card, i) => (
          <div
            key={i}
            className={`bg-white p-6 rounded-2xl shadow-md border-l-8 ${card.color} transition-transform hover:scale-105 cursor-default`}
          >
            <h4 className="text-slate-500 font-semibold uppercase text-xs tracking-wider">
              {card.title}
            </h4>
            <h2 className="text-[#0b2a4a] text-3xl font-bold mt-2">
              {card.value}
            </h2>
          </div>
        ))}
      </div>

      {/* LOWER SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        {/* PIPELINE - Larger Section */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-md border border-slate-100">
          <h3 className="text-xl font-bold text-slate-800 mb-6">Request </h3>

          <div className="flex justify-between items-center overflow-x-auto pb-4">
            {["Submitted", "Verified", "College", "Dispatched"].map((step, i) => (
              <div key={i} className="flex flex-col items-center min-w-[100px]">
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-[#0b2a4a] font-bold text-lg mb-2 border-2 border-blue-100">
                  {Math.floor(Math.random() * 300)}
                </div>
                <p className="text-sm font-medium text-slate-600">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ACTIVITY - Sidebar style */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100">
          <h3 className="text-xl font-bold text-slate-800 mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { label: "Application Approved", time: "2m ago" },
              { label: "Document Verified", time: "1h ago" },
              { label: "Certificate Dispatched", time: "3h ago" },
              { label: "New Application", time: "5h ago" },
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-3 text-sm">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></div>
                <div>
                  <p className="text-slate-700 font-medium">{item.label}</p>
                  <p className="text-slate-400 text-xs">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;