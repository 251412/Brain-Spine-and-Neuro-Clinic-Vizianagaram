import React from 'react';
import { Activity } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useClinicData } from '../context/ClinicDataContext';
import { SeoHelmet } from '../components/SeoHelmet';
import { SpecialityCard } from '../components/SpecialityCard';
import { PageHero } from '../components/PageHero';
import { ScrollStagger, ScrollStaggerItem } from '../components/ScrollReveal';

export const Specialities = () => {
  const { language, t } = useLanguage();
  const { specialities } = useClinicData();

  return (
    <div className="min-h-screen bg-[#FCFAF5]">
      <SeoHelmet 
        title={language === 'te' ? 'స్పెషాలిటీలు & చికిత్సలు - బ్రెయిన్ స్పైన్ & న్యూరో క్లినిక్' : 'Specialities & Treatments - Brain Spine & Neuro Clinic'}
        description="Comprehensive clinical care across Neurology, Neurosurgery, Spine Care, Stroke, Brain Tumour Care, Epilepsy, and Chronic Nerve Pain."
      />

      {/* Hero Banner */}
      <PageHero
        badge={language === 'te' ? 'ప్రత్యేక క్లినికల్ విభాగాలు' : 'Comprehensive Clinical Disciplines'}
        badgeIcon={<Activity className="w-3.5 h-3.5 text-amber-400" />}
        title={language === 'te' ? 'స్పెషాలిటీలు & చికిత్సలు' : 'Specialities & Treatments'}
        subtitle={language === 'te' 
          ? 'మెదడు, వెన్నెముక మరియు నాడీ సంబంధిత వ్యాధులకు సమగ్ర సంరక్షణ' 
          : 'Comprehensive Care for Brain, Spine & Neurological Conditions'}
        description={language === 'te'
          ? 'డా. రెడ్డి శంకర రావు పర్యవేక్షణలో మెదడు, వెన్నెముక మరియు నరాల సమస్యలకు అత్యాధునిక శస్త్రచికిత్స మరియు వైద్య చికిత్సలు.'
          : 'Advanced surgical and clinical care across brain disorders, spine surgery, stroke protocols, epilepsy, and chronic nerve pain.'}
        breadcrumbs={[{ label: language === 'te' ? 'స్పెషాలిటీలు & చికిత్సలు' : 'Specialities & Treatments' }]}
        bgImage="/images/facility-ot.jpg"
      />

      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 py-12 sm:py-16">
        {/* Specialities Grid */}
        <ScrollStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
          {specialities.map((speciality) => (
            <ScrollStaggerItem key={speciality.id} direction="up" distance={28}>
              <SpecialityCard speciality={speciality} />
            </ScrollStaggerItem>
          ))}
        </ScrollStagger>
      </div>
    </div>
  );
};

