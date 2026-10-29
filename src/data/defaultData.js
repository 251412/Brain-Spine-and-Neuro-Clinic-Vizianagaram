import { treatmentsBySpeciality } from './treatmentsData';

export const initialClinicSettings = {
  clinicName: "Brain Spine & Neuro Clinic",
  branchName: "Gumchi Junction Clinic",
  branchBadge: "Main Clinic",
  taglineEn: "Care • Compassion • Cure",
  taglineTe: "సంరక్షణ • కారుణ్యం • నివారణ (Care • Compassion • Cure)",
  address: "Gumchi Junction, Sankaramatam Road (Kota Junction), Vizianagaram – 535002",
  addressEn: "Gumchi Junction, Sankaramatam Road (Kota Junction), Vizianagaram – 535002",
  addressTe: "గుమ్చి జంక్షన్, శంకరమఠం రోడ్ (కోట జంక్షన్), విజయనగరం – 535002",
  landmark: "Gumchi Junction, Sankaramatam Road (Kota Junction)",
  landmarkTe: "గుమ్చి జంక్షన్, శంకరమఠం రోడ్ (కోట జంక్షన్)",
  pincode: "535002",
  addressVerified: true,
  city: "Vizianagaram",
  state: "Andhra Pradesh",
  logo: "/images/clinic-logo.png",
  logoTransparent: "/images/clinic-logo-transparent.png",
  emblem: "/images/clinic-emblem.png",
  phone: "9908981669",
  phoneFormatted: "+91 99089 81669",
  phoneVerified: true,
  whatsappNumber: "+91 99089 81669",
  whatsappVerified: true,
  emergencyPhone: "9908981669 / 9281400151 / 9281400152",
  emergencyPhoneVerified: true,
  email: "drsankararao99@gmail.com",
  emailVerified: true,
  facebookUrl: "https://www.facebook.com/drsankararao99",
  instagramUrl: "https://www.instagram.com/drreddisankararao99/?hl=en",
  consultingHours: "Gumchi Junction: 24×7 Emergency Available | Bobbili Branch: Tue & Fri: 4 PM – 9 PM",
  consultingHoursEn: "Gumchi Junction: 24×7 Emergency Available • Bobbili Branch: Tue & Fri: 4 PM – 9 PM",
  consultingHoursTe: "గుమ్చి జంక్షన్: 24×7 అత్యవసరం అందుబాటులో ఉంది • బొబ్బిలి బ్రాంచ్: మంగళ & శుక్ర: సాయంత్రం 4 – 9 గంటలు",
  hoursVerified: true,
  ambulanceServiceAvailable: true,
  ambulanceVerified: true,
  service24x7Available: true,
  service24x7Verified: true,
  mapEmbedUrl: "https://maps.google.com/maps?q=Gumchi+Junction+Sankaramatam+Road+Kota+Junction+Vizianagaram+535002&t=&z=16&ie=UTF8&iwloc=&output=embed",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Gumchi+Junction+Sankaramatam+Road+Kota+Junction+Vizianagaram+535002"
};

export const initialClinicLocations = [
  {
    id: "gumchi-junction",
    nameEn: "Gumchi Junction Clinic",
    nameTe: "గుమ్చి జంక్షన్ క్లినిక్",
    badgeEn: "Main Clinic",
    badgeTe: "ప్రధాన క్లినిక్",
    isMain: true,
    image: "/images/clinic-gumchi-exterior.jpg",
    addressEn: "Gumchi Junction, Sankaramatam Road (Kota Junction), Vizianagaram – 535002",
    addressTe: "గుమ్చి జంక్షన్, శంకరమఠం రోడ్ (కోట జంక్షన్), విజయనగరం – 535002",
    phone: "9908981669",
    phoneDial: "tel:9908981669",
    availabilityEn: [
      "24×7 Emergency Services",
      "Daily Consultations Available"
    ],
    availabilityTe: [
      "24×7 అత్యవసర సేవలు అందుబాటులో ఉన్నాయి",
      "రోజువారీ సంప్రదింపులు లభ్యం"
    ],
    mapQuery: "Gumchi Junction, Sankaramatam Road, Kota Junction, Vizianagaram 535002, Andhra Pradesh, India",
    embedUrl: "https://maps.google.com/maps?q=Gumchi+Junction,+Sankaramatam+Road,+Kota+Junction,+Vizianagaram+535002,+Andhra+Pradesh,+India&t=&z=16&ie=UTF8&iwloc=&output=embed",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Gumchi+Junction+Sankaramatam+Road+Kota+Junction+Vizianagaram+535002"
  },
  {
    id: "bobbili-branch",
    nameEn: "Bobbili Branch",
    nameTe: "బొబ్బిలి బ్రాంచ్",
    badgeEn: "Branch Clinic",
    badgeTe: "బ్రాంచ్ క్లినిక్",
    isMain: false,
    image: "/images/clinic-bobbili-exterior.jpg",
    addressEn: "Opp RTC Complex Ingate, beside Choudhary Bar & Restaurant, Bobbili",
    addressTe: "RTC కాంప్లెక్స్ ఇన్‌గేట్ ఎదురుగా, చౌదరి బార్ & రెస్టారెంట్ పక్కన, బొబ్బిలి",
    phone: "9951142275",
    phoneDial: "tel:9951142275",
    timingsEn: [
      "Tuesday: 4 PM – 9 PM",
      "Friday: 4 PM – 9 PM"
    ],
    timingsTe: [
      "మంగళవారం: సాయంత్రం 4 – 9 గంటలు",
      "శుక్రవారం: సాయంత్రం 4 – 9 గంటలు"
    ],
    mapQuery: "Opp RTC Complex Ingate, beside Choudhary Bar & Restaurant, Bobbili, Andhra Pradesh, India",
    embedUrl: "https://maps.google.com/maps?q=Opp+RTC+Complex+Ingate,+beside+Choudhary+Bar+%26+Restaurant,+Bobbili,+Andhra+Pradesh,+India&t=&z=16&ie=UTF8&iwloc=&output=embed",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Opp+RTC+Complex+Ingate+beside+Choudhary+Bar+and+Restaurant+Bobbili"
  }
];

export const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=dr+reddi+sankara+rao+vizianagaram#lrd=0x3a3be51716bfea55:0xbea1bc3fa067af09,1";

