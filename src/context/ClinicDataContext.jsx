import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  initialClinicSettings,
  initialClinicLocations,
  initialDoctors,
  initialSpecialities,
  initialFacilities,
  initialGallery,
  initialBlogArticles,
  initialAppointments
} from '../data/defaultData';

const ClinicDataContext = createContext(null);

const STORAGE_KEYS = {
  SETTINGS: 'bsn_clinic_settings_v6',
  DOCTORS: 'bsn_clinic_doctors_v1',
  SPECIALITIES: 'bsn_clinic_specialities_v3',
  GALLERY: 'bsn_clinic_gallery_v2',
  BLOG: 'bsn_clinic_blog_v2',
  APPOINTMENTS: 'bsn_clinic_appointments_v1'
};

export const ClinicDataProvider = ({ children }) => {
  const [settings, setSettingsState] = useState(() => {
    // Purge outdated settings from previous sessions to prevent stale numbers
    ['bsn_clinic_settings_v1', 'bsn_clinic_settings_v2', 'bsn_clinic_settings_v3', 'bsn_clinic_settings_v4', 'bsn_clinic_settings_v5'].forEach((k) => {
      try { localStorage.removeItem(k); } catch (_) {}
    });

    const saved = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    if (!saved) return initialClinicSettings;
    try {
      const parsed = JSON.parse(saved);
      return { 
        ...initialClinicSettings, 
        ...parsed, 
        address: initialClinicSettings.address,
        phone: "9908981669",
        phoneFormatted: "+91 99089 81669",
        email: initialClinicSettings.email,
        emergencyPhone: initialClinicSettings.emergencyPhone,
        consultingHours: initialClinicSettings.consultingHours,
        whatsappNumber: "+91 99089 81669",
        branchName: initialClinicSettings.branchName
      };
    } catch {
      return initialClinicSettings;
    }
  });

  const [doctors, setDoctorsState] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.DOCTORS);
    if (!saved) return initialDoctors;
    try {
      const parsed = JSON.parse(saved);
      // Ensure only Dr. Reddi Sankara Rao is loaded
      const sankara = parsed.find(d => d.id === 'doc-1') || initialDoctors[0];
      return [{ ...initialDoctors[0], ...sankara }];
    } catch {
      return initialDoctors;
    }
  });

  const [specialities, setSpecialitiesState] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.SPECIALITIES);
    if (!saved) return initialSpecialities;
    try {
      const parsed = JSON.parse(saved);
      return initialSpecialities.map(initSpec => {
        const found = parsed.find(p => p.id === initSpec.id);
        return found ? { 
          ...initSpec, 
          ...found, 
          status: 'verified', 
          image: found.image || initSpec.image,
          treatmentsList: initSpec.treatmentsList,
          treatmentsEn: initSpec.treatmentsEn,
          treatmentsTe: initSpec.treatmentsTe
        } : { ...initSpec, status: 'verified' };
      });
    } catch {
      return initialSpecialities;
    }
  });

  const [gallery, setGalleryState] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.GALLERY);
    if (!saved) return initialGallery.map(g => ({ ...g, isDemo: false }));
    try {
      const parsed = JSON.parse(saved);
      return parsed.map(g => ({ ...g, isDemo: false }));
    } catch {
      return initialGallery.map(g => ({ ...g, isDemo: false }));
    }
  });

  const [blogArticles, setBlogArticlesState] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.BLOG);
    if (!saved) return initialBlogArticles.map(a => ({ ...a, author: 'Dr. Reddi Sankara Rao', status: 'approved' }));
    try {
      const parsed = JSON.parse(saved);
      return parsed.map(a => ({ ...a, author: 'Dr. Reddi Sankara Rao', status: 'approved' }));
    } catch {
      return initialBlogArticles.map(a => ({ ...a, author: 'Dr. Reddi Sankara Rao', status: 'approved' }));
    }
  });

  const [appointments, setAppointmentsState] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.APPOINTMENTS);
    return saved ? JSON.parse(saved) : initialAppointments;
  });

  const [facilities] = useState(initialFacilities);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.DOCTORS, JSON.stringify(doctors));
  }, [doctors]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SPECIALITIES, JSON.stringify(specialities));
  }, [specialities]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(gallery));
  }, [gallery]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.BLOG, JSON.stringify(blogArticles));
  }, [blogArticles]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.APPOINTMENTS, JSON.stringify(appointments));
  }, [appointments]);

  // Appointment actions
  const addAppointment = (appointmentData) => {
    const newAppointment = {
      ...appointmentData,
      id: `APP-DEMO-${Date.now().toString().slice(-4)}`,
      createdAt: new Date().toISOString(),
      status: 'pending'
    };
    setAppointmentsState((prev) => [newAppointment, ...prev]);
    return newAppointment;
  };

  const updateAppointmentStatus = (id, newStatus) => {
    setAppointmentsState((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status: newStatus } : app))
    );
  };

  const deleteAppointment = (id) => {
    setAppointmentsState((prev) => prev.filter((app) => app.id !== id));
  };

  // Settings update
  const updateSettings = (newSettings) => {
    setSettingsState((prev) => ({ ...prev, ...newSettings }));
  };

  // Doctors
  const updateDoctor = (id, updatedFields) => {
    setDoctorsState((prev) =>
      prev.map((doc) => (doc.id === id ? { ...doc, ...updatedFields } : doc))
    );
  };

  const addDoctor = (newDoc) => {
    setDoctorsState((prev) => [...prev, { ...newDoc, id: `doc-${Date.now()}` }]);
  };

  // Specialities
  const updateSpeciality = (id, updatedFields) => {
    setSpecialitiesState((prev) =>
      prev.map((spec) => (spec.id === id ? { ...spec, ...updatedFields } : spec))
    );
  };

  // Gallery
  const addGalleryItem = (item) => {
    setGalleryState((prev) => [{ ...item, id: `gal-${Date.now()}` }, ...prev]);
  };

  const deleteGalleryItem = (id) => {
    setGalleryState((prev) => prev.filter((item) => item.id !== id));
  };

  // Blog
  const addBlogArticle = (article) => {
    setBlogArticlesState((prev) => [
      {
        ...article,
        id: `article-${Date.now()}`,
        date: new Date().toISOString().split('T')[0]
      },
      ...prev
    ]);
  };

  const updateBlogArticle = (id, updatedFields) => {
    setBlogArticlesState((prev) =>
      prev.map((art) => (art.id === id ? { ...art, ...updatedFields } : art))
    );
  };

  const deleteBlogArticle = (id) => {
    setBlogArticlesState((prev) => prev.filter((art) => art.id !== id));
  };

  // Reset to default
  const resetToDefaultData = () => {
    localStorage.removeItem(STORAGE_KEYS.SETTINGS);
    localStorage.removeItem(STORAGE_KEYS.DOCTORS);
    localStorage.removeItem(STORAGE_KEYS.SPECIALITIES);
    localStorage.removeItem(STORAGE_KEYS.GALLERY);
    localStorage.removeItem(STORAGE_KEYS.BLOG);
    localStorage.removeItem(STORAGE_KEYS.APPOINTMENTS);

    setSettingsState(initialClinicSettings);
    setDoctorsState(initialDoctors);
    setSpecialitiesState(initialSpecialities);
    setGalleryState(initialGallery);
    setBlogArticlesState(initialBlogArticles);
    setAppointmentsState(initialAppointments);
  };

  return (
    <ClinicDataContext.Provider
      value={{
        settings,
        clinicLocations: initialClinicLocations,
        updateSettings,
        doctors,
        updateDoctor,
        addDoctor,
        specialities,
        updateSpeciality,
        facilities,
        gallery,
        addGalleryItem,
        deleteGalleryItem,
        blogArticles,
        addBlogArticle,
        updateBlogArticle,
        deleteBlogArticle,
        appointments,
        addAppointment,
        updateAppointmentStatus,
        deleteAppointment,
        resetToDefaultData
      }}
    >
      {children}
    </ClinicDataContext.Provider>
  );
};

export const useClinicData = () => {
  const context = useContext(ClinicDataContext);
  if (!context) {
    throw new Error('useClinicData must be used within a ClinicDataProvider');
  }
  return context;
};
