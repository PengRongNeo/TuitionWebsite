import { OFFICIAL_SYLLABUS_PDF, FORMULA_LIST_PDF } from './constants'

export const AMATH_RESOURCES = [
  {
    id: 'syllabus-pdf',
    title: '2026 O Level Additional Mathematics Syllabus',
    subtitle: 'Singapore-Cambridge O Level Additional Mathematics (4049)',
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
    title: 'A-Math Formula List',
    description: 'A consolidated reference of key formulae for revision and exam preparation.',
    buttonLabel: 'View / Download Formula List',
    status: 'available',
    href: FORMULA_LIST_PDF,
    accent: 'blue',
    icon: '📐',
  },
  {
    id: 'papers-2026',
    title: '2026 O Level A-Math Paper 1 & 2 with Solutions',
    description:
      'Paper 1, Paper 2 and worked solutions for revision. Separate downloads will be provided when available.',
    buttonLabel: 'Coming Soon',
    status: 'coming-soon',
    href: null,
    accent: 'pink',
    icon: '📝',
  },
]

export const TEACHING_TIMELINE_HEADING = 'Our 4-Step A-Math Mastery Journey'

export const TEACHING_TIMELINE_SUBTITLE =
  'Understand the concept. Watch it in action. Try it yourself. Make it stick.'

export const TEACHING_TIMELINE = [
  {
    step: 1,
    title: 'Learn One Concept at a Time',
    paragraphs: [
      'Break each chapter into manageable concepts. Teacher Peng Rong explains the underlying Mathematics, important formulas and reasoning behind each method before moving forward.',
    ],
    icon: '💡',
    accent: '#FFE8CC',
    nodeColor: '#FF9933',
  },
  {
    step: 2,
    title: 'Learn Through Worked Examples',
    paragraphs: [
      'Watch Teacher Peng Rong demonstrate how to approach questions step by step, from identifying the relevant concepts to presenting clear mathematical working.',
    ],
    icon: '👨‍🏫',
    accent: '#E8F4FF',
    nodeColor: '#66AAEE',
  },
  {
    step: 3,
    title: 'Your Turn to Try',
    paragraphs: [
      'Apply the newly learnt concept independently. Attempt carefully selected questions, identify mistakes and clarify misunderstandings before progressing.',
    ],
    icon: '✏️',
    accent: '#E8FFE8',
    nodeColor: '#55BB77',
  },
  {
    step: 4,
    title: 'Reinforce Through Homework',
    paragraphs: [
      'Revisit concepts through homework and repeated practice. Build familiarity, strengthen recall and develop the confidence to tackle questions without relying on worked examples.',
    ],
    icon: '📚',
    accent: '#FFE8F5',
    nodeColor: '#FF7799',
  },
]

export const AMATH_FAQ = [
  {
    id: 'who-for',
    question: 'Who are the A-Math classes for?',
    answer: 'Our O Level A-Math tuition classes are designed for Secondary 3 and Secondary 4 students.',
  },
  {
    id: 'where-when',
    question: 'Where and when are the classes held?',
    answer:
      'Our classes are held at Tuition @ Pioneer, located just a 2-minute walk from Pioneer MRT. For specific class schedules and availability, please WhatsApp Teacher Peng Rong at 9650 8879.',
  },
  {
    id: 'how-lessons',
    question: 'How are A-Math lessons conducted?',
    answer:
      'Lessons are structured around understanding one mathematical concept at a time. Students first learn the concept, watch a guided worked example, attempt questions independently, and reinforce their understanding through homework.',
  },
]

export const AMATH_FAQ_WHATSAPP_MESSAGE =
  'Hi Teacher Peng Rong, I have a question about O Level A-Math tuition.'