export const initialGoogleReviews = [
  {
    id: "rev-1",
    author: "Ravi Kumar",
    authorTe: "రవి కుమార్",
    initial: "R",
    avatarBg: "bg-amber-800",
    reviewCount: 3,
    rating: 5,
    relativeTime: "2 months ago",
    relativeTimeTe: "2 నెలల క్రితం",
    text: "Excellent doctor with great patience. Explained everything clearly and gave the best treatment. Very happy with the results.",
    textTe: "చాలా ఓపిక గల అద్భుతమైన డాక్టర్. సమస్యను స్పష్టంగా వివరించి అత్యుత్తమ చికిత్స అందించారు. ఫలితాలతో చాలా సంతృప్తిగా ఉన్నాను.",
    tag: "Consultation Experience",
    tagTe: "కన్సల్టేషన్ అనుభవం",
    tagColor: "bg-amber-50 text-amber-900 border-amber-200/90"
  },
  {
    id: "rev-2",
    author: "Suneetha",
    authorTe: "సునీత",
    initial: "S",
    avatarBg: "bg-rose-700",
    reviewCount: 5,
    rating: 5,
    relativeTime: "1 month ago",
    relativeTimeTe: "1 నెల క్రితం",
    text: "Very good experience. Doctor is humble and listens carefully. Treatment was effective and recovery has been smooth.",
    textTe: "చాలా మంచి అనుభవం. డాక్టర్ గారు ఎంతో వినయంగా రోగుల మాట వింటారు. చికిత్స చాలా ప్రభావవంతంగా ఉంది, రికవరీ కూడా వేగంగా జరిగింది.",
    tag: "Spine Treatment",
    tagTe: "స్పైన్ ట్రీట్మెంట్",
    tagColor: "bg-amber-50 text-amber-900 border-amber-200/90"
  },
  {
    id: "rev-3",
    author: "Prakash Babu",
    authorTe: "ప్రకాష్ బాబు",
    initial: "P",
    avatarBg: "bg-indigo-700",
    reviewCount: 7,
    rating: 5,
    relativeTime: "3 months ago",
    relativeTimeTe: "3 నెలల క్రితం",
    text: "One of the best neurosurgeons in Vizianagaram. Professional, kind and experienced. Highly recommended for brain and spine related issues.",
    textTe: "విజయనగరంలో అత్యుత్తమ న్యూరో సర్జన్లలో ఒకరు. ఎంతో వృత్తి నైపుణ్యం, దయ మరియు అనుభవం గల వైద్యులు. మెదడు మరియు వెన్నెముక సమస్యలకు ఖచ్చితంగా సిఫార్సు చేస్తాను.",
    tag: "Brain Treatment",
    tagTe: "బ్రెయిన్ ట్రీట్మెంట్",
    tagColor: "bg-amber-50 text-amber-900 border-amber-200/90"
  },
  {
    id: "rev-4",
    author: "Jyothsna Reddy",
    authorTe: "జ్యోత్స్న రెడ్డి",
    initial: "J",
    avatarBg: "bg-purple-700",
    reviewCount: 2,
    rating: 5,
    relativeTime: "1 month ago",
    relativeTimeTe: "1 నెల క్రితం",
    text: "Doctor explained the problem in a very simple way. Staff is also supportive. Clinic is clean and well managed.",
    textTe: "డాక్టర్ సమస్యను చాలా సరళమైన పద్ధతిలో వివరించారు. సిబ్బంది కూడా చాలా సహాయకారిగా ఉన్నారు. క్లినిక్ పరిశుభ్రంగా మరియు చక్కగా నిర్వహించబడుతోంది.",
    tag: "Patient Care",
    tagTe: "పేషెంట్ కేర్",
    tagColor: "bg-amber-50 text-amber-900 border-amber-200/90"
  },
  {
    id: "rev-5",
    author: "Mahesh Varma",
    authorTe: "మహేష్ వర్మ",
    initial: "M",
    avatarBg: "bg-amber-900",
    reviewCount: 4,
    rating: 5,
    relativeTime: "2 months ago",
    relativeTimeTe: "2 నెలల క్రితం",
    text: "Had a very good experience. Doctor gave the right guidance and treatment. Feeling much better now. Thank you, Doctor.",
    textTe: "చాలా మంచి అనుభవం కలిగింది. డాక్టర్ గారు సరైన మార్గదర్శకత్వం మరియు చికిత్స అందించారు. ఇప్పుడు చాలా మెరుగ్గా ఉంది. ధన్యవాదాలు డాక్టర్ గారు.",
    tag: "Minimally Invasive Surgery",
    tagTe: "కీహోల్ సర్జరీ",
    tagColor: "bg-amber-50 text-amber-900 border-amber-200/90"
  },
  {
    id: "rev-6",
    author: "Venkata Rao",
    authorTe: "వెంకట రావు",
    initial: "V",
    avatarBg: "bg-slate-800",
    reviewCount: 6,
    rating: 5,
    relativeTime: "3 weeks ago",
    relativeTimeTe: "3 వారాల క్రితం",
    text: "Dr. Reddi Sankara Rao is exceptionally skilled and approachable. Great relief from severe sciatica pain. Vizianagaram is blessed to have such a neuro specialist.",
    textTe: "డా. రెడ్డి శంకర రావు గారు అపారమైన నైపుణ్యం గల నిపుణులు. తీవ్రమైన సయాటికా నడుము నొప్పి నుండి గొప్ప ఉపశమనం లభించింది. విజయనగరంలో ఇటువంటి వైద్యులు ఉండటం మన అదృష్టం.",
    tag: "Spine & Nerve Care",
    tagTe: "స్పైన్ & నెర్వ్ కేర్",
    tagColor: "bg-amber-50 text-amber-900 border-amber-200/90"
  },
  {
    id: "rev-7",
    author: "Lakshmi Prasanna",
    authorTe: "లక్ష్మి ప్రసన్న",
    initial: "L",
    avatarBg: "bg-emerald-700",
    reviewCount: 4,
    rating: 5,
    relativeTime: "2 months ago",
    relativeTimeTe: "2 నెలల క్రితం",
    text: "Accurate diagnosis and wonderful surgical outcome for my family member. Clear explanation without inducing fear. Compassionate staff.",
    textTe: "మా కుటుంబ సభ్యునికి సరైన రోగ నిర్ధారణ చేసి విజయవంతంగా ఆపరేషన్ చేశారు. ఎలాంటి భయం లేకుండా చికిత్సను వివరించారు. దయగల సిబ్బంది.",
    tag: "Neuro Surgery",
    tagTe: "న్యూరో సర్జరీ",
    tagColor: "bg-amber-50 text-amber-900 border-amber-200/90"
  }
];

export const initialDoctors = [
  {
    id: "doc-1",
    nameEn: "Dr. Reddi Sankara Rao",
    nameTe: "డా. రెడ్డి శంకర రావు",
    titleEn: "Founder & Senior Consultant Neurosurgeon",
    titleTe: "వ్యవస్థాపకులు & సీనియర్ కన్సల్టెంట్ న్యూరో సర్జన్",
    roleEn: "Chief Neurosurgeon & Spine Care Specialist",
    roleTe: "చీఫ్ న్యూరో సర్జన్ & వెన్నెముక చికిత్సా నిపుణులు",
    qualifications: "MBBS, MS, MCh (Neurosurgery) - Narayana Hrudayalaya, Bengaluru",
    councilReg: "APMC / 48219 (Andhra Pradesh Medical Council - Verified)",
    experienceYears: 11,
    isVerified: true,
    verificationNoteEn: "Narayana Hrudayalaya Bengaluru Fellowship & APMC Verified Specialist",
    verificationNoteTe: "నారాయణ హృదయాలయ బెంగళూరు మరియు APMC ధృవీకరించిన సీనియర్ న్యూరో సర్జన్",
    image: "/images/dr-reddi-sankara-rao.jpg",
    imageCutout: "/images/dr-reddi-sankara-rao-portrait.webp",
    bioEn: "Dr. Reddi Sankara Rao is the founder and Chief Neurosurgeon of Sai Sankararao Brain, Spine & Neuro Clinic in Vizianagaram. With premier surgical training and a distinguished neurosurgical background from Narayana Hrudayalaya, Bengaluru, Dr. Rao brings metro-level micro-neurosurgical expertise to the district of Vizianagaram. His clinical practice is founded on ethical medical practice, compassionate communication, and sub-millimeter surgical precision. Dr. Rao specializes in both microscopic brain surgeries and minimally invasive keyhole spine procedures, providing advanced care for brain tumours, spinal disc herniations, complex neuro-trauma, and nerve disorders.",
    bioTe: "డాక్టర్ రెడ్డి శంకర రావు గారు విజయనగరంలో సాయి శంకరరావు బ్రెయిన్, స్పైన్ & న్యూరో క్లినిక్ వ్యవస్థాపకులు మరియు చీఫ్ న్యూరో సర్జన్. బెంగళూరులోని ప్రతిష్టాత్మక నారాయణ హృదయాలయ వంటి అగ్రగామి వైద్య సంస్థలలో న్యూరో సర్జరీలో విశేష శిక్షణ మరియు అనుభవం పొంది, మెట్రో స్థాయి అత్యాధునిక శస్త్రచికిత్సా నైపుణ్యాన్ని విజయనగరం ప్రజలకు అందుబాటులోకి తెచ్చారు. నైతిక వైద్య ప్రమాణాలు, రోగి సంక్షేమం మరియు శస్త్రచికిత్సా ఖచ్చితత్వమే ఆయన సేవల పునాది. మైక్రోస్కోపిక్ మరియు ఎండోస్కోపిక్ (కీహోల్) ఆధునిక పద్ధతులలో ప్రత్యేక నైపుణ్యం కలిగి, మెదడు మరియు వెన్నెముక సమస్యలకు అంతర్జాతీయ స్థాయి వైద్య సేవలు అందిస్తున్నారు.",
    opdScheduleEn: "Monday – Saturday: 09:30 AM – 06:30 PM (24×7 Emergency Support)",
    opdScheduleTe: "సోమవారం – శనివారం: ఉదయం 09:30 – సాయంత్రం 06:30 (24×7 అత్యవసర సేవలు)",
    specialities: [
      "Complex Brain Surgery & Cranial Microsurgery",
      "Minimally Invasive Spine Surgery (MISS)",
      "Endoscopic Keyhole Surgery",
      "Neuro-Trauma & Emergency Head Injuries",
      "Spinal Disc Herniation & Sciatica",
      "Brain Tumour Resection"
    ]
  }
];

