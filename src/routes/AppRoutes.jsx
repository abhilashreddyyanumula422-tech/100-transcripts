import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

/* ================= USER ================= */
import MainLayout from "../user/layout/MainLayout";
import Home from "../user/pages/Home";
import About from "../user/pages/About";

import Services from "../user/pages/Services";
import IEEevaluation from "../user/pages/IEEevaluation";
import ECE from "../user/pages/ECE";
import SpanTran from "../user/pages/SpanTran";
import WES from "../user/pages/WES";
import EducationEva from "../user/pages/EducationEva";
import EP from "../user/pages/EP";

import Contact from "../user/pages/Contact";
import FileStatus from "../user/pages/FileStatus";
import Register from "../user/pages/Register";
import Login from "../user/pages/login";
import Apply from "../user/pages/Apply";
import Logout from "../user/pages/Logout";
import Sign from "../user/pages/Sign";


import Transcripts from "../user/pages/Transcripts";
import ProvisionalCertificate from "../user/pages/provisionalCertificate";
import OriginalDegree from "../user/pages/OriginalDegree";
import MOICertificate from "../user/pages/MOICertificate";
import CMM from "../user/pages/CMM";

/* ✅ NEW DYNAMIC PAGE */
import CollegePage from "../user/pages/CollegePage";
import Universities from "../user/pages/Universities";
import UniversityDetail from "../user/pages/UniversityDetail";

/* ================= ADMIN ================= */
import Layout from "../Admin/components/layout/Layout";
import Dashboard from "../Admin/pages/Dashboard";
import StudentRequests from "../Admin/pages/StudentRequests";
import CollegeVerification from "../Admin/pages/CollegeVerification";
import DeliveryManagement from "../Admin/pages/DeliveryManagement";
import Settings from "../Admin/pages/Settings";
import CollegeRequests from "../Admin/pages/CollegeRequests";
import EmailNotificationTemplate from "../Admin/pages/EmailNotificationTemplate";
;

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>

        {/* ================= USER ROUTES ================= */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="mission" element={<About />} />
          <Route path="values" element={<About />} />
          <Route path="services" element={<Services />} />
           <Route path="services/iee" element={<IEEevaluation />} />
           <Route path="services/ece" element={<ECE />} />
           <Route path="services/spantran" element={<SpanTran />} />
          <Route path="services/wes" element={<WES />} />
          <Route path="services/education-evaluation" element={<EducationEva />} />
          <Route path="services/ep" element={<EP />} />
          <Route path="services/provisional" element={<ProvisionalCertificate />} />
          <Route path="apply" element={<Apply />} />
          <Route path="contact" element={<Contact />} />
          <Route path="file-status" element={<FileStatus />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route path="signin" element={<Sign />} />

          {/* Certificate Service Routes */}
          <Route path="services/transcripts" element={<Transcripts />} />
          <Route path="services/pc" element={<ProvisionalCertificate />} />
          <Route path="services/od" element={<OriginalDegree />} />
          <Route path="services/moi" element={<MOICertificate />} />
          <Route path="services/cmm" element={<CMM />} />

          {/* ✅ DYNAMIC COLLEGE ROUTE */}
          <Route path="partnered-colleges/:collegeId" element={<CollegePage />} />
          <Route path="universities" element={<Universities />} />
          <Route path="universities/:universityId" element={<UniversityDetail />} />

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