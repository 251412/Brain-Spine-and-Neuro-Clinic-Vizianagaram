/**
 * Validated Schema.org Structured Data generators for Dr. Reddi Sankara Rao - Brain Spine & Neuro Clinic.
 * Strictly adheres to Google Search Central guidelines for Physician, MedicalClinic, MedicalProcedure,
 * FAQPage, and BreadcrumbList.
 */

export const SITE_URL = 'https://www.drreddisankararao.com';

// 1. WebSite Schema
export const getWebSiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  'name': 'Dr. Reddi Sankara Rao – Brain Spine & Neuro Clinic',
  'url': SITE_URL,
  'inLanguage': ['en-IN', 'te-IN'],
  'description': 'Consult Dr. Reddi Sankara Rao, Neurosurgeon and Brain & Spine Surgeon in Vizianagaram. Expert consultation for brain, spine and neurological conditions.',
  'publisher': {
    '@id': `${SITE_URL}/#clinic`
  }
});

// 2. Physician Schema (Doctor Profile)
export const getPhysicianSchema = (_doctor = {}) => ({
  '@context': 'https://schema.org',
  '@type': 'Physician',
  '@id': `${SITE_URL}/#doctor-dr-reddi-sankara-rao`,
  'name': 'Dr. Reddi Sankara Rao',
  'alternateName': 'డా. రెడ్డి శంకర రావు',
  'honorificPrefix': 'Dr.',
  'jobTitle': 'Senior Consultant Neurosurgeon & Spine Care Specialist',
  'medicalSpecialty': [
    'Neurosurgery',
    'Spine Surgery',
    'Neurological Surgery',
    'Endoscopic Spine Surgery'
  ],
  'description': 'Dr. Reddi Sankara Rao is a Senior Consultant Neurosurgeon in Vizianagaram, specializing in complex brain surgery, endoscopic spine discectomy, slip disc treatment, sciatica relief, and acute neuro-trauma care.',
  'image': `${SITE_URL}/images/dr-reddi-sankara-rao.jpg`,
  'url': `${SITE_URL}/dr-reddi-sankara-rao/`,
  'telephone': '+919908981669',
  'email': 'drsankararao99@gmail.com',
  'alumniOf': {
    '@type': 'EducationalOrganization',
    'name': 'Narayana Hrudayalaya, Bengaluru',
    'sameAs': 'https://www.narayanahealth.org/'
  },
  'hasCredential': [
    {
      '@type': 'EducationalOccupationalCredential',
      'credentialCategory': 'degree',
      'name': 'MBBS, MS, MCh (Neurosurgery) - Narayana Hrudayalaya, Bengaluru'
    },
    {
      '@type': 'EducationalOccupationalCredential',
      'credentialCategory': 'medicalRegistration',
      'recognizedBy': {
        '@type': 'MedicalOrganization',
        'name': 'Andhra Pradesh Medical Council'
      },
      'identifier': 'APMC / 85415'
    }
  ],
  'worksFor': {
    '@id': `${SITE_URL}/#clinic`
  },
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Gumchi Junction, Sankaramatam Road (Kota Junction)',
    'addressLocality': 'Vizianagaram',
    'addressRegion': 'Andhra Pradesh',
    'postalCode': '535002',
    'addressCountry': 'IN'
  },
  'sameAs': [
    'https://www.facebook.com/drsankararao99',
    'https://www.instagram.com/drreddisankararao99/?hl=en',
    'https://www.youtube.com/@reddisankararao99',
    'https://www.google.com/search?q=dr+reddi+sankara+rao+vizianagaram'
  ]
});