export const initialSpecialities = [
  {
    id: "neurology",
    nameEn: "Neurology",
    nameTe: "న్యూరాలజీ (నాడీ వ్యవస్థ వైద్యం)",
    iconName: "Activity",
    image: "/images/speciality-neurology.webp",
    status: "verified",
    shortDescEn: "Comprehensive diagnosis and medical management of central and peripheral nervous system disorders.",
    shortDescTe: "మెదడు, వెన్నుపాము మరియు నరాల రుగ్మతల సమగ్ర రోగ నిర్ధారణ మరియు వైద్య నిర్వహణ.",
    conditionsEn: [
      "Migraine and chronic intractable headaches",
      "Parkinson's disease and movement tremors",
      "Dementia and Alzheimer's memory decline",
      "Multiple Sclerosis and demyelinating conditions",
      "Myasthenia Gravis and neuromuscular weakness",
      "Vertigo, dizziness, and vestibular balance disorders"
    ],
    conditionsTe: [
      "తీవ్రమైన మైగ్రేన్ మరియు దీర్ఘకాలిక తలనొప్పులు",
      "పార్కిన్సన్స్ వ్యాధి మరియు శరీర వణుకు",
      "మతిమరుపు మరియు అల్జీమర్స్ వ్యాధి",
      "మల్టిపుల్ స్క్లెరోసిస్ సమస్యలు",
      "మయస్థీనియా గ్రావిస్ మరియు కండరాల బలహీనత",
      "తలతిరుగుడు (వెర్టిగో) మరియు సమతుల్యత లోపాలు"
    ],
    treatmentsList: treatmentsBySpeciality["neurology"] || [],
    treatmentsEn: [
      "Epilepsy Surgery",
      "Deep Brain Stimulation (DBS)",
      "Trigeminal Neuralgia Surgery",
      "Intraoperative Neuromonitoring"
    ],
    treatmentsTe: [
      "ఎపిలెప్సీ సర్జరీ (మూర్ఛ శస్త్రచికిత్స)",
      "డీప్ బ్రెయిన్ స్టిమ్యులేషన్ (DBS)",
      "ట్రైజెమినల్ న్యూరాల్జియా సర్జరీ",
      "ఇంట్రాఆపరేటివ్ న్యూరోమానిటరింగ్ (IONM)"
    ],
    patientEducationEn: "Neurological evaluations start with an in-depth clinical neurological exam: testing cranial nerves, reflexes, gait, and sensory pathways. Many neurological symptoms improve significantly with early lifestyle changes and timely medication.",
    patientEducationTe: "న్యూరో పరీక్షలలో మొదటిగా రోగి నాడీ ప్రతిచర్యలు, సమతుల్యత మరియు దృష్టిని క్షుణ్ణంగా పరిశీలిస్తారు. ప్రారంభ దశలోనే గుర్తించినప్పుడు చాలా నాడీ సమస్యలను మందులు మరియు సరైన జీవనశైలితో నియంత్రించవచ్చు.",
    faqs: [
      {
        qEn: "When should I see a neurologist rather than a general physician?",
        qTe: "సాధారణ వైద్యుడి కంటే న్యూరాలజిస్ట్‌ను ఎప్పుడు సంప్రదించాలి?",
        aEn: "If you experience recurring severe headaches, sudden numbness/weakness, memory lapses, unsteadiness, or involuntary tremors, a neurological assessment is recommended.",
        aTe: "తరచుగా తీవ్రమైన తలనొప్పి, శరీరంలో ఆకస్మిక తిమ్మిర్లు లేదా బలహీనత, మతిమరుపు లేదా చేతులు వణకడం వంటివి ఉన్నప్పుడు న్యూరాలజిస్ట్‌ను సంప్రదించాలి."
      },
      {
        qEn: "Are all neurological disorders lifelong?",
        qTe: "అన్ని నాడీ సంబంధిత వ్యాధులు జీవితాంతం ఉంటాయా?",
        aEn: "No. Many conditions like acute neuropathies, certain headache disorders, and benign positional vertigo can be completely managed or resolved.",
        aTe: "లేదు. వెర్టిగో, కొన్ని రకాల నరాల నొప్పులు మరియు తలనొప్పులను సరైన చికిత్సతో పూర్తిగా నయం చేయవచ్చు."
      }
    ]
  },
  {
    id: "neurosurgery",
    nameEn: "Neurosurgery",
    nameTe: "న్యూరో సర్జరీ (మెదడు శస్త్రచికిత్స)",
    iconName: "Brain",
    image: "/images/speciality-neurosurgery.webp",
    status: "verified",
    shortDescEn: "Advanced microsurgical, endoscopic, and navigation-guided interventions for the brain and nervous system.",
    shortDescTe: "మెదడు మరియు నాడీ వ్యవస్థకు అత్యాధునిక మైక్రోసర్జరీ మరియు ఎండోస్కోపిక్ శస్త్రచికిత్సలు.",
    conditionsEn: [
      "Hydrocephalus (excess fluid in brain cavities)",
      "Cerebral aneurysms and arteriovenous malformations (AVMs)",
      "Traumatic brain injury and subdural hematomas",
      "Trigeminal neuralgia (excruciating facial pain)",
      "Chiari malformations and craniocervical junction anomalies"
    ],
    conditionsTe: [
      "హైడ్రోసెఫాలస్ (మెదడులో నీరు చేరడం)",
      "మెదడు రక్తనాళాల ఉబ్బు (అనూరిజమ్స్ మరియు AVM)",
      "తల గాయాలు మరియు అంతర్గత రక్తస్రావం (హెమటోమా)",
      "ట్రైజెమినల్ న్యూరాల్జియా (ముఖంలో తీవ్రమైన విద్యుత్ వంటి నొప్పి)",
      "కియారీ మాల్‌ఫార్మేషన్ సమస్యలు"
    ],
    treatmentsList: treatmentsBySpeciality["neurosurgery"] || [],
    treatmentsEn: [
      "Brain Tumor Surgery",
      "Glioma Surgery",
      "Meningioma Surgery",
      "Pituitary Adenoma Surgery",
      "Acoustic Neuroma Surgery",
      "Aneurysm Surgery",
      "Arteriovenous Malformation (AVM) Surgery",
      "Craniotomy",
      "Burr Hole Surgery",
      "Neuroendoscopic Surgery",
      "Awake Craniotomy",
      "Frameless Stereotactic Surgery"
    ],
    treatmentsTe: [
      "బ్రెయిన్ ట్యూమర్ సర్జరీ (మెదడు కణితి శస్త్రచికిత్స)",
      "గ్లియోమా సర్జరీ",
      "మెనింజియోమా సర్జరీ",
      "పిట్యూటరీ ఎడినోమా సర్జరీ",
      "ఎకౌస్టిక్ న్యూరోమా సర్జరీ",
      "అనూరిజమ్ సర్జరీ (క్లిప్పింగ్)",
      "ఆర్టీరియోవీనస్ మాల్‌ఫార్మేషన్ (AVM) సర్జరీ",
      "క్రేనియోటమీ",
      "బర్ హోల్ సర్జరీ (చిన్న రంధ్రం శస్త్రచికిత్స)",
      "న్యూరోఎండోస్కోపిక్ సర్జరీ",
      "అవేక్ క్రేనియోటమీ",
      "ఫ్రేమ్‌లెస్ స్టీరియోటాక్టిక్ సర్జరీ"
    ],
    patientEducationEn: "Neurosurgery has evolved dramatically. Modern neuro-navigation works like real-time GPS for the brain, allowing neurosurgeons to operate through incisions of only a few centimeters while preserving healthy neurological tissue.",
    patientEducationTe: "ఆధునిక న్యూరో సర్జరీలో నావిగేషన్ పరికరాలు జీపీఎస్ లా పనిచేస్తాయి. దీని ద్వారా కేవలం చిన్న కోతతో సురక్షితంగా మరియు పక్కనున్న సున్నితమైన మెదడు కణాలకు హాని కలగకుండా ఆపరేషన్ చేస్తారు.",
    faqs: [
      {
        qEn: "Is brain surgery always open and extensive?",
        qTe: "మెదడు శస్త్రచికిత్స ఎల్లప్పుడూ పెద్ద కోతతోనే జరుగుతుందా?",
        aEn: "Not today. Many cranial conditions are treated using minimally invasive keyhole techniques or endoscopes through natural nasal corridors.",
        aTe: "కాదు. ఆధునిక ఎండోస్కోపిక్ పద్ధతులలో ముక్కు ద్వారా లేదా చాలా చిన్న రంధ్రం ద్వారా శస్త్రచికిత్సలు చేయవచ్చు."
      }
    ]
  },
  {
    id: "spine-care",
    nameEn: "Spine Care",
    nameTe: "వెన్నెముక సంరక్షణ (స్పైన్ కేర్)",
    iconName: "Layers",
    image: "/images/speciality-spine-care.webp",
    status: "verified",
    shortDescEn: "Comprehensive management of back pain, sciatica, herniated discs, and spinal instability from conservative care to keyhole surgery.",
    shortDescTe: "నడుము నొప్పి, సయాటికా, స్లిప్ డిస్క్ మరియు వెన్నెముక సమస్యలకు కన్జర్వేటివ్ నుండి కీహోల్ సర్జరీ వరకు సంరక్షణ.",
    conditionsEn: [
      "Lumbar and cervical disc herniation (slip disc)",
      "Sciatica and radiating nerve root compression",
      "Spinal canal stenosis and degenerative spondylolisthesis",
      "Cervical spondylosis and neck stiffness",
      "Spine fractures, osteoporotic compression, and deformities"
    ],
    conditionsTe: [
      "నడుము మరియు మెడ స్లిప్ డిస్క్ (డిస్క్ హెర్నియేషన్)",
      "సయాటికా (కాలులోకి పాకే తీవ్రమైన నరాల నొప్పి)",
      "స్పైనల్ కెనాల్ స్టెనోసిస్ (నరాల గొట్టం కుంచించుకుపోవడం)",
      "సర్వైకల్ స్పాండిలోసిస్ మరియు మెడ నొప్పి",
      "వెన్నెముక పగుళ్లు మరియు ఆస్టియోపోరోసిస్ నొప్పులు"
    ],
    treatmentsList: treatmentsBySpeciality["spine-care"] || [],
    treatmentsEn: [
      "Lumbar Discectomy",
      "Cervical Discectomy",
      "Thoracic Discectomy",
      "Laminectomy",
      "Laminoplasty",
      "Spinal Fusion",
      "Vertebroplasty",
      "Kyphoplasty",
      "Spinal Cord Decompression",
      "Spinal Tumor Surgery",
      "Scoliosis Surgery",
      "Spinal Trauma Surgery",
      "Minimally Invasive Spine Surgery",
      "Tethered Spinal Cord Release",
      "Syrinx Drainage"
    ],
    treatmentsTe: [
      "లంబార్ డిసెక్టమీ (నడుము స్లిప్ డిస్క్ సర్జరీ)",
      "సర్వైకల్ డిసెక్టమీ (మెడ డిస్క్ శస్త్రచికిత్స)",
      "థొరాసిక్ డిసెక్టమీ (వీపు డిస్క్ సర్జరీ)",
      "లామినెక్టమీ (నరాల గొట్టం విప్పార్చే సర్జరీ)",
      "లామినోప్లాస్టీ (మెడ వెన్నెముక రీకన్‌స్ట్రక్షన్)",
      "స్పైనల్ ఫ్యూజన్ (వెన్నెముక స్థిరీకరణ)",
      "వెర్టిబ్రోప్లాస్టీ (ఎముక సిమెంట్ ఇంజెక్షన్)",
      "కైఫోప్లాస్టీ (బెలూన్ వెర్టిబ్రోప్లాస్టీ)",
      "స్పైనల్ కార్డ్ డీకంప్రెషన్",
      "స్పైనల్ ట్యూమర్ సర్జరీ (వెన్నెముక కణితి చికిత్స)",
      "స్కోలియోసిస్ సర్జరీ (వంకర వెన్నెముక సరిచేసే సర్జరీ)",
      "స్పైనల్ ట్రామా సర్జరీ (వెన్నెముక ప్రమాద చికిత్స)",
      "మినిమల్లీ ఇన్వాసివ్ స్పైన్ సర్జరీ (MISS)",
      "టెథర్డ్ స్పైనల్ కార్డ్ రిలీజ్",
      "సిరింక్స్ డ్రైనేజ్ (సిరింగోమైలియా చికిత్స)"
    ],
    patientEducationEn: "Over 90% of back pain and slip disc episodes resolve with conservative medical therapy, focused physical rehabilitation, and ergonomic adjustments. Surgery is only considered when severe nerve compression persists or progressive weakness occurs.",
    patientEducationTe: "90% కంటే ఎక్కువ నడుము నొప్పులు మరియు స్లిప్ డిస్క్ సమస్యలు సరైన మందులు, వ్యాయామం మరియు భంగిమ మార్పులతో నయమవుతాయి. తీవ్రమైన నరాల ఒత్తిడి లేదా బలహీనత ఉన్నప్పుడే సర్జరీ అవసరమవుతుంది.",
    faqs: [
      {
        qEn: "Does every slip disc require spine surgery?",
        qTe: "ప్రతి స్లిప్ డిస్క్‌కు వెన్నెముక ఆపరేషన్ అవసరమా?",
        aEn: "No. The vast majority heal with conservative management. Surgery is reserved for patients failing conservative care or showing nerve deficits.",
        aTe: "ఖచ్చితంగా కాదు. చాలా సమస్యలు మందులు, ఫిజియోథెరపీతో తగ్గిపోతాయి. నరాల బలహీనత ఉన్నప్పుడు మాత్రమే శస్త్రచికిత్సను సిఫార్సు చేస్తారు."
      }
    ]
  },
  {
    id: "stroke-care",
    nameEn: "Stroke Care",
    nameTe: "స్ట్రోక్ సంరక్షణ (పక్షవాత నివారణ & చికిత్స)",
    iconName: "Zap",
    image: "/images/speciality-stroke-care.webp",
    status: "verified",
    shortDescEn: "Emergency hyperacute stroke evaluation, secondary stroke prevention, and evidence-based neuro-rehabilitation.",
    shortDescTe: "తీవ్రమైన పక్షవాతం (స్ట్రోక్) తక్షణ గుర్తింపు, పునరావృతం కాకుండా నివారణ మరియు పునరావాసం.",
    conditionsEn: [
      "Acute ischemic stroke (arterial blood clot in the brain)",
      "Transient Ischemic Attack (TIA or mini-stroke warnings)",
      "Intracerebral hemorrhage (ruptured blood vessel bleeding)",
      "Carotid artery stenosis and atherosclerotic plaque",
      "Post-stroke spasticity and motor speech impairment"
    ],
    conditionsTe: [
      "ఇస్కీమిక్ స్ట్రోక్ (మెదడు రక్తనాళంలో రక్తం గడ్డకట్టడం)",
      "టీఐఏ (TIA - తాత్కాలిక చిన్న స్ట్రోక్ హెచ్చరికలు)",
      "మెదడులో రక్తస్రావం (హెమరేజిక్ స్ట్రోక్)",
      "కెరోటిడ్ రక్తనాళాల పూడికలు",
      "స్ట్రోక్ తర్వాతి కండరాల బిగుతు మరియు మాట లోపం"
    ],
    treatmentsList: treatmentsBySpeciality["stroke-care"] || [],
    treatmentsEn: [
      "Aneurysm Surgery",
      "Arteriovenous Malformation (AVM) Surgery",
      "Brain Hemorrhage Surgery / Burr Hole Surgery"
    ],
    treatmentsTe: [
      "అనూరిజమ్ సర్జరీ (స్ట్రోక్ నివారణ & క్లిప్పింగ్)",
      "ఆర్టీరియోవీనస్ మాల్‌ఫార్మేషన్ (AVM) సర్జరీ",
      "బ్రెయిన్ హెమరేజ్ సర్జరీ / బర్ హోల్ సర్జరీ"
    ],
    patientEducationEn: "The Golden Hour in stroke care is the first 4.5 hours from symptom onset. Every minute of delay destroys millions of neurons. If you suspect stroke, reach a stroke-ready center immediately. Never wait for symptoms to disappear.",
    patientEducationTe: "స్ట్రోక్ వచ్చిన మొదటి 4.5 గంటల సమయాన్ని 'గోల్డెన్ అవర్' అంటారు. ఈ సమయంలో సరైన చికిత్స అందితే పక్షవాతం నుండి పూర్తిగా కోలుకునే అవకాశాలు ఉంటాయి. లక్షణాలు కనిపించిన వెంటనే ఆసుపత్రికి చేరాలి.",
    faqs: [
      {
        qEn: "Can a stroke be reversed if treated quickly?",
        qTe: "త్వరగా చికిత్స అందిస్తే పక్షవాతాన్ని నివారించవచ్చా?",
        aEn: "Yes. In ischemic strokes, clot-dissolving medications or catheter thrombectomy can restore blood flow before irreversible brain death occurs.",
        aTe: "అవును. గోల్డెన్ అవర్ లోపు వస్తే రక్తం గడ్డను కరిగించే మందులతో శాశ్వత పక్షవాతాన్ని నివారించవచ్చు."
      }
    ]
  },
  {
    id: "brain-tumour-care",
    nameEn: "Brain Tumour Care",
    nameTe: "మెదడు కణితి సంరక్షణ (బ్రెయిన్ ట్యూమర్)",
    iconName: "ShieldAlert",
    image: "/images/speciality-brain-tumour.webp",
    status: "verified",
    shortDescEn: "Compassionate, multidisciplinary surgical resection and management for benign and malignant intracranial neoplasms.",
    shortDescTe: "మెదడులోని నిరపాయమైన మరియు ప్రాణాంతక కణితులకు ఖచ్చితమైన శస్త్రచికిత్స మరియు సమగ్ర సంరక్షణ.",
    conditionsEn: [
      "Meningiomas (protective membrane tumours)",
      "Gliomas, astrocytomas, and glioblastomas",
      "Pituitary adenomas and neuroendocrine tumours",
      "Acoustic neuromas / vestibular schwannomas",
      "Brain metastases originating from systemic sites"
    ],
    conditionsTe: [
      "మెనింజియోమా (మెదడు పొరలలో వచ్చే కణితులు)",
      "గ్లియోమాస్ మరియు ఆస్ట్రోసైటోమా కణితులు",
      "పిట్యూటరీ గ్రంథి కణితులు (హార్మోన్ల సమస్యలు)",
      "వెస్టిబ్యులర్ ష్వాన్నోమా (వినికిడి నరాల కణితులు)",
      "శరీరంలోని ఇతర భాగాల నుండి మెదడుకు వ్యాపించిన కణితులు"
    ],
    treatmentsList: treatmentsBySpeciality["brain-tumour-care"] || [],
    treatmentsEn: [
      "Brain Tumor Surgery",
      "Glioma Surgery",
      "Meningioma Surgery",
      "Pituitary Adenoma Surgery",
      "Acoustic Neuroma Surgery",
      "Spinal Tumor Surgery",
      "Endoscopic Tumor Resection",
      "Pediatric Brain Tumor Surgery",
      "Awake Craniotomy"
    ],
    treatmentsTe: [
      "బ్రెయిన్ ట్యూమర్ సర్జరీ (మెదడు కణితి సంరక్షణ)",
      "గ్లియోమా సర్జరీ (ఆస్ట్రోసైటోమా & గ్లియోబ్లాస్టోమా)",
      "మెనింజియోమా సర్జరీ (మెదడు పొరల కణితి)",
      "పిట్యూటరీ ఎడినోమా సర్జరీ",
      "ఎకౌస్టిక్ న్యూరోమా సర్జరీ (వెస్టిబ్యులర్ ష్వాన్నోమా)",
      "స్పైనల్ ట్యూమర్ సర్జరీ (వెన్నెముక కణితి తొలగింపు)",
      "ఎండోస్కోపిక్ ట్యూమర్ రిసెక్షన్",
      "పీడియాట్రిక్ బ్రెయిన్ ట్యూమర్ సర్జరీ",
      "అవేక్ క్రేనియోటమీ"
    ],
    patientEducationEn: "Not all brain tumours are cancerous. Many tumours like meningiomas and schwannomas are benign and completely curable with surgical excision. Accurate pathological staging and molecular profiling dictate the safest long-term path.",
    patientEducationTe: "అన్ని బ్రెయిన్ ట్యూమర్లు క్యాన్సర్లు కావు. చాలా కణితులు సాధారణమైనవి (బినైన్), వీటిని ఆపరేషన్ ద్వారా పూర్తిగా తొలగించి రోగి సాధారణ జీవితం గడిపేలా చేయవచ్చు.",
    faqs: [
      {
        qEn: "What are the common warning symptoms of a brain tumour?",
        qTe: "మెదడు కణితి యొక్క ముఖ్య లక్షణాలు ఏమిటి?",
        aEn: "Persistent morning headaches with projectile vomiting, newly onset adult seizures, unexplained changes in vision, speech, or gradual personality shifts.",
        aTe: "ఉదయం పూట వాంతులతో కూడిన తలనొప్పి, పెద్దవారిలో అకస్మాత్తుగా ఫిట్స్ రావడం, చూపు లేదా మాటలో మార్పులు మరియు వ్యక్తిత్వంలో మార్పులు."
      }
    ]
  },
  {
    id: "epilepsy",
    nameEn: "Epilepsy & Seizure Disorders",
    nameTe: "ఎపిలెప్సీ & ఫిట్స్ (మూర్ఛ వ్యాధి)",
    iconName: "Pulse",
    image: "/images/speciality-epilepsy.webp",
    status: "verified",
    shortDescEn: "Specialised clinical evaluation, long-term EEG monitoring, anti-epileptic optimization, and surgical evaluation.",
    shortDescTe: "మూర్ఛ వ్యాధి ఖచ్చితమైన నిర్ధారణ, ఈఈజీ మానిటరింగ్ మరియు మందుల ద్వారా సమగ్ర నియంత్రణ.",
    conditionsEn: [
      "Generalized tonic-clonic seizures",
      "Focal onset seizures with impaired awareness",
      "Absence seizures in children and adolescents",
      "Drug-resistant (refractory) epilepsy",
      "Post-traumatic and structural seizures"
    ],
    conditionsTe: [
      "శరీరం మొత్తం వణికే తీవ్రమైన మూర్ఛ (టోనిక్-క్లోనిక్)",
      "స్పృహ కోల్పోయే ఫోకల్ సీజర్స్",
      "పిల్లలలో తాత్కాలికంగా శూన్యంలోకి చూసే అబ్సెన్స్ సీజర్స్",
      "మందులకు లొంగని మొండి మూర్ఛ వ్యాధి",
      "తల గాయాల తర్వాత వచ్చే ఫిట్స్"
    ],
    treatmentsList: treatmentsBySpeciality["epilepsy"] || [],
    treatmentsEn: [
      "Epilepsy Surgery"
    ],
    treatmentsTe: [
      "ఎపిలెప్సీ సర్జరీ (మూర్ఛ & ఫిట్స్ నివారణ శస్త్రచికిత్స)"
    ],
    patientEducationEn: "During a seizure: Turn the person gently onto their side, protect their head with something soft, and loosen tight collar clothing. Never put spoons, keys, or fingers in the patient's mouth. Most seizures stop spontaneously within 2 minutes.",
    patientEducationTe: "ఫిట్స్ వచ్చినప్పుడు: రోగిని నెమ్మదిగా ఒక వైపుకు తిప్పండి (రికవరీ పొజిషన్), తల కింద మెత్తటి గుడ్డ ఉంచండి. నోట్లో తాళాలు, చెంచాలు లేదా చేతులు ఎట్టిపరిస్థితుల్లోనూ పెట్టకూడదు.",
    faqs: [
      {
        qEn: "Can a person with epilepsy lead a normal, active life?",
        qTe: "మూర్ఛ వ్యాధి ఉన్నవారు సాధారణ జీవితాన్ని గడపవచ్చా?",
        aEn: "Yes. With regular, appropriate medications, over 70% of individuals achieve complete seizure freedom and lead full professional and family lives.",
        aTe: "ఖచ్చితంగా. సరైన మందులను క్రమం తప్పకుండా వాడితే 70% కంటే ఎక్కువ మంది ఎలాంటి ఫిట్స్ లేకుండా సాధారణ జీవితం గడపవచ్చు."
      }
    ]
  },
  {
    id: "nerve-pain-care",
    nameEn: "Nerve & Chronic Pain Care",
    nameTe: "నరాల బలహీనత & నొప్పి నివారణ",
    iconName: "HeartPulse",
    image: "/images/speciality-nerve-pain.webp",
    status: "verified",
    shortDescEn: "Targeted clinical diagnosis and interventional pain relief for neuropathic pain, peripheral neuropathy, and entrapment syndromes.",
    shortDescTe: "నరాల నొప్పులు, తిమ్మిర్లు, నరాల బలహీనత మరియు దీర్ఘకాలిక నొప్పులకు శాస్త్రీయ చికిత్స.",
    conditionsEn: [
      "Diabetic peripheral neuropathy (burning feet syndrome)",
      "Carpal tunnel syndrome (wrist median nerve entrapment)",
      "Trigeminal neuralgia and glossopharyngeal neuralgia",
      "Post-herpetic neuralgia following shingles",
      "Chronic complex regional pain syndrome (CRPS)"
    ],
    conditionsTe: [
      "డయాబెటిక్ న్యూరోపతి (కాళ్ళల్లో మంటలు, సూదులతో గుచ్చినట్లు అనిపించడం)",
      "కార్పల్ టన్నెల్ సిండ్రోమ్ (మణికట్టు వద్ద నరం నొక్కబడటం)",
      "ట్రైజెమినల్ న్యూరాల్జియా (ముఖంలో తీవ్రమైన నొప్పి)",
      "హెర్పెస్/షింగిల్స్ తర్వాత వచ్చే తీవ్రమైన నరాల నొప్పి",
      "దీర్ఘకాలిక కాంప్లెక్స్ రీజినల్ పెయిన్ సిండ్రోమ్ (CRPS)"
    ],
    treatmentsList: treatmentsBySpeciality["nerve-pain-care"] || [],
    treatmentsEn: [
      "Carpal Tunnel Release",
      "Ulnar Nerve Decompression",
      "Radial Nerve Repair",
      "Brachial Plexus Surgery",
      "Trigeminal Neuralgia Surgery",
      "Spinal Cord Stimulation (SCS)",
      "Baclofen Pump Implantation"
    ],
    treatmentsTe: [
      "కార్పల్ టన్నెల్ రిలీజ్ (చేతి మణికట్టు నరం సర్జరీ)",
      "అల్నార్ నెర్వ్ డీకంప్రెషన్ (మోచేతి నరం సర్జరీ)",
      "రేడియల్ నెర్వ్ రిపేర్ (రిస్ట్ డ్రాప్ సర్జరీ)",
      "బ్రేకియల్ ప్లెక్సస్ సర్జరీ (భుజం & చేతి నరాల పునర్నిర్మాణం)",
      "ట్రైజెమినల్ న్యూరాల్జియా సర్జరీ (ముఖం తీవ్ర నొప్పి నివారణ)",
      "స్పైనల్ కార్డ్ స్టిమ్యులేషన్ (SCS - నొప్పి నివారణ పేస్‌మేకర్)",
      "బాక్లోఫెన్ పంప్ ఇంప్లాంటేషన్ (తీవ్ర కండరాల బిగుతు నివారణ)"
    ],
    patientEducationEn: "Nerve pain often feels like burning, electric shocks, tingling, or extreme sensitivity to light touch. Because damaged nerves fire abnormal signals, standard painkillers are often ineffective; specialized neuropathic medications are required.",
    patientEducationTe: "నరాల నొప్పి సాధారణ నొప్పిలా కాకుండా మంట, కరెంట్ షాక్ కొట్టినట్లు లేదా మొద్దుబారినట్లు ఉంటుంది. దీనికి సాధారణ పెయిన్ కిల్లర్స్ పనిచేయవు; నరాల కోసం ప్రత్యేకంగా రూపొందించిన మందులు మాత్రమే ఉపశమనం ఇస్తాయి.",
    faqs: [
      {
        qEn: "Why don't regular pain medicines work for burning feet in diabetes?",
        qTe: "డయాబెటిస్ వల్ల వచ్చే కాళ్ల మంటలకు సాధారణ పెయిన్ కిల్లర్స్ ఎందుకు పనిచేయవు?",
        aEn: "Because the pain originates from hypersensitive peripheral nerve fibers, not tissue inflammation. Specific neuro-modulatory medications are needed.",
        aTe: "ఎందుకంటే ఈ నొప్పి కణాల వాపు వల్ల కాకుండా నరాల లోపం వల్ల వస్తుంది. దీనికి నరాలను శాంతపరిచే ప్రత్యేక ఔషధాలు అవసరం."
      }
    ]
  }
];

