import { OFFICIAL_SYLLABUS_PDF, FORMULA_LIST_PDF } from './constants'

export const EMATH_RESOURCES = [
  {
    id: 'syllabus-pdf',
    title: '2026 O Level Mathematics Syllabus',
    subtitle: 'Singapore-Cambridge O Level Mathematics (4052)',
    description:
      'Access the official examination syllabus, learning objectives, and assessment structure.',
    buttonLabel: 'View / Download Syllabus',
    status: 'available',
    href: OFFICIAL_SYLLABUS_PDF,
    accent: 'orange',
    icon: '📋',
  },
  {
    id: 'formula-sheet',
    title: 'E-Math Formula Sheet',
    description: 'A consolidated reference of key formulae for revision and exam preparation.',
    buttonLabel: 'View / Download Formula List',
    status: 'available',
    href: FORMULA_LIST_PDF,
    accent: 'blue',
    icon: '📐',
  },
  {
    id: 'papers-2026',
    title: '2026 O Level E-Math Paper 1 & 2 with Solutions',
    description:
      'Paper 1, Paper 2 and worked solutions for revision. Separate downloads will be provided when available.',
    buttonLabel: 'Coming Soon',
    status: 'coming-soon',
    href: null,
    accent: 'pink',
    icon: '📝',
  },
]

export const TEACHING_TIMELINE_HEADING = 'Our 4-Step E-Math Learning Journey'

export const TEACHING_TIMELINE_SUBTITLE =
  'Understand the concept. Learn from examples. Practise with confidence. Keep improving.'

export const TEACHING_TIMELINE = [
  {
    step: 1,
    title: 'Understand the Concept',
    paragraphs: [
      'Karen starts by ensuring students understand the mathematical concepts behind each topic. She breaks down challenging ideas into manageable explanations, encouraging students to ask questions until they feel confident.',
    ],
    icon: '💡',
    accent: '#FFE8CC',
    nodeColor: '#FF9933',
  },
  {
    step: 2,
    title: 'Learn Through Guided Examples',
    paragraphs: [
      'Students learn how to approach different question types through carefully explained worked examples. Karen demonstrates the reasoning and mathematical techniques needed to arrive at a solution.',
    ],
    icon: '👩‍🏫',
    accent: '#FFE0F0',
    nodeColor: '#FF7799',
  },
  {
    step: 3,
    title: 'Practise With Confidence',
    paragraphs: [
      'Students attempt questions independently, applying the concepts they have just learnt. Karen provides guidance where needed and helps students recognise and correct their mistakes.',
    ],
    icon: '✏️',
    accent: '#E8F4FF',
    nodeColor: '#66AAEE',
  },
  {
    step: 4,
    title: 'Reinforce, Improve and Grow',
    paragraphs: [
      'Through consistent practice, homework and targeted revision, students strengthen their understanding and develop confidence. Karen\'s supportive relationship with her students encourages them to keep improving and approach Mathematics with a positive mindset.',
    ],
    icon: '🌟',
    accent: '#FFF5CC',
    nodeColor: '#E6B800',
  },
]

export const EMATH_FAQ = [
  {
    id: 'who-for',
    question: 'Who are the E-Math classes for?',
    answer: 'Our O Level E-Math tuition classes are designed for Secondary 3 and Secondary 4 students.',
  },
  {
    id: 'where-when',
    question: 'Where and when are the classes held?',
    answer:
      'Our classes are held at Tuition @ Pioneer, located just a 2-minute walk from Pioneer MRT. For specific class schedules and availability, please WhatsApp Teacher Karen at 9185 0641.',
  },
  {
    id: 'how-help',
    question: 'How does Teacher Karen help students improve in Mathematics?',
    answer:
      'Karen focuses on building strong mathematical foundations through clear explanations, guided examples and regular practice. Her close relationship with students creates a supportive environment where they feel comfortable asking questions and learning from their mistakes.',
  },
]

export const EMATH_FAQ_WHATSAPP_MESSAGE =
  'Hi Teacher Karen, I have a question about O Level E-Math tuition.'
