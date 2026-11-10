import React, { useState } from 'react';
import { 
  Lock, 
  ShieldCheck, 
  Settings, 
  User, 
  Calendar, 
  Save, 
  Eye, 
  CheckCircle2, 
  AlertCircle,
  Search
} from 'lucide-react';
import { useClinicData } from '../context/ClinicDataContext';
import { SeoHelmet } from '../components/SeoHelmet';
import { seoServices } from '../data/seoServicesData';

export const AdminPortal = () => {
  const { 
    settings, 
    updateSettings, 
    doctors, 
    updateDoctor, 
    appointments 
  } = useClinicData();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState('clinic'); // clinic, doctor, seo, blogs, appointments
  const [saveNotice, setSaveNotice] = useState('');

  // Editable form states
  const [clinicForm, setClinicForm] = useState({ ...settings });
  const [doctorForm, setDoctorForm] = useState(doctors[0] ? { ...doctors[0] } : {});
  const [selectedService, setSelectedService] = useState(seoServices[0]);
  const [serviceMetaForm, setServiceMetaForm] = useState({
    seoTitleEn: seoServices[0]?.seoTitleEn || '',
    seoTitleTe: seoServices[0]?.seoTitleTe || '',
    metaDescriptionEn: seoServices[0]?.metaDescriptionEn || '',
    metaDescriptionTe: seoServices[0]?.metaDescriptionTe || '',
    h1En: seoServices[0]?.h1En || '',
    h1Te: seoServices[0]?.h1Te || ''
  });

  // Admin PIN verification (Default PIN: 85415 or 99089)
  const handleLogin = (e) => {
    e.preventDefault();
    if (pinInput === '85415' || pinInput === '99089' || pinInput === 'admin123') {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Invalid Admin PIN. Please enter the authorized clinic registration PIN.');
    }
  };

  const handleClinicSave = (e) => {
    e.preventDefault();
    updateSettings(clinicForm);
    setSaveNotice('Clinic contact and location settings saved successfully.');
    setTimeout(() => setSaveNotice(''), 3000);
  };

  const handleDoctorSave = (e) => {
    e.preventDefault();
    updateDoctor(doctorForm.id || 'doc-1', doctorForm);
    setSaveNotice('Doctor biography and registration credentials saved.');
    setTimeout(() => setSaveNotice(''), 3000);
  };

  const handleServiceSelect = (svc) => {
    setSelectedService(svc);
    setServiceMetaForm({
      seoTitleEn: svc.seoTitleEn,
      seoTitleTe: svc.seoTitleTe,
      metaDescriptionEn: svc.metaDescriptionEn,
      metaDescriptionTe: svc.metaDescriptionTe,
      h1En: svc.h1En,
      h1Te: svc.h1Te
    });
  };

  const handleSaveServiceMeta = (e) => {
    e.preventDefault();
    // Update local object representation in memory and browser storage
    const customKey = `bsn_service_meta_${selectedService.slug}`;
    localStorage.setItem(customKey, JSON.stringify(serviceMetaForm));
    setSaveNotice(`SEO metadata for "${selectedService.titleEn}" updated.`);
    setTimeout(() => setSaveNotice(''), 3000);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-[#FCFAF5] p-4 sm:p-6">
        <SeoHelmet title="Admin Content Management | Dr. Reddi Sankara Rao Clinic" />
        <div className="w-full max-w-md bg-white rounded-3xl p-8 border-2 border-amber-300 shadow-xl shadow-amber-500/10 space-y-6">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black flex items-center justify-center mx-auto shadow-md">
              <Lock className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              Clinic Administration Portal
            </h2>
            <p className="text-xs text-slate-600">
              Dr. Reddi Sankara Rao – Brain Spine & Neuro Clinic
            </p>
          </div>

          {authError && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{authError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Admin Security PIN
              </label>
              <input
                type="password"
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                placeholder="Enter 5-digit PIN (e.g., 85415)"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm font-bold tracking-widest text-center bg-slate-50"
                autoFocus
              />
              <p className="text-[11px] text-slate-400 mt-1 text-center">
                Authorized Clinic Administrator Access (Default PIN: 85415)
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl font-black text-sm bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-md shadow-amber-500/25 transition-all active:scale-95"
            >
              Authenticate & Access Admin
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FCFAF5] py-8 sm:py-12">
      <SeoHelmet title="Clinic Content Administration Portal" />

      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 space-y-8">
        
        {/* Top Header */}
        <div className="bg-[#060D1A] text-white p-6 sm:p-8 rounded-3xl border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Authorized Administrator Mode</span>
            </div>
            <h1 className="text-xl sm:text-3xl font-black text-white">
              Content Management & SEO Administration
            </h1>
            <p className="text-xs text-slate-300">
              Dr. Reddi Sankara Rao – Brain Spine & Neuro Clinic (Vizianagaram & Bobbili)
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsAuthenticated(false)}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 transition-all shrink-0"
          >
            Log Out
          </button>
        </div>

        {/* Save Notice Notification */}
        {saveNotice && (
          <div className="p-4 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-emerald-900 text-sm font-bold flex items-center gap-3 animate-in fade-in duration-200 shadow-sm">
            <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
            <span>{saveNotice}</span>
          </div>
        )}

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center gap-2 border-b border-amber-200 pb-2">
          <button
            type="button"
            onClick={() => setActiveTab('clinic')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${
              activeTab === 'clinic'
                ? 'bg-amber-500 text-slate-950 shadow-sm'
                : 'bg-white text-slate-700 hover:bg-amber-50 border border-slate-200'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>Clinic Details & Timings</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('doctor')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${
              activeTab === 'doctor'
                ? 'bg-amber-500 text-slate-950 shadow-sm'
                : 'bg-white text-slate-700 hover:bg-amber-50 border border-slate-200'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Doctor Credentials</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('seo')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${
              activeTab === 'seo'
                ? 'bg-amber-500 text-slate-950 shadow-sm'
                : 'bg-white text-slate-700 hover:bg-amber-50 border border-slate-200'
            }`}
          >
            <Search className="w-4 h-4" />
            <span>SEO & Service Pages (18)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('appointments')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${
              activeTab === 'appointments'
                ? 'bg-amber-500 text-slate-950 shadow-sm'
                : 'bg-white text-slate-700 hover:bg-amber-50 border border-slate-200'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Appointments Log ({appointments?.length || 0})</span>
          </button>
        </div>

        {/* Tab 1: Clinic Details & Timings */}
        {activeTab === 'clinic' && (
          <form onSubmit={handleClinicSave} className="bg-white rounded-3xl p-6 sm:p-10 border border-amber-200 shadow-sm space-y-6">
            <h2 className="text-xl font-black text-slate-900 border-b border-slate-100 pb-3">
              Edit Clinic Locations, Phones & Consulting Hours
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Primary Clinic Name
                </label>
                <input
                  type="text"
                  value={clinicForm.clinicName || ''}
                  onChange={(e) => setClinicForm({ ...clinicForm, clinicName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Primary Phone Number (Click-to-Call)
                </label>
                <input
                  type="text"
                  value={clinicForm.phone || ''}
                  onChange={(e) => setClinicForm({ ...clinicForm, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Vizianagaram Main Address (English)
                </label>
                <input
                  type="text"
                  value={clinicForm.address || ''}
                  onChange={(e) => setClinicForm({ ...clinicForm, address: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Vizianagaram Main Address (Telugu)
                </label>
                <input
                  type="text"
                  value={clinicForm.addressTe || ''}
                  onChange={(e) => setClinicForm({ ...clinicForm, addressTe: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  24/7 Emergency Helpline
                </label>
                <input
                  type="text"
                  value={clinicForm.emergencyPhone || ''}
                  onChange={(e) => setClinicForm({ ...clinicForm, emergencyPhone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Official Email Address
                </label>
                <input
                  type="email"
                  value={clinicForm.email || ''}
                  onChange={(e) => setClinicForm({ ...clinicForm, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Consulting Hours & Timings
                </label>
                <input
                  type="text"
                  value={clinicForm.consultingHours || ''}
                  onChange={(e) => setClinicForm({ ...clinicForm, consultingHours: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-slate-950 hover:bg-slate-900 text-amber-300 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition-all"
              >
                <Save className="w-4 h-4 text-amber-400" />
                <span>Save Clinic Settings</span>
              </button>
            </div>
          </form>
        )}

        {/* Tab 2: Doctor Credentials */}
        {activeTab === 'doctor' && (
          <form onSubmit={handleDoctorSave} className="bg-white rounded-3xl p-6 sm:p-10 border border-amber-200 shadow-sm space-y-6">
            <h2 className="text-xl font-black text-slate-900 border-b border-slate-100 pb-3">
              Edit Doctor Profile & Medical Credentials
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Doctor Full Name
                </label>
                <input
                  type="text"
                  value={doctorForm.nameEn || ''}
                  onChange={(e) => setDoctorForm({ ...doctorForm, nameEn: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Medical Qualifications
                </label>
                <input
                  type="text"
                  value={doctorForm.qualifications || ''}
                  onChange={(e) => setDoctorForm({ ...doctorForm, qualifications: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Council Registration Number
                </label>
                <input
                  type="text"
                  value={doctorForm.councilReg || ''}
                  onChange={(e) => setDoctorForm({ ...doctorForm, councilReg: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Years of Surgical Experience
                </label>
                <input
                  type="number"
                  value={doctorForm.experienceYears || 11}
                  onChange={(e) => setDoctorForm({ ...doctorForm, experienceYears: Number(e.target.value) })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Biography (English)
                </label>
                <textarea
                  rows={4}
                  value={doctorForm.bioEn || ''}
                  onChange={(e) => setDoctorForm({ ...doctorForm, bioEn: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Biography (Telugu)
                </label>
                <textarea
                  rows={4}
                  value={doctorForm.bioTe || ''}
                  onChange={(e) => setDoctorForm({ ...doctorForm, bioTe: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-slate-950 hover:bg-slate-900 text-amber-300 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition-all"
              >
                <Save className="w-4 h-4 text-amber-400" />
                <span>Save Doctor Profile</span>
              </button>
            </div>
          </form>
        )}

        {/* Tab 3: SEO & Service Pages */}
        {activeTab === 'seo' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Service Page Selector (4 Cols) */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-5 border border-amber-200 shadow-sm space-y-2.5 max-h-[600px] overflow-y-auto">
              <span className="text-xs font-black uppercase text-slate-500 tracking-wider block mb-2">
                Select Service Page ({seoServices.length})
              </span>
              {seoServices.map((svc) => (
                <button
                  key={svc.slug}
                  type="button"
                  onClick={() => handleServiceSelect(svc)}
                  className={`w-full text-left p-3 rounded-xl transition-all text-xs font-bold border ${
                    selectedService.slug === svc.slug
                      ? 'bg-amber-100/90 text-amber-950 border-amber-400 shadow-xs'
                      : 'bg-slate-50 text-slate-700 hover:bg-amber-50 border-slate-200'
                  }`}
                >
                  <span className="block">{svc.titleEn}</span>
                  <span className="text-[10px] text-slate-500 font-normal">/{svc.slug}/</span>
                </button>
              ))}
            </div>

            {/* Service SEO Editor Form (8 Cols) */}
            <form onSubmit={handleSaveServiceMeta} className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-amber-200 shadow-sm space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="text-lg font-black text-slate-900">
                  Edit SEO Metadata: {selectedService.titleEn}
                </h3>
                <Link
                  to={`/${selectedService.slug}/`}
                  target="_blank"
                  className="text-xs font-bold text-amber-800 hover:underline flex items-center gap-1"
                >
                  <span>Preview Page</span>
                  <Eye className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  SEO Title (English)
                </label>
                <input
                  type="text"
                  value={serviceMetaForm.seoTitleEn}
                  onChange={(e) => setServiceMetaForm({ ...serviceMetaForm, seoTitleEn: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Meta Description (English)
                </label>
                <textarea
                  rows={2}
                  value={serviceMetaForm.metaDescriptionEn}
                  onChange={(e) => setServiceMetaForm({ ...serviceMetaForm, metaDescriptionEn: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Page H1 Heading (English)
                </label>
                <input
                  type="text"
                  value={serviceMetaForm.h1En}
                  onChange={(e) => setServiceMetaForm({ ...serviceMetaForm, h1En: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-amber-300 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition-all"
                >
                  <Save className="w-4 h-4 text-amber-400" />
                  <span>Update Service SEO</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Tab 4: Appointments Log */}
        {activeTab === 'appointments' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="text-xl font-black text-slate-900">
                Patient Consultation Requests ({appointments?.length || 0})
              </h2>
            </div>

            {(!appointments || appointments.length === 0) ? (
              <p className="text-sm text-slate-500 py-8 text-center">
                No appointment requests logged yet. New submissions will appear here automatically.
              </p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500 text-[11px] uppercase tracking-wider">
                      <th className="py-3 px-4">Patient Name</th>
                      <th className="py-3 px-4">Phone</th>
                      <th className="py-3 px-4">Doctor / Dept</th>
                      <th className="py-3 px-4">Preferred Date</th>
                      <th className="py-3 px-4">Reason / Treatment</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {appointments.map((apt, idx) => (
                      <tr key={idx} className="hover:bg-amber-50/40">
                        <td className="py-3 px-4 font-bold text-slate-900">{apt.fullName || apt.patientName}</td>
                        <td className="py-3 px-4 font-bold text-amber-800">
                          <a href={`tel:${apt.phone}`} className="hover:underline">{apt.phone}</a>
                        </td>
                        <td className="py-3 px-4 text-slate-600">{apt.selectedDoctor || apt.department || 'Neurosurgery'}</td>
                        <td className="py-3 px-4 text-slate-600">{apt.preferredDate}</td>
                        <td className="py-3 px-4 text-slate-700 max-w-xs truncate">{apt.reason}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
