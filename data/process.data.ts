//data/process.data.ts

import {
  Search,
  Lightbulb,
  Code2,
  TestTube,
  Rocket,
  HeadphonesIcon,
} from 'lucide-react';
import { ProcessStep } from '@/types';

export const processSteps: ProcessStep[] = [
  {
    id: '1',
    step: 1,
    title: 'Discovery & Research',
    description:
      'Through detailed stakeholder interviews and data assessments, we pinpoint the ideal use cases and develop a strategic roadmap. This stage ensures that our solution is precisely aligned with your goals.',
    icon: Search,
    duration: '1-2 weeks',
    deliverables: [
      'Project Requirements Document',
      'Technical Specification',
      'Project Timeline',
      'Resource Allocation Plan',
    ],
  },
  {
    id: '2',
    step: 2,
    title: 'Strategy & Planning',
    description:
      'We create a comprehensive strategy that outlines the project scope, milestones, and technical architecture. Our planning ensures smooth execution and timely delivery.',
    icon: Lightbulb,
    duration: '1-2 weeks',
    deliverables: [
      'Strategic Roadmap',
      'Architecture Design',
      'Risk Assessment',
      'Budget Proposal',
    ],
  },
  {
    id: '3',
    step: 3,
    title: 'Design & Development',
    description:
      'Our expert team brings your vision to life with clean code, modern frameworks, and best practices. We follow agile methodology for iterative development and continuous feedback.',
    icon: Code2,
    duration: '6-12 weeks',
    deliverables: [
      'UI/UX Designs',
      'Functional Prototype',
      'Source Code',
      'API Documentation',
    ],
  },
  {
    id: '4',
    step: 4,
    title: 'Testing & Quality Assurance',
    description:
      'Rigorous testing ensures your solution is bug-free, secure, and performs optimally. We conduct unit testing, integration testing, and user acceptance testing.',
    icon: TestTube,
    duration: '2-3 weeks',
    deliverables: [
      'Test Cases & Reports',
      'Bug Fixes',
      'Performance Optimization',
      'Security Audit',
    ],
  },
  {
    id: '5',
    step: 5,
    title: 'Deployment & Launch',
    description:
      'We handle the entire deployment process, ensuring a smooth transition to production. Our team manages server setup, configuration, and go-live activities.',
    icon: Rocket,
    duration: '1 week',
    deliverables: [
      'Production Deployment',
      'Server Configuration',
      'Launch Support',
      'Training Materials',
    ],
  },
  {
    id: '6',
    step: 6,
    title: 'Support & Maintenance',
    description:
      'Our commitment doesn\'t end at launch. We provide ongoing support, monitoring, and maintenance to ensure your solution evolves with your business needs.',
    icon: HeadphonesIcon,
    duration: 'Ongoing',
    deliverables: [
      'Technical Support',
      'Regular Updates',
      'Performance Monitoring',
      'Feature Enhancements',
    ],
  },
];

export const getTotalDuration = () => {
  return '12-20 weeks (varies by project complexity)';
};

export const getStepByNumber = (step: number) =>
  processSteps.find((s) => s.step === step);