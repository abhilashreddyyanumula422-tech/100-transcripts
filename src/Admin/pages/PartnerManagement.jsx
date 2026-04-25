// import React, { useState } from "react";

// const PartnerManagement = () => {
//   const [search, setSearch] = useState("");
  

//   // 🔹 Extended Data
//   const partners = [
//     {
//       id: 1,
//       name: "ABC University",
//       type: "University",
//       email: "abc@uni.com",
//       location: "USA",
//       requests: 320,
//       status: "Active",
//     },
//     {
//       id: 2,
//       name: "XYZ Verification Org",
//       type: "Verification",
//       email: "xyz@verify.com",
//       location: "India",
//       requests: 210,
//       status: "Inactive",
//     },
//     {
//       id: 3,
//       name: "Global College",
//       type: "College",
//       email: "global@college.com",
//       location: "UK",
//       requests: 150,
//       status: "Active",
//     },
//   ];

//   // 🔍 Filter
//   const filteredPartners = partners.filter((p) =>
//     p.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="p-6 bg-slate-100 min-h-screen">

//       {/* 🔝 HEADER */}
//       <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-3">
//         <h2 className="text-2xl font-bold">Partner Management</h2>

//         <button className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition">
//           + Add Partner
//         </button>
//       </div>

//       {/* 🔍 SEARCH */}
//       <div className="mb-5 flex justify-between flex-wrap gap-3">
//         <input
//           type="text"
//           placeholder="Search partner..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-full md:w-80 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
//         />

//         <select className="px-4 py-2 border rounded-lg">
//           <option>All Types</option>
//           <option>University</option>
//           <option>College</option>
//           <option>Verification</option>
//         </select>
//       </div>

//       {/* 📊 TABLE */}
//       <div className="bg-white rounded-2xl shadow overflow-x-auto">
//         <table className="w-full text-left min-w-[900px]">

//           <thead className="bg-slate-100 text-sm uppercase text-slate-600">
//             <tr>
//               <th className="p-4">Partner</th>
//               <th className="p-4">Type</th>
//               <th className="p-4">Email</th>
//               <th className="p-4">Location</th>
//               <th className="p-4">Requests</th>
//               <th className="p-4">Status</th>
//               <th className="p-4 text-center">Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//             {filteredPartners.map((partner) => (
//               <tr key={partner.id} className="border-t hover:bg-slate-50 transition">

//                 {/* Partner Name */}
//                 <td className="p-4">
//                   <div className="flex items-center gap-3">
//                     <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
//                       {partner.name.charAt(0)}
//                     </div>
//                     <div>
//                       <p className="font-semibold">{partner.name}</p>
//                       <p className="text-xs text-slate-400">ID: {partner.id}</p>
//                     </div>
//                   </div>
//                 </td>

//                 <td className="p-4">{partner.type}</td>

//                 <td className="p-4 text-sm text-slate-600">
//                   {partner.email}
//                 </td>

//                 <td className="p-4">{partner.location}</td>

//                 <td className="p-4 font-semibold text-blue-600">
//                   {partner.requests}
//                 </td>

//                 {/* Status */}
//                 <td className="p-4">
//                   <span
//                     className={`px-3 py-1 rounded-full text-xs font-semibold ${
//                       partner.status === "Active"
//                         ? "bg-green-100 text-green-600"
//                         : "bg-red-100 text-red-500"
//                     }`}
//                   >
//                     {partner.status}
//                   </span>
//                 </td>

//                 {/* Actions */}
//                 <td className="p-4 text-center space-x-2">
//                   <button className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded hover:bg-blue-200">
//                     View
//                   </button>
//                   <button className="px-3 py-1 text-sm bg-yellow-100 text-yellow-600 rounded hover:bg-yellow-200">
//                     Edit
//                   </button>
//                   <button className="px-3 py-1 text-sm bg-red-100 text-red-600 rounded hover:bg-red-200">
//                     Delete
//                   </button>
//                 </td>

//               </tr>
//             ))}

//             {filteredPartners.length === 0 && (
//               <tr>
//                 <td colSpan="7" className="text-center p-6 text-slate-400">
//                   No partners found
//                 </td>
//               </tr>
//             )}
//           </tbody>

//         </table>
//       </div>
//     </div>
//   );
// };

// export default PartnerManagement;