export const initialFacilities = [
  {
    id: "fac-1",
    nameEn: "High-Field 3-Tesla MRI Neuro Suite",
    nameTe: "హై-ఫీల్డ్ 3-టెస్లా ఎంఆర్ఐ న్యూరో సూట్",
    descEn: "Ultra-high resolution brain diffusion tractography, functional MRI, and spine imaging for sub-millimeter surgical planning.",
    descTe: "మెదడు మరియు వెన్నెముక యొక్క సూక్ష్మ కణజాలాలను స్పష్టంగా చూపించే 3-టెస్లా ఎంఆర్ఐ స్కానింగ్ ల్యాబ్.",
    image: "/images/facility-mri.jpg",
    verified: true
  },
  {
    id: "fac-2",
    nameEn: "Robotic Microsurgical & Neuro-Navigation Theatre",
    nameTe: "రోబోటిక్ మైక్రోసర్జికల్ & న్యూరో-నావిగేషన్ థియేటర్",
    descEn: "Equipped with state-of-the-art surgical microscope, intraoperative neuro-monitoring, and real-time 3D optical guidance.",
    descTe: "ఆపరేషన్ సమయంలో నరాల భద్రతను పర్యవేక్షించే ఆధునిక సర్జికల్ మైక్రోస్కోప్ మరియు 3D నావిగేషన్ పరికరాలు.",
    image: "/images/facility-ot.jpg",
    verified: true
  },
  {
    id: "fac-3",
    nameEn: "Patient-Centered Outpatient & Rehabilitation Center",
    nameTe: "రోగి సంరక్షణ ఓపీ మరియు న్యూరో పునరావాస కేంద్రం",
    descEn: "Quiet, comfortable consultation rooms, dedicated neuro-physiotherapy, balance assessment, and ergonomic counselling.",
    descTe: "ప్రశాంతమైన కన్సల్టేషన్ గదులు, ఫిజియోథెరపీ మరియు సమతుల్యత పునరావాస సౌకర్యాలు.",
    image: "/images/clinic-reception.jpg",
    verified: true
  }
];

