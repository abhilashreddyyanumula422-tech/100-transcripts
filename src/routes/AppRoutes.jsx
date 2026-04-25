import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* ================= USER ================= */
import MainLayout from "../user/layout/MainLayout";
import Home from "../user/pages/Home";
import About from "../user/pages/About";
import Services from "../user/pages/Services";
import Contact from "../user/pages/Contact";
import FileStatus from "../user/pages/FileStatus";
import Register from "../user/pages/Register";
import Login from "../user/pages/login";
import Apply from "../user/pages/Apply";
import Logout from "../user/pages/Logout";

/* ✅ NEW DYNAMIC PAGE */
import CollegePage from "../user/pages/CollegePage";

/* ================= ADMIN ================= */
import Layout from "../Admin/components/layout/Layout";
import Dashboard from "../Admin/pages/Dashboard";
import StudentRequests from "../Admin/pages/StudentRequests";
import CollegeVerification from "../Admin/pages/CollegeVerification";
import DeliveryManagement from "../Admin/pages/DeliveryManagement";
import Settings from "../Admin/pages/Settings";
import CollegeRequests from "../Admin/pages/CollegeRequests";
import EmailNotificationTemplate from "../Admin/pages/EmailNotificationTemplate";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= USER ROUTES ================= */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="mission" element={<About />} />
          <Route path="values" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="apply" element={<Apply />} />
          <Route path="contact" element={<Contact />} />
          <Route path="file-status" element={<FileStatus />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />

          {/* ✅ DYNAMIC COLLEGE ROUTE */}
          <Route path="partnered-colleges/:collegeId" element={<CollegePage />} />

        </Route>

        {/* ================= ADMIN ROUTES ================= */}
        <Route path="/admin" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="student-requests" element={<StudentRequests />} />
          <Route path="college-verification" element={<CollegeVerification />} />
          <Route path="college-requests" element={<CollegeRequests />} />
          <Route path="delivery" element={<DeliveryManagement />} />
          <Route path="email-notification-template" element={<EmailNotificationTemplate />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* ================= 404 ================= */}
        <Route
          path="*"
          element={
            <div className="p-10 text-center text-2xl font-bold text-gray-500">
              404 - Page Not Found
            </div>
          }
        />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;