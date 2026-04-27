import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
// NOTE: Replace this import with your actual image path
// import flowImage from "../../assets/flow1.png";
const flowImage = null; // placeholder — swap with your import

/* ─────────────────────────────────────────
   GLOBAL STYLES
───────────────────────────────────────── */
const GLOBAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');

*, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }

html, body, #root {
  font-family: 'Plus Jakarta Sans', sans-serif;
  background: #f8fafc;
  min-height: 100vh;
}

/* ══ Keyframes ══ */
@keyframes fadeDown  { from{opacity:0;transform:translateY(-20px)} to{opacity:1;transform:translateY(0)} }
@keyframes fadeUp    { from{opacity:0;transform:translateY(24px)}  to{opacity:1;transform:translateY(0)} }
@keyframes cardIn    { from{opacity:0;transform:translateY(32px) scale(0.96)} to{opacity:1;transform:translateY(0) scale(1)} }
@keyframes pulse     { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.45;transform:scale(.8)} }
@keyframes pop       { from{transform:scale(0) rotate(-20deg)} to{transform:scale(1) rotate(0)} }
@keyframes slideUp   { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
@keyframes float     { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-9px)} }
@keyframes nodeIn    { from{opacity:0;transform:scale(0) rotate(-20deg)} to{opacity:1;transform:scale(1) rotate(0)} }
@keyframes shimmer   { 0%{background-position:-200% center} 100%{background-position:200% center} }
@keyframes modalIn   { from{opacity:0;transform:scale(0.92) translateY(20px)} to{opacity:1;transform:scale(1) translateY(0)} }
@keyframes overlayIn { from{opacity:0} to{opacity:1} }
@keyframes spin      { to{transform:rotate(360deg)} }
@keyframes stepPulse { 0%,100%{box-shadow:0 0 0 0 rgba(59,130,246,0.45)} 50%{box-shadow:0 0 0 8px rgba(59,130,246,0)} }
@keyframes lineGrow  { from{height:0} to{height:100%} }
@keyframes checkPop  { 0%{transform:scale(0) rotate(-30deg);opacity:0} 70%{transform:scale(1.2) rotate(5deg);opacity:1} 100%{transform:scale(1) rotate(0deg);opacity:1} }
@keyframes iconBounce { 0%,100%{transform:translateY(0)} 40%{transform:translateY(-4px)} 60%{transform:translateY(-1px)} }

/* ══ Layout ══ */
.app-shell {
  display: flex;
  min-height: 100vh;
  background: #f8fafc;
}

/* ══ LEFT PANEL — Roadmap (Desktop only) ══ */
.image-panel {
  width: 30%;
  min-width: 340px;
  height: 100vh;
  position: sticky;
  top: 0;
  background: #ffffff;
  border-right: 1.5px solid #eef2f6;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex-shrink: 0;
}

.image-panel-inner {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px 28px;
  overflow-y: auto;
  scrollbar-width: none;
}
.image-panel-inner::-webkit-scrollbar { display: none; }

/* ══ Roadmap (Desktop) ══ */
.roadmap {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0;
}

.rm-step {
  display: flex;
  gap: 20px;
  position: relative;
}

.rm-line-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: 48px;
}

.rm-connector {
  width: 2px;
  flex: 1;
  min-height: 80px;
  position: relative;
  background: repeating-linear-gradient(
    to bottom,
    #e2e8f0 0px, #e2e8f0 6px,
    transparent 6px, transparent 12px
  );
  margin: 4px 0;
}

