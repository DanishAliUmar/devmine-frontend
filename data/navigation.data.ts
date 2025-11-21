// src/data/navigation.data.ts

import { NavLink, NavSection } from '@/types';
import { Home, Briefcase, Users, Mail, FileText } from 'lucide-react';

export const mainNavLinks: NavLink[] = [
  {
    label: 'Home',
    href: '/',
    icon: Home,
  },
  {
    label: 'Services',
    href: '/services',
    icon: Briefcase,
    children: [
      { label: 'AI Development', href: '/services/ai-development' },
      { label: 'Web Development', href: '/services/web-development' },
      { label: 'Mobile Development', href: '/services/mobile-development' },
      { label: 'Custom Software', href: '/services/custom-software' },
      { label: 'DevOps', href: '/services/devops' },
      { label: 'Blockchain', href: '/services/blockchain' },
      { label: 'UI/UX Design', href: '/services/ui-ux-design' },
    ],
  },
  {
    label: 'About',
    href: '/about',
    icon: Users,
  },
  {
    label: 'Blog',
    href: '/blog',
    icon: FileText,
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: Mail,
  },
];

export const footerSections: NavSection[] = [
  {
    title: 'Services',
    links: [
      { label: 'AI Development', href: '/services/ai-development' },
      { label: 'Web Development', href: '/services/web-development' },
      { label: 'Mobile Development', href: '/services/mobile-development' },
      { label: 'Custom Software', href: '/services/custom-software' },
      { label: 'Staff Augmentation', href: '/services/staff-augmentation' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Team', href: '/team' },
      { label: 'Careers', href: '/careers' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '/docs' },
      { label: 'API Reference', href: '/api-reference' },
      { label: 'Support', href: '/support' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
  },
];

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'LinkedIn' },
  { label: 'Twitter', href: 'https://twitter.com', icon: 'Twitter' },
  { label: 'GitHub', href: 'https://github.com', icon: 'Github' },
  { label: 'Facebook', href: 'https://facebook.com', icon: 'Facebook' },
];

// src/data/stats.data.ts

export interface Stat {
  id: string;
  value: string | number;
  label: string;
  suffix?: string;
  prefix?: string;
  description?: string;
}

export const stats: Stat[] = [
  {
    id: '1',
    value: 1000,
    label: 'Projects Completed',
    suffix: '+',
    description: 'Successfully delivered projects across various industries',
  },
  {
    id: '2',
    value: 400,
    label: 'Happy Clients',
    suffix: '+',
    description: 'Satisfied clients worldwide',
  },
  {
    id: '3',
    value: 700,
    label: 'Team Members',
    suffix: '+',
    description: 'Expert developers, designers, and consultants',
  },
  {
    id: '4',
    value: 3,
    label: 'Years Experience',
    suffix: '+',
    description: 'Years of excellence in digital innovation',
  },
  {
    id: '5',
    value: 95,
    label: 'Client Satisfaction',
    suffix: '%',
    description: 'Client satisfaction rate',
  },
  {
    id: '6',
    value: 24,
    label: 'Support',
    suffix: '/7',
    description: 'Round-the-clock technical support',
  },
];

export const getHighlightedStats = () => stats.slice(0, 4);