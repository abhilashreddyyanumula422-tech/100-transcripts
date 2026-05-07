import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────
    GLOBAL STYLES
───────────────────────────────────────── */
const GLOBAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');

*, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }

html, body, #root {
  font-family: 'Plus Jakarta Sans', sans-serif;
  background: #fff;
  min-height: 100vh;
}

/* ══ Animations ══ */
@keyframes spin { to{transform:rotate(360deg)} }
@keyframes checkPop { 0%{transform:scale(0);opacity:0} 100%{transform:scale(1);opacity:1} }

/* ══ Layout ══ */
.app-shell { display: flex; min-height: 100vh; background: #fff; }

.image-panel {
  width: 30%; min-width: 320px; height: 100vh; position: sticky; top: 0;
  background: #ffffff; border-right: 1.5px solid #eef2f6; display: flex;
  flex-direction: column; overflow: hidden; flex-shrink: 0;
}

.image-panel-inner { padding: 40px 24px; overflow-y: auto; }

.portal-panel { flex: 1; background: #f0f4ff; min-height: 100vh; overflow-y: auto; display: flex; flex-direction: column; }
.portal-wrap { max-width: 1100px; margin: 0 auto; padding: 60px 24px; flex: 1; }

/* ══ Upload Selection UI ══ */
.upload-selection-container {
  display: flex;
  align-items: stretch;
  gap: 16px;
  margin-top: 12px;
}

.upload-card {
  flex: 1;
  background: #fff;
  border: 2px solid #e2e8f0;
  border-radius: 16px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.upload-card:hover {
  border-color: #9333ea;
  box-shadow: 0 10px 20px rgba(147, 51, 234, 0.08);
  transform: translateY(-2px);
}

.upload-card.active {
  border-color: #9333ea;
  background: #faf5ff;
}

.card-icon {
  width: 44px; height: 44px;
  background: #faf5ff;
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  font-size: 20px; margin-bottom: 12px;
  color: #9333ea;
}

.card-title { font-size: 14px; font-weight: 800; color: #1e293b; margin-bottom: 4px; }
.card-subtitle { font-size: 11px; color: #64748b; line-height: 1.4; }

.upload-divider {
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 8px; color: #cbd5e1; font-size: 10px; font-weight: 900;
}
.divider-line { width: 1px; flex: 1; background: #e2e8f0; }

/* ══ Roadmap & Elements ══ */
.rm-step { display: flex; gap: 18px; position: relative; margin-bottom: 20px; }
.rm-node {
  width: 40px; height: 40px; border-radius: 50%; border: 2px solid #e2e8f0;
  display: flex; align-items: center; justify-content: center; background: #fff;
}
.main-card { background:#fff; border-radius:26px; padding:34px 30px; box-shadow:0 8px 48px rgba(15,52,120,0.10); border:1px solid #e8edf5; }
.sec-title { font-size:15px; font-weight:800; color:#1e293b; margin:24px 0 12px; display:flex; align-items:center; gap:10px; }
.sec-title::before { content:''; width:4px; height:18px; background:linear-gradient(180deg,#9333ea,#7c3aed); border-radius:2px; }

.btn-primary {
  background: linear-gradient(135deg,#9333ea,#7c3aed); color:#fff; border:none;
  border-radius:12px; padding:12px 28px; font-size:14px; font-weight:800; cursor:pointer;
}

.spinner { width:18px; height:18px; border:2.5px solid rgba(255,255,255,0.3); border-top-color:#fff; border-radius:50%; animation:spin .7s linear infinite; }

@media (max-width: 768px) {
  .upload-selection-container { flex-direction: column; }
  .upload-divider { flex-direction: row; width: 100%; height: 20px; }
  .divider-line { height: 1px; width: 100%; }
}
`;

/* ─────────────────────────────────────────
    UTILITIES
───────────────────────────────────────── */
async function compressImage(file) {
  return new Promise((resolve) => {
    if (!file.type.startsWith("image/")) { resolve({ file, compressed: false }); return; }
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = 1200; canvas.height = (img.height * 1200) / img.width;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        canvas.toBlob((blob) => {
          const compressed = new File([blob], file.name, { type: "image/jpeg" });
          resolve({ file: compressed, compressed: true, originalKB: Math.round(file.size / 1024), newKB: Math.round(compressed.size / 1024) });
        }, "image/jpeg", 0.7);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

/* ─────────────────────────────────────────
    COMPONENTS
───────────────────────────────────────── */

const UpBlock = ({ type, label, upProg, upNames, onFile, onDigiLocker, onDelFile }) => {
  const [method, setMethod] = useState(null); // 'manual' | 'digi'
  const isDone = upProg[type] === 100;

  return (
    <div style={{ marginBottom: "24px" }}>
      <div style={{ fontSize: "13px", fontWeight: "700", color: "#374151", marginBottom: "8px", display: "flex", alignItems: "center", gap: "6px" }}>
        <span>📎</span> {label}
      </div>

      <div className="upload-selection-container">
        {/* Manual Option */}
        <div 
          className={`upload-card ${method === 'manual' ? 'active' : ''}`}
          onClick={() => { setMethod('manual'); document.getElementById(`file-${type}`).click(); }}
        >
          <div className="card-icon">📁</div>
          <div className="card-title">Manual Upload</div>
          <div className="card-subtitle">PDF, JPG, PNG up to 5MB</div>
          <input 
            type="file" id={`file-${type}`} hidden 
            onChange={(e) => { setMethod('manual'); onFile(type)(e); }} 
          />
        </div>

        <div className="upload-divider">
          <div className="divider-line" />
          <span>OR</span>
          <div className="divider-line" />
        </div>

        {/* DigiLocker Option */}
        <div 
          className={`upload-card ${method === 'digi' ? 'active' : ''}`}
          onClick={() => { setMethod('digi'); onDigiLocker(type, label); }}
        >
          <div className="card-icon" style={{ color: '#4f46e5', background: '#eef2ff' }}>🔐</div>
          <div className="card-title">DigiLocker</div>
          <div className="card-subtitle">Securely fetch from Govt. account</div>
        </div>
      </div>

      {/* Progress / Success State */}
      <AnimatePresence>
        {(upProg[type] > 0 || upNames[type]) && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            style={{ marginTop: '12px', padding: '12px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
              <span style={{ fontSize: '11px', fontWeight: '700', color: '#64748b' }}>
                {isDone ? "✅ Ready to Attach" : "⏳ Processing..."}
              </span>
              <button 
                onClick={() => { setMethod(null); onDelFile(type); }}
                style={{ background: 'none', border: 'none', color: '#ef4444', fontSize: '10px', cursor: 'pointer', fontWeight: '700' }}
              >
                Remove
              </button>
            </div>
            <div style={{ height: '6px', background: '#e2e8f0', borderRadius: '10px', overflow: 'hidden' }}>
              <motion.div 
                initial={{ width: 0 }} animate={{ width: `${upProg[type]}%` }}
                style={{ height: '100%', background: isDone ? '#22c55e' : '#9333ea' }}
              />
            </div>
            {upNames[type] && (
              <div style={{ fontSize: '11px', color: '#1e293b', marginTop: '6px', fontWeight: '600' }}>
                📄 {upNames[type]}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <div style={{ fontSize: '10px', color: '#94a3b8', marginTop: '8px', fontStyle: 'italic' }}>
        * Choose one method to upload your documents
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────
    MAIN APPLICATION
───────────────────────────────────────── */

export default function Apply() {
  const [activeStep, setActiveStep] = useState(0);
  const [form, setForm] = useState({ fullName: "", email: "", phone: "", requirement: "", termsAccepted: false });
  const [upProg, setUpProg] = useState({ cmm: 0, degree: 0 });
  const [upNames, setUpNames] = useState({ cmm: null, degree: null });

  useEffect(() => {
    if (!document.getElementById("apply-css")) {
      const s = document.createElement("style");
      s.id = "apply-css";
      s.textContent = GLOBAL_CSS;
      document.head.appendChild(s);
    }
  }, []);

  const onFile = (type) => async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUpNames(p => ({ ...p, [type]: file.name }));
    setUpProg(p => ({ ...p, [type]: 10 }));
    
    // Simulate compression and upload
    const result = await compressImage(file);
    let v = 10;
    const t = setInterval(() => {
      v += 20;
      if (v >= 100) { v = 100; clearInterval(t); }
      setUpProg(p => ({ ...p, [type]: v }));
    }, 150);
  };

  const handleDigiFetch = (type, label) => {
    setUpProg(p => ({ ...p, [type]: 30 }));
    // Simulate Fetching
    setTimeout(() => {
      setUpNames(p => ({ ...p, [type]: `[DigiLocker] ${label}.pdf` }));
      setUpProg(p => ({ ...p, [type]: 100 }));
    }, 1500);
  };

  const delFile = (type) => {
    setUpProg(p => ({ ...p, [type]: 0 }));
    setUpNames(p => ({ ...p, [type]: null }));
  };

  return (
    <div className="app-shell">
      <div className="image-panel">
        <div className="image-panel-inner">
          <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#0f172a' }}>Application Guide</h2>
          <p style={{ fontSize: '12px', color: '#9333ea', fontWeight: '700', marginBottom: '30px' }}>EST 2026 Hyderabad</p>
          {[
            { step: 1, label: "Personal Details", icon: "👤" },
            { step: 2, label: "Document Upload", icon: "📄" },
            { step: 3, label: "Admin Review", icon: "🔍" },
            { step: 4, label: "Payment", icon: "💳" }
          ].map((s, i) => (
            <div key={i} className="rm-step" style={{ opacity: activeStep >= i ? 1 : 0.4 }}>
              <div className="rm-node" style={{ borderColor: activeStep === i ? '#9333ea' : '#e2e8f0' }}>{s.icon}</div>
              <div>
                <div style={{ fontSize: '12px', fontWeight: '800' }}>{s.label}</div>
                <div style={{ fontSize: '10px', color: '#64748b' }}>Step {s.step} of 4</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="portal-panel">
        <div className="portal-wrap">
          <div className="main-card">
            <div style={{ display: 'flex', gap: '16px', borderBottom: '2px solid #f1f5f9', paddingBottom: '20px', marginBottom: '24px' }}>
              <div style={{ width: '50px', height: '50px', background: '#faf5ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justify_content: 'center', fontSize: '24px' }}>📤</div>
              <div>
                <h1 style={{ fontSize: '22px', fontWeight: '900' }}>Document Submission</h1>
                <p style={{ fontSize: '13px', color: '#64748b' }}>Upload or fetch your certificates to begin verification</p>
              </div>
            </div>

            <div className="sec-title">Academic Documents</div>
            
            <UpBlock 
              type="cmm" 
              label="Consolidated Marks Memo (CMM)" 
              upProg={upProg} 
              upNames={upNames} 
              onFile={onFile} 
              onDigiLocker={handleDigiFetch}
              onDelFile={delFile}
            />

            <UpBlock 
              type="degree" 
              label="Degree Certificate / Provisional" 
              upProg={upProg} 
              upNames={upNames} 
              onFile={onFile} 
              onDigiLocker={handleDigiFetch}
              onDelFile={delFile}
            />

            <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'flex-end' }}>
              <button className="btn-primary" onClick={() => alert("Moving to verification...")}>
                Proceed to Review &nbsp;→
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}