// import React, { useState } from 'react';
// import { Truck, MapPin, Package, Clock, Search, ChevronRight, Info, Eye, X } from 'lucide-react';

// const DeliveryManagement = () => {
//   const [selectedTracking, setSelectedTracking] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");

//   const deliveries = [
//     {
//       id: "TRK-9908821",
//       student: "Kiran Kumar",
//       item: "Degree Certificate - B.Tech",
//       orderDate: "Apr 12, 2026 • 10:30 AM",
//       estDelivery: "Apr 18, 2026",
//       status: "In Transit",
//       courierPartner: "BlueDart Express",
//       currentLocation: "Secunderabad Sorting Facility, TS",
//       history: [
//         { title: "Arrived at Secunderabad Hub", time: "Today, 09:15 AM", location: "Hyderabad, TS", done: true },
//         { title: "In Transit to Destination", time: "Yesterday, 11:20 PM", location: "Main Dispatch Center", done: true },
//         { title: "Verified & Packed by Registrar", time: "Yesterday, 04:30 PM", location: "University Campus", done: true },
//         { title: "Request Received & Processed", time: "Apr 12, 10:30 AM", location: "Admin Portal", done: true },
//       ]
//     },
//     {
//       id: "TRK-8821104",
//       student: "Mohit Raj",
//       item: "Migration Certificate",
//       orderDate: "Apr 10, 2026 • 02:15 PM",
//       estDelivery: "Delivered on Apr 14",
//       status: "Delivered",
//       courierPartner: "Delhivery",
//       currentLocation: "Delivered",
//       history: [
//         { title: "Delivered to Candidate", time: "Apr 14, 05:00 PM", location: "Bangalore, KA", done: true },
//         { title: "Out for Delivery", time: "Apr 14, 08:00 AM", location: "Whitefield Hub", done: true },
//         { title: "Arrived at Bangalore City Hub", time: "Apr 13, 11:00 PM", location: "Nelamangala Hub", done: true },
//       ]
//     }
//   ];

//   const filteredDeliveries = deliveries.filter(d => 
//     d.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
//     d.student.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans">
      
//       {/* HEADER SECTION */}
//       <div className="max-w-6xl mx-auto mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
//         <div>
//           <h1 className="text-3xl font-black text-slate-900 tracking-tight">Logistics <span className="text-blue-600">Center</span></h1>
//           <p className="text-slate-500 font-medium">Manage and track student document shipments</p>
//         </div>
        
//         <div className="flex items-center bg-white border border-slate-200 px-4 py-3 rounded-2xl w-full md:w-96 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 transition-all">
//           <Search size={18} className="text-slate-400" />
//           <input 
//             type="text" 
//             placeholder="Search by ID or Student Name..." 
//             className="bg-transparent border-none focus:ring-0 text-sm text-slate-900 placeholder:text-slate-400 w-full ml-3"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//         </div>
//       </div>

//       {/* SHIPMENT TABLE */}
//       <div className="max-w-6xl mx-auto bg-white border border-slate-200 rounded-[2rem] overflow-hidden shadow-sm">
//         <table className="w-full text-left border-collapse">
//           <thead>
//             <tr className="bg-slate-50/50 border-b border-slate-100">
//               <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Tracking ID</th>
//               <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Student Name</th>
//               <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Item</th>
//               <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Current Location</th>
//               <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Status</th>
//               <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 text-center">Action</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-slate-100">
//             {filteredDeliveries.map((delivery) => (
//               <tr key={delivery.id} className="hover:bg-slate-50/50 transition-colors group">
//                 <td className="px-6 py-5 font-bold text-blue-600 text-sm">{delivery.id}</td>
//                 <td className="px-6 py-5 font-bold text-slate-900 text-sm">{delivery.student}</td>
//                 <td className="px-6 py-5 text-slate-600 text-sm">{delivery.item}</td>
//                 <td className="px-6 py-5 text-slate-600 text-sm">
//                   <div className="flex items-center gap-2">
//                     <MapPin size={14} className="text-red-400" />
//                     {delivery.currentLocation}
//                   </div>
//                 </td>
//                 <td className="px-6 py-5">
//                   <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border ${
//                     delivery.status === 'Delivered' 
//                     ? 'bg-emerald-50 text-emerald-600 border-emerald-100' 
//                     : 'bg-blue-50 text-blue-600 border-blue-100'
//                   }`}>
//                     {delivery.status}
//                   </span>
//                 </td>
//                 <td className="px-6 py-5 text-center">
//                   <button 
//                     onClick={() => setSelectedTracking(delivery)}
//                     className="p-2 bg-slate-100 text-slate-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm group-hover:scale-110"
//                   >
//                     <Eye size={18} />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* TRACKING MODAL */}
//       {selectedTracking && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
//           <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            
//             {/* Modal Header */}
//             <div className="p-8 bg-slate-50 border-b border-slate-100 flex justify-between items-start">
//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
//                   <Truck size={24} />
//                 </div>
//                 <div>
//                   <h2 className="text-xl font-black text-slate-900">Shipment Details</h2>
//                   <p className="text-sm font-bold text-blue-600 uppercase tracking-tighter">{selectedTracking.id}</p>
//                 </div>
//               </div>
//               <button 
//                 onClick={() => setSelectedTracking(null)}
//                 className="p-2 bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-red-500 hover:border-red-100 transition-all shadow-sm"
//               >
//                 <X size={20} />
//               </button>
//             </div>

