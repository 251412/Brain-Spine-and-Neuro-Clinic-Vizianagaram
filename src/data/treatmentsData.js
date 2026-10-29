/**
 * Comprehensive treatments and surgical procedures grouped by clinical speciality.
 * Each procedure includes dual-language naming (English & Telugu), detailed clinical descriptions,
 * recovery timeline, and patient benefits.
 */

export const treatmentsBySpeciality = {
  // 1. NEUROLOGY
  neurology: [
    {
      id: "epilepsy-surgery",
      nameEn: "Epilepsy Surgery",
      nameTe: "ఎపిలెప్సీ సర్జరీ (మూర్ఛ శస్త్రచికిత్స)",
      category: "Functional Neurosurgery",
      categoryTe: "ఫంక్షనల్ న్యూరో సర్జరీ",
      badge: "Curative / Resective",
      descEn: "Precision neurosurgical resection or disconnection of the seizure focus in the brain for patients whose epilepsy does not respond to medications. Carried out using high-definition stereotactic navigation to safely stop or substantially reduce seizures.",
      descTe: "మందులతో నియంత్రణలోకి రాని మొండి మూర్ఛ (ఫిట్స్) రోగులకు మెదడులోని సమస్యాత్మక భాగాన్ని అత్యాధునిక నావిగేషన్ ద్వారా తొలగించే శస్త్రచికిత్స. ఇది రోగులకు ఫిట్స్ నుండి సంపూర్ణ విముక్తి కల్పించడంలో అత్యంత ప్రభావవంతమైనది.",
      recoveryTime: "3 – 5 Days Hospital Care",
      recoveryTimeTe: "3 – 5 రోజుల ఆసుపత్రి సంరక్షణ",
      benefits: [
        "Up to 75-80% freedom from seizures",
        "Reduces high-dose medication dependence",
        "Prevents brain damage from repeated seizures"
      ],
      benefitsTe: [
        "75-80% వరకు ఫిట్స్ నుండి పూర్తి విముక్తి",
        "అధిక మోతాదు మందుల అవసరం తగ్గుతుంది",
        "తరచుగా వచ్చే ఫిట్స్ వల్ల మెదడుకు జరిగే నష్టాన్ని నివారిస్తుంది"
      ]
    },
    {
      id: "deep-brain-stimulation",
      nameEn: "Deep Brain Stimulation (DBS)",
      nameTe: "డీప్ బ్రెయిన్ స్టిమ్యులేషన్ (DBS)",
      category: "Neuromodulation",
      categoryTe: "న్యూరోమోడ్యులేషన్",
      badge: "Minimally Invasive",
      descEn: "Implantation of micro-electrodes within specific target nuclei of the brain connected to an impulse generator. Provides life-changing motor symptom control for Parkinson's disease, essential tremor, and dystonia.",
      descTe: "మెదడులోని నిర్దిష్ట భాగాలలో సూక్ష్మ ఎలక్ట్రోడ్లను అమర్చి విద్యుత్ ప్రేరణల ద్వారా శరీర వణుకును నియంత్రించే అధునాతన ప్రక్రియ. ఇది పార్కిన్సన్స్ వ్యాధి, తీవ్రమైన చేతుల వణుకు మరియు డిస్టోనియా రోగులకు సాధారణ జీవితాన్ని అందిస్తుంది.",
      recoveryTime: "1 – 2 Days Hospital Stay",
      recoveryTimeTe: "1 – 2 రోజుల ఆసుపత్రి బస",
      benefits: [
        "Significant reduction in tremors & rigidity",
        "Restores daily motor mobility & handwriting",
        "Adjustable and completely reversible therapy"
      ],
      benefitsTe: [
        "చేతుల వణుకు మరియు శరీర బిగుతు గణనీయంగా తగ్గుతుంది",
        "నడక, రాయడం వంటి రోజువారీ పనులు సులభమవుతాయి",
        "సర్దుబాటు చేయగల సురక్షితమైన చికిత్స"
      ]
    },
    {
      id: "trigeminal-neuralgia-surgery",
      nameEn: "Trigeminal Neuralgia Surgery",
      nameTe: "ట్రైజెమినల్ న్యూరాల్జియా సర్జరీ",
      category: "Microvascular Decompression",
      categoryTe: "మైక్రోవాస్కులర్ డీకంప్రెషన్ (MVD)",
      badge: "Definitive Pain Cure",
      descEn: "Microvascular Decompression (MVD) surgery performed through a keyhole incision behind the ear to separate compressing blood vessels from the trigeminal nerve root, ending excruciating electric-shock-like facial pain.",
      descTe: "చెవి వెనుక చిన్న కోత ద్వారా మైక్రోస్కోప్ సహాయంతో ట్రైజెమినల్ నాడిపై ఒత్తిడి తెచ్చే రక్తనాళాన్ని వేరుచేసే శాశ్వత చికిత్స. ముఖంలో వచ్చే భరించలేని విద్యుత్ షాక్ వంటి తీవ్రమైన నొప్పుల నుండి తక్షణ ఉపశమనం లభిస్తుంది.",
      recoveryTime: "2 – 3 Days Inpatient Recovery",
      recoveryTimeTe: "2 – 3 రోజుల ఆసుపత్రి రికవరీ",
      benefits: [
        "Immediate relief from severe stabbing facial pain",
        "Preserves normal facial sensation",
        "Highest long-term curative success rate"
      ],
      benefitsTe: [
        "తీవ్రమైన ముఖం నొప్పి నుండి తక్షణ శాశ్వత ఉపశమనం",
        "ముఖ స్పర్శను పూర్తిగా కాపాడుతుంది",
        "మందుల దుష్ప్రభావాల నుండి విముక్తి"
      ]
    },
    {
      id: "intraoperative-neuromonitoring",
      nameEn: "Intraoperative Neuromonitoring (IONM)",
      nameTe: "ఇంట్రాఆపరేటివ్ న్యూరోమానిటరింగ్ (IONM)",
      category: "Diagnostic & Surgical Safety",
      categoryTe: "శస్త్రచికిత్సా భద్రతా పర్యవేక్షణ",
      badge: "Safety Standard",
      descEn: "Continuous real-time electrophysiological monitoring of motor, sensory, and cranial nerve pathways throughout brain and spine surgery to alert the surgeon and prevent permanent neurological injury.",
      descTe: "మెదడు మరియు వెన్నెముక ఆపరేషన్ల సమయంలో రోగి నాడీ వ్యవస్థ, కాళ్లు, చేతుల కదలికలు మరియు మాటను నియంత్రించే నరాలను నిరంతరం పర్యవేక్షించే అత్యాధునిక రక్షణ వ్యవస్థ. ఇది శస్త్రచికిత్సను 100% సురక్షితం చేస్తుంది.",
      recoveryTime: "Same as Primary Procedure",
      recoveryTimeTe: "ప్రధాన సర్జరీతో సమానం",
      benefits: [
        "Drastically minimizes risk of post-op paralysis",
        "Real-time feedback safeguarding critical nerves",
        "Enables maximal safe resection of tumours"
      ],
      benefitsTe: [
        "పక్షవాతం లేదా నరాల నష్టాన్ని సమర్థవంతంగా అరికడుతుంది",
        "సున్నితమైన నరాలకు ఎలాంటి హాని కలగకుండా కాపాడుతుంది",
        "శస్త్రచికిత్సలో అత్యున్నత భద్రతా ప్రమాణం"
      ]
    }
  ],

  // 2. NEUROSURGERY
  neurosurgery: [
    {
      id: "brain-tumor-surgery",
      nameEn: "Brain Tumor Surgery",
      nameTe: "బ్రెయిన్ ట్యూమర్ సర్జరీ (మెదడు కణితి శస్త్రచికిత్స)",
      category: "Cranial Microsurgery",
      categoryTe: "క్రేనియల్ మైక్రోసర్జరీ",
      badge: "Microsurgical Resection",
      descEn: "High-precision microsurgical excision of benign or malignant brain tumors using advanced surgical microscopes, neuro-navigation GPS, and ultrasonic aspirators to preserve speech and mobility.",
      descTe: "ఆధునిక న్యూరో-నావిగేషన్ మరియు ఆపరేటింగ్ మైక్రోస్కోప్ సహాయంతో మెదడులోని కణితిని సున్నితంగా, పక్కనున్న సాధారణ మెదడు కణజాలానికి హాని కలగకుండా తొలగించే అత్యాధునిక శస్త్రచికిత్స.",
      recoveryTime: "3 – 5 Days Hospital Care",
      recoveryTimeTe: "3 – 5 రోజుల ఆసుపత్రి బస",
      benefits: [
        "Maximal safe tumor removal",
        "Relieves intracranial pressure and severe headaches",
        "Tissue sent for accurate histological typing"
      ],
      benefitsTe: [
        "కణితిని అత్యంత సురక్షితంగా తొలగిస్తారు",
        "మెదడుపై ఒత్తిడి మరియు తీవ్రమైన తలనొప్పి తగ్గుతుంది",
        "రోగి త్వరగా సాధారణ జీవితానికి రాగలుగుతారు"
      ]
    },
    {
      id: "glioma-surgery",
      nameEn: "Glioma Surgery",
      nameTe: "గ్లియోమా సర్జరీ",
      category: "Neuro-Oncology",
      categoryTe: "న్యూరో-ఆంకాలజీ",
      badge: "Fluorescence-Guided",
      descEn: "Specialized resection of low-grade and high-grade infiltrating gliomas utilizing intraoperative fluorescence dye mapping (5-ALA) and cortical mapping to achieve maximal tumor removal with functional preservation.",
      descTe: "మెదడులో వ్యాపించే గ్లియోమా కణితులకు ప్రత్యేక ఫ్లోరోసెన్స్ మరియు కార్టికల్ మ్యాపింగ్ ద్వారా కణితి సరిహద్దులను స్పష్టంగా గుర్తించి తొలగించే సురక్షిత శస్త్రచికిత్స.",
      recoveryTime: "4 – 6 Days Inpatient Care",
      recoveryTimeTe: "4 – 6 రోజుల ఆసుపత్రి సంరక్షణ",
      benefits: [
        "Distinguishes tumor margins from healthy brain tissue",
        "Significantly prolongs progression-free survival",
        "Protects language and motor strength"
      ],
      benefitsTe: [
        "కణితి మరియు మంచి మెదడు కణాల మధ్య తేడాను స్పష్టంగా గుర్తిస్తుంది",
        "రోగి జీవన ప్రమాణాన్ని గణనీయంగా పెంచుతుంది",
        "మాట మరియు నడకను కాపాడుతుంది"
      ]
    },
    {
      id: "meningioma-surgery",
      nameEn: "Meningioma Surgery",
      nameTe: "మెనింజియోమా సర్జరీ",
      category: "Skull Base & Convexity",
      categoryTe: "స్కల్ బేస్ & మెదడు పొరల సర్జరీ",
      badge: "Curative Excision",
      descEn: "Complete microsurgical resection of dural-based meningiomas at skull base or brain convexity with duraplasty reconstruction, providing long-term cure for benign lesions.",
      descTe: "మెదడు రక్షణ పొరలలో ఏర్పడే మెనింజియోమా కణితులను మైక్రోసర్జరీ ద్వారా వేరుచేసి తొలగించే ప్రక్రియ. చాలావరకు ఇవి నిరపాయమైనవి కాబట్టి పూర్తి ఉపశమనం లభిస్తుంది.",
      recoveryTime: "3 – 5 Days Inpatient Stay",
      recoveryTimeTe: "3 – 5 రోజుల ఆసుపత్రి బస",
      benefits: [
        "High complete cure rate for benign meningiomas",
        "Eliminates neurological deficits caused by compression",
        "Dural barrier safely reconstructed"
      ],
      benefitsTe: [
        "కణితిని పూర్తిగా తొలగించి శాశ్వత పరిష్కారం",
        "నరాలపై ఒత్తిడి తగ్గి చూపు, స్పర్శ మెరుగుపడతాయి",
        "పునరావృతం కాకుండా రక్షణ"
      ]
    },
    {
      id: "pituitary-adenoma-surgery",
      nameEn: "Pituitary Adenoma Surgery",
      nameTe: "పిట్యూటరీ ఎడినోమా సర్జరీ",
      category: "Endoscopic Endonasal",
      categoryTe: "ఎండోస్కోపిక్ ఎండోనేసల్ సర్జరీ",
      badge: "Scarless / Keyhole",
      descEn: "Scarless endoscopic transnasal transsphenoidal removal of pituitary tumors via natural nasal corridors, relieving optic chiasm pressure to rescue failing eyesight and balance hormone levels.",
      descTe: "ఎలాంటి బాహ్య కోత లేదా మచ్చలు లేకుండా ముక్కు ద్వారా ఎండోస్కోప్ సహాయంతో పిట్యూటరీ కణితిని తొలగించే శస్త్రచికిత్స. దీనివల్ల కంటిచూపు మెరుగవుతుంది మరియు హార్మోన్ల సమతుల్యత పునరుద్ధరించబడుతుంది.",
      recoveryTime: "2 – 3 Days Hospital Stay",
      recoveryTimeTe: "2 – 3 రోజుల ఆసుపత్రి బస",
      benefits: [
        "No visible incisions or scars on the head or face",
        "Rapid recovery of failing visual field & eyesight",
        "Normalizes pituitary endocrine secretion"
      ],
      benefitsTe: [
        "తల లేదా ముఖంపై ఎలాంటి కోత లేదా మచ్చలు ఉండవు",
        "మందగించిన కంటిచూపు వేగంగా మెరుగుపడుతుంది",
        "శరీర హార్మోన్ల సమస్యలు నియంత్రణలోకి వస్తాయి"
      ]
    },
    {
      id: "acoustic-neuroma-surgery",
      nameEn: "Acoustic Neuroma Surgery",
      nameTe: "ఎకౌస్టిక్ న్యూరోమా సర్జరీ",
      category: "Cerebellopontine Angle (CPA)",
      categoryTe: "స్కల్ బేస్ మైక్రోసర్జరీ",
      badge: "Cranial Nerve Sparing",
      descEn: "Complex skull base microsurgical removal of vestibular schwannomas located in the cerebellopontine angle, prioritizing preservation of facial nerve function and brainstem integrity.",
      descTe: "వినికిడి మరియు శరీర సమతుల్యత నరాలపై వచ్చే కణితులను ఫేషియల్ నరానికి (ముఖ కండరాల కదలికలు) ఎటువంటి హాని కలగకుండా తొలగించే అత్యంత సున్నితమైన మైక్రోసర్జరీ.",
      recoveryTime: "4 – 6 Days Inpatient Recovery",
      recoveryTimeTe: "4 – 6 రోజుల ఆసుపత్రి రికవరీ",
      benefits: [
        "Protects facial nerve and normal facial smile",
        "Relieves life-threatening brainstem compression",
        "Preserves hearing whenever anatomically possible"
      ],
      benefitsTe: [
        "ముఖ నరం దెబ్బతినకుండా ముఖ కదలికలను కాపాడుతుంది",
        "మెదడు కాండంపై ప్రాణాంతక ఒత్తిడిని తొలగిస్తుంది",
        "తలతిరుగుడు మరియు వినికిడి లోపాలు తగ్గుతాయి"
      ]
    },
    {
      id: "aneurysm-surgery",
      nameEn: "Aneurysm Surgery",
      nameTe: "అనూరిజమ్ సర్జరీ (క్లిప్పింగ్)",
      category: "Cerebrovascular Surgery",
      categoryTe: "సెరిబ్రోవాస్కులర్ సర్జరీ",
      badge: "Emergency & Elective",
      descEn: "Microsurgical clipping of intracranial arterial aneurysms placing a miniature titanium clip across the aneurysm neck, sealing off the blister and permanently preventing rupture or rebleeding.",
      descTe: "మెదడు రక్తనాళం బెలూన్ లా ఉబ్బి పగిలిపోయే ప్రమాదం ఉన్నప్పుడు టైటానియం క్లిప్ ద్వారా ఆ భాగాన్ని సురక్షితంగా మూసివేసే శస్త్రచికిత్స. ఇది ప్రాణాంతక మెదడు రక్తస్రావాన్ని అరికడుతుంది.",
      recoveryTime: "4 – 7 Days Specialized Care",
      recoveryTimeTe: "4 – 7 రోజుల ప్రత్యేక వైద్య సంరక్షణ",
      benefits: [
        "Definitive protection against catastrophic brain hemorrhage",
        "Permanent exclusion of aneurysm from cerebral circulation",
        "Gold standard durable long-term outcome"
      ],
      benefitsTe: [
        "ప్రాణాంతక బ్రెయిన్ స్ట్రోక్ మరియు రక్తస్రావం నుండి రక్షణ",
        "రక్తనాళం పగిలిపోయే ముప్పును శాశ్వతంగా తొలగిస్తుంది",
        "దీర్ఘకాలిక భద్రత మరియు నమ్మకమైన ఫలితాలు"
      ]
    },
    {
      id: "avm-surgery",
      nameEn: "Arteriovenous Malformation (AVM) Surgery",
      nameTe: "ఆర్టీరియోవీనస్ మాల్‌ఫార్మేషన్ (AVM) సర్జరీ",
      category: "Cerebrovascular Malformations",
      categoryTe: "రక్తనాళాల చిక్కుల శస్త్రచికిత్స",
      badge: "Microsurgical Resection",
      descEn: "Microsurgical disconnection and excision of congenital abnormal tangles of brain arteries and veins, eliminating risks of intracranial hemorrhage, intractable headaches, and seizures.",
      descTe: "పుట్టుకతో మెదడులోని రక్తనాళాలు అసాధారణంగా పెనవేసుకుపోయి (AVM) రక్తం కారే ప్రమాదాన్ని మైక్రోసర్జరీ ద్వారా ఆ రక్తనాళాల గడ్డను తొలగించి సరిచేసే ప్రక్రియ.",
      recoveryTime: "4 – 7 Days Hospital Care",
      recoveryTimeTe: "4 – 7 రోజుల ఆసుపత్రి సంరక్షణ",
      benefits: [
        "Eliminates lifelong cumulative risk of brain hemorrhage",
        "Reduces vascular-related seizures and severe migraines",
        "Restores normal cerebral blood flow dynamics"
      ],
      benefitsTe: [
        "మెదడులో రక్తస్రావం జరిగే ప్రమాదం శాశ్వతంగా తొలగిపోతుంది",
        "తీవ్రమైన తలనొప్పులు మరియు ఫిట్స్ అదుపులోకి వస్తాయి",
        "మెదడు రక్తప్రసరణ సాధారణ స్థితికి చేరుకుంటుంది"
      ]
    },
    {
      id: "craniotomy",
      nameEn: "Craniotomy",
      nameTe: "క్రేనియోటమీ",
      category: "Cranial Surgery",
      categoryTe: "క్రేనియల్ సర్జరీ",
      badge: "Surgical Access",
      descEn: "Precise temporary removal of a cranial bone window to access brain tissue for tumor resection, aneurysm repair, hematoma drainage, or relieving elevated intracranial pressure.",
      descTe: "మెదడులోని కణితి, రక్తం గడ్డకట్టడం లేదా ఇతర సమస్యలకు చికిత్స చేయడానికి పుర్రె ఎముకను తాత్కాలికంగా సురక్షితంగా తెరిచి, సర్జరీ అనంతరం తిరిగి అమర్చే శస్త్రచికిత్స.",
      recoveryTime: "3 – 5 Days Inpatient Stay",
      recoveryTimeTe: "3 – 5 రోజుల ఆసుపత్రి బస",
      benefits: [
        "Direct visual access with surgical microscope",
        "Bone flap secured firmly with biocompatible titanium plates",
        "Rapid reduction of dangerous brain swelling"
      ],
      benefitsTe: [
        "సమస్య ఉన్న భాగాన్ని స్పష్టంగా చూసి చికిత్స చేయవచ్చు",
        "ఎముకను టైటానియం ప్లేట్లతో సురక్షితంగా తిరిగి అమర్చుతారు",
        "మెదడు వాపు మరియు ఒత్తిడి వేగంగా తగ్గుతాయి"
      ]
    },
    {
      id: "burr-hole-surgery",
      nameEn: "Burr Hole Surgery",
      nameTe: "బర్ హోల్ సర్జరీ (చిన్న రంధ్రం శస్త్రచికిత్స)",
      category: "Emergency / Minimally Invasive",
      categoryTe: "అత్యవసర మినిమల్లీ ఇన్వాసివ్ సర్జరీ",
      badge: "Rapid Decompression",
      descEn: "Minimally invasive cranial procedure creating one or two small dime-sized holes in the skull to drain subdural hematomas, fluid collections, or relieve intracranial pressure rapidly.",
      descTe: "తల గాయాల వల్ల లేదా వృద్ధాప్యంలో మెదడుపై గడ్డకట్టిన రక్తాన్ని (సబ్ డ్యూరల్ హెమటోమా) పుర్రెలో చిన్న రంధ్రం ద్వారా సురక్షితంగా బయటకు తీసే అత్యవసర శస్త్రచికిత్స.",
      recoveryTime: "1 – 2 Days Hospital Care",
      recoveryTimeTe: "1 – 2 రోజుల ఆసుపత్రి సంరక్షణ",
      benefits: [
        "Minimal incision and tissue disruption",
        "Rapid reversal of drowsiness and limb weakness",
        "Safe procedure even in elderly, high-risk patients"
      ],
      benefitsTe: [
        "చాలా చిన్న కోత మరియు త్వరిత రికవరీ",
        "స్పృహ కోల్పోవడం, బలహీనత నుండి రోగి వెంటనే కోలుకుంటారు",
        "వృద్ధులకు కూడా అత్యంత సురక్షితమైన చికిత్స"
      ]
    },
    {
      id: "neuroendoscopic-surgery",
      nameEn: "Neuroendoscopic Surgery",
      nameTe: "న్యూరోఎండోస్కోపిక్ సర్జరీ",
      category: "Minimally Invasive Cranial",
      categoryTe: "మినిమల్లీ ఇన్వాసివ్ ఎండోస్కోపీ",
      badge: "No Shunt Dependency",
      descEn: "Keyhole surgery using fine rigid endoscopes with HD cameras to treat hydrocephalus (Endoscopic Third Ventriculostomy - ETV), arachnoid cysts, and intraventricular tumors without permanent shunt implants.",
      descTe: "అత్యాధునిక హై-డెఫినిషన్ ఎండోస్కోప్ కెమెరా ద్వారా చిన్న రంధ్రం గుండా మెదడులో నీరు చేరడం (హైడ్రోసెఫాలస్), తిత్తులు మరియు కణితులను ఎలాంటి షంట్ పైపులు అవసరం లేకుండా నయం చేసే ప్రక్రియ.",
      recoveryTime: "1 – 2 Days Hospital Stay",
      recoveryTimeTe: "1 – 2 రోజుల ఆసుపత్రి బస",
      benefits: [
        "Avoids lifelong foreign hardware and shunt blockages",
        "Extremely small incisions with minimal cosmetic impact",
        "Shorter hospitalization and fast resumption of activity"
      ],
      benefitsTe: [
        "జీవితాంతం షంట్ పైపులు అమర్చే అవసరం ఉండదు",
        "చాలా చిన్న కోత వల్ల నొప్పి ఉండదు మరియు త్వరగా డిశ్చార్జ్",
        "సహజసిద్ధమైన ద్రవ ప్రసరణ పునరుద్ధరించబడుతుంది"
      ]
    },
    {
      id: "awake-craniotomy",
      nameEn: "Awake Craniotomy",
      nameTe: "అవేక్ క్రేనియోటమీ (రోగి మెలకువగా ఉండగా చేసే శస్త్రచికిత్స)",
      category: "Functional Mapping",
      categoryTe: "ఫంక్షనల్ బ్రెయిన్ మ్యాపింగ్",
      badge: "Speech & Motor Preservation",
      descEn: "Performing tumor resection while the patient is awake and communicating, allowing real-time intraoperative mapping of speech and movement centers to achieve maximum tumor removal with zero speech impairment.",
      descTe: "రోగి మాట్లాడే మరియు కదిలించే కీలక కేంద్రాలకు సమీపంలో ఉన్న కణితులను తొలగించేటప్పుడు, రోగి మెలకువగా ఉంచి మాటలు, కదలికలను పరీక్షించుకుంటూ సురక్షితంగా చేసే అద్భుతమైన శస్త్రచికిత్స.",
      recoveryTime: "2 – 4 Days Inpatient Care",
      recoveryTimeTe: "2 – 4 రోజుల ఆసుపత్రి సంరక్షణ",
      benefits: [
        "100% painless procedure using advanced scalp blocks",
        "Safeguards eloquence, speech, and limb strength",
        "Enables radical tumor removal in previously inoperable regions"
      ],
      benefitsTe: [
        "అధునాతన మత్తు పద్ధతుల వల్ల రోగికి ఎటువంటి నొప్పి తెలియదు",
        "రోగి మాట మరియు చేతుల, కాళ్ల కదలికలు పూర్తిగా సురక్షితం",
        "క్లిష్టమైన ప్రదేశాల్లోని కణితులను కూడా సురక్షితంగా తొలగించవచ్చు"
      ]
    },
    {
      id: "frameless-stereotactic-surgery",
      nameEn: "Frameless Stereotactic Surgery",
      nameTe: "ఫ్రేమ్‌లెస్ స్టీరియోటాక్టిక్ సర్జరీ",
      category: "Image-Guided Navigation",
      categoryTe: "ఇమేజ్ గైడెడ్ నావిగేషన్",
      badge: "Sub-Millimeter Precision",
      descEn: "Computer-assisted surgical navigation that synchronizes patient MRI/CT scans like a live surgical GPS, guiding biopsies and lesion approaches within sub-millimeter anatomical accuracy.",
      descTe: "కంప్యూటర్ మరియు MRI/CT స్కాన్లను అనుసంధానించి లైవ్ జీపీఎస్ లా పనిచేసే అత్యాధునిక సాంకేతికత. మిలిమీటర్ కన్నా ఖచ్చితమైన కొలతలతో మెదడులోని చిన్న చిన్న లోపాలను కనుగొని బయాప్సీ లేదా సర్జరీ చేస్తారు.",
      recoveryTime: "1 – 2 Days Hospital Stay",
      recoveryTimeTe: "1 – 2 రోజుల ఆసుపత్రి బస",
      benefits: [
        "Sub-millimeter targeting precision",
        "Smallest entry corridors minimizing brain retraction",
        "Ideal for deep-seated biopsies and fluid drainage"
      ],
      benefitsTe: [
        "మిల్లీమీటర్లలో అత్యంత ఖచ్చితమైన లక్ష్య సాధన",
        "చిన్న కోత వల్ల మెదడుపై తక్కువ ఒత్తిడి",
        "లోతైన కణితుల బయాప్సీకి అత్యంత సురక్షితమైన మార్గం"
      ]
    }
  ],

  // 3. SPINE CARE
  "spine-care": [
    {
      id: "lumbar-discectomy",
      nameEn: "Lumbar Discectomy",
      nameTe: "లంబార్ డిసెక్టమీ (నడుము స్లిప్ డిస్క్ సర్జరీ)",
      category: "Microsurgical Decompression",
      categoryTe: "మైక్రోసర్జికల్ డిస్క్ తొలగింపు",
      badge: "Sciatica Relief",
      descEn: "Microscopic or micro-endoscopic removal of herniated lumbar disc fragments pressing on the sciatic nerve root. Delivers immediate relief from excruciating shooting leg pain, numbness, and claudication.",
      descTe: "నడుములోని స్లిప్ డిస్క్ నరంపై ఒత్తిడి తెచ్చి కాలిలోకి తీవ్రమైన నొప్పిని (సయాటికా) కలిగించినప్పుడు, మైక్రోస్కోప్ ద్వారా ఆ భాగాన్ని సున్నితంగా తొలగించే సురక్షిత శస్త్రచికిత్స. రోగి వెంటనే నడవగలరు.",
      recoveryTime: "Day Care to 1 Day Stay",
      recoveryTimeTe: "డే కేర్ లేదా 1 రోజు ఆసుపత్రి బస",
      benefits: [
        "Immediate relief from shooting sciatic nerve pain",
        "Walk comfortably on the same evening",
        "Preserves spinal motion without fusion"
      ],
      benefitsTe: [
        "తీవ్రమైన సయాటికా నొప్పి నుండి తక్షణ ఉపశమనం",
        "శస్త్రచికిత్స జరిగిన రోజే నడవగలుగుతారు",
        "వెన్నెముక కదలికలు సహజంగా ఉంటాయి"
      ]
    },
    {
      id: "cervical-discectomy",
      nameEn: "Cervical Discectomy",
      nameTe: "సర్వైకల్ డిసెక్టమీ (మెడ డిస్క్ శస్త్రచికిత్స)",
      category: "Cervical Spine",
      categoryTe: "మెడ వెన్నెముక చికిత్స",
      badge: "ACDF / Disc Arthroplasty",
      descEn: "Anterior cervical discectomy and fusion (ACDF) or artificial disc replacement to decompress pinched nerve roots and spinal cord in the neck, relieving radiating arm pain and hand numbness.",
      descTe: "మెడలోని డిస్క్ జారి చేతి నరాలపై ఒత్తిడి తేవడం వల్ల చేతులు తిమ్మిర్లు, బలహీనత ఏర్పడినప్పుడు డిస్క్‌ను తొలగించి స్థిరపరిచే లేదా ఆర్టిఫిషియల్ డిస్క్ అమర్చే అత్యాధునిక శస్త్రచికిత్స.",
      recoveryTime: "1 – 2 Days Hospital Stay",
      recoveryTimeTe: "1 – 2 రోజుల ఆసుపత్రి బస",
      benefits: [
        "Resolves debilitating arm, shoulder & finger pain",
        "Halts progressive hand numbness and grip weakness",
        "Motion-preserving artificial disc options available"
      ],
      benefitsTe: [
        "చేతులు, భుజాల నొప్పులు మరియు తిమ్మిర్లు పూర్తిగా తగ్గుతాయి",
        "చేతి పట్టు బలం (గ్రిప్) మెరుగుపడుతుంది",
        "కదలికలను కాపాడే కృత్రిమ డిస్క్ సౌకర్యం"
      ]
    },
    {
      id: "thoracic-discectomy",
      nameEn: "Thoracic Discectomy",
      nameTe: "థొరాసిక్ డిసెక్టమీ (వీపు డిస్క్ సర్జరీ)",
      category: "Thoracic Spine",
      categoryTe: "మధ్య వెన్నెముక చికిత్స",
      badge: "Cord Decompression",
      descEn: "Microsurgical or posterolateral removal of calcified or herniated thoracic discs compressing the spinal cord in the mid-back, preventing lower limb spasticity and gait instability.",
      descTe: "మధ్య వీపు వెన్నెముకలో డిస్క్ జారి వెన్నుపాముపై ఒత్తిడి కలిగించినప్పుడు, కాళ్లలో స్పర్శ లోపాలు మరియు పక్షవాతం రాకుండా డిస్క్‌ను మైక్రోస్కోప్ ద్వారా తొలగించే సున్నితమైన సర్జరీ.",
      recoveryTime: "2 – 4 Days Inpatient Recovery",
      recoveryTimeTe: "2 – 4 రోజుల ఆసుపత్రి రికవరీ",
      benefits: [
        "Prevents progressive paraparesis and spinal cord damage",
        "Relieves band-like chest and abdominal wall pain",
        "Image-guided approaches for maximum safety"
      ],
      benefitsTe: [
        "కాళ్ల బలహీనత మరియు పక్షవాత ప్రమాదాన్ని అరికడుతుంది",
        "ఛాతీ చుట్టూ వచ్చే బిగుతు మరియు నొప్పి తగ్గుతాయి",
        "అత్యాధునిక ఇమేజ్ గైడెన్స్ ద్వారా సురక్షితమైన చికిత్స"
      ]
    },
    {
      id: "laminectomy",
      nameEn: "Laminectomy",
      nameTe: "లామినెక్టమీ (నరాల గొట్టం విప్పార్చే సర్జరీ)",
      category: "Spinal Stenosis",
      categoryTe: "స్పైనల్ స్టెనోసిస్ చికిత్స",
      badge: "Decompressive Surgery",
      descEn: "Surgical removal of the vertebral lamina to widen a narrowed spinal canal (spinal stenosis), releasing trapped nerve bundles and restoring comfortable, pain-free walking distance.",
      descTe: "వెన్నెముక నరాల గొట్టం కుంచించుకుపోయి (స్టెనోసిస్) నడుస్తున్నప్పుడు కాళ్లు గుంజడం మరియు తిమ్మిర్లు వచ్చినప్పుడు, ఎముకను కొద్దిగా సరిచేసి నరాలకు తగినంత ఖాళీని కల్పించే శస్త్రచికిత్స.",
      recoveryTime: "1 – 2 Days Hospital Stay",
      recoveryTimeTe: "1 – 2 రోజుల ఆసుపత్రి బస",
      benefits: [
        "Extends walking tolerance without leg cramps",
        "Relieves chronic lumbar spinal canal pressure",
        "Can be performed using minimally invasive techniques"
      ],
      benefitsTe: [
        "కాళ్లలో నొప్పులు లేకుండా ఎక్కువ దూరం నడవగలుగుతారు",
        "నడుము మరియు కాళ్ల నరాలపై ఒత్తిడి శాశ్వతంగా తగ్గుతుంది",
        "తక్కువ కోతతో చేసే ఆధునిక విధానాలు అందుబాటులో ఉన్నాయి"
      ]
    },
    {
      id: "laminoplasty",
      nameEn: "Laminoplasty",
      nameTe: "లామినోప్లాస్టీ (మెడ వెన్నెముక రీకన్‌స్ట్రక్షన్)",
      category: "Cervical Myelopathy",
      categoryTe: "సర్వైకల్ మైలోపతి సంరక్షణ",
      badge: "Motion-Preserving",
      descEn: "Hinged reconstruction of the cervical spinal canal roof using mini titanium plates to relieve multisegmental cord compression while preserving normal neck flexion, extension, and rotation.",
      descTe: "మెడలో పలు భాగాలలో వెన్నుపాము నలిగిపోయినప్పుడు మెడ ఎముకలను తొలగించకుండా కీలులాగా వెడల్పు చేసి టైటానియం ప్లేట్లతో అమర్చే ప్రక్రియ. దీనివల్ల మెడ కదలికలు సహజంగా ఉంటాయి.",
      recoveryTime: "2 – 3 Days Inpatient Recovery",
      recoveryTimeTe: "2 – 3 రోజుల ఆసుపత్రి రికవరీ",
      benefits: [
        "Preserves neck mobility without rigid fusion",
        "Prevents adjacent segment disc breakdown",
        "Protects hand dexterity and walking balance"
      ],
      benefitsTe: [
        "మెడ కదలికలు బిగుసుకుపోకుండా సహజంగా ఉంటాయి",
        "చేతుల పట్టు మరియు నడక బ్యాలెన్స్ మెరుగుపడుతుంది",
        "పక్కనున్న డిస్కులు అరిగిపోకుండా రక్షణ"
      ]
    },
    {
      id: "spinal-fusion",
      nameEn: "Spinal Fusion",
      nameTe: "స్పైనల్ ఫ్యూజన్ (వెన్నెముక స్థిరీకరణ)",
      category: "Spinal Stabilization",
      categoryTe: "వెన్నెముక స్థిరపరిచే శస్త్రచికిత్స",
      badge: "Rigid Stabilization",
      descEn: "Permanent fusion of unstable vertebral segments using precision titanium pedicle screws, rods, and interbody cages to eliminate painful micro-motion in spondylolisthesis and severe degeneration.",
      descTe: "వెన్నెముక ఎముకలు జారడం (స్పాండిలోలిస్థెసిస్) లేదా అరిగిపోయి వంగిపోయినప్పుడు టైటానియం స్క్రూలు, రాడ్ల సహాయంతో వెన్నెముకను స్థిరపరచి తీవ్రమైన నడుము నొప్పిని తగ్గించే శస్త్రచికిత్స.",
      recoveryTime: "2 – 4 Days Inpatient Stay",
      recoveryTimeTe: "2 – 4 రోజుల ఆసుపత్రి బస",
      benefits: [
        "Eliminates instability pain and mechanical collapse",
        "Restores healthy anatomical spinal alignment",
        "Minimally invasive TLIF/PLIF approaches available"
      ],
      benefitsTe: [
        "వెన్నెముక జారడం వల్ల వచ్చే తీవ్రమైన నొప్పి తగ్గుతుంది",
        "శరీర భంగిమ మరియు నడక సరైన స్థితికి వస్తాయి",
        "చిన్న కోతతో చేసే అత్యాధునిక విధానాలు అందుబాటులో ఉన్నాయి"
      ]
    },
    {
      id: "vertebroplasty",
      nameEn: "Vertebroplasty",
      nameTe: "వెర్టిబ్రోప్లాస్టీ (ఎముక సిమెంట్ ఇంజెక్షన్)",
      category: "Interventional Spine",
      categoryTe: "ఇంటర్వెన్షనల్ స్పైన్ చికిత్స",
      badge: "Day Care / Needle",
      descEn: "Minimally invasive percutaneous injection of medical-grade bone cement into fractured or collapsed vertebral bodies under live fluoroscopic guidance, providing rapid pain relief.",
      descTe: "వృద్ధాప్యంలో ఎముకల బలహీనత (ఆస్టియోపోరోసిస్) వల్ల వెన్నెముక ఎముకలు చిట్లినప్పుడు, సూది ద్వారా ప్రత్యేక మెడికల్ సిమెంట్‌ను ఇంజెక్ట్ చేసి నొప్పులను వెంటనే తగ్గించే సురక్షితమైన ప్రక్రియ.",
      recoveryTime: "Day Care (Walk within 2 hours)",
      recoveryTimeTe: "డే కేర్ (2 గంటల్లో నడవగలరు)",
      benefits: [
        "Immediate relief from excruciating compression fracture pain",
        "No surgical incision or open stitching",
        "Eliminates the need for prolonged bed rest"
      ],
      benefitsTe: [
        "వెన్నెముక పగులు నొప్పి నుండి తక్షణ ఉపశమనం",
        "ఎలాంటి కోత లేదా కుట్లు ఉండవు",
        "నెలల తరబడి మంచానికే పరిమితం కావాల్సిన అవసరం ఉండదు"
      ]
    },
    {
      id: "kyphoplasty",
      nameEn: "Kyphoplasty",
      nameTe: "కైఫోప్లాస్టీ (బెలూన్ వెర్టిబ్రోప్లాస్టీ)",
      category: "Vertebral Augmentation",
      categoryTe: "వెన్నెముక ఎత్తు పునరుద్ధరణ",
      badge: "Height Restoration",
      descEn: "Balloon-assisted vertebral augmentation that inflates a miniature balloon within the collapsed vertebral body to restore vertebral height and correct spinal deformity before cement fixation.",
      descTe: "చిట్లిన వెన్నెముక ఎముకలోకి ప్రత్యేక బెలూన్‌ను పంపి ఉబ్బించి ఎముక సహజ ఎత్తును పునరుద్ధరించిన తర్వాత సిమెంట్ నింపే ప్రక్రియ. దీనివల్ల మూపురం లేదా వంగుడు సమస్యలు రావు.",
      recoveryTime: "Day Care to 1 Day Stay",
      recoveryTimeTe: "డే కేర్ లేదా 1 రోజు ఆసుపత్రి బస",
      benefits: [
        "Restores collapsed vertebral height",
        "Corrects spinal kyphotic hunchback deformity",
        "Safe, low-pressure cement delivery minimizes leaks"
      ],
      benefitsTe: [
        "వెన్నెముక ఎముక ఎత్తు తిరిగి సాధారణ స్థితికి వస్తుంది",
        "శరీరం ముందుకు వంగిపోకుండా మూపురాన్ని నివారిస్తుంది",
        "నొప్పి లేకుండా వేగవంతమైన రికవరీ"
      ]
    },
    {
      id: "spinal-cord-decompression",
      nameEn: "Spinal Cord Decompression",
      nameTe: "స్పైనల్ కార్డ్ డీకంప్రెషన్",
      category: "Emergency Spine",
      categoryTe: "అత్యవసర వెన్నుపాము సంరక్షణ",
      badge: "Emergency Decompression",
      descEn: "Urgent surgical removal of compressive bone spurs, hematomas, abscesses, or herniations pushing against the spinal cord to rescue neurological function and prevent permanent paralysis.",
      descTe: "వెన్నుపాముపై రక్తం గడ్డకట్టడం, చీము లేదా ఎముక ముక్కలు ఒత్తిడి తెచ్చి పక్షవాతం వచ్చే ముప్పు ఉన్నప్పుడు తక్షణమే ఆ ఒత్తిడిని తొలగించి రోగి కాళ్లు, చేతులను కాపాడే అత్యవసర శస్త్రచికిత్స.",
      recoveryTime: "3 – 6 Days Inpatient Care",
      recoveryTimeTe: "3 – 6 రోజుల ఆసుపత్రి సంరక్షణ",
      benefits: [
        "Halts progression toward permanent paralysis",
        "Rescues urinary bladder and bowel sphincter control",
        "Restores blood perfusion to threatened spinal cord tissue"
      ],
      benefitsTe: [
        "శాశ్వత పక్షవాతం రాకుండా నివారిస్తుంది",
        "మూత్ర మరియు మల నియంత్రణను కాపాడుతుంది",
        "వెన్నుపాముకు రక్తప్రసరణను పునరుద్ధరిస్తుంది"
      ]
    },
    {
      id: "spinal-tumor-surgery",
      nameEn: "Spinal Tumor Surgery",
      nameTe: "స్పైనల్ ట్యూమర్ సర్జరీ (వెన్నెముక కణితి చికిత్స)",
      category: "Spinal Oncology",
      categoryTe: "స్పైనల్ ఆంకాలజీ",
      badge: "Microsurgical Resection",
      descEn: "Microsurgical excision of intradural extramedullary, intramedullary, and extradural spinal tumors with intraoperative neuro-monitoring to protect limb strength and sensations.",
      descTe: "వెన్నుపాము లోపల లేదా బయట ఏర్పడే కణితులను అధునాతన న్యూరో మానిటరింగ్ సహాయంతో నరాలకు ఎలాంటి హాని కలగకుండా మైక్రోస్కోప్ ద్వారా తొలగించే క్లిష్టమైన శస్త్రచికిత్స.",
      recoveryTime: "4 – 6 Days Inpatient Stay",
      recoveryTimeTe: "4 – 6 రోజుల ఆసుపత్రి బస",
      benefits: [
        "Complete removal of benign and encapsulated tumors",
        "Reverses progressive motor weakness and numbness",
        "Spine column stabilized with precision instrumentation"
      ],
      benefitsTe: [
        "కణితులను పూర్తిగా తొలగించి నరాల ఆరోగ్యం కాపాడతారు",
        "కాళ్లు, చేతుల బలహీనత తగ్గి తిరిగి బలం వస్తుంది",
        "వెన్నెముకను దృఢంగా స్థిరపరుస్తారు"
      ]
    },
    {
      id: "scoliosis-surgery",
      nameEn: "Scoliosis Surgery",
      nameTe: "స్కోలియోసిస్ సర్జరీ (వంకర వెన్నెముక సరిచేసే సర్జరీ)",
      category: "Deformity Correction",
      categoryTe: "వెన్నెముక వైకల్య సవరణ",
      badge: "Complex Alignment",
      descEn: "Comprehensive realignment and multi-level spinal instrumentation for adolescent idiopathic or adult degenerative scoliosis, correcting three-dimensional curvature and restoring upright posture.",
      descTe: "వెన్నెముక పక్కకు వంకర తిరిగినప్పుడు (స్కోలియోసిస్) అధునాతన రాడ్లు మరియు స్క్రూల సహాయంతో వెన్నెముకను నిటారుగా సరిచేసే సమగ్ర శస్త్రచికిత్స.",
      recoveryTime: "5 – 7 Days Inpatient Care",
      recoveryTimeTe: "5 – 7 రోజుల ఆసుపత్రి సంరక్షణ",
      benefits: [
        "Dramatic improvement in cosmetic posture and height",
        "Prevents cardiopulmonary compression in severe curves",
        "Relieves asymmetric mechanical back strain"
      ],
      benefitsTe: [
        "శరీర భంగిమ నిటారుగా మారి ఆకర్షణీయంగా కనిపిస్తుంది",
        "ఊపిరితిత్తులు మరియు గుండెపై పడే ఒత్తిడిని తొలగిస్తుంది",
        "దీర్ఘకాలిక నడుము నొప్పి నుండి విముక్తి"
      ]
    },
    {
      id: "spinal-trauma-surgery",
      nameEn: "Spinal Trauma Surgery",
      nameTe: "స్పైనల్ ట్రామా సర్జరీ (వెన్నెముక ప్రమాద చికిత్స)",
      category: "Emergency Trauma",
      categoryTe: "అత్యవసర ప్రమాద శస్త్రచికిత్స",
      badge: "24/7 Trauma Care",
      descEn: "Emergency fracture reduction, cord decompression, and 360-degree spinal column stabilization for road traffic accidents, falls, and vertebral dislocation injuries.",
      descTe: "రోడ్డు ప్రమాదాలు లేదా ఎత్తు నుండి పడటం వల్ల వెన్నెముక విరిగినప్పుడు లేదా స్థానభ్రంశం చెందినప్పుడు వెంటనే నరాలపై ఒత్తిడి తొలగించి ఎముకలను స్థిరపరిచే 24/7 అత్యవసర చికిత్స.",
      recoveryTime: "5 – 8 Days Hospitalization",
      recoveryTimeTe: "5 – 8 రోజుల ఆసుపత్రి సంరక్షణ",
      benefits: [
        "Immediate stabilization allows early bedside mobilization",
        "Minimizes secondary neurological injury",
        "Multi-column structural load-bearing restoration"
      ],
      benefitsTe: [
        "వెంటనే వెన్నెముకను స్థిరపరచడం వల్ల రోగి త్వరగా కూర్చోగలరు",
        "వెన్నుపాముకు మరింత నష్టం జరగకుండా కాపాడుతుంది",
        "రోగి త్వరగా కోలుకోవడానికి సమగ్ర పునరావాసం"
      ]
    },
    {
      id: "minimally-invasive-spine-surgery",
      nameEn: "Minimally Invasive Spine Surgery (MISS)",
      nameTe: "మినిమల్లీ ఇన్వాసివ్ స్పైన్ సర్జరీ (MISS)",
      category: "Keyhole Tubular Spine",
      categoryTe: "కీహోల్ ట్యూబులర్ స్పైన్ సర్జరీ",
      badge: "Keyhole Technology",
      descEn: "Operating through pencil-thin dilators without cutting or detaching back muscles, allowing discectomies, decompression, and fusions with microscopic blood loss and ultra-fast discharge.",
      descTe: "నడుము కండరాలను కోయకుండా పెన్సిల్ సైజు గొట్టాల (ట్యూబులర్ రిట్రాక్టర్స్) ద్వారా మైక్రోస్కోప్ సహాయంతో చేసే కీహోల్ సర్జరీ. అతి తక్కువ రక్తస్రావం, తక్కువ నొప్పి మరియు మరుసటి రోజే డిశ్చార్జ్.",
      recoveryTime: "1 – 2 Days Rapid Recovery",
      recoveryTimeTe: "1 – 2 రోజుల్లో వేగవంతమైన రికవరీ",
      benefits: [
        "1 to 2 cm micro-incisions preserving back muscles",
        "Virtually no blood loss or post-op wound pain",
        "Return to light desk work within 1 to 2 weeks"
      ],
      benefitsTe: [
        "కేవలం 1-2 సెం.మీ చిన్న కోతతో సర్జరీ",
        "కండరాలకు హాని ఉండదు, రక్తస్రావం మరియు నొప్పి చాలా తక్కువ",
        "1-2 వారాల్లోనే సాధారణ పనులకు వెళ్లవచ్చు"
      ]
    },
    {
      id: "tethered-spinal-cord-release",
      nameEn: "Tethered Spinal Cord Release",
      nameTe: "టెథర్డ్ స్పైనల్ కార్డ్ రిలీజ్",
      category: "Pediatric & Adult Congenital",
      categoryTe: "పుట్టుకతో వచ్చే వెన్నెముక సమస్యలు",
      badge: "Microsurgical Detethering",
      descEn: "Microsurgical division of a thickened, inelastic filum terminale or adhesions pulling down on the spinal cord, restoring normal spinal mobility and protecting bowel and bladder function.",
      descTe: "వెన్నుపాము చివర బంధించబడి కిందికి లాగబడుతున్నప్పుడు (టెథర్డ్ కార్డ్) మైక్రోసర్జరీ ద్వారా ఆ బంధాన్ని విడిపించే శస్త్రచికిత్స. ఇది కాళ్ల బలహీనత మరియు మూత్ర నియంత్రణ లోపాలను సరిచేస్తుంది.",
      recoveryTime: "3 – 4 Days Inpatient Stay",
      recoveryTimeTe: "3 – 4 రోజుల ఆసుపత్రి బస",
      benefits: [
        "Prevents irreversible lower extremity motor deficits",
        "Normalizes or preserves urinary and fecal continence",
        "Alleviates progressive lower back stiffness and leg pain"
      ],
      benefitsTe: [
        "కాళ్లలో శాశ్వత బలహీనత రాకుండా కాపాడుతుంది",
        "మూత్ర మరియు మల నియంత్రణను రక్షిస్తుంది",
        "నడుము నొప్పి మరియు కండరాల బిగుతును తగ్గిస్తుంది"
      ]
    },
    {
      id: "syrinx-drainage",
      nameEn: "Syrinx Drainage",
      nameTe: "సిరింక్స్ డ్రైనేజ్ (సిరింగోమైలియా చికిత్స)",
      category: "Craniovertebral & Spinal Cord",
      categoryTe: "వెన్నుపాము సిస్ట్ డ్రైనేజ్",
      badge: "Pressure Relief",
      descEn: "Surgical foramen magnum decompression (for Chiari malformation) or syringo-subarachnoid / pleural shunting to drain pressurized fluid cavities inside the spinal cord, restoring sensation.",
      descTe: "వెన్నుపాము లోపల నీటి తిత్తి (సిరింక్స్) ఏర్పడి నరాలను నలిపివేస్తున్నప్పుడు, ఒత్తిడిని తొలగించి ఆ ద్రవాన్ని సురక్షితంగా బయటకు డ్రైన్ చేసే శస్త్రచికిత్స. చేతుల్లో స్పర్శ లోపాలను సరిచేస్తుంది.",
      recoveryTime: "3 – 5 Days Inpatient Care",
      recoveryTimeTe: "3 – 5 రోజుల ఆసుపత్రి సంరక్షణ",
      benefits: [
        "Halts spinal cord cyst expansion and cord atrophy",
        "Recovers cape-like loss of temperature and pain sensation",
        "Alleviates severe neck and occipital headaches"
      ],
      benefitsTe: [
        "వెన్నుపాము దెబ్బతినకుండా సిస్ట్ ఒత్తిడిని తగ్గిస్తుంది",
        "చేతులు మరియు వీపులో స్పర్శ కోల్పోవడాన్ని రక్షిస్తుంది",
        "తీవ్రమైన మెడ మరియు తలనొప్పి తగ్గుతాయి"
      ]
    }
  ],

  // 4. STROKE CARE
  "stroke-care": [
    {
      id: "aneurysm-surgery-stroke",
      nameEn: "Aneurysm Surgery",
      nameTe: "అనూరిజమ్ సర్జరీ (స్ట్రోక్ నివారణ & క్లిప్పింగ్)",
      category: "Hemorrhagic Stroke Intervention",
      categoryTe: "మెదడు రక్తస్రావ నివారణ",
      badge: "Emergency Stroke Protocol",
      descEn: "Urgent microsurgical clipping of cerebral aneurysms presenting with acute subarachnoid hemorrhage. Seals off the aneurysm to prevent catastrophic secondary re-bleeds and vasospasm complications.",
      descTe: "మెదడులో రక్తనాళం పగిలి తీవ్రమైన రక్తస్రావం (హెమరేజిక్ స్ట్రోక్) జరిగినప్పుడు, అత్యాధునిక క్లిప్ ద్వారా ఆ రక్తనాళాన్ని మూసివేసి ప్రాణాలను రక్షించే అత్యవసర శస్త్రచికిత్స.",
      recoveryTime: "5 – 10 Days Intensive Neuro-ICU & Ward",
      recoveryTimeTe: "5 – 10 రోజుల న్యూరో-ఐసీయూ & వార్డ్ సంరక్షణ",
      benefits: [
        "Immediately stops repeated bleeding with high survival rates",
        "Prevents brain tissue infarction from arterial vasospasm",
        "Definitive life-saving neurosurgical intervention"
      ],
      benefitsTe: [
        "మళ్లీ రక్తస్రావం కాకుండా నిరోధించి ప్రాణాలను కాపాడుతుంది",
        "మెదడు రక్తనాళాల సంకోచాన్ని నివారిస్తుంది",
        "స్ట్రోక్ నుండి త్వరగా కోలుకోవడానికి సహాయపడుతుంది"
      ]
    },
    {
      id: "avm-surgery-stroke",
      nameEn: "Arteriovenous Malformation (AVM) Surgery",
      nameTe: "ఆర్టీరియోవీనస్ మాల్‌ఫార్మేషన్ (AVM) సర్జరీ",
      category: "Vascular Stroke Care",
      categoryTe: "రక్తనాళాల చిక్కుల సర్జరీ",
      badge: "Microsurgical Eradication",
      descEn: "Urgent or staged microsurgical resection of bleeding vascular malformations in the brain, evacuating associated intracerebral clots and completely removing abnormal high-flow vascular shunts.",
      descTe: "మెదడులో జన్మతః ఉండే రక్తనాళాల చిక్కులు పగిలి రక్తం కారినప్పుడు, ఆ గడ్డను మరియు అసాధారణ రక్తనాళాలను శస్త్రచికిత్స ద్వారా పూర్తిగా తొలగించి పక్షవాతాన్ని నివారించే ప్రక్రియ.",
      recoveryTime: "5 – 8 Days Specialized Hospitalization",
      recoveryTimeTe: "5 – 8 రోజుల ఆసుపత్రి సంరక్షణ",
      benefits: [
        "Completely eliminates the nidus preventing further hemorrhages",
        "Decompresses brain parenchyma to rescue speech and motor skills",
        "Curative vascular solution without ongoing rupture risk"
      ],
      benefitsTe: [
        "రక్తస్రావ మూలాన్ని సమూలంగా తొలగిస్తుంది",
        "మెదడుపై ఒత్తిడి తగ్గి మాట మరియు కాళ్ల, చేతుల కదలికలు మెరుగవుతాయి",
        "భవిష్యత్తులో స్ట్రోక్ ప్రమాదం లేకుండా సంపూర్ణ రక్షణ"
      ]
    },
    {
      id: "brain-hemorrhage-burr-hole",
      nameEn: "Brain Hemorrhage Surgery / Burr Hole Surgery",
      nameTe: "బ్రెయిన్ హెమరేజ్ సర్జరీ / బర్ హోల్ సర్జరీ",
      category: "Emergency Decompression",
      categoryTe: "అత్యవసర హెమటోమా తొలగింపు",
      badge: "Life-Saving Drainage",
      descEn: "Rapid emergency evacuation of intracerebral hematomas or subdural clots through mini-craniotomy or precision burr-holes under CT guidance, instantly relieving lethal intracranial pressure spikes.",
      descTe: "అధిక రక్తపోటు లేదా గాయం వల్ల మెదడులో రక్తం గడ్డకట్టినప్పుడు (బ్రెయిన్ హెమరేజ్), బర్ హోల్ లేదా చిన్న క్రేనియోటమీ ద్వారా ఆ రక్తాన్ని వెంటనే తొలగించి ప్రాణాలను కాపాడే అత్యవసర ప్రక్రియ.",
      recoveryTime: "3 – 6 Days Inpatient Hospitalization",
      recoveryTimeTe: "3 – 6 రోజుల ఆసుపత్రి సంరక్షణ",
      benefits: [
        "Rapidly reverses brain herniation and deep coma",
        "Minimizes secondary neuronal ischemia and brain swelling",
        "High success rate when performed within the golden window"
      ],
      benefitsTe: [
        "కోమా మరియు ప్రాణాంతక పరిస్థితి నుండి రోగిని కాపాడుతుంది",
        "మెదడు కణాలకు రక్తప్రసరణను తిరిగి అందిస్తుంది",
        "సరైన సమయంలో చేస్తే పక్షవాతం నుండి వేగంగా కోలుకోవచ్చు"
      ]
    }
  ],

  // 5. BRAIN TUMOUR CARE
  "brain-tumour-care": [
    {
      id: "brain-tumor-surgery-oncology",
      nameEn: "Brain Tumor Surgery",
      nameTe: "బ్రెయిన్ ట్యూమర్ సర్జరీ (మెదడు కణితి సంరక్షణ)",
      category: "Cranial Oncology",
      categoryTe: "క్రేనియల్ ఆంకాలజీ",
      badge: "Microsurgical Care",
      descEn: "Comprehensive microsurgical craniotomy designed for radical resection of cranial tumors using intraoperative ultrasound, navigation guidance, and brain-mapping protocols.",
      descTe: "ఆధునిక ఇంట్రాఆపరేటివ్ అల్ట్రాసౌండ్ మరియు న్యూరో-నావిగేషన్ సహాయంతో మెదడులోని కణితిని అత్యంత సురక్షితంగా మరియు గరిష్టంగా తొలగించే సమగ్ర శస్త్రచికిత్స.",
      recoveryTime: "3 – 5 Days Hospitalization",
      recoveryTimeTe: "3 – 5 రోజుల ఆసుపత్రి బస",
      benefits: [
        "Radical cytoreduction improving long-term prognosis",
        "Alleviates elevated intracranial pressure and morning nausea",
        "Enables genetic profiling and targeted oncological therapies"
      ],
      benefitsTe: [
        "కణితి పరిమాణాన్ని సమర్థవంతంగా తగ్గించి ఆయుష్షును పెంచుతుంది",
        "ఉదయం పూట వచ్చే తలనొప్పి మరియు వాంతులను తగ్గిస్తుంది",
        "కచ్చితమైన బయాప్సీ ఆధారంగా తదుపరి సరైన వైద్యం అందించవచ్చు"
      ]
    },
    {
      id: "glioma-surgery-oncology",
      nameEn: "Glioma Surgery",
      nameTe: "గ్లియోమా సర్జరీ (ఆస్ట్రోసైటోమా & గ్లియోబ్లాస్టోమా)",
      category: "Infiltrative Brain Tumors",
      categoryTe: "ఇన్‌ఫిల్ట్రేటివ్ ట్యూమర్ సర్జరీ",
      badge: "Image-Guided 5-ALA",
      descEn: "Maximal safe resection of low-grade astrocytomas and high-grade glioblastomas utilizing fluorescence guidance (5-ALA) and cortical stimulation mapping to safeguard motor pathways.",
      descTe: "మెదడులోని గ్లియోమా కణితులకు అత్యాధునిక 5-ALA ఫ్లోరోసెన్స్ మరియు ఎలక్ట్రికల్ మ్యాపింగ్ ద్వారా నరాలకు ఎలాంటి నష్టం లేకుండా కణితిని సమూలంగా తొలగించే ప్రక్రియ.",
      recoveryTime: "4 – 6 Days Inpatient Care",
      recoveryTimeTe: "4 – 6 రోజుల ఆసుపత్రి సంరక్షణ",
      benefits: [
        "Maximal safe cytoreduction prolonging survival",
        "Delineates invisible tumor margins under blue light filter",
        "Protects language, motor coordination, and comprehension"
      ],
      benefitsTe: [
        "రోగి జీవన కాలాన్ని మరియు జీవన నాణ్యతను పెంచుతుంది",
        "బ్లూ లైట్ ద్వారా సాధారణ కంటికి కనిపించని కణితిని గుర్తిస్తుంది",
        "రోగి మాట మరియు కదలికలను కాపాడుతుంది"
      ]
    },
    {
      id: "meningioma-surgery-oncology",
      nameEn: "Meningioma Surgery",
      nameTe: "మెనింజియోమా సర్జరీ (మెదడు పొరల కణితి)",
      category: "Extra-Axial Cranial Tumors",
      categoryTe: "ఎక్స్‌ట్రా-ఆక్సియల్ ట్యూమర్ సర్జరీ",
      badge: "Simpson Grade I Resection",
      descEn: "Surgical removal of meningiomas originating from the arachnoid cap cells. Complete removal of tumor, dural attachment, and involved bone achieves definitive long-term cure in most cases.",
      descTe: "మెదడు రక్షణ పొరలలో ఏర్పడే కణితులను మరియు వాటి అటాచ్‌మెంట్‌ను మైక్రోసర్జరీ ద్వారా పూర్తిగా తొలగించే పద్ధతి. ఇది శాశ్వతంగా నయం అయ్యే అత్యధిక అవకాశాలను అందిస్తుంది.",
      recoveryTime: "3 – 5 Days Inpatient Stay",
      recoveryTimeTe: "3 – 5 రోజుల ఆసుపత్రి బస",
      benefits: [
        "Curative Simpson Grade I/II resection in majority of cases",
        "Reverses seizure activity and neurological focal deficits",
        "Reconstruction with autologous pericranium or synthetic dura"
      ],
      benefitsTe: [
        "ఎక్కువ సందర్భాల్లో కణితి పూర్తిగా తొలగించబడి శాశ్వత నివారణ",
        "ఫిట్స్ మరియు నరాల బలహీనత అదుపులోకి వస్తాయి",
        "సహజసిద్ధమైన పొరలతో మెదడు రక్షణను పునరుద్ధరిస్తారు"
      ]
    },
    {
      id: "pituitary-adenoma-surgery-oncology",
      nameEn: "Pituitary Adenoma Surgery",
      nameTe: "పిట్యూటరీ ఎడినోమా సర్జరీ (ఎండోస్కోపిక్ ట్రాన్స్‌స్ఫెనాయిడల్)",
      category: "Endoscopic Skull Base",
      categoryTe: "ఎండోస్కోపిక్ స్కల్ బేస్",
      badge: "Scarless / Keyhole",
      descEn: "Pure endoscopic endonasal approach through natural nasal passages into the sphenoid sinus to resect non-functioning and hormone-secreting pituitary macroadenomas.",
      descTe: "ఎలాంటి బాహ్య కోత లేకుండా ముక్కు ద్వారా ఎండోస్కోప్ సహాయంతో పిట్యూటరీ కణితిని సురక్షితంగా తొలగించే అత్యాధునిక శస్త్రచికిత్స.",
      recoveryTime: "2 – 3 Days Inpatient Recovery",
      recoveryTimeTe: "2 – 3 రోజుల ఆసుపత్రి రికవరీ",
      benefits: [
        "Zero facial incisions, minimal sinus pain, and rapid recovery",
        "Immediate decompression of visual optic pathways",
        "Controls hypersecretory hormone syndromes (Acromegaly, Cushing's)"
      ],
      benefitsTe: [
        "ఎలాంటి బాహ్య గాట్లు లేదా మచ్చలు ఉండవు, నొప్పి చాలా తక్కువ",
        "కంటి నరాలపై ఒత్తిడి తగ్గి చూపు తక్షణమే మెరుగవుతుంది",
        "హార్మోన్ల అసాధారణ పెరుగుదలను అరికడుతుంది"
      ]
    },
    {
      id: "acoustic-neuroma-surgery-oncology",
      nameEn: "Acoustic Neuroma Surgery",
      nameTe: "ఎకౌస్టిక్ న్యూరోమా సర్జరీ (వెస్టిబ్యులర్ ష్వాన్నోమా)",
      category: "Skull Base Microsurgery",
      categoryTe: "స్కల్ బేస్ మైక్రోసర్జరీ",
      badge: "Facial Nerve Preservation",
      descEn: "Retrosigmoid or translabyrinthine microsurgical resection of vestibular schwannomas with continuous intraoperative monitoring of cranial nerve VII (facial nerve) and brainstem reflexes.",
      descTe: "చెవి వెనుక నుండి మైక్రోస్కోప్ ద్వారా వినికిడి నరంపై వచ్చిన కణితిని ముఖ నరం దెబ్బతినకుండా జాగ్రత్తగా తొలగించే సున్నితమైన సర్జరీ.",
      recoveryTime: "4 – 6 Days Inpatient Stay",
      recoveryTimeTe: "4 – 6 రోజుల ఆసుపత్రి బస",
      benefits: [
        "Preserves facial nerve symmetry and blink reflexes",
        "Prevents brainstem shift and obstructive hydrocephalus",
        "Radical excision stops tumor regrowth"
      ],
      benefitsTe: [
        "ముఖ కండరాలు వంకరపోకుండా ముఖ నరాన్ని కాపాడుతుంది",
        "మెదడు కాండంపై ప్రాణాంతక ఒత్తిడిని తొలగిస్తుంది",
        "కణితి మళ్లీ పెరగకుండా సమగ్ర చికిత్స"
      ]
    },
    {
      id: "spinal-tumor-surgery-oncology",
      nameEn: "Spinal Tumor Surgery",
      nameTe: "స్పైనల్ ట్యూమర్ సర్జరీ (వెన్నెముక కణితి తొలగింపు)",
      category: "Spinal Oncology",
      categoryTe: "స్పైనల్ ఆంకాలజీ",
      badge: "Microsurgical Neuromonitoring",
      descEn: "Microsurgical resection of primary and metastatic spinal column tumors (schwannomas, ependymomas, neurofibromas) with real-time spinal cord motor evoking monitoring.",
      descTe: "వెన్నుపాము నరాలపై వచ్చే కణితులను మోటార్ న్యూరో మానిటరింగ్ సహాయంతో కాళ్లు, చేతుల బలం తగ్గకుండా మైక్రోస్కోప్ ద్వారా సురక్షితంగా తొలగించే ప్రక్రియ.",
      recoveryTime: "3 – 5 Days Inpatient Stay",
      recoveryTimeTe: "3 – 5 రోజుల ఆసుపత్రి బస",
      benefits: [
        "Decompresses neural tissue restoring motor strength",
        "Relieves severe localized spine pain and nocturnal pain",
        "Spine column reconstruction ensures lifelong stability"
      ],
      benefitsTe: [
        "నరాల ఒత్తిడి తగ్గి కాళ్లలో నడిచే బలం పుంజుకుంటుంది",
        "రాత్రి వేళల్లో వచ్చే తీవ్రమైన వెన్ను నొప్పి తగ్గుతుంది",
        "వెన్నెముక స్థిరత్వాన్ని కాపాడుతుంది"
      ]
    },
    {
      id: "endoscopic-tumor-resection",
      nameEn: "Endoscopic Tumor Resection",
      nameTe: "ఎండోస్కోపిక్ ట్యూమర్ రిసెక్షన్",
      category: "Minimally Invasive Oncology",
      categoryTe: "మినిమల్లీ ఇన్వాసివ్ ఆంకాలజీ",
      badge: "Keyhole Scope",
      descEn: "Use of high-definition neuro-endoscopes to enter ventricles or skull base cavities through burr holes or nasal corridors to excise colloid cysts, intraventricular lesions, and craniopharyngiomas.",
      descTe: "అత్యాధునిక ఎండోస్కోప్ ద్వారా చిన్న రంధ్రం గుండా మెదడులోని నీటి గదులు (వెంట్రికల్స్) లేదా ముక్కు ద్వారా లోపలి కణితులను చిన్న కోతతో తొలగించే విధానం.",
      recoveryTime: "2 – 3 Days Inpatient Recovery",
      recoveryTimeTe: "2 – 3 రోజుల ఆసుపత్రి రికవరీ",
      benefits: [
        "Eliminates large craniotomies and heavy brain retraction",
        "Clear wide-angle illumination of deep surgical corners",
        "Significantly shorter hospital length of stay"
      ],
      benefitsTe: [
        "పెద్ద శస్త్రచికిత్స అవసరం లేకుండా చిన్న రంధ్రంతో సర్జరీ",
        "లోతైన ప్రదేశాలలో కూడా స్పష్టమైన కెమెరా వీక్షణ",
        "త్వరితగతిన కోలుకుని ఇంటికి వెళ్లవచ్చు"
      ]
    },
    {
      id: "pediatric-brain-tumor-surgery",
      nameEn: "Pediatric Brain Tumor Surgery",
      nameTe: "పీడియాట్రిక్ బ్రెయిన్ ట్యూమర్ సర్జరీ (పిల్లల మెదడు కణితి చికిత్స)",
      category: "Pediatric Neurosurgery",
      categoryTe: "పీడియాట్రిక్ న్యూరోసర్జరీ",
      badge: "Child-Centric Protocol",
      descEn: "Compassionate, gentle surgical resection tailored for infants and children with medulloblastomas, juvenile pilocytic astrocytomas, and craniopharyngiomas by neurosurgeons.",
      descTe: "పిల్లలలో వచ్చే మెదడు కణితులకు అత్యంత శ్రద్ధతో, వారి సున్నితమైన మెదడు ఎదుగుదలకు ఎటువంటి ఆటంకం కలగకుండా ప్రత్యేక సాంకేతికతతో చేసే శస్త్రచికిత్స.",
      recoveryTime: "4 – 7 Days Specialized Pediatric Care",
      recoveryTimeTe: "4 – 7 రోజుల ప్రత్యేక పిల్లల వార్డ్ సంరక్షణ",
      benefits: [
        "Dedicated pediatric neuro-anesthesia and monitoring",
        "Curative resection for juvenile pilocytic astrocytomas",
        "Protects developing child cognition, vision, and growth"
      ],
      benefitsTe: [
        "పిల్లల కొరకు ప్రత్యేక మత్తు మరియు భద్రతా నిపుణులు",
        "చాలా రకాల పిల్లల కణితులను పూర్తిగా నయం చేయవచ్చు",
        "పిల్లల భవిష్యత్తు ఎదుగుదల, తెలివితేటలు మరియు చూపును కాపాడుతుంది"
      ]
    },
    {
      id: "awake-craniotomy-oncology",
      nameEn: "Awake Craniotomy",
      nameTe: "అవేక్ క్రేనియోటమీ (రోగి మెలకువతో ఉండే కణితి శస్త్రచికిత్స)",
      category: "Eloquent Cortex Surgery",
      categoryTe: "కీలక మెదడు కేంద్రాల శస్త్రచికిత్స",
      badge: "Real-Time Brain Mapping",
      descEn: "Intraoperative cortical mapping during tumor removal with the patient conscious, ensuring eloquent speech, language comprehension, and motor control centers remain unharmed.",
      descTe: "రోగికి నొప్పి తెలియకుండా లోకల్ అనస్థీషియా ఇచ్చి, వారు మెలకువగా ఉన్నప్పుడే మాట్లాడుతూ కణితిని తొలగించే విప్లవాత్మక విధానం. దీనివల్ల మాట మరియు తెలివితేటలు దెబ్బతినవు.",
      recoveryTime: "2 – 4 Days Inpatient Stay",
      recoveryTimeTe: "2 – 4 రోజుల ఆసుపత్రి బస",
      benefits: [
        "Permits radical tumor removal in previously 'inoperable' zones",
        "Active continuous verbal feedback during resection",
        "Zero long-term speech impediment or paralysis risk"
      ],
      benefitsTe: [
        "ఆపరేషన్ చేయలేము అనుకున్న సున్నిత ప్రాంతాలలో కూడా సురక్షితంగా చేయవచ్చు",
        "సర్జరీ జరుగుతుండగానే డాక్టర్‌తో రోగి మాట్లాడవచ్చు",
        "శాశ్వత మాట లోపం లేదా పక్షవాతం రాకుండా 100% రక్షణ"
      ]
    }
  ],

  // 6. EPILEPSY & SEIZURE DISORDERS
  epilepsy: [
    {
      id: "epilepsy-surgery-seizure",
      nameEn: "Epilepsy Surgery",
      nameTe: "ఎపిలెప్సీ సర్జరీ (మూర్ఛ & ఫిట్స్ నివారణ శస్త్రచికిత్స)",
      category: "Curative Epileptology",
      categoryTe: "మూర్ఛ వ్యాధి నివారణ శస్త్రచికిత్స",
      badge: "Curative / Resective",
      descEn: "Comprehensive pre-surgical video-EEG mapping followed by focal lesionectomy, anterior temporal lobectomy, or selective amygdalohippocampectomy to cure drug-resistant epilepsy.",
      descTe: "వీడియో-ఈఈజీ పరీక్షల ద్వారా మెదడులో ఫిట్స్ మొదలయ్యే కచ్చితమైన బిందువును గుర్తించి, ఆ భాగాన్ని తొలగించి ఫిట్స్ నుండి శాశ్వత విముక్తి కలిగించే అత్యాధునిక శస్త్రచికిత్స.",
      recoveryTime: "3 – 5 Days Specialized Care",
      recoveryTimeTe: "3 – 5 రోజుల ప్రత్యేక ఆసుపత్రి సంరక్షణ",
      benefits: [
        "Up to 80% achieve complete freedom from disabling seizures",
        "Dramatically reduces anti-epileptic drug toxicity & side effects",
        "Enables driving, employment, and active social life"
      ],
      benefitsTe: [
        "80% మంది రోగులలో ఫిట్స్ శాశ్వతంగా ఆగిపోతాయి",
        "అధిక మోతాదు మందుల వల్ల వచ్చే సైడ్ ఎఫెక్ట్స్ నుండి విముక్తి",
        "చదువు, ఉద్యోగం మరియు సాధారణ సామాజిక జీవితం గడపవచ్చు"
      ]
    }
  ],

  // 7. NERVE & CHRONIC PAIN CARE
  "nerve-pain-care": [
    {
      id: "carpal-tunnel-release",
      nameEn: "Carpal Tunnel Release",
      nameTe: "కార్పల్ టన్నెల్ రిలీజ్ (చేతి మణికట్టు నరం సర్జరీ)",
      category: "Peripheral Nerve Decompression",
      categoryTe: "చేతి నరాల ఒత్తిడి నివారణ",
      badge: "Day Care / Keyhole",
      descEn: "Minimally invasive open or endoscopic release of the transverse carpal ligament, relieving median nerve compression at the wrist to cure nocturnal hand numbness, tingling, and grip weakness.",
      descTe: "చేతి మణికట్టు వద్ద నరం నలగడం వల్ల రాత్రి పూట చేతులు తిమ్మిర్లు పట్టడం, సూదులు గుచ్చినట్లు ఉండటం వంటి సమస్యలకు చిన్న కోత ద్వారా నరాన్ని విడిపించే శస్త్రచికిత్స.",
      recoveryTime: "Day Care (Go home in 2 hours)",
      recoveryTimeTe: "డే కేర్ (2 గంటల్లో ఇంటికి వెళ్లవచ్చు)",
      benefits: [
        "Immediate relief from painful nocturnal finger tingling",
        "Prevents permanent thenar thumb muscle wasting",
        "Resume light daily activities within 24 to 48 hours"
      ],
      benefitsTe: [
        "రాత్రి పూట చేతులు తిమ్మిర్లు పట్టడం వెంటనే ఆగిపోతుంది",
        "బొటనవేలి కండరాలు క్షీణించకుండా కాపాడుతుంది",
        "24-48 గంటల్లోనే సాధారణ పనులు చేసుకోవచ్చు"
      ]
    },
    {
      id: "ulnar-nerve-decompression",
      nameEn: "Ulnar Nerve Decompression",
      nameTe: "అల్నార్ నెర్వ్ డీకంప్రెషన్ (మోచేతి నరం సర్జరీ)",
      category: "Cubital Tunnel Syndrome",
      categoryTe: "క్యూబిటల్ టన్నెల్ సిండ్రోమ్",
      badge: "Nerve Transposition",
      descEn: "Decompression or anterior subfascial transposition of the ulnar nerve at the cubital tunnel in the elbow, relieving nerve pinch that causes pinky/ring finger numbness and hand clawing.",
      descTe: "మోచేతి వెనుక అల్నార్ నరం నలిగిపోవడం వల్ల చిటికెన మరియు ఉంగరపు వేళ్లలో తిమ్మిర్లు, చేతి పట్టు తగ్గడం వంటి సమస్యలను నరంపై ఒత్తిడిని తొలగించి సరిచేసే చికిత్స.",
      recoveryTime: "Day Care to 1 Day Stay",
      recoveryTimeTe: "డే కేర్ లేదా 1 రోజు ఆసుపత్రి బస",
      benefits: [
        "Cures numbness and tingling in the little & ring fingers",
        "Halts intrinsic hand muscle atrophy and claw deformity",
        "Restores fine motor precision for writing and typing"
      ],
      benefitsTe: [
        "వేళ్లలో తిమ్మిర్లు మరియు మంటలు పూర్తిగా తగ్గుతాయి",
        "చేతి కండరాలు బలహీనపడకుండా మరియు వంకరపోకుండా కాపాడుతుంది",
        "రాయడం, టైపింగ్ వంటి పనులకు చేతి బలం పుంజుకుంటుంది"
      ]
    },
    {
      id: "radial-nerve-repair",
      nameEn: "Radial Nerve Repair",
      nameTe: "రేడియల్ నెర్వ్ రిపేర్ (చేతి మణికట్టు పడిపోవడం/రిస్ట్ డ్రాప్)",
      category: "Nerve Reconstruction",
      categoryTe: "నరాల పునర్నిర్మాణం",
      badge: "Microsurgical Neurolysis",
      descEn: "Microsurgical neurolysis, direct primary coaptation, or sural nerve grafting for radial nerve injuries in humeral fractures, restoring active wrist extension and finger lift.",
      descTe: "భుజం ఎముక విరగడం లేదా గాయాల వల్ల రేడియల్ నరం దెబ్బతిని మణికట్టు కిందకు పడిపోయినప్పుడు (రిస్ట్ డ్రాప్), మైక్రోసర్జరీ ద్వారా ఆ నరాన్ని అతికించి చేతి కదలికలను పునరుద్ధరించే ప్రక్రియ.",
      recoveryTime: "1 – 2 Days Hospital Care",
      recoveryTimeTe: "1 – 2 రోజుల ఆసుపత్రి సంరక్షణ",
      benefits: [
        "Reverses debilitating wrist drop and thumb abduction loss",
        "High-magnification epineurial microsuture technique",
        "Restores powerful hand grasping and lifting ability"
      ],
      benefitsTe: [
        "మణికట్టు కిందకు పడిపోయే సమస్యను సరిచేస్తుంది",
        "అత్యాధునిక మైక్రోస్కోప్ ద్వారా నరాన్ని సూక్ష్మంగా అతికిస్తారు",
        "చేత్తో వస్తువులను పట్టుకునే బలాన్ని తిరిగి తెస్తుంది"
      ]
    },
    {
      id: "brachial-plexus-surgery",
      nameEn: "Brachial Plexus Surgery",
      nameTe: "బ్రేకియల్ ప్లెక్సస్ సర్జరీ (భుజం & చేతి నరాల పునర్నిర్మాణం)",
      category: "Complex Peripheral Nerve",
      categoryTe: "క్లిష్టమైన పెరిఫెరల్ నరాల శస్త్రచికిత్స",
      badge: "Neurotization / Nerve Transfer",
      descEn: "Advanced reconstructive microsurgery utilizing intraoperative nerve stimulation, nerve transfers (neurotization), and autologous cable grafts following severe bike crash shoulder traction trauma.",
      descTe: "బైక్ లేదా రోడ్డు ప్రమాదాలలో భుజం నుండి చేతికి వెళ్లే ప్రధాన నరాల గుత్తి తెగిపోయినప్పుడు (బ్రేకియల్ ప్లెక్సస్), ఇతర నరాలను బదిలీ చేసి చేతికి తిరిగి ప్రాణం పోసే అత్యంత ఆధునిక మైక్రోసర్జరీ.",
      recoveryTime: "3 – 5 Days Inpatient Stay",
      recoveryTimeTe: "3 – 5 రోజుల ఆసుపత్రి బస",
      benefits: [
        "Restores active shoulder abduction and elbow flexion",
        "Employs advanced nerve transfer techniques",
        "Prevents permanent flail arm limb disability"
      ],
      benefitsTe: [
        "చేతిని పైకి ఎత్తడం, మోచేయిని మడవడం సాధ్యమవుతుంది",
        "అత్యాధునిక నర్వ్ ట్రాన్స్‌ఫర్ పద్ధతుల ద్వారా వేగంగా ఫలితాలు",
        "చేయి చచ్చుబడిపోకుండా శాశ్వత వైకల్యాన్ని అరికడుతుంది"
      ]
    },
    {
      id: "trigeminal-neuralgia-surgery-nerve",
      nameEn: "Trigeminal Neuralgia Surgery",
      nameTe: "ట్రైజెమినల్ న్యూరాల్జియా సర్జరీ (ముఖం తీవ్ర నొప్పి నివారణ)",
      category: "Cranial Nerve Pain",
      categoryTe: "ముఖ నరాల నొప్పి చికిత్స",
      badge: "MVD Microvascular Decompression",
      descEn: "Microvascular Decompression (MVD) separating aberrant vascular loops from the trigeminal nerve root entry zone, eradicating suicide-level electric stabbing facial pains.",
      descTe: "ముఖంలో వచ్చే భరించలేని సూదులు గుచ్చినట్లు ఉండే నొప్పులకు, చెవి వెనుక చిన్న కోత ద్వారా నరంపై ఒత్తిడిని తొలగించే శాశ్వత మైక్రోసర్జరీ.",
      recoveryTime: "2 – 3 Days Inpatient Recovery",
      recoveryTimeTe: "2 – 3 రోజుల ఆసుపత్రి రికవరీ",
      benefits: [
        "Immediate cure from severe shooting shock sensations",
        "Permanent outcome without facial numbness",
        "Discontinue toxic doses of carbamazepine"
      ],
      benefitsTe: [
        "షాక్ కొట్టినట్లు వచ్చే తీవ్రమైన ముఖం నొప్పి శాశ్వతంగా నయమవుతుంది",
        "ముఖ స్పర్శకు ఎటువంటి నష్టం కలగదు",
        "తీవ్రమైన పెయిన్ కిల్లర్ మందుల వాడకం ఆగిపోతుంది"
      ]
    },
    {
      id: "spinal-cord-stimulation",
      nameEn: "Spinal Cord Stimulation (SCS)",
      nameTe: "స్పైనల్ కార్డ్ స్టిమ్యులేషన్ (SCS - నొప్పి నివారణ పేస్‌మేకర్)",
      category: "Neuromodulation Pain Care",
      categoryTe: "న్యూరోమోడ్యులేషన్ పెయిన్ కేర్",
      badge: "Pain Pacemaker",
      descEn: "Implantation of epidural neurostimulation leads connected to a programmable rechargeable generator that masks refractory neuropathic pain and failed back surgery syndrome (FBSS) with gentle soothing tingling sensations.",
      descTe: "గతంలో శస్త్రచికిత్సలు జరిగినా తగ్గని మొండి నడుము నొప్పులు, కాళ్ల నరాల మంటలకు వెన్నుపాము వద్ద సూక్ష్మ ఎలక్ట్రోడ్ అమర్చి నొప్పి సంకేతాలు మెదడుకు చేరకుండా ఆపే అత్యాధునిక పేస్‌మేకర్ లాంటి పరికరం.",
      recoveryTime: "Day Care Trial / 1 Day Permanent Implant",
      recoveryTimeTe: "డే కేర్ ట్రయల్ / 1 రోజు శాశ్వత ఇంప్లాంట్",
      benefits: [
        "Try-before-you-buy: 5-day temporary trial to prove efficacy",
        "Over 60-80% reduction in intractable chronic pain",
        "Dramatically reduces opioid and neuropathic medication usage"
      ],
      benefitsTe: [
        "ముందుగా 5 రోజుల పాటు తాత్కాలిక ట్రయల్ ద్వారా ఫలితం సరిచూసుకోవచ్చు",
        "మొండి దీర్ఘకాలిక నొప్పులు 60-80% వరకు తగ్గుతాయి",
        "మత్తు మందులు, పెయిన్ కిల్లర్ల అవసరం గణనీయంగా తగ్గుతుంది"
      ]
    },
    {
      id: "baclofen-pump-implantation",
      nameEn: "Baclofen Pump Implantation",
      nameTe: "బాక్లోఫెన్ పంప్ ఇంప్లాంటేషన్ (తీవ్ర కండరాల బిగుతు నివారణ)",
      category: "Intrathecal Drug Delivery",
      categoryTe: "ఇంట్రాథీకల్ డ్రగ్ డెలివరీ",
      badge: "Targeted Spasticity Relief",
      descEn: "Subcutaneous abdominal implantation of a precision computerized pump that infuses micro-doses of Baclofen directly into the spinal intrathecal space, releasing severe spasticity caused by cerebral palsy, brain injury, or spinal trauma.",
      descTe: "మెదడు లేదా వెన్నెముక గాయాల వల్ల కాళ్లు, చేతులు తీవ్రంగా బిగుసుకుపోయినప్పుడు (స్పాస్టిసిటీ), పొట్ట కింద చిన్న కంప్యూటరైజ్డ్ పంపును అమర్చి వెన్నుపాముకు నేరుగా అతి సూక్ష్మ మోతాదులో మందు అందించే విధానం.",
      recoveryTime: "2 – 3 Days Inpatient Stay",
      recoveryTimeTe: "2 – 3 రోజుల ఆసుపత్రి బస",
      benefits: [
        "Direct spinal delivery requires 1/100th of oral dose",
        "Eliminates debilitating muscle tightness, spasms, and pain",
        "Facilitates walking, physiotherapy, and comfortable sleep"
      ],
      benefitsTe: [
        "నేరుగా వెన్నుపాముకు చేరడం వల్ల సాధారణ మందులతో పోలిస్తే వందో వంతు మోతాదు సరిపోతుంది",
        "కండరాల తీవ్రమైన బిగుతు, నొప్పులు తగ్గి శరీరం తేలికవుతుంది",
        "నడక, కూర్చోవడం మరియు ప్రశాంతమైన నిద్ర సాధ్యమవుతాయి"
      ]
    }
  ]
};
