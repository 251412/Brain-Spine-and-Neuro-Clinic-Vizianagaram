import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Calendar,
  MessageCircle
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useClinicData } from '../context/ClinicDataContext';
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from './ScrollReveal';

const currentYear = new Date().getFullYear();

export const Footer = () => {
  const { language, t } = useLanguage();
  const { settings, specialities } = useClinicData();

  return (
    <footer className="bg-[#060d1a] text-slate-300 pt-16 pb-10 border-t-2 border-amber-500/30 text-sm w-full">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        <ScrollStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800" staggerDelay={0.08}>
          {/* Clinic Brand Column */}
          <ScrollStaggerItem className="lg:col-span-3 space-y-4">
            <Link to="/" className="flex items-center gap-3.5 group focus:outline-none">
              <img 
                src="/images/clinic-emblem-isolated.png" 
                alt="Brain Spine & Neuro Clinic Emblem" 
                className="h-16 sm:h-20 w-auto object-contain mobile-glow-aura drop-shadow-[0_0_20px_rgba(201,149,36,0.6)] group-hover:scale-105 transition-transform bg-transparent"
              />
              <div className="space-y-0.5">
                <span className="font-black text-white text-base sm:text-lg tracking-tight block uppercase leading-tight drop-shadow-xs">
                  {language === 'te' ? 'బ్రెయిన్ స్పైన్ & న్యూరో క్లినిక్' : 'Brain Spine & Neuro Clinic'}
                </span>
                <span className="text-[11px] sm:text-xs text-white/90 font-bold tracking-wider block">
                  Care • Compassion • Cure
                </span>
                <span className="text-[11px] font-black text-amber-300 tracking-widest block uppercase">
                  {settings.city || 'Vizianagaram'}
                </span>
              </div>
            </Link>

            <p className="text-xs text-white/85 leading-relaxed">
              {language === 'te'
                ? 'మెదడు, వెన్నెముక మరియు నాడీ సంబంధిత రుగ్మతలకు నైతిక, ఖచ్చితమైన మరియు కారుణ్య వైద్య సంరక్షణను అందిస్తున్నాము. అత్యాధునిక శస్త్రచికిత్స మరియు నాడీ వైద్యం.'
                : 'Delivering ethical, precise, and patient-first diagnostics, minimally invasive spine surgery, and neurological care in Vizianagaram.'}
            </p>

            <div className="pt-1 flex items-center gap-2 text-xs text-white font-medium">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 drop-shadow-[0_0_6px_rgba(201,149,36,0.8)]" />
              <span>{language === 'te' ? 'ఆంధ్రప్రదేశ్ మెడికల్ కౌన్సిల్ నమోదిత వైద్యులు' : 'APMC Registered Specialists'}</span>
            </div>
          </ScrollStaggerItem>

          {/* Quick Navigation Headers */}
          <ScrollStaggerItem className="lg:col-span-2">
            <h3 className="text-amber-400 font-bold text-xs mb-4 tracking-wider uppercase flex items-center gap-1.5">
              <span>{language === 'te' ? 'ముఖ్యమైన లింకులు' : 'Quick Navigation'}</span>
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/" className="text-slate-300 hover:text-amber-300 transition-colors">{t.nav.home}</Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-amber-300 transition-colors">{t.nav.about}</Link>
              </li>
              <li>
                <Link to="/specialities" className="text-slate-300 hover:text-amber-300 transition-colors">{t.nav.specialities}</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-slate-300 hover:text-amber-300 transition-colors">{t.nav.gallery}</Link>
              </li>
              <li>
                <Link to="/blog" className="text-slate-300 hover:text-amber-300 transition-colors">{t.nav.blog}</Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-amber-300 transition-colors">{t.nav.contact}</Link>
              </li>
              {/* Emergency Care placed directly on top of Book Appointment */}
              <li>
                <Link to="/emergency" className="text-rose-400 hover:text-rose-300 font-semibold transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse shrink-0" />
                  <span>{t.nav.emergency}</span>
                </Link>
              </li>
              <li>
                <Link to="/appointment" className="text-amber-300 hover:text-amber-200 font-semibold transition-colors flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{t.nav.appointment}</span>
                </Link>
              </li>
            </ul>
          </ScrollStaggerItem>

          {/* Clinical Focus Areas */}
          <ScrollStaggerItem className="lg:col-span-3">
            <h3 className="text-amber-400 font-bold text-xs mb-4 tracking-wider uppercase">
              {language === 'te' ? 'స్పెషాలిటీ విభాగాలు' : 'Specialities & Care'}
            </h3>
            <ul className="space-y-2.5 text-xs">
              {specialities.slice(0, 6).map((spec) => (
                <li key={spec.id}>
                  <Link
                    to={`/specialities/${spec.id}`}
                    className="text-slate-300 hover:text-amber-300 transition-colors flex items-center justify-between group"
                  >
                    <span>{language === 'te' ? spec.nameTe : spec.nameEn}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollStaggerItem>

          {/* Contact Info & Clinic Hours (Matching Image 2 Reference) */}
          <ScrollStaggerItem className="lg:col-span-4 space-y-5">
            <div>
              <h3 className="text-white font-bold text-sm mb-3.5 tracking-wider">
                {language === 'te' ? 'సంప్రదింపు వివరాలు' : 'Contact Info'}
              </h3>

              <div className="space-y-3">
                {/* Main Clinic */}
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">
                      {language === 'te' ? 'మెయిన్ క్లినిక్' : 'Main Clinic'}
                    </span>
                    <p className="leading-snug text-slate-300">
                      {language === 'te' 
                        ? 'గుమ్చి జంక్షన్, శంకరమఠం రోడ్, విజయనగరం – 535002' 
                        : 'Gumchi Junction, Sankaramatam Road, Vizianagaram – 535002'}
                    </p>
                    <a
                      href={settings.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-[11px] text-amber-300 hover:text-amber-200 hover:underline mt-0.5"
                    >
                      Get Directions on Maps →
                    </a>
                  </div>
                </div>

                {/* Emergency 24x7 */}
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <Phone className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">
                      {language === 'te' ? 'అత్యవసరం (24×7)' : 'Emergency (24×7)'}
                    </span>
                    <div className="flex flex-wrap items-center gap-1 font-bold text-amber-300 text-xs mt-0.5">
                      <a href="tel:9908981669" className="hover:text-amber-200 hover:underline">9908981669</a>
                      <span className="text-slate-500">/</span>
                      <a href="tel:9281400151" className="hover:text-amber-200 hover:underline">9281400151</a>
                      <span className="text-slate-500">/</span>
                      <a href="tel:9281400152" className="hover:text-amber-200 hover:underline">9281400152</a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">
                      {language === 'te' ? 'అధికారిక వాట్సాప్' : 'Official WhatsApp'}
                    </span>
                    <a
                      href="https://wa.me/919908981669"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>+91 99089 81669</span>
                      <span className="text-[10px] bg-emerald-950/80 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-500/30">Chat</span>
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <Mail className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">
                      {language === 'te' ? 'ఈమెయిల్' : 'Email'}
                    </span>
                    <a href="mailto:drsankararao99@gmail.com" className="hover:text-amber-300 text-slate-300 transition-colors">
                      drsankararao99@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Clinic Hours */}
            <div className="pt-3 border-t border-slate-800">
              <h3 className="text-white font-bold text-sm mb-3 tracking-wider">
                {language === 'te' ? 'క్లినిక్ సమయాలు' : 'Clinic Hours'}
              </h3>

              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-2.5 text-slate-300">
                  <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Gumchi Junction</span>
                    <span className="text-slate-400">24×7 Emergency Available</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-slate-300">
                  <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Bobbili Branch</span>
                    <span className="text-slate-400">Tue & Fri: 4 PM – 9 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Follow Us with Facebook & Instagram profile links */}
            <div className="pt-3 border-t border-slate-800">
              <h3 className="text-white font-bold text-sm mb-3 tracking-wider">
                {language === 'te' ? 'మమ్మల్ని అనుసరించండి' : 'Follow Us'}
              </h3>
              <div className="flex items-center gap-3">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/drsankararao99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800/90 hover:bg-[#1877F2] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 border border-slate-700 hover:border-blue-400 shadow-md hover:scale-110 active:scale-95 group"
                  aria-label="Facebook Profile - Dr. Reddi Sankara Rao"
                  title="Follow Dr. Reddi Sankara Rao on Facebook"
                >
                  <svg className="w-4 h-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/drreddisankararao99/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800/90 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 border border-slate-700 hover:border-pink-400 shadow-md hover:scale-110 active:scale-95 group"
                  aria-label="Instagram Profile - Dr. Reddi Sankara Rao"
                  title="Follow Dr. Reddi Sankara Rao on Instagram"
                >
                  <svg className="w-4 h-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </ScrollStaggerItem>
        </ScrollStagger>

        {/* Bottom copyright, emergency link & Win Win technologies credit */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/75">
            <p className="text-white/80">© {currentYear} Brain Spine & Neuro Clinic, Vizianagaram. All rights reserved.</p>
            
            {/* Powered by Win Win technologies - Vibrant Mobile Glow */}
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/95 border border-amber-400/50 text-white shadow-[0_0_18px_rgba(201,149,36,0.4)] mobile-glow-gold">
              <span className="text-white/85 font-medium">Powered by</span>
              <span className="font-extrabold text-amber-300 tracking-wide drop-shadow-[0_0_10px_rgba(201,149,36,0.85)]">
                Win Win technologies
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Link to="/emergency" className="text-rose-400 hover:text-rose-300 font-semibold transition-colors flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse shadow-[0_0_8px_rgba(244,63,94,0.8)]" />
                <span>{language === 'te' ? 'అత్యవసర చికిత్స మార్గదర్శకాలు' : '24/7 Emergency Guidelines'}</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