//             {/* Modal Content */}
//             <div className="p-8 max-h-[70vh] overflow-y-auto">
//               {/* Courier Summary */}
//               <div className="mb-8 grid grid-cols-2 gap-4">
//                 <div className="bg-blue-50/50 p-4 rounded-2xl border border-blue-100">
//                   <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Courier Partner</p>
//                   <p className="text-sm font-bold text-slate-800">{selectedTracking.courierPartner}</p>
//                 </div>
//                 <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-right">
//                   <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Est. Delivery</p>
//                   <p className="text-sm font-bold text-blue-600">{selectedTracking.estDelivery}</p>
//                 </div>
//               </div>

//               {/* Timeline */}
//               <div className="relative space-y-8 pl-8">
//                 <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-slate-100"></div>
                
//                 {selectedTracking.history.map((step, idx) => (
//                   <div key={idx} className="relative">
//                     <div className={`absolute -left-[24px] top-1 w-4 h-4 rounded-full border-4 border-white z-10 shadow-sm ${
//                       step.done ? 'bg-blue-600' : 'bg-slate-200'
//                     }`}></div>
                    
//                     <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
//                       <div>
//                         <p className="text-sm font-bold text-slate-900">{step.title}</p>
//                         <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">
//                           <MapPin size={10} className="inline mr-1 text-red-400" /> {step.location}
//                         </p>
//                       </div>
//                       <div className="text-right">
//                         <p className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md inline-block">
//                           {step.time}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Modal Footer */}
//             <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end">
//               <button 
//                 onClick={() => setSelectedTracking(null)}
//                 className="px-8 py-3 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg"
//               >
//                 Close Tracking
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// };

// export default DeliveryManagement;   






import React, { useState } from 'react';
import { Truck, MapPin, Package, Clock, Search, ChevronRight, Info, Eye, X, Filter, CheckCircle2 } from 'lucide-react';

