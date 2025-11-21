// src/data/services.data.ts

import {
  Brain,
  Code,
  Smartphone,
  Globe,
  GitBranch,
  Blocks,
  Palette,
  Shield,
  Zap,
  Users,
  Database,
  Cloud,
} from 'lucide-react';
import { Service } from '@/types';

export const services: Service[] = [
  {
    id: '1',
    title: 'AI Development',
    description:
      'We harness the power of AI to create intelligent solutions that enhance efficiency, decision-making, and user experience. From predictive analytics to automation, our AI services empower businesses to stay ahead in the digital era.',
    icon: Brain,
    slug: 'ai-development',
    category: 'ai',
    highlighted: true,
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'AI Automation',
    ],
  },
  {
    id: '2',
    title: 'Staff Augmentation',
    description:
      'We provide skilled engineers or dedicated teams tailored to your project, seamlessly aligning with your goals and company culture. Our experts work closely with you, becoming an integral part of your team\'s success.',
    icon: Users,
    slug: 'staff-augmentation',
    category: 'software',
    features: [
      'Skilled Engineers',
      'Dedicated Teams',
      'Flexible Engagement',
      'Cultural Alignment',
      'Long-term Partnership',
    ],
  },
  {
    id: '3',
    title: 'Custom Software Development',
    description:
      'We design and develop software solutions tailored to your unique business needs. Our customized approach ensures scalability, performance, and innovation, helping you achieve long-term growth.',
    icon: Code,
    slug: 'custom-software',
    category: 'software',
    features: [
      'Tailored Solutions',
      'Scalable Architecture',
      'Modern Tech Stack',
      'Agile Development',
      'Quality Assurance',
    ],
  },
  {
    id: '4',
    title: 'Web Development',
    description:
      'We build dynamic, user-friendly, and responsive websites customized to your brand. Our web development services combine functionality with engaging design, ensuring a powerful digital presence.',
    icon: Globe,
    slug: 'web-development',
    category: 'web',
    features: [
      'Responsive Design',
      'SEO Optimization',
      'Performance Tuning',
      'CMS Integration',
      'E-commerce Solutions',
    ],
  },
  {
    id: '5',
    title: 'Mobile App Development',
    description:
      'Our experts develop mobile apps that are intuitive, high-performing, and tailored to your goals. We create native and cross-platform applications that deliver exceptional user experiences.',
    icon: Smartphone,
    slug: 'mobile-development',
    category: 'mobile',
    features: [
      'iOS Development',
      'Android Development',
      'Cross-platform Apps',
      'UI/UX Design',
      'App Store Optimization',
    ],
  },
  {
    id: '6',
    title: 'DevOps Services',
    description:
      'Our DevOps services streamline development, automate workflows, and enhance deployment efficiency. We help you achieve continuous integration and delivery with robust infrastructure.',
    icon: GitBranch,
    slug: 'devops',
    category: 'devops',
    features: [
      'CI/CD Pipeline',
      'Infrastructure as Code',
      'Container Orchestration',
      'Monitoring & Logging',
      'Cloud Migration',
    ],
  },
  {
    id: '7',
    title: 'Blockchain Development',
    description:
      'Our blockchain solutions ensure secure, transparent, and decentralized digital transactions. We build innovative blockchain applications for various industries.',
    icon: Blocks,
    slug: 'blockchain',
    category: 'blockchain',
    features: [
      'Smart Contracts',
      'DApp Development',
      'NFT Platforms',
      'Cryptocurrency Solutions',
      'Blockchain Consulting',
    ],
  },
  {
    id: '8',
    title: 'UI/UX Design',
    description:
      'Our UI/UX design solutions create intuitive, visually appealing, and user-centric digital experiences. We focus on user research, wireframing, and creating designs that convert.',
    icon: Palette,
    slug: 'ui-ux-design',
    category: 'design',
    features: [
      'User Research',
      'Wireframing & Prototyping',
      'Visual Design',
      'Interaction Design',
      'Usability Testing',
    ],
  },
];

// Filter functions for easier data access
export const getFeaturedServices = () =>
  services.filter((service) => service.highlighted);

export const getServicesByCategory = (category: string) =>
  services.filter((service) => service.category === category);

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);