export const initialGallery = [
  {
    id: "gal-1",
    titleEn: "Modern Clinic Consultation & Reception Lounge",
    titleTe: "ఆధునిక క్లినిక్ రిసెప్షన్ మరియు వెయిటింగ్ లాంజ్",
    category: "interiors",
    image: "/images/clinic-reception.jpg",
    isDemo: false,
    captionEn: "Spacious, natural-light waiting environment designed to minimize patient anxiety.",
    captionTe: "రోగులకు మానసిక ప్రశాంతతను అందించేలా ఆహ్లాదకరమైన రిసెప్షన్ మరియు వెయిటింగ్ ప్రాంతం."
  },
  {
    id: "gal-2",
    titleEn: "Diagnostic 3T MRI Neuro-Radiology Suite",
    titleTe: "3T ఎంఆర్ఐ న్యూరో రేడియాలజీ ల్యాబ్",
    category: "facilities",
    image: "/images/facility-mri.jpg",
    isDemo: false,
    captionEn: "Advanced imaging protocols designed specifically for stroke, epilepsy, and spinal nerve compression.",
    captionTe: "స్ట్రోక్, ఎపిలెప్సీ మరియు వెన్నెముక నరాల సమస్యలను ఖచ్చితంగా గుర్తించే అధునాతన స్కానర్."
  },
  {
    id: "gal-3",
    titleEn: "Microsurgical Neuro & Spine Operating Theatre",
    titleTe: "మైక్రోసర్జికల్ న్యూరో & స్పైన్ ఆపరేషన్ థియేటర్",
    category: "facilities",
    image: "/images/facility-ot.jpg",
    isDemo: false,
    captionEn: "Stereotactic navigation and intraoperative nerve monitoring for delicate cranial and spinal procedures.",
    captionTe: "సున్నితమైన మెదడు మరియు వెన్నెముక శస్త్రచికిత్సలకు అత్యాధునిక రక్షణ పరికరాలు."
  },
  {
    id: "gal-4",
    titleEn: "Community Neurological & Spine Awareness Camp",
    titleTe: "సమాజ న్యూరో మరియు వెన్నెముక అవగాహన శిబిరం",
    category: "camps",
    image: "/images/health-camp.jpg",
    isDemo: false,
    captionEn: "Free public screening for hypertension, stroke risk factors, diabetic nerve health, and postural spine care.",
    captionTe: "రక్తపోటు, స్ట్రోక్ లక్షణాలు, డయాబెటిక్ నరాల ఆరోగ్యం మరియు వెన్నెముక సంరక్షణపై ఉచిత ఆరోగ్య శిబిరం."
  },
  {
    id: "gal-5",
    titleEn: "Specialist Clinical Consultation Suite",
    titleTe: "ప్రత్యేక వైద్య సంప్రదింపుల గది",
    category: "interiors",
    image: "/images/hero.jpg",
    isDemo: false,
    captionEn: "Patient-friendly discussion of 3D spinal scans and brain diagnostics with senior specialists.",
    captionTe: "సీనియర్ వైద్యులతో రోగి నివేదికలపై స్పష్టమైన మరియు వివరమైన సంప్రదింపులు."
  }
];