const DeliveryManagement = () => {
  const [selectedTracking, setSelectedTracking] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("All");

  const deliveries = [
    {
      id: "TRK-9908821",
      student: "Kiran Kumar",
      item: "Degree Certificate - B.Tech",
      orderDate: "Apr 12, 2026 • 10:30 AM",
      estDelivery: "Apr 18, 2026",
      status: "In Transit",
      courierPartner: "BlueDart Express",
      currentLocation: "Secunderabad Sorting Facility, TS",
      history: [
        { title: "Arrived at Secunderabad Hub", time: "Today, 09:15 AM", location: "Hyderabad, TS", done: true },
        { title: "In Transit to Destination", time: "Yesterday, 11:20 PM", location: "Main Dispatch Center", done: true },
        { title: "Verified & Packed by Registrar", time: "Yesterday, 04:30 PM", location: "University Campus", done: true },
        { title: "Request Received & Processed", time: "Apr 12, 10:30 AM", location: "Admin Portal", done: true },
      ]
    },
    {
      id: "TRK-8821104",
      student: "Mohit Raj",
      item: "Migration Certificate",
      orderDate: "Apr 10, 2026 • 02:15 PM",
      estDelivery: "Delivered on Apr 14",
      status: "Delivered",
      courierPartner: "Delhivery",
      currentLocation: "Delivered",
      history: [
        { title: "Delivered to Candidate", time: "Apr 14, 05:00 PM", location: "Bangalore, KA", done: true },
        { title: "Out for Delivery", time: "Apr 14, 08:00 AM", location: "Whitefield Hub", done: true },
        { title: "Arrived at Bangalore City Hub", time: "Apr 13, 11:00 PM", location: "Nelamangala Hub", done: true },
      ]
    }
  ];

  // 🟢 Filter & Search Logic
  const filteredDeliveries = deliveries.filter(d => {
    const matchesSearch = d.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         d.student.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "All" || d.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-slate-50 p-6 font-sans text-slate-900 relative">
      
      {/* 🟢 HEADER SECTION */}
      <div className="max-w-7xl mx-auto mb-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black tracking-tight text-slate-900">
              Logistics <span className="text-blue-600">Center</span>
            </h1>
            <p className="text-slate-500 font-medium mt-1">Manage {deliveries.length} total shipments</p>
          </div>

          <div className="flex items-center gap-3 w-full lg:w-auto">
            <div className="relative flex-1 lg:w-96 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Search ID or Name..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm outline-none focus:ring-4 focus:ring-blue-100 transition-all font-medium"
              />
            </div>
            {/* Filter Toggle Button */}
            <button 
              onClick={() => setIsFilterOpen(true)}
              className={`p-4 rounded-2xl border transition-all shadow-sm flex items-center gap-2 font-bold text-sm ${
                statusFilter !== "All" ? "bg-blue-600 text-white border-blue-600" : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
              }`}
            >
              <Filter size={20} />
              <span className="hidden md:block">{statusFilter}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 🟢 SHIPMENT TABLE */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-[2.5rem] shadow-xl overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-100">
                <th className="px-8 py-6 text-[11px] font-black uppercase tracking-widest text-slate-400">Tracking Detail</th>
                <th className="px-8 py-6 text-[11px] font-black uppercase tracking-widest text-slate-400">Student</th>
                <th className="px-8 py-6 text-[11px] font-black uppercase tracking-widest text-slate-400">Last Hub</th>
                <th className="px-8 py-6 text-[11px] font-black uppercase tracking-widest text-slate-400">Status</th>
                <th className="px-8 py-6 text-[11px] font-black uppercase tracking-widest text-slate-400 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredDeliveries.length > 0 ? (
                filteredDeliveries.map((item) => (
                  <tr key={item.id} className="hover:bg-blue-50/30 transition-colors group">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                          <Package size={22} />
                        </div>
                        <div>
                          <p className="text-sm font-black text-blue-600">{item.id}</p>
                          <p className="text-xs font-bold text-slate-500">{item.item}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6 font-bold text-slate-800 text-sm">{item.student}</td>
                    <td className="px-8 py-6 text-sm font-semibold text-slate-600">{item.currentLocation}</td>
                    <td className="px-8 py-6">
                      <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${
                        item.status === 'Delivered' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-blue-50 text-blue-600 border-blue-100'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <button 
                        onClick={() => setSelectedTracking(item)}
                        className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-blue-600 transition-all shadow-lg active:scale-95"
                      >
                        Track
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-8 py-20 text-center text-slate-400 font-bold">No Shipments Found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* 🟢 FILTER MODAL (THE PART THAT WORKS) */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-[110] bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-sm shadow-2xl p-6 space-y-6 animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center border-b pb-4">
              <h2 className="text-xl font-black text-slate-900">Filter Status</h2>
              <button onClick={() => setIsFilterOpen(false)} className="p-2 hover:bg-slate-100 rounded-full"><X size={20}/></button>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {["All", "In Transit", "Delivered"].map((status) => (
                <button
                  key={status}
                  onClick={() => {
                    setStatusFilter(status);
                    setIsFilterOpen(false);
                  }}
                  className={`w-full p-4 rounded-2xl text-sm font-bold flex justify-between items-center transition-all ${
                    statusFilter === status ? "bg-blue-600 text-white shadow-lg" : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {status}
                  {statusFilter === status && <CheckCircle2 size={18} />}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TRACKING MODAL */}
      {selectedTracking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            
            {/* Modal Header */}
            <div className="p-8 bg-slate-50 border-b border-slate-100 flex justify-between items-start">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <Truck size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-black text-slate-900">Shipment Details</h2>
                  <p className="text-sm font-bold text-blue-600 uppercase tracking-tighter">{selectedTracking.id}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedTracking(null)}
                className="p-2 bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-red-500 hover:border-red-100 transition-all shadow-sm"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8 max-h-[70vh] overflow-y-auto">
              {/* Courier Summary */}
              <div className="mb-8 grid grid-cols-2 gap-4">
                <div className="bg-blue-50/50 p-4 rounded-2xl border border-blue-100">
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Courier Partner</p>
                  <p className="text-sm font-bold text-slate-800">{selectedTracking.courierPartner}</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-right">
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Est. Delivery</p>
                  <p className="text-sm font-bold text-blue-600">{selectedTracking.estDelivery}</p>
                </div>
              </div>

              {/* Timeline */}
              <div className="relative space-y-8 pl-8">
                <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-slate-100"></div>
                
                {selectedTracking.history.map((step, idx) => (
                  <div key={idx} className="relative">
                    <div className={`absolute -left-[24px] top-1 w-4 h-4 rounded-full border-4 border-white z-10 shadow-sm ${
                      step.done ? 'bg-blue-600' : 'bg-slate-200'
                    }`}></div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div>
                        <p className="text-sm font-bold text-slate-900">{step.title}</p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">
                          <MapPin size={10} className="inline mr-1 text-red-400" /> {step.location}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md inline-block">
                          {step.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end">
              <button 
                onClick={() => setSelectedTracking(null)}
                className="px-8 py-3 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg"
              >
                Close Tracking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeliveryManagement;