# Brain Spine & Neuro Clinic (బ్రెయిన్ స్పైన్ & న్యూరో క్లినిక్)

A complete, premium, responsive **FRONTEND-ONLY React website** for **Brain Spine & Neuro Clinic**. Built with precision medical design, subtle micro-animations, bilingual English & Telugu support, transparent clinical verification badges, and a frontend demonstration admin dashboard.

---

## 🌟 Key Features

### 1. Eight Complete Public Pages
1. **Home (`/`)**:
   - Hospital introduction & Brain & Spine Care message.
   - Hero section with primary "Book an Appointment" and "Explore Specialities" action buttons.
   - High-alert Neurological Emergency Banner with configurable phone placeholder until telecom verification.
   - Key specialities grid with transparent verification badges.
   - Doctor profile cards displaying credentials, Telangana State Medical Council registration, and OPD timings.
   - Advanced facilities showcase (High-Field 3T MRI, Robotic Microsurgery Theatre, Consultation Suites).
   - Patient testimonials section with ethical publication & legal consent disclaimer (no fabricated reviews).
   - Latest health articles preview and comprehensive footer.
2. **About Us (`/about`)**:
   - Hospital overview and founding philosophy.
   - Mission, Vision, and core medical values (Clinical Rigour, Transparent Ethics, Compassionate Healing, Preventive Education).
   - Multidisciplinary patient-care approach continuum.
   - Verified credentials of senior specialists and medical infrastructure.
3. **Specialities & Treatments (`/specialities` and `/specialities/:id`)**:
   - Dedicated cards and individual detail pages for all 7 clinical areas:
     - **Neurology** (`/specialities/neurology`)
     - **Neurosurgery** (`/specialities/neurosurgery`)
     - **Spine Care** (`/specialities/spine-care`)
     - **Stroke Care** (`/specialities/stroke-care`)
     - **Brain Tumour Care** (`/specialities/brain-tumour-care`)
     - **Epilepsy & Seizures** (`/specialities/epilepsy`)
     - **Nerve & Chronic Pain Care** (`/specialities/nerve-pain-care`)
   - Clearly marked as proposed categories awaiting final clinical verification.
   - Each page features conditions addressed, available treatments, patient educational guides, interactive FAQ accordions, and direct appointment CTA.
4. **Book an Appointment (`/appointment`)**:
   - Functional client-side form: Patient name, phone number, optional email, preferred doctor or speciality, preferred date, time window, and symptoms description.
   - Client-side validation with real-time accessible error feedback.
   - Debounced submission preventing duplicate submissions.
   - Saves demo appointment requests locally to `localStorage`.
   - Confirmation modal explaining that the request was stored locally and has **NOT** been transmitted to the clinic.
   - Clearly labeled clinic contact placeholders; never claims an appointment is confirmed.
5. **Emergency Care (`/emergency`)**:
   - Prominent unverified emergency line placeholders.
   - **B.E. F.A.S.T.** stroke recognition guide (Balance, Eyes, Face, Arms, Speech, Time).
   - Neurosurgical & spine emergency red flags (cauda equina, acute weakness, head injury with vomiting).
   - Clear instructions to call **108** for emergency ambulance dispatch.
   - No fabricated 24/7 or ambulance claims.
6. **Gallery (`/gallery`)**:
   - Responsive category filtering: Clinic Interiors, Medical Facilities & Equipment, Health Camps, Events.
   - Responsive image grid with demo imagery disclosures.
   - Custom lightbox modal with keyboard navigation (`Esc`, `←`, `→`).
7. **Health Blog / Patient Education (`/blog` and `/blog/:slug`)**:
   - Educational guides on acute stroke warning signs, lumbar spine ergonomics & sciatica, and seizure first aid.
   - Real-time search by keyword and category filters.
   - Clean medical article layout with reading times, authors, and dates.
   - Clinical review disclaimer: sample educational drafts awaiting qualified clinician review before citation.
   - Related articles recommendations.
8. **Contact Us (`/contact`)**:
   - Clearly labeled placeholders for address, phone, email, and consultation hours.
   - Interactive Google Maps embed simulation.
   - Client-side enquiry message form with success toast.
   - Conditional click-to-call links enabled only after verified details are confirmed.

---

### 2. Bilingual Support (English & Telugu)
- Full **English / తెలుగు** language switcher in the utility header.
- Complete translations for navigation, headings, form labels, error messages, confirmation modals, badges, and medical content.
- Clean separation with dedicated locale files:
  - `src/locales/en.js`
  - `src/locales/te.js`
- Language preference is automatically persisted across navigation and page refreshes via `localStorage`.

---

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Modern UI component architecture |
| **Vite** | Blazing-fast build tool and local dev server |
| **Tailwind CSS v3** | Responsive medical styling and custom color tokens |
| **React Router v7** | Single Page Application (SPA) client-side routing |
| **Framer Motion** | Micro-animations and page entrance transitions |
| **Lucide React** | Clean, accessible healthcare icons |
| **localStorage** | In-browser persistence for demo data and language settings |

---

## 🚀 Running the Project Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### 1. Install Dependencies
```powershell
npm install
```