.rm-connector-fill {
  position: absolute;
  top: 0; left: 0; right: 0;
  background: #3b82f6;
  transition: height 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.rm-node {
  width: 48px;
  height: 48px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  background: #fff;
  border: 2px solid #e2e8f0;
  position: relative;
  transition: all 0.4s ease;
}

.rm-node-num {
  position: absolute;
  top: -6px; left: -6px;
  width: 20px; height: 20px;
  border-radius: 50%;
  background: #64748b;
  color: #fff;
  font-size: 10px;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #fff;
  transition: all 0.3s;
}

.rm-step.is-done .rm-node { background: #f0fdf4; border-color: #86efac; }
.rm-step.is-done .rm-node-num { background: #22c55e; }

.rm-step.is-active .rm-node { border-color: #3b82f6; background: #eff6ff; box-shadow: 0 0 0 4px rgba(59,130,246,0.1); }
.rm-step.is-active .rm-node-num { background: #3b82f6; }

.rm-content { padding: 10px 0 24px; }
.rm-step-label { font-size: 13px; font-weight: 800; color: #1e293b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
.rm-step.is-active .rm-step-label { color: #3b82f6; }
.rm-step-hint { font-size: 11px; color: #94a3b8; line-height: 1.5; }

/* ══ MOBILE ROADMAP (Horizontal Stepper) ══ */
.mobile-roadmap {
  display: none;
  background: #fff;
  padding: 16px;
  border-bottom: 1.5px solid #eef2f6;
  position: sticky;
  top: 0;
  z-index: 100;
  overflow-x: auto;
  scrollbar-width: none;
}
.mobile-roadmap::-webkit-scrollbar { display: none; }

.m-rm-track {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 450px;
  padding: 8px 4px;
}

.m-rm-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  position: relative;
  z-index: 1;
  flex: 1;
}

.m-rm-node {
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background: #fff;
  border: 2px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  transition: all 0.3s;
}

.m-rm-step.is-active .m-rm-node { border-color: #3b82f6; background: #eff6ff; color: #3b82f6; transform: scale(1.1); }
.m-rm-step.is-done .m-rm-node { border-color: #22c55e; background: #f0fdf4; color: #22c55e; }

.m-rm-label {
  font-size: 10px;
  font-weight: 800;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-align: center;
  white-space: nowrap;
}
.m-rm-step.is-active .m-rm-label { color: #3b82f6; }
.m-rm-step.is-done .m-rm-label { color: #22c55e; }

.m-rm-connector {
  position: absolute;
  top: 18px;
  left: calc(50% + 18px);
  width: calc(100% - 36px);
  height: 2px;
  background: #e2e8f0;
}
.m-rm-connector-fill {
  position: absolute;
  top: 0; left: 0; height: 100%;
  background: #3b82f6;
  width: 0;
  transition: width 0.6s ease;
}
.m-rm-step.is-done .m-rm-connector-fill { width: 100%; }

/* ══ PORTAL PANEL ══ */
.portal-panel {
  flex: 1;
  background: #f8fafc;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.portal-wrap { max-width: 900px; margin: 0 auto; padding: 40px 24px 80px; flex: 1; width: 100%; }

/* ══ Components ══ */
.main-card { 
  background: #fff; 
  border-radius: 32px; 
  padding: 40px; 
  box-shadow: 0 10px 40px rgba(15, 23, 42, 0.05); 
  border: 1px solid #eef2f6;
}

.step-header { display: flex; align-items: center; gap: 20px; margin-bottom: 32px; padding-bottom: 24px; border-bottom: 1.5px solid #f1f5f9; }
.step-icon { width: 60px; height: 60px; border-radius: 20px; display: flex; align-items: center; justify-content: center; font-size: 28px; flex-shrink: 0; }
.step-title { font-size: 24px; font-weight: 900; color: #0f172a; letter-spacing: -0.5px; }
.step-subtitle { font-size: 14px; color: #64748b; margin-top: 4px; }

/* Form Elements */
.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.field { display: flex; flex-direction: column; gap: 8px; }
.field label { font-size: 13px; font-weight: 700; color: #334155; }
.field input, .field select {
  padding: 14px 16px; border: 2px solid #f1f5f9; border-radius: 12px;
  font-size: 15px; font-family: inherit; outline: none; color: #1e293b; background: #fff;
  transition: all 0.2s;
}
.field input:focus, .field select:focus { border-color: #3b82f6; background: #fff; box-shadow: 0 0 0 4px rgba(59,130,246,0.1); }

/* Buttons */
.btn-primary {
  background: #2563eb; color: #fff; border: none;
  border-radius: 16px; padding: 16px 32px; font-size: 15px; font-weight: 800;
  cursor: pointer; font-family: inherit; transition: all 0.2s;
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
}
.btn-primary:hover { background: #1d4ed8; transform: translateY(-2px); box-shadow: 0 10px 20px rgba(37, 99, 235, 0.2); }
.btn-primary:active { transform: translateY(0); }

/* Responsive adjustments */
@media (max-width: 1024px) {
  .image-panel { display: none; }
  .mobile-roadmap { display: block; }
  .portal-wrap { padding: 24px 16px 60px; }
  .main-card { padding: 32px 24px; border-radius: 24px; }
}

@media (max-width: 640px) {
  .form-grid { grid-template-columns: 1fr; gap: 16px; }
  .step-header { flex-direction: column; text-align: center; gap: 16px; }
  .step-icon { margin: 0 auto; }
  .btn-primary { width: 100%; padding: 18px; }
  .hero-header h1 { font-size: 24px; }
}
`;


/* ─────────────────────────────────────────
   IMAGE COMPRESSION UTILITY
───────────────────────────────────────── */
async function compressImage(file, maxSizeMB = 1, maxDimension = 1920) {
  return new Promise((resolve) => {
    if (!file.type.startsWith("image/")) {
      resolve({ file, compressed: false });
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;
        if (width > maxDimension || height > maxDimension) {
          if (width > height) { height = Math.round((height * maxDimension) / width); width = maxDimension; }
          else { width = Math.round((width * maxDimension) / height); height = maxDimension; }
        }
        const canvas = document.createElement("canvas");
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        canvas.toBlob(
          (blob) => {
            if (!blob) { resolve({ file, compressed: false }); return; }
            const compressedFile = new File([blob], file.name, { type: "image/jpeg", lastModified: Date.now() });
            const savedKB = Math.max(0, Math.round((file.size - compressedFile.size) / 1024));
            resolve({ file: compressedFile, compressed: file.size > compressedFile.size, savedKB, originalKB: Math.round(file.size / 1024), newKB: Math.round(compressedFile.size / 1024) });
          },
          "image/jpeg", 0.82
        );
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

/* ─────────────────────────────────────────
   DIGILOCKER MODAL
───────────────────────────────────────── */
const MOCK_DIGILOCKER_DOCS = [
  { id: "degree", icon: "🎓", name: "B.Tech Degree Certificate", meta: "JNTU Hyderabad • 2021" },
  { id: "marksheet", icon: "📋", name: "Consolidated Marksheet", meta: "JNTU Hyderabad • 2021" },
  { id: "provisional", icon: "📜", name: "Provisional Certificate", meta: "JNTU Hyderabad • 2021" },
  { id: "migration", icon: "📑", name: "Migration Certificate", meta: "JNTU Hyderabad • 2021" },
];

function DigiLockerModal({ onClose, onFetch, targetLabel }) {
  const [phase, setPhase] = useState("login");
  const [aadhaar, setAadhaar] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendOtp = () => {
    if (aadhaar.length < 12) { alert("Please enter a valid 12-digit Aadhaar number"); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); setOtpSent(true); }, 1200);
  };

  const verifyOtp = () => {
    if (otp.length < 6) { alert("Please enter the 6-digit OTP"); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); setPhase("docs"); }, 1400);
  };

  const fetchDocs = () => {
    if (!selected.length) { alert("Please select at least one document"); return; }
    setPhase("fetching");
    setTimeout(() => {
      const docs = MOCK_DIGILOCKER_DOCS.filter(d => selected.includes(d.id));
      onFetch(docs);
      onClose();
    }, 2000);
  };

  const toggleDoc = (id) => setSelected(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id]);

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        <div className="modal-header">
          <div className="modal-icon">🔐</div>
          <div>
            <div className="modal-title">DigiLocker</div>
            <div className="modal-sub">{phase === "docs" ? `Select documents for: ${targetLabel}` : "Securely fetch your documents"}</div>
          </div>
        </div>

        {phase === "login" && (
          <>
            <div className="modal-field">
              <label>Aadhaar Number</label>
              <input type="tel" inputMode="numeric" maxLength={12} placeholder="Enter 12-digit Aadhaar" value={aadhaar} onChange={e => setAadhaar(e.target.value.replace(/\D/g, "").slice(0, 12))} />
            </div>
            {!otpSent ? (
              <button className="btn-primary" style={{ width: "100%", justifyContent: "center" }} onClick={sendOtp} disabled={loading}>
                {loading ? <><span className="spinner" /> &nbsp;Sending OTP...</> : "Send OTP →"}
              </button>
            ) : (
              <>
                <div className="modal-field" style={{ marginTop: 12 }}>
                  <label>Enter OTP</label>
                  <input type="tel" inputMode="numeric" maxLength={6} placeholder="6-digit OTP" value={otp} onChange={e => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))} />
                </div>
                <div className="modal-actions">
                  <button className="btn-secondary" onClick={onClose}>Cancel</button>
                  <button className="btn-primary" onClick={verifyOtp} disabled={loading}>
                    {loading ? <><span className="spinner" /> &nbsp;Verifying...</> : "Verify & Continue →"}
                  </button>
                </div>
              </>
            )}
            <p className="modal-hint">🔒 This is a simulated DigiLocker flow. No real data is accessed.</p>
          </>
        )}

        {phase === "docs" && (
          <>
            <div className="digilocker-docs-list">
              {MOCK_DIGILOCKER_DOCS.map(doc => (
                <div key={doc.id} className={`dl-doc-item ${selected.includes(doc.id) ? "selected" : ""}`} onClick={() => toggleDoc(doc.id)}>
                  <span className="dl-doc-icon">{doc.icon}</span>
                  <div>
                    <div className="dl-doc-name">{doc.name}</div>
                    <div className="dl-doc-meta">{doc.meta}</div>
                  </div>
                  <div className="dl-doc-check">{selected.includes(doc.id) ? "✓" : ""}</div>
                </div>
              ))}
            </div>
            <div className="modal-actions" style={{ marginTop: 18 }}>
              <button className="btn-secondary" onClick={onClose}>Cancel</button>
              <button className="btn-primary" onClick={fetchDocs} disabled={!selected.length}>
                Fetch {selected.length > 0 ? `(${selected.length})` : ""} →
              </button>
            </div>
          </>
        )}

        {phase === "fetching" && (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div style={{ fontSize: 44, marginBottom: 14 }}>📥</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#1e293b" }}>Fetching from DigiLocker…</div>
            <div style={{ fontSize: 13, color: "#64748b", marginTop: 6 }}>Securely retrieving your documents</div>
            <div style={{ marginTop: 20, display: "flex", justifyContent: "center" }}>
              <div style={{ width: 36, height: 36, border: "3px solid #e2e8f0", borderTopColor: "#6366f1", borderRadius: "50%", animation: "spin .7s linear infinite" }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const PROC = [
  { icon: "🌐", label: "Go to Website", hint: "User opens 100 Transcripts" },
  { icon: "📤", label: "Upload Documents", hint: "Fill form & upload docs" },
  { icon: "🔍", label: "Admin Verification", hint: "Our team checks your docs" },
  { icon: "💳", label: "Secure Payment", hint: "Secure one-time service fee" },
  { icon: "🚚", label: "Delivery Successful", hint: "Certified docs delivered!" },
];

const PROC_FULL = [
  { icon: "🌐", label: "Go to Website", hint: "User opens 100 Transcripts", narrative: "Starting my journey! 🌐" },
  { icon: "📤", label: "Upload Documents", hint: "Submitting digital paperwork", narrative: "Uploading my docs... 📤" },
  { icon: "🔍", label: "Admin Verification", hint: "Team checks for authenticity", narrative: "Admin is reviewing! 🔍" },
  { icon: "💳", label: "Secure Payment", hint: "Processing application fees", narrative: "Paying for service... 💳" },
  { icon: "🚚", label: "Delivery Successful", hint: "Documents delivered safely", narrative: "Successfully Completed! 🎉" },
];

const STEP_COLORS6 = [
  { bg: "#e8f0fe", color: "#2563eb" },
  { bg: "#e8f5e9", color: "#2e7d32" },
  { bg: "#fce4ec", color: "#c2185b" },
  { bg: "#fff3e0", color: "#e65100" },
  { bg: "#e3f2fd", color: "#0277bd" },
  { bg: "#f3e5f5", color: "#6a1b9a" },
];

function MobileRoadmap({ activeStep }) {
  const uiStep = activeStep === 2 ? 3 : activeStep === 3 ? 4 : activeStep === 4 ? 5 : activeStep;

  return (
    <div className="mobile-roadmap">
      <div className="m-rm-track">
        {PROC_FULL.map((step, i) => {
          const isDone = i < uiStep;
          const isActive = i === uiStep;

          return (
            <div key={i} className={`m-rm-step ${isDone ? "is-done" : ""} ${isActive ? "is-active" : ""}`}>
              <div className="m-rm-node">
                {isDone ? "✓" : step.icon}
              </div>
              <div className="m-rm-label">{step.label.split(' ')[0]}</div>
              {i < PROC_FULL.length - 1 && (
                <div className="m-rm-connector">
                  <div className="m-rm-connector-fill" style={{ width: isDone ? "100%" : "0%" }} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function RoadmapPanel({ activeStep }) {
  const [loopIndex, setLoopIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setLoopIndex(prev => (prev + 1) % (PROC_FULL.length + 1));
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const isVideoState = (i) => i < loopIndex;
  const isActiveVideo = (i) => i === loopIndex;

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariant = {
    hidden: { x: -20, opacity: 0 },
    show: { x: 0, opacity: 1 }
  };

  return (
    <div className="image-panel">
      <div className="image-panel-inner">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="panel-brand">
          <h2 style={{ fontSize: 18, color: "#0f172a", marginBottom: 4 }}>Processing Roadmap</h2>
          <p style={{ fontSize: 11, color: "#3b82f6", fontWeight: 700 }}>Visual Guide • Step-by-Step</p>
        </motion.div>

        <motion.div className="roadmap" variants={container} initial="hidden" animate="show">
          {PROC_FULL.map((step, i) => {
            const isDone = isVideoState(i);
            const isActive = isActiveVideo(i);
            const col = STEP_COLORS6[i];
            const isLast = i === PROC_FULL.length - 1;

            return (
              <motion.div key={i} className="rm-step" variants={itemVariant}>
                <div className="rm-line-col">
                  <motion.div
                    className="rm-node"
                    animate={{
                      scale: isActive ? 1.15 : 1,
                      borderColor: isActive || isDone ? col.color : "#e2e8f0",
                      background: isActive ? col.bg : isDone ? "#f0fdf4" : "#ffffff",
                      boxShadow: isActive ? `0 0 15px ${col.color}44` : "none"
                    }}
                    transition={{ duration: 0.5 }}
                    style={{ position: "relative", zIndex: 10 }}
                  >
                    <motion.div
                      className="rm-node-num"
                      animate={{ background: isDone ? "#16a34a" : isActive ? col.color : "#94a3b8" }}
                    >
                      {isDone ? "✓" : i + 1}
                    </motion.div>
                    <span style={{ fontSize: 18, filter: !isActive && !isDone ? "grayscale(1) opacity(0.4)" : "none" }}>
                      {step.icon}
                    </span>
                  </motion.div>

                  {!isLast && (
                    <div className="rm-connector">
                      <motion.div
                        className="rm-connector-fill"
                        animate={{ height: isDone ? "100%" : "0%" }}
                        transition={{ duration: 0.8 }}
                        style={{
                          background: `linear-gradient(to bottom, ${col.color}, ${STEP_COLORS6[i + 1].color})`,
                          width: "100%",
                          position: "absolute",
                          top: 0
                        }}
                      />
                    </div>
                  )}
                </div>

                <div className="rm-content" style={{ paddingBottom: isLast ? 0 : "32px" }}>
                  <motion.div
                    animate={{
                      color: isDone ? "#15803d" : isActive ? col.color : "#94a3b8",
                      opacity: isActive || isDone ? 1 : 0.4,
                      x: isActive ? 4 : 0
                    }}
                    style={{ fontSize: 13, fontWeight: 800, marginBottom: 2 }}
                  >
                    {step.label}
                  </motion.div>
                  <motion.div
                    animate={{ opacity: isActive ? 1 : 0.4 }}
                    style={{ fontSize: 11, color: "#64748b", lineHeight: 1.4 }}
                  >
                    {step.hint}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}


/* ─────────────────────────────────────────
   SMALL HELPERS
───────────────────────────────────────── */
const TlItem = ({ icon, bg, title, desc, badge, last }) => (
  <div className="tl-item">
    <div className="tl-left">
      <div className="tl-dot" style={{ background: bg }}>{icon}</div>
      {!last && <div className="tl-line" />}
    </div>
    <div className="tl-content">
      <h4>{title}</h4>
      {desc && <p>{desc}</p>}
      <span className={`tl-badge ${badge}`}>
        {badge === "bdone" ? "Done" : badge === "bprog" ? "In Progress" : "Upcoming"}
      </span>
    </div>
  </div>
);

/* ─────────────────────────────────────────
   UPLOAD BLOCK
───────────────────────────────────────── */
const UpBlock = ({ type, label, options, upProg, upNames, upCompressed, onFile, onDelFile, onDigiLocker }) => {
  const prog = upProg[type];
  const nm = upNames[type];
  const comprInfo = upCompressed[type];

  return (
    <div className="upload-box">
      <div className="upload-lbl">📎 {label}</div>
      <div className="upload-row">
        <input type="file" accept="application/pdf,image/*" onChange={onFile(type)} />
        <select>{options.map(o => <option key={o}>{o}</option>)}</select>
      </div>
      {prog > 0 && (
        <div className="prog-wrap">
          <div className="prog-bar">
            <div className={`prog-fill${prog === 100 ? " pdone" : ""}`} style={{ width: `${prog}%` }} />
          </div>
          <div className="prog-text">{prog === 100 ? "✅ Uploaded successfully" : `Uploading… ${prog}%`}</div>
        </div>
      )}
      {nm && <div className="file-nm">📄 {nm}</div>}
      {comprInfo && comprInfo.compressed && (
        <div className="file-compressed">
          🗜 Compressed: {comprInfo.originalKB}KB → {comprInfo.newKB}KB (saved {comprInfo.savedKB}KB)
        </div>
      )}
      <div className="upload-actions">
        <button className="btn-attach" type="button" onClick={() => alert(`${label} attached!`)}>Attach</button>
        {nm && <button className="btn-del" type="button" onClick={() => onDelFile(type)}>Delete</button>}
        <button className="btn-digilocker" type="button" onClick={() => onDigiLocker(type, label)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-4 0v2" /><line x1="12" y1="12" x2="12" y2="16" />
          </svg>
          DigiLocker
        </button>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────
   STEP COMPONENTS
───────────────────────────────────────── */
const Step0 = ({ form, onChange, degrees, addDeg, rmDeg, chDeg, upProg, upNames, upCompressed, onFile, delFile, onDigiLocker, onSubmit, adminMessage }) => (
  <form onSubmit={onSubmit}>
    {adminMessage && (
      <div className="info-panel amber" style={{ marginBottom: 24, border: "2px solid #fbbf24" }}>
        <span className="info-icon">⚠️</span>
        <div style={{ flex: 1 }}>
          <h3 style={{ color: "#92400e", marginBottom: 4 }}>Action Required / Rejection Message</h3>
          <p style={{ color: "#b45309", fontSize: "14px", fontWeight: 500 }}>{adminMessage}</p>
        </div>
      </div>
    )}

    <div className="step-header">
      <div className="step-icon icon-blue">📄</div>
      <div>
        <div className="step-title">Upload Your Documents</div>
        <div className="step-subtitle">Fill in your personal details and upload clear certificate copies</div>
      </div>
    </div>

    <div className="sec-title">Personal Information</div>
    <div className="form-grid">
      {[
        { id: "fullName", label: "Full Name", type: "text", ph: "e.g. Ravi Kumar", req: true },
        { id: "email", label: "Email Address", type: "email", ph: "email@example.com", req: true },
        { id: "phone", label: "Phone Number", type: "tel", ph: "+91 98765 43210", req: true },
        { id: "altPhone", label: "Alternative Number", type: "tel", ph: "+91 98765 43210", req: true },
      ].map(({ id, label, type, ph, req }) => (
        <div className="field" key={id}>
          <label>{label} {req && <span className="req">*</span>}</label>
          <input
            type={type}
            name={id}
            value={form[id]}
            onChange={onChange}
            placeholder={ph}
            autoComplete="off"
            inputMode={type === "tel" ? "numeric" : undefined}
          />
        </div>
      ))}
      <div className="field">
        <label>Select Requirement <span className="req">*</span></label>
        <select name="requirement" value={form.requirement} onChange={onChange}>
          <option value="">— Choose Service —</option>
          <option value="Transcripts">Transcripts</option>
          <option value="WES">WES</option>
          <option value="Genuineness">Genuineness</option>
        </select>
      </div>
      <div className="field">
        <label>Reference Number</label>
        <input type="text" name="referenceNumber" value={form.referenceNumber} onChange={onChange} placeholder="If you have one" />
      </div>
    </div>

    <div className="sec-title">Academic Degrees (Optional)</div>
    {degrees.length === 0 ? (
      <div className="optional-deg-box" onClick={addDeg}>
        <div className="opt-icon">🎓</div>
        <div className="opt-text">
          <strong>Add Degree Details</strong>
          <span>Click to add your university and course information if applicable</span>
        </div>
        <button type="button" className="btn-add-mini">+ Add</button>
      </div>
    ) : (
      <>
        {degrees.map(d => (
          <div className="degree-card" key={d.id}>
            <div className="deg-header">
              <span className="deg-num">Degree {d.id}</span>
              <button type="button" className="btn-rm" onClick={() => rmDeg(d.id)}>✕ Remove</button>
            </div>
            <div className="form-grid">
              <div className="field">
                <label>Degree Type</label>
                <select value={d.type} onChange={e => chDeg(d.id, "type", e.target.value)}>
                  <option value="">Select Type</option>
                  {["B.Tech", "B.Sc", "B.Com", "M.Tech", "MBA", "Diploma"].map(t => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div className="field">
                <label>University / Board <span className="req">*</span></label>
                <input type="text" value={d.university} placeholder="e.g. Osmania University" onChange={e => chDeg(d.id, "university", e.target.value)} />
              </div>
              <div className="field">
                <label>Course / Specialization</label>
                <input type="text" value={d.course} placeholder="e.g. Computer Science" onChange={e => chDeg(d.id, "course", e.target.value)} />
              </div>
              <div className="field">
                <label>College / School Name <span className="req">*</span></label>
                <input type="text" value={d.college} placeholder="e.g. JNTU College" onChange={e => chDeg(d.id, "college", e.target.value)} />
              </div>
            </div>
          </div>
        ))}
        <button type="button" className="btn-add" onClick={addDeg}>+ Add Another Degree</button>
      </>
    )}

    <div className="sec-title">Upload Documents</div>
    <UpBlock type="cmm" label="CMM / Yearly Marks Sheet"
      options={["CMM", "Semester 1", "Semester 2", "Semester 3", "Semester 4", "Semester 5", "Semester 6", "Semester 7", "Semester 8"]}
      upProg={upProg} upNames={upNames} upCompressed={upCompressed}
      onFile={onFile} onDelFile={delFile} onDigiLocker={onDigiLocker} />
    <UpBlock type="degree" label="Degree / Provisional Certificate"
      options={["Degree Certificate", "Provisional Certificate"]}
      upProg={upProg} upNames={upNames} upCompressed={upCompressed}
      onFile={onFile} onDelFile={delFile} onDigiLocker={onDigiLocker} />
    <UpBlock type="internship" label="Internship Certificate"
      options={["Internship Certificate"]}
      upProg={upProg} upNames={upNames} upCompressed={upCompressed}
      onFile={onFile} onDelFile={delFile} onDigiLocker={onDigiLocker} />

    <div className="guideline-section">
      <div className="guideline-title">
        <span>📸</span> Important: Photo & Document Guidelines
      </div>
      <div className="guideline-grid">
        <div className="guideline-item">
          <div className="guideline-img-wrap">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" alt="Correct" />
            <div className="guideline-badge badge-ok">Correct</div>
          </div>
          <div className="guideline-label">Clear face, plain background</div>
        </div>
        <div className="guideline-item">
          <div className="guideline-img-wrap">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&blur=10" alt="Blurry" />
            <div className="guideline-badge badge-no">Too Blurry</div>
          </div>
          <div className="guideline-label">Out of focus or dark</div>
        </div>
        <div className="guideline-item">
          <div className="guideline-img-wrap">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&sat=-100" alt="Accessories" />
            <div className="guideline-badge badge-no">Incorrect</div>
          </div>
          <div className="guideline-label">Glasses, hats or busy bg</div>
        </div>
      </div>
    </div>

    <div className="check-list">
      <label className="check-item">
        <input type="checkbox" name="termsAccepted" checked={form.termsAccepted} onChange={onChange} />
        <span>I have read and accepted the <strong>Terms &amp; Conditions</strong> of this service</span>
      </label>
      <label className="check-item">
        <input type="checkbox" name="specialCondition" checked={form.specialCondition} onChange={onChange} />
        <span>I confirm that I am not physically challenged / pregnant or under similar special conditions</span>
      </label>
    </div>
    <div className="actions">
      <button type="submit" className="btn-primary">Proceed to Payment &nbsp;→</button>
    </div>
  </form>
);

const Step1 = ({ form, goStep, handlePayment }) => (
  <div>
    <div className="step-header">
      <div className="step-icon icon-amber">💳</div>
      <div>
        <div className="step-title">Secure Payment</div>
        <div className="step-subtitle">Complete your payment to begin document processing</div>
      </div>
    </div>
    <div className="info-panel amber">
      <span className="info-icon">🔒</span>
      <h3>Service Fee</h3>
      <div className="amount">₹ 20</div>
      <p>One-time fee for verification, attestation &amp; processing.<br />100% Secure &bull; Instant confirmation</p>
    </div>
    <div className="timeline">
      <TlItem icon="✅" bg="#dcfce7" title="Documents Received" desc="All your documents submitted successfully." badge="bdone" />
      <TlItem icon="💳" bg="#fef3c7" title="Payment Required" desc="Complete payment to unlock document review." badge="bprog" />
      <TlItem icon="🔍" bg="#f1f5f9" title="Document Review" desc="Our team verifies your documents (24–48 hrs)." badge="bwait" last />
    </div>
    <div className="actions">
      <button className="btn-secondary" onClick={() => goStep(0)}>← Back</button>
      <button className="btn-primary green" onClick={handlePayment}>💳 &nbsp;Pay ₹1 Now</button>
    </div>
  </div>
);

const Step2 = ({ appStatus, adminMessage, goStep, onRetry }) => {
  const isPending = appStatus === "pending";
  const isApproved = appStatus === "approved";
  const isRejected = appStatus === "rejected";

  return (
    <div>
      <div className="step-header">
        <div className={`step-icon ${isRejected ? "icon-amber" : "icon-blue"}`}>
          {isRejected ? "❌" : isApproved ? "✅" : "🔍"}
        </div>
        <div>
          <div className="step-title">
            {isRejected ? "Action Required" : isApproved ? "Documents Verified" : "Document Review"}
          </div>
          <div className="step-subtitle">
            {isRejected ? "Some issues were found with your submission" : isApproved ? "Your documents have been approved! Please proceed to payment" : "Our experts are carefully verifying your documents"}
          </div>
        </div>
      </div>

      {isPending && (
        <div className="info-panel blue">
          <span className="info-icon">⏳</span>
          <h3>Review in Progress</h3>
          <p>Your documents are being checked for authenticity &amp; completeness.<br /><strong>Estimated: 24–48 business hours</strong></p>
        </div>
      )}

      {isApproved && (
        <div className="info-panel green">
          <span className="info-icon">✅</span>
          <h3>Verification Successful</h3>
          <p>All documents are clear and verified. You can now proceed to make the payment to start processing.</p>
        </div>
      )}

      {isRejected && (
        <div className="info-panel amber">
          <span className="info-icon">⚠️</span>
          <h3>Issue Detected</h3>
          <div style={{ background: "rgba(255,255,255,0.6)", padding: "12px", borderRadius: "10px", margin: "10px 0", border: "1px solid #fde68a" }}>
            <p style={{ fontWeight: 700, color: "#92400e", marginBottom: 4 }}>Message from Admin:</p>
            <p style={{ color: "#b45309", fontSize: "14px" }}>{adminMessage || "Please check your documents and retry."}</p>
          </div>
          <p>Please click retry to go back to the form and fix the issues.</p>
        </div>
      )}

      <div className="timeline">
        <TlItem icon="✅" bg="#dcfce7" title="Documents Submitted" desc="All documents received." badge="bdone" />
        <TlItem
          icon={isApproved ? "✅" : "🔍"}
          bg={isApproved ? "#dcfce7" : isRejected ? "#fee2e2" : "#dbeafe"}
          title="Document Review"
          desc={isRejected ? "Issues found by admin." : isApproved ? "Verification cleared!" : "Experts checking authenticity."}
          badge={isApproved ? "bdone" : isRejected ? "bwait" : "bprog"}
        />
        <TlItem icon="💳" bg="#f1f5f9" title="Secure Payment" desc="Proceed to payment after review." badge="bwait" />
        <TlItem icon="🏛️" bg="#f1f5f9" title="University Verification" desc="Sent to university after payment." badge="bwait" last />
      </div>

      <div className="actions">
        {isRejected && (
          <button className="btn-primary" onClick={onRetry}>
            🔄 &nbsp;Retry Submission
          </button>
        )}
        {isApproved && (
          <button className="btn-primary green" onClick={() => goStep(2)}>
            💳 &nbsp;Proceed to Payment
          </button>
        )}
        {isPending && (
          <button className="btn-secondary" disabled style={{ opacity: 0.6, cursor: "not-allowed" }}>
            ⏳ &nbsp;Waiting for Admin...
          </button>
        )}
      </div>
    </div>
  );
};

const Step3 = ({ reset, handleRefund }) => (
  <div>
    <div className="step-header">
      <div className="step-icon icon-purple">🏛️</div>
      <div>
        <div className="step-title">University / Board Verification</div>
        <div className="step-subtitle">Documents sent to the official authority</div>
      </div>
    </div>
    <div className="info-panel indigo">
      <span className="info-icon">🏛️</span>
      <h3>Sent to University / Board</h3>
      <p>Your documents have been forwarded to the respective authority.<br /><strong>Estimated: 3–7 working days</strong></p>
    </div>
    <div className="timeline">
      <TlItem icon="✅" bg="#dcfce7" title="Documents Submitted" badge="bdone" />
      <TlItem icon="✅" bg="#dcfce7" title="Payment Confirmed" badge="bdone" />
      <TlItem icon="✅" bg="#dcfce7" title="Document Review Cleared" badge="bdone" />
      <TlItem icon="🏛️" bg="#e0e7ff" title="University Verification — Active" desc="Official authority is processing your request." badge="bprog" />
      <TlItem icon="🚀" bg="#f1f5f9" title="Final Delivery" desc="Digital & physical copies delivered." badge="bwait" last />
    </div>
    <div className="actions">
      <button className="btn-primary" onClick={reset}>+ Start New Request</button>
      <button
    className="btn-secondary"
    style={{
      marginLeft: "10px",
      backgroundColor: "#ef4444",
      color: "#fff"
    }}
    onClick={handleRefund}
  >
    💸 Refund Payment
  </button>
    </div>
  </div>
);

const Step4 = ({ form, reset }) => (
  <div className="success-wrap">
    <div className="step-header">
      <div className="step-icon icon-green">🚀</div>
      <div>
        <div className="step-title">All Done! Delivery Complete</div>
        <div className="step-subtitle">Your verified documents are ready</div>
      </div>
    </div>
    <div className="info-panel green" style={{ padding: 36 }}>
      <span className="star-burst">🎉</span>
      <h3 style={{ fontSize: 22, color: "#166534" }}>Congratulations!</h3>
      <p style={{ fontSize: 14, marginTop: 8 }}>Your documents have been successfully verified and delivered.</p>
      {form.email && <div className="info-chip">📧 Sent to: <strong>{form.email}</strong></div>}
      {form.referenceNumber && <div className="info-chip" style={{ marginLeft: 8 }}>🔖 Ref: <strong>{form.referenceNumber}</strong></div>}
    </div>
    <div className="timeline">
      <TlItem icon="✅" bg="#dcfce7" title="Documents Submitted" badge="bdone" />
      <TlItem icon="✅" bg="#dcfce7" title="Payment Confirmed" badge="bdone" />
      <TlItem icon="✅" bg="#dcfce7" title="Document Review Cleared" badge="bdone" />
      <TlItem icon="✅" bg="#dcfce7" title="University Verified" badge="bdone" />
      <TlItem icon="🚀" bg="#dcfce7" title="Delivered!" badge="bdone" last />
    </div>
    <div className="actions">
      <button className="btn-primary" onClick={reset}>+ Start New Request</button>
    </div>
  </div>
);

/* ─────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────── */
export default function Apply() {
  const [activeStep, setActiveStep] = useState(0);
  const [trackId, setTrackId] = useState("");
  const [animKey, setAnimKey] = useState(0);

  const [applicationId, setApplicationId] = useState(() => localStorage.getItem("applicationId") || null);
  const [appStatus, setAppStatus] = useState("pending");
  const [adminMessage, setAdminMessage] = useState("");

  const [form, setForm] = useState(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userData = user?.data || {};
    return {
      fullName: userData.name || "",
      altPhone: "",
      email: userData.email || "",
      phone: "",
      requirement: "",
      referenceNumber: "",
      termsAccepted: false,
      specialCondition: false,
    };
  });

  const [upProg, setUpProg] = useState({ cmm: 0, degree: 0, internship: 0 });
  const [upNames, setUpNames] = useState({ cmm: null, degree: null, internship: null });
  const [upCompressed, setUpCompressed] = useState({ cmm: null, degree: null, internship: null });
  const [degrees, setDegrees] = useState([]);

  const [digiModal, setDigiModal] = useState({ open: false, type: null, label: "" });

  useEffect(() => {
    if (!document.getElementById("apply-css")) {
      const s = document.createElement("style");
      s.id = "apply-css";
      s.textContent = GLOBAL_CSS;
      document.head.appendChild(s);
    }
  }, []);

  // ✅ Dynamic API Base
  const API_BASE = `http://192.168.1.43:8000`;

  const goStep = useCallback((n) => {
    setActiveStep(n);
    setAnimKey(k => k + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // 🔄 Restore state on refresh
  useEffect(() => {
    const restoreState = async () => {
      const storedId = localStorage.getItem("applicationId");
      const user = JSON.parse(localStorage.getItem("user"));
      const userEmail = user?.data?.email;

      let fetchUrl = "";
      if (storedId) {
        fetchUrl = `${API_BASE}/api/application/${storedId}/status/`;
      } else if (userEmail) {
        fetchUrl = `${API_BASE}/api/application-status/?email=${userEmail}`;
      }

      if (fetchUrl) {
        try {
          const res = await fetch(fetchUrl);
          const data = await res.json();
          if (data.status) {
            setAppStatus(data.status);
            setAdminMessage(data.admin_message || "");
            if (data.application_id) {
              setApplicationId(data.application_id);
              localStorage.setItem("applicationId", data.application_id);
            }

            // Map status to step
            if (data.status === "approved") {
              if (data.payment_status === "Paid") goStep(3);
              else goStep(2);
            } else if (data.status === "pending") {
              goStep(1);
            } else if (data.status === "rejected") {
              goStep(0); // Go to form to show rejection message
            } else if (data.status === "delivered") {
              goStep(4);
            }
          }
        } catch (err) {
          // Restore state error handled silently
        }
      }
    };
    restoreState();
  }, [goStep, API_BASE]);

  // 🔄 Status Polling while in Waiting Screen (activeStep 1)
  useEffect(() => {
    let interval;
    if (activeStep === 1 && applicationId) {
      const checkStatus = async () => {
        try {
          const res = await fetch(`${API_BASE}/api/application/${applicationId}/status/`);
          const data = await res.json();
          if (data.status) {
            setAppStatus(data.status);
            setAdminMessage(data.admin_message || "");
            if (data.status === "approved") {
               // keep step 1, but Step2 will show proceed to payment
            } else if (data.status === "delivered") {
               goStep(4);
            }
          }
        } catch (err) {
          // Polling error handled silently
        }
      };

      checkStatus(); // Initial check
      interval = setInterval(checkStatus, 5000); // Check every 5 seconds
    }
    return () => clearInterval(interval);
  }, [activeStep, applicationId, API_BASE, goStep]);

  const onChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  }, []);

  const addDeg = useCallback(() => {
    const id = Math.max(0, ...degrees.map(d => d.id)) + 1;
    setDegrees(ds => [...ds, { id, type: "", university: "", course: "", college: "" }]);
  }, [degrees]);

  const rmDeg = useCallback((id) => {
    setDegrees(ds => ds.filter(d => d.id !== id));
  }, []);

  const chDeg = useCallback((id, field, val) => {
    setDegrees(ds => ds.map(d => d.id === id ? { ...d, [field]: val } : d));
  }, []);

  const onFile = useCallback((type) => async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUpNames(p => ({ ...p, [type]: file.name }));
    setUpProg(p => ({ ...p, [type]: 5 }));
    const result = await compressImage(file);
    setUpCompressed(p => ({ ...p, [type]: result }));
    let v = 10;
    const t = setInterval(() => {
      v += Math.random() * 15 + 8;
      if (v >= 100) { v = 100; clearInterval(t); }
      setUpProg(p => ({ ...p, [type]: Math.round(v) }));
    }, 110);
  }, []);

  const delFile = useCallback((type) => {
    setUpProg(p => ({ ...p, [type]: 0 }));
    setUpNames(p => ({ ...p, [type]: null }));
    setUpCompressed(p => ({ ...p, [type]: null }));
  }, []);

  const openDigiLocker = useCallback((type, label) => {
    setDigiModal({ open: true, type, label });
  }, []);

  const handleDigiLockerFetch = useCallback((docs) => {
    const { type } = digiModal;
    if (!type || !docs.length) return;
    const docName = docs.map(d => d.name).join(", ");
    setUpNames(p => ({ ...p, [type]: `[DigiLocker] ${docName}` }));
    setUpProg(p => ({ ...p, [type]: 100 }));
    setUpCompressed(p => ({ ...p, [type]: { compressed: false } }));
  }, [digiModal]);

  const handleTrack = (e) => {
    e.preventDefault();
    if (!trackId.trim()) { alert("Please enter a tracking ID"); return; }
    alert(`Searching for Application ID: ${trackId}\n\n[Demo Mode]: Current status is "Processing at University"`);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!form.fullName || !form.email || !form.phone || !form.altPhone || !form.requirement || !form.termsAccepted) {
      alert("Please fill all required fields (*) and accept Terms");
      return;
    }

    const trackingId = "TRK" + Date.now().toString().slice(-6);

    try {
      const formData = new FormData();
      Object.keys(form).forEach(key => formData.append(key, form[key]));
      formData.append("trackingId", trackingId);
      formData.append("degrees", JSON.stringify(degrees));

      Object.keys(upCompressed).forEach(type => {
        const fileData = upCompressed[type];
        if (fileData?.file) formData.append(type, fileData.file);
      });

      const res = await fetch(`${API_BASE}/api/submit/`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        alert(`Application Submitted ✅\nAdmin will now verify your documents.`);
        setApplicationId(data.application_id);
        setAppStatus("pending");
        setAdminMessage("");
        localStorage.setItem("applicationId", data.application_id);
        goStep(1);
      } else {
        alert(data.error || "Submission failed");
      }
    } catch (err) {
      // Frontend error handled silently
      alert("Something went wrong");
    }
  };

const handleRefund = async () => {
  const confirmRefund = window.confirm("Are you sure you want to refund?");
  if (!confirmRefund) return;

  try {
    const res = await fetch(`http://192.168.1.43:8000/api/refund/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        application_id: applicationId
      }),
    });

    const data = await res.json();

    if (res.ok) {
      alert(`Refund Successful ✅\nRefund ID: ${data.refund_id}`);
    } else {
      alert(data.error || "Refund Failed ❌");
    }

  } catch (err) {
    console.error("Refund Error:", err);
    alert("Refund error ❌");
  }
};

 const handlePayment = async () => {
  try {
    const res = await fetch(`${API_BASE}/api/create-order/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: 20, // ₹1
        application_id: applicationId,
      }),
    });

    if (!res.ok) {
      const errData = await res.json();
      alert(errData.error || "Failed to create order");
      return;
    }

    const data = await res.json();

    const options = {
      key: "rzp_test_Sg6qpBoNrt75cC",
      amount: data.amount,
      currency: "INR",
      order_id: data.order_id,

      name: "100 Transcripts",
      description: "Document Verification Fee",

      handler: async function (response) {
        try {
          const verifyRes = await fetch(`${API_BASE}/api/verifys/`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              application_id: applicationId,
            }),
          });

          const verifyData = await verifyRes.json();

          if (verifyRes.ok && verifyData.status === "success") {
            alert("Payment Successful ✅");
            goStep(3);
          } else {
            alert("Payment Failed ❌");
          }
        } catch (err) {
          alert("Verification error ❌");
        }
      },

      prefill: {
        name: form.fullName,
        email: form.email,
        contact: form.phone,
      },

      theme: {
        color: "#2563eb",
      },

      // ✅ FORCE UPI ONLY (Scanner works perfectly)
      method: {
        upi: true,
        card: true,
        netbanking: false,
        wallet: false,
      },

      // ✅ Opens QR / UPI apps directly
      modal: {
        ondismiss: function () {
          console.log("Payment popup closed");
        },
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();

  } catch (err) {
    console.error("Payment Error:", err);
    alert("Payment error ❌");
  }
};

  const reset = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userData = user?.data || {};
    setForm({ 
      fullName: userData.name || "", 
      altPhone: "", 
      email: userData.email || "", 
      phone: "", 
      requirement: "", 
      referenceNumber: "", 
      termsAccepted: false, 
      specialCondition: false 
    });
    setDegrees([]);
    setUpProg({ cmm: 0, degree: 0, internship: 0 });
    setUpNames({ cmm: null, degree: null, internship: null });
    setUpCompressed({ cmm: null, degree: null, internship: null });
    setApplicationId(null);
    setAppStatus("pending");
    setAdminMessage("");
    localStorage.removeItem("applicationId");
    goStep(0);
  };

  const fillPct = Math.round(((activeStep + 1) / (PROC.length)) * 100);

  return (
    <>
      {digiModal.open && (
        <DigiLockerModal
          targetLabel={digiModal.label}
          onClose={() => setDigiModal({ open: false, type: null, label: "" })}
          onFetch={handleDigiLockerFetch}
        />
      )}

      <div className="app-shell">
        <RoadmapPanel activeStep={activeStep} />
        <MobileRoadmap activeStep={activeStep} />

        <div className="portal-panel">
          <div className="portal-wrap">
            <div className="main-card card-anim" key={animKey}>
              {activeStep === 0 && (
                <Step0
                  form={form} onChange={onChange}
                  degrees={degrees} addDeg={addDeg} rmDeg={rmDeg} chDeg={chDeg}
                  upProg={upProg} upNames={upNames} upCompressed={upCompressed}
                  onFile={onFile} delFile={delFile}
                  onDigiLocker={openDigiLocker}
                  onSubmit={onSubmit}
                  adminMessage={adminMessage}
                />
              )}
              {activeStep === 1 && (
                <Step2
                  appStatus={appStatus}
                  adminMessage={adminMessage}
                  goStep={goStep}
                  onRetry={() => goStep(0)}
                />
              )}
              {activeStep === 2 && (
                <Step1
                  form={form}
                  goStep={() => goStep(1)}
                  handlePayment={handlePayment}
                />
              )}
              {activeStep === 3 && <Step3 reset={reset} handleRefund={handleRefund} />}
              {activeStep === 4 && <Step4 form={form} reset={reset} />}
            </div>

            <div className="hero-header" style={{ animationDelay: '0.4s', marginTop: 48, marginBottom: 16 }}>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0f172a]">Already Applied? <em className="text-blue-600 not-italic">Check Status</em></h2>
              <p className="text-slate-500 mt-2">Enter your unique tracking ID to see your processing progress</p>
            </div>

            <form className="track-bar" onSubmit={handleTrack} style={{ marginTop: 24 }}>
              <input
                type="text"
                className="track-input"
                placeholder="Enter Tracking ID (e.g. TRK123456)"
                value={trackId}
                onChange={(e) => setTrackId(e.target.value)}
              />
              <button type="submit" className="track-btn">Track Status</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
