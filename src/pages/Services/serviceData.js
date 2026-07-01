import guardImg from '@/assets/images/service_guarding.png';
import bouncerImg from '@/assets/images/bouncer.jpg';
import surveillanceImg from '@/assets/images/service_technology.png';
import housekeepingImg from '@/assets/images/cleaning-service.jpg';
import eventSecurityImg from '@/assets/images/event Sec.jpg';
import alarmResponseImg from '@/assets/images/alaram response.jpg';
import mobilePatrolImg from '@/assets/images/mobile security.jpg';
import executiveProtectionImg from '@/assets/images/executive sercurity.jpg';

export const SERVICES_DETAIL = [
  {
    id: 's1',
    slug: 'guard-services',
    title: 'Guard Services',
    image: guardImg,
    description:
      'Our highly trained security guards provide round-the-clock protection for residential communities, commercial properties, and private events. Each officer undergoes rigorous background checks, tactical response training, and customer service orientation to ensure professional conduct at all times.',
    features: [
      'Armed and unarmed guard options',
      'Access control and visitor management',
      '24/7 patrol and monitoring',
      'Detailed incident reporting',
    ],
    summary:
      'A flexible guard program built for homes, businesses, and event environments that need visible deterrence and dependable incident response.',
    highlights: [
      'On-site presence tailored to your risk level',
      'Visitor screening and access control routines',
      'Rapid escalation to command center support',
    ],
    workflow: [
      'Site survey and threat mapping',
      'Guard deployment with post orders',
      'Daily reporting and supervision',
      'Ongoing optimization with client feedback',
    ],
    idealFor: 'Residential complexes, corporate offices, warehouses, schools, and private functions.',
  },
  {
    id: 's2',
    slug: 'bouncer-security',
    title: 'Bouncer Security',
    image: bouncerImg,
    description:
      'Professional bouncers and security personnel trained to ensure safety in entertainment venues, nightclubs, bars, and private parties. Our team specializes in crowd control, conflict de-escalation, and VIP protection.',
    features: [
      'ID verification and age compliance',
      'Crowd management and capacity control',
      'Conflict resolution training',
      'VIP escort and protection',
    ],
    summary:
      'Professional crowd-facing security for venues that need firm control, polished customer handling, and fast conflict de-escalation.',
    highlights: [
      'Gate screening and guest verification',
      'Queue management and crowd routing',
      'Incident isolation with minimal disruption',
    ],
    workflow: [
      'Event briefing and entry planning',
      'Perimeter checks and wristband control',
      'On-floor monitoring during peak hours',
      'Post-event exit management and reporting',
    ],
    idealFor: 'Clubs, lounges, concerts, weddings, private parties, and brand events.',
  },
  {
    id: 's3',
    slug: 'surveillance-systems',
    title: 'Surveillance Systems',
    image: surveillanceImg,
    description:
      'State-of-the-art surveillance equipment and monitoring services to protect your property 24/7. We design, install, and maintain CCTV networks, motion sensors, and remote monitoring solutions tailored to your specific security needs.',
    features: [
      'HD and 4K CCTV installation',
      'Remote monitoring dashboard',
      'Motion detection and smart alerts',
      'Cloud-based footage storage',
    ],
    summary:
      'Layered video monitoring and alarm intelligence designed to give you better visibility, faster alerts, and stronger evidence capture.',
    highlights: [
      'Camera placement planned around blind spots',
      'Live monitoring from a centralized desk',
      'Smart alerts for unusual movement or breaches',
    ],
    workflow: [
      'Assessment of critical coverage zones',
      'Camera and sensor design proposal',
      'Installation, testing, and handover',
      'Remote monitoring support and upkeep',
    ],
    idealFor: 'Offices, retail sites, campuses, construction zones, and storage facilities.',
  },
  {
    id: 's4',
    slug: 'house-keeping-services',
    title: 'House Keeping Services',
    image: housekeepingImg,
    description:
      'Professional housekeeping services to maintain cleanliness, hygiene, and orderliness in your premises. Our trained staff uses industry-grade equipment and eco-friendly cleaning products to deliver spotless results every time.',
    features: [
      'Daily, weekly, and deep cleaning schedules',
      'Sanitization and disinfection protocols',
      'Eco-friendly cleaning products',
      'Trained and uniformed staff',
    ],
    summary:
      'A facility support service that keeps your premises clean, organized, and inspection-ready while maintaining a professional appearance.',
    highlights: [
      'Structured cleaning checklists for each zone',
      'Eco-conscious products and hygiene controls',
      'Staff trained for professional site conduct',
    ],
    workflow: [
      'Facility audit and cleaning scope planning',
      'Routine schedules aligned with your hours',
      'Quality checks and hygiene verification',
      'Ongoing service refinement for consistency',
    ],
    idealFor: 'Offices, apartment communities, schools, clinics, and hospitality sites.',
  },
  {
    id: 's5',
    slug: 'event-security-services',
    title: 'Event Security Services',
    image: eventSecurityImg,
    description:
      'Comprehensive security solutions for events of all sizes, from corporate conferences to large-scale public gatherings. We coordinate with event organizers and local authorities to create layered security plans that ensure safety without disrupting the guest experience.',
    features: [
      'Pre-event security assessment',
      'Perimeter control and screening',
      'Emergency evacuation planning',
      'Coordination with law enforcement',
    ],
    summary:
      'Event protection that blends guest safety, controlled entry, and emergency readiness without making the venue feel over-policed.',
    highlights: [
      'Pre-event risk planning and route design',
      'Screening procedures for entrances and exits',
      'Coordinated emergency response protocols',
    ],
    workflow: [
      'Pre-event planning and vulnerability review',
      'Guest flow and perimeter strategy',
      'Live supervision during the event',
      'Exit control and post-event wrap-up',
    ],
    idealFor: 'Corporate gatherings, concerts, exhibitions, launches, and public celebrations.',
  },
  {
    id: 's6',
    slug: 'alarm-response',
    title: 'Alarm Response',
    image: alarmResponseImg,
    description:
      'Rapid response to alarm activations, ensuring quick action in case of security breaches. Our response teams are strategically positioned to reach your location within minutes, assess the situation, and take appropriate action.',
    features: [
      'Rapid dispatch within minutes',
      'Integration with existing alarm systems',
      'Verified response protocols',
      '24/7 command center monitoring',
    ],
    summary:
      'A fast escalation service that turns alarm events into verified action, helping reduce false alarms and response delays.',
    highlights: [
      'Immediate verification before dispatch',
      'Driver and patrol coordination from SOC',
      'Incident logging for future review',
    ],
    workflow: [
      'Alarm trigger and centralized notification',
      'Verification and response assignment',
      'On-site assessment and containment',
      'Follow-up report with recommended actions',
    ],
    idealFor: 'Homes, warehouses, offices, retail stores, and unattended assets.',
  },
  {
    id: 's7',
    slug: 'mobile-patrols',
    title: 'Residential Mobile Patrols',
    image: mobilePatrolImg,
    description:
      'Scheduled and random patrol sweeps using GPS-tracked response vehicles to keep residential communities, estates, and gated properties protected at all hours.',
    features: [
      'Randomized and scheduled patrol routes',
      'GPS-tracked response vehicles',
      'Perimeter inspection and incident logging',
      'After-hours property verification',
    ],
    summary:
      'Mobile patrol coverage for communities and sites that need periodic visibility, faster checks, and reliable after-hours presence.',
    highlights: [
      'Randomized patrol timing to deter patterns',
      'GPS-backed route accountability',
      'Perimeter checks and lock-up verification',
    ],
    workflow: [
      'Patrol route planning and checkpoint setup',
      'Scheduled or random site sweeps',
      'Issue escalation and incident reporting',
      'Client summary after patrol completion',
    ],
    idealFor: 'Residential colonies, gated communities, construction projects, and remote facilities.',
  },
  {
    id: 's8',
    slug: 'executive-escort',
    title: 'Executive Protection',
    image: executiveProtectionImg,
    description:
      'Low-profile or high-profile bodyguard solutions for dignitaries, VIPs, and corporate personnel who require discreet, reliable, and professional movement security.',
    features: [
      'Close protection for VIP travel',
      'Route planning and threat assessment',
      'Discreet or visible escort options',
      'Crisis response and extraction support',
    ],
    summary:
      'Discreet executive protection designed for principals who need planning, privacy, and fast protective movement in public or high-risk environments.',
    highlights: [
      'Travel path and venue threat screening',
      'Plainclothes or visible escort options',
      'Crisis extraction and contingency planning',
    ],
    workflow: [
      'Advance risk review and movement planning',
      'Protective detail assignment and briefing',
      'Journey support and live monitoring',
      'Handover, debrief, and intelligence notes',
    ],
    idealFor: 'Executives, dignitaries, celebrities, and high-value personnel.',
  },
];

export const SERVICE_PATHS = SERVICES_DETAIL.reduce((acc, service) => {
  acc[service.id] = `/services/${service.slug}`;
  return acc;
}, {});

export function getServiceBySlug(slug) {
  return SERVICES_DETAIL.find((service) => service.slug === slug);
}