// 3. MedicalClinic Schema (Main Clinic + Bobbili Branch)
export const getClinicSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  '@id': `${SITE_URL}/#clinic`,
  'name': 'Brain Spine & Neuro Clinic',
  'alternateName': 'బ్రెయిన్ స్పైన్ & న్యూరో క్లినిక్',
  'image': `${SITE_URL}/images/clinic-emblem-isolated.png`,
  'logo': `${SITE_URL}/images/clinic-logo-transparent.png`,
  'url': SITE_URL,
  'telephone': '+919908981669',
  'emergencyTelephone': '+919908981669',
  'priceRange': '₹₹',
  'medicalSpecialty': [
    'Neurosurgery',
    'Neurology',
    'Spine Surgery'
  ],
  'availableService': [
    {
      '@type': 'MedicalTherapy',
      'name': 'Sciatica Treatment'
    },
    {
      '@type': 'MedicalProcedure',
      'name': 'Endoscopic Lumbar Discectomy'
    },
    {
      '@type': 'MedicalTherapy',
      'name': 'Slip Disc Treatment'
    },
    {
      '@type': 'MedicalProcedure',
      'name': 'Brain Tumor Surgery'
    },
    {
      '@type': 'MedicalTherapy',
      'name': 'Stroke Management'
    },
    {
      '@type': 'MedicalTherapy',
      'name': 'Epilepsy Evaluation and Treatment'
    }
  ],
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Gumchi Junction, Sankaramatam Road (Kota Junction)',
    'addressLocality': 'Vizianagaram',
    'addressRegion': 'Andhra Pradesh',
    'postalCode': '535002',
    'addressCountry': 'IN'
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 18.1124,
    'longitude': 83.4070
  },
  'openingHoursSpecification': [
    {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      'opens': '09:30',
      'closes': '18:30'
    },
    {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      'opens': '00:00',
      'closes': '23:59',
      'description': '24x7 Emergency Trauma & Neurosurgery Assistance'
    }
  ],
  'department': [
    {
      '@type': 'MedicalClinic',
      'name': 'Brain Spine & Neuro Clinic - Bobbili Branch',
      'telephone': '+919951142275',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Opp RTC Complex Ingate, beside Choudhary Bar & Restaurant',
        'addressLocality': 'Bobbili',
        'addressRegion': 'Andhra Pradesh',
        'postalCode': '535558',
        'addressCountry': 'IN'
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Tuesday', 'Friday'],
          'opens': '16:00',
          'closes': '21:00'
        }
      ]
    }
  ]
});

// 4. FAQ Schema Generator
export const getFAQSchema = (faqs = []) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': faqs.map((f) => ({
    '@type': 'Question',
    'name': f.question || f.q,
    'acceptedAnswer': {
      '@type': 'Answer',
      'text': f.answer || f.a
    }
  }))
});

// 5. MedicalProcedure Schema Generator
export const getMedicalProcedureSchema = ({
  name,
  description,
  procedureType = 'SurgicalProcedure',
  bodyLocation = 'Spine',
  url
}) => ({
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  'name': name,
  'description': description,
  'procedureType': procedureType,
  'bodyLocation': bodyLocation,
  'url': url || SITE_URL,
  'performer': {
    '@id': `${SITE_URL}/#doctor-dr-reddi-sankara-rao`
  },
  'location': {
    '@id': `${SITE_URL}/#clinic`
  }
});

// 6. MedicalCondition Schema Generator
export const getMedicalConditionSchema = ({
  name,
  description,
  possibleTreatment = [],
  url
}) => ({
  '@context': 'https://schema.org',
  '@type': 'MedicalCondition',
  'name': name,
  'description': description,
  'url': url || SITE_URL,
  'possibleTreatment': possibleTreatment.map((t) => ({
    '@type': 'MedicalTherapy',
    'name': typeof t === 'string' ? t : t.name
  }))
});

// 7. Article / BlogPosting Schema Generator
export const getArticleSchema = ({
  title,
  description,
  url,
  datePublished,
  image = `${SITE_URL}/images/clinic-emblem-isolated.png`,
  author = 'Dr. Reddi Sankara Rao'
}) => ({
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  'headline': title,
  'description': description,
  'url': url,
  'image': image,
  'datePublished': datePublished || '2026-09-15',
  'author': {
    '@type': 'Person',
    'name': author,
    'jobTitle': 'Senior Consultant Neurosurgeon'
  },
  'publisher': {
    '@id': `${SITE_URL}/#clinic`
  }
});

