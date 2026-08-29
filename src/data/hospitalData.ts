import { HospitalContactInfo, ServiceItem, GalleryItem, NavItem } from '../types';
import heroImg from '../assets/images/hero_hospital_exterior_1787998309715.jpg';
import consultationImg from '../assets/images/patient_consultation_room_1787998325178.jpg';
import dentalImg from '../assets/images/dental_care_unit_1787998344092.jpg';
import careFacilityImg from '../assets/images/hospital_care_facility_1787998363075.jpg';

export const HOSPITAL_INFO: HospitalContactInfo = {
  name: 'Rasheed Hospital & Dental Complex',
  subtitle: 'Community Healthcare & Dental Care Facility',
  address: 'Bag E Hussain Chowk, Pira Gaib Road, Samijabad',
  city: 'Multan, Pakistan',
  phones: ['061-6560560', '0328-6560560'],
  emails: ['rasheedhospitalhr@gmail.com', 'rashidrasheed246@yahoo.com'],
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About Us', href: '#about' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'care', label: 'Patient Care', href: '#patient-care' },
  { id: 'guidelines', label: 'Patient Guidelines', href: '#guidelines' },
  { id: 'gallery', label: 'Gallery', href: '#gallery' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const HOSPITAL_IMAGES = {
  hero: heroImg,
  consultation: consultationImg,
  dental: dentalImg,
  facility: careFacilityImg,
};

export const VERIFIED_SERVICES: ServiceItem[] = [
  {
    id: 'opd-consultation',
    title: 'Medical Consultation / OPD',
    category: 'medical',
    description: 'Accessible outpatient consultations providing clinical evaluations, diagnostic guidance, and health assessments for individuals and families.',
    details: [
      'General physician outpatient consultation',
      'Individual health assessment & diagnosis',
      'Affordable and subsidized fee structure',
      'Compassionate community patient care'
    ],
    iconName: 'Stethoscope',
    badgeText: 'Subsidized Consultation'
  },
  {
    id: 'dental-care',
    title: 'Dental Care & Procedures',
    category: 'dental',
    description: 'Comprehensive oral healthcare and specialized dental procedures focused on preserving dental health, pain relief, and hygiene.',
    details: [
      'Comprehensive dental examination & scaling',
      'Restorative dental fillings & tooth care',
      'Tooth extraction & basic oral surgery',
      'Sterile, modern dental operatory'
    ],
    iconName: 'Sparkles',
    badgeText: 'Specialized Dental Unit'
  },
  {
    id: 'bp-monitoring',
    title: 'Blood Pressure Checking',
    category: 'support',
    description: 'Accurate vital signs monitoring and regular blood pressure screenings to help patients manage hypertension and cardiovascular wellness.',
    details: [
      'Regular routine pressure monitoring',
      'Clinical baseline recording',
      'Preventative cardiovascular guidance'
    ],
    iconName: 'Activity'
  },
  {
    id: 'injections-iv',
    title: 'Injections & IV / Drip Care',
    category: 'support',
    description: 'Safe and hygienic clinical administration of prescribed intramuscular, intravenous injections, and supportive saline/fluid drips.',
    details: [
      'Prescribed injection administration',
      'IV fluid drip management under observation',
      'Strict sterile technique & patient safety'
    ],
    iconName: 'Syringe'
  },
  {
    id: 'prescription-guidance',
    title: 'Prescription & Medical Guidance',
    category: 'medical',
    description: 'Clear, attentive instructions on dosage schedules, therapeutic lifestyle recommendations, and post-consultation follow-up plans.',
    details: [
      'Personalized medicine dosage instructions',
      'Patient health education & preventive tips',
      'Follow-up care recommendations'
    ],
    iconName: 'FileText'
  },
  {
    id: 'basic-medicines',
    title: 'Selected Basic Medicines',
    category: 'support',
    description: 'On-site availability of essential basic medications when available to support immediate patient relief at subsidized rates.',
    details: [
      'Essential first-line medicines (subject to availability)',
      'Subsidized medicine access for needy patients',
      'Transparent verification and guidance'
    ],
    iconName: 'Pill',
    badgeText: 'When Available'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Hospital Entrance & Reception',
    category: 'Facility Overview',
    description: 'Main welcoming reception and outpatient registration desk at Rasheed Hospital.',
    imageUrl: heroImg,
  },
  {
    id: 'gal-2',
    title: 'Medical Consultation & OPD',
    category: 'Doctor Office',
    description: 'Patient examination and consultation room equipped for routine medical reviews.',
    imageUrl: consultationImg,
  },
  {
    id: 'gal-3',
    title: 'Modern Dental Care Unit',
    category: 'Dental Complex',
    description: 'Dedicated dental operatory for routine checkups, restorations, and dental procedures.',
    imageUrl: dentalImg,
  },
  {
    id: 'gal-4',
    title: 'Patient Care & Observation Area',
    category: 'Patient Support',
    description: 'Clean observation bed and supportive care unit for injections and IV drip management.',
    imageUrl: careFacilityImg,
  },
];