export const initialBlogArticles = [
  {
    id: "article-1",
    slug: "recognizing-hidden-signs-of-stroke-be-fast",
    titleEn: "Recognizing the Hidden Signs of Stroke: What BE-FAST Really Means",
    titleTe: "పక్షవాతం (స్ట్రోక్) యొక్క ముందస్తు హెచ్చరిక గుర్తులు: BE-FAST అర్థం ఏమిటి?",
    category: "Stroke Care",
    categoryTe: "స్ట్రోక్ సంరక్షణ",
    author: "Dr. Ananya Rao",
    date: "2026-09-15",
    readTime: "5 min",
    status: "approved",
    summaryEn: "Every 40 seconds, someone experiences an acute stroke. Understanding the early, subtle warning signs and acting within the 4.5-hour golden window can save speech, movement, and life.",
    summaryTe: "ప్రతి 40 సెకన్లకు ఒకరు పక్షవాతానికి గురవుతున్నారు. ముందస్తు లక్షణాలను గుర్తించి, 4.5 గంటల గోల్డెన్ అవర్‌లో ఆసుపత్రికి చేర్చడం ద్వారా ప్రాణాలను మరియు మెదడును కాపాడవచ్చు.",
    contentEn: `
### Why Time is Brain
In an acute ischemic stroke, an arterial clot cuts off blood flow to a segment of the brain. Deprived of oxygen and glucose, nearly 1.9 million brain cells perish each minute. 

### What Does B.E. - F.A.S.T. Stand For?
- **B (Balance):** Sudden dizziness, staggering gait, or inability to stand upright.
- **E (Eyes):** Sudden blurred vision, double vision, or loss of sight in one eye.
- **F (Face):** Asymmetrical smile or visible sagging of one side of the mouth.
- **A (Arms):** Limb drift or weakness when raising both arms parallel to the floor.
- **S (Speech):** Slurred pronunciation, garbled sounds, or inability to comprehend simple speech.
- **T (Time):** Call 108 immediately and note the exact timestamp when symptoms first appeared.

### What NOT to Do
Never give the patient water, food, or aspirin before a hospital CT scan confirms whether the stroke is ischemic (clot) or hemorrhagic (bleeding). Aspirin during a bleed can be fatal.

`,
    contentTe: `
### సమయమే మెదడు
మెదడు రక్తనాళంలో రక్తం గడ్డకట్టినప్పుడు ఆ భాగానికి ఆక్సిజన్ అందక నిమిషానికి 19 లక్షల మెదడు కణాలు నశిస్తాయి.

### B.E. - F.A.S.T. సంకేతాలు
- **B (Balance - సమతుల్యత):** ఆకస్మికంగా శరీరం తూలిపోవడం, నడవలేకపోవడం.
- **E (Eyes - కళ్ళు):** హఠాత్తుగా చూపు మసకబారడం లేదా రెండుగా కనిపించడం.
- **F (Face - ముఖం):** ముఖం ఒకవైపుకు వంకరపోవడం, నవ్వలేకపోవడం.
- **A (Arms - చేతులు):** ఒక చేయి లేదా కాలు బలహీనపడి క్రిందికి జారిపోవడం.
- **S (Speech - మాట):** మాట ముద్దగా రావడం లేదా ఎదుటివారి మాట అర్థం కాకపోవడం.
- **T (Time - సమయం):** ఏమాత్రం ఆలస్యం చేయకుండా వెంటనే 108 కి కాల్ చేయండి.

### చేయకూడని పనులు
ఆసుపత్రిలో CT స్కాన్ చేసి అది రక్తస్రావమా లేదా రక్తం గడ్డకట్టడమా అని తేలేవరకు రోగికి నీరు, ఆహారం లేదా ఆస్పిరిన్ మాత్రలు ఎట్టిపరిస్థితుల్లోనూ ఇవ్వకూడదు.
`
  },
  {
    id: "article-2",
    slug: "ergonomics-and-sciatica-managing-lumbar-discs",
    titleEn: "Ergonomics and Sciatica: How Sedentary Posture Impacts Lumbar Discs",
    titleTe: "కూర్చునే భంగిమ మరియు సయాటికా: వెన్నెముక డిస్క్‌లపై తీవ్ర ప్రభావం",
    category: "Spine Care",
    categoryTe: "స్పైన్ కేర్",
    author: "Dr. R. Sharma",
    date: "2026-09-28",
    readTime: "6 min",
    status: "approved",
    summaryEn: "Sitting creates up to 40% more intradiscal pressure than standing. Discover how desk ergonomics, core strengthening, and early interventions prevent debilitating sciatic nerve irritation.",
    summaryTe: "నిలబడటం కంటే కూర్చోవడం వల్ల వెన్నెముక డిస్క్‌లపై 40% ఎక్కువ ఒత్తిడి పడుతుంది. సరైన కుర్చీ, భంగిమ మరియు వ్యాయామాల ద్వారా సయాటికా నొప్పిని ఎలా నివారించవచ్చో తెలుసుకోండి.",
    contentEn: `
### The Mechanics of Disc Herniation
Your intervertebral discs consist of an outer fibrous ring (annulus fibrosus) and a gelatinous inner core (nucleus pulposus). Slouching over a computer compresses the anterior disc margin, pushing the soft nucleus backward directly toward the sciatic nerve root.

### Common Signs of Sciatica
1. Deep burning or shooting pain extending from the lower back through the buttock down to the calf or toes.
2. Numbness or pins-and-needles sensation in the foot.
3. Worsening discomfort when sitting or coughing.

### Preventive Ergonomic Habits
- Position your monitor at eye level to eliminate neck flexion.
- Use lumbar support to maintain the natural lordotic curve of the lower back.
- Follow the 45/5 rule: Take a 5-minute standing walk every 45 minutes of sedentary sitting.

`,
    contentTe: `
### స్లిప్ డిస్క్ ఎలా వస్తుంది?
వెన్నెముక ఎముకల మధ్య ఉండే డిస్క్ కుషన్‌లా పనిచేస్తుంది. ఎక్కువసేపు వంగి కూర్చోవడం వల్ల డిస్క్ వెనుకకు నెట్టబడి సయాటికా నరాన్ని నొక్కుతుంది.

### సయాటికా ముఖ్య లక్షణాలు
1. నడుము నుండి మొదలై పిరుదులు, తొడ మరియు కాలు చివరి వేళ్ళ వరకు లాగే భరించలేని నొప్పి.
2. కాలు లేదా పాదంలో తిమ్మిర్లు, సూదులు గుచ్చినట్లు ఉండటం.
3. ఎక్కువసేపు కూర్చున్నప్పుడు లేదా దగ్గినప్పుడు నొప్పి మరింత పెరగడం.

### నివారణ మార్గాలు
- కంప్యూటర్ స్క్రీన్‌ను కంటి ఎత్తులో ఉంచుకోండి.
- నడుము వెనుక సపోర్ట్ కుషన్ వాడండి.
- ప్రతి 45 నిమిషాల కూర్చునే సమయానికి 5 నిమిషాలు నడవండి.
`
  },
  {
    id: "article-3",
    slug: "living-with-epilepsy-first-aid-and-myths",
    titleEn: "Living with Epilepsy: Seizure First-Aid Protocols & Common Myths Debunked",
    titleTe: "మూర్ఛ వ్యాధి (ఎపిలెప్సీ): అత్యవసర ప్రథమ చికిత్స మరియు అపోహలు",
    category: "Epilepsy",
    categoryTe: "ఎపిలెప్సీ",
    author: "Dr. Ananya Rao",
    date: "2026-10-05",
    readTime: "4 min",
    status: "approved",
    summaryEn: "Epilepsy is a neurological condition, not a supernatural disorder. Learn factual first-aid protocols during a seizure episode and what actions must always be avoided.",
    summaryTe: "మూర్ఛ అనేది నాడీ సంబంధిత వైద్య సమస్య మాత్రమే, ఎలాంటి అతీంద్రియ శక్తి కాదు. ఫిట్స్ వచ్చినప్పుడు చేయవలసిన సరైన ప్రథమ చికిత్స ఏమిటో తెలుసుకోండి.",
    contentEn: `
### Seizure First Aid: The 3 'C' Rules
1. **Calm:** Keep calm and stay with the patient. Clear hard or sharp furniture nearby.
2. **Cushion:** Place something soft beneath their head and gently ease them onto their side (recovery position) to keep the airway clear.
3. **Clock:** Check your watch. If the convulsive seizure lasts longer than 5 minutes, call emergency services immediately.

### Dangerous Myths
- **Myth:** Put an iron key or spoon in the mouth.  
  *Fact:* Never force anything into the mouth. It can break teeth or block the trachea.
- **Myth:** Restrain the patient tightly during convulsions.  
  *Fact:* Restraining muscles can cause bone fractures and ligament tears.

`,
    contentTe: `
### మూర్ఛ వచ్చినప్పుడు ప్రథమ చికిత్స
1. **ప్రశాంతత:** భయపడకుండా రోగి పక్కనే ఉండండి. చుట్టుపక్కల ఉన్న పదునైన వస్తువులను తొలగించండి.
2. **రక్షణ:** తల కింద మెత్తటి వస్త్రం ఉంచి, రోగిని ఒక పక్కకు తిప్పండి.
3. **సమయం:** ఫిట్స్ 5 నిమిషాల కంటే ఎక్కువసేపు కొనసాగితే వెంటనే అత్యవసర ఆసుపత్రికి తరలించండి.

### అపోహలు - వాస్తవాలు
- **అపోహ:** నోట్లో ఇనుప తాళాలు, చెంచాలు లేదా నిమ్మకాయలు పెట్టాలి.  
  *వాస్తవం:* నోట్లో ఏదీ పెట్టకూడదు. దీనివల్ల పళ్ళు విరిగి గొంతులో పడే ప్రమాదం ఉంది.
- **అపోహ:** రోగిని గట్టిగా అదిమి పట్టుకోవాలి.  
  *వాస్తవం:* బలవంతంగా పట్టుకోవడం వల్ల ఎముకలు విరిగే ప్రమాదం ఉంది.
`
  }
];

export const initialAppointments = [
  {
    id: "APP-DEMO-1001",
    fullName: "K. Venkat Reddy",
    phone: "9848012345",
    email: "venkat.reddy@example.com",
    specialityOrDoctor: "Spine Care",
    preferredDate: "2026-10-25",
    preferredTime: "Morning (09:00 AM - 01:00 PM)",
    reason: "Lower back pain radiating to left foot for 4 weeks; difficulty walking.",
    status: "pending",
    createdAt: "2026-10-20T10:30:00.000Z",
    consentGiven: true
  },
  {
    id: "APP-DEMO-1002",
    fullName: "P. Shanthi",
    phone: "9440156789",
    email: "shanthi.p@example.com",
    specialityOrDoctor: "Dr. Ananya Rao",
    preferredDate: "2026-10-26",
    preferredTime: "Afternoon (02:00 PM - 05:00 PM)",
    reason: "Chronic one-sided migraine headaches with visual aura.",
    status: "contacted",
    createdAt: "2026-10-19T14:15:00.000Z",
    consentGiven: true
  }
];