### 2. Start the Development Server
```powershell
npm run dev
```
The server will start at `http://localhost:5173/`. Open this URL in any browser.

### 3. Build for Production
```powershell
npm run build
```
This generates an optimized, code-split production bundle inside the `dist/` directory.

### 4. Preview the Production Build Locally
```powershell
npm run preview
```

---

## 🌐 Deploying to Vercel

The application is pre-configured for instant zero-configuration deployment to **Vercel** with SPA routing support via `vercel.json`.

### Option A: Deploy via GitHub (Recommended)
1. Initialize a Git repository and push the project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Brain Spine & Neuro Clinic frontend"
   git branch -M main
   git remote add origin https://github.com/<your-username>/brain-spine-neuro-clinic.git
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com).
3. Click **"Add New"** -> **"Project"**.
4. Import your GitHub repository.
5. In the Build & Development Settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click **Deploy**. Vercel will build and assign a public `*.vercel.app` URL.

### Option B: Deploy via Vercel CLI
1. Install the Vercel CLI globally:
   ```bash
   npm i -g vercel
   ```
2. Run deployment from the project root:
   ```bash
   vercel
   ```
3. For production deployment:
   ```bash
   vercel --prod
   ```

---

## 📂 Project Directory Structure

```
d:/WIINWIN/Brain Spine & Neuro Clinic/
├── dist/                         # Optimized production build artifacts
├── public/                       # Static assets
│   ├── favicon.svg               # Medical clinic SVG favicon
│   └── images/                   # High-resolution clinic photography
│       ├── hero.jpg              # Consultation room & 3D neuro MRI scans
│       ├── doctor-sharma.jpg     # Senior neurosurgeon portrait
│       ├── facility-mri.jpg      # 3-Tesla High-Field MRI radiology suite
│       ├── facility-ot.jpg       # Microsurgical & navigation operation theatre
│       ├── clinic-reception.jpg  # Clinic reception & patient lounge
│       └── health-camp.jpg       # Community neuro wellness checkup camp
├── src/
│   ├── components/               # Reusable UI components
│   │   ├── EmergencyBanner.jsx   # Configurable emergency alert banner
│   │   ├── Footer.jsx            # Detailed footer with placeholders & ethics disclaimer
│   │   ├── Lightbox.jsx          # Responsive image lightbox with keyboard nav
│   │   ├── Navbar.jsx            # Sticky header with logo & EN/TE language switcher
│   │   ├── ScrollToTop.jsx       # Route change scroll reset utility
│   │   ├── SeoHelmet.jsx         # Accessible document title & meta description manager
│   │   ├── SpecialityCard.jsx    # Card with icon, description, and verification badge
│   │   └── VerificationBadge.jsx # Visual badge (Verified vs. Pending Verification)
│   ├── context/
│   │   ├── ClinicDataContext.jsx # Central state for settings, appointments, doctors, blog
│   │   └── LanguageContext.jsx   # Bilingual switcher state with localStorage persistence
│   ├── data/
│   │   └── defaultData.js        # Initial verified & proposed clinic datasets
│   ├── locales/
│   │   ├── en.js                 # Complete English translations
│   │   └── te.js                 # Complete Telugu (తెలుగు) translations
│   ├── pages/                    # Complete 8 public healthcare pages
│   │   ├── AboutUs.jsx           # Hospital overview, mission, values, care approach
│   │   ├── Blog.jsx              # Educational blog listing with search & filters
│   │   ├── BlogPost.jsx          # Medical article reader with review status & related posts
│   │   ├── BookAppointment.jsx   # Validated booking form with localStorage demo confirmation
│   │   ├── ContactUs.jsx         # Contact placeholders, map simulation, enquiry form
│   │   ├── EmergencyCare.jsx     # Stroke BE-FAST guide, red flags, urgent instructions
│   │   ├── Gallery.jsx           # Categorized photo gallery with lightbox modal
│   │   ├── Home.jsx              # Hero, specialities, doctors, facilities, ethics notice
│   │   ├── Specialities.jsx      # Clinical departments overview
│   │   └── SpecialityDetail.jsx  # Conditions, treatments, educational guide, FAQs
│   ├── App.jsx                   # Route configuration with code-splitting
│   ├── index.css                 # Tailwind directives, fonts, and custom utilities
│   └── main.jsx                  # Application entry point with providers
├── index.html                    # HTML5 template with Google Fonts (Plus Jakarta & Noto Telugu)
├── package.json                  # Dependencies and build scripts
├── postcss.config.js             # PostCSS Tailwind plugins
├── tailwind.config.js            # Tailored medical color palette & typography
├── vercel.json                   # Vercel SPA routing configuration
└── README.md                     # Documentation
```

---

## ⚖️ Clinical Transparency & Ethical Disclaimers
- **No Unsupported Medical Claims**: All clinical treatments are documented using standard medical nomenclature.
- **Verification Badges**: Proposed services, unverified phone numbers, and draft articles are visually designated with a `Pending Verification` badge.
- **Testimonials**: Authentic patient feedback is displayed only following formal ethical consent in compliance with medical council regulations.
- **Demo Disclosures**: The appointment form clearly notifies users that all data is strictly cached in client-side `localStorage` and never transmitted across public networks.
