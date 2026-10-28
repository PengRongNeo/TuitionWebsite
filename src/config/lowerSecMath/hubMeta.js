import { OFFICIAL_SYLLABUS_PDF } from './constants'

export const LOWER_SEC_MATH_RESOURCES = [
  {
    id: 'syllabus-pdf',
    title: 'Lower Secondary Mathematics Syllabus',
    subtitle: 'MOE G2 & G3 Mathematics',
    description:
      'Official syllabus documents for G2 and G3 Mathematics across Secondary 1 and 2.',
    buttonLabel: 'View / Download Syllabus',
    status: 'available',
    href: OFFICIAL_SYLLABUS_PDF,
    accent: 'orange',
    icon: '📋',
  },
  {
    id: 'formula-sheet',
    title: 'Mathematics Formula & Revision Sheet',
    description: 'Key formulae and revision notes for lower secondary Mathematics.',
    buttonLabel: 'Coming Soon',
    status: 'coming-soon',
    href: null,
    accent: 'blue',
    icon: '📐',
  },
  {
    id: 'papers',
    title: 'Secondary 1 & 2 Mathematics Practice Papers',
    description:
      'Practice papers with questions and solutions for Sec 1 and Sec 2 revision (uploads planned).',
    buttonLabel: 'Coming Soon',
    status: 'coming-soon',
    href: null,
    accent: 'pink',
    icon: '📝',
  },
]

export const TEACHING_TIMELINE_HEADING = 'Our 4-Step Mathematics Learning Journey'

export const TEACHING_TIMELINE_SUBTITLE =
  'Understand ideas, learn from examples, try questions, and strengthen confidence through practice.'

export const TEACHING_TIMELINE = [
  {
    step: 1,
    title: 'Understand the Concept',
    paragraphs: [
      'Students learn important mathematical ideas through clear explanations and supportive guidance from Teacher Karen.',
    ],
    icon: '💡',
    accent: '#FFE8CC',
    nodeColor: '#FF9933',
  },
  {
    step: 2,
    title: 'Learn Through Worked Examples',
    paragraphs: [
      'Karen demonstrates step-by-step problem-solving methods so students see how to apply concepts to different question types.',
    ],
    icon: '👩‍🏫',
    accent: '#FFE0F0',
    nodeColor: '#FF7799',
  },
  {
    step: 3,
    title: 'Try It Yourself',
    paragraphs: [
      'Students attempt questions independently, with guidance when needed to correct mistakes and build confidence.',
    ],
    icon: '✏️',
    accent: '#E8F4FF',
    nodeColor: '#66AAEE',
  },
  {
    step: 4,
    title: 'Reinforce Through Practice',
    paragraphs: [
      'Homework and revision help consolidate learning and strengthen problem-solving confidence for school assessments.',
    ],
    icon: '🌟',
    accent: '#FFF5CC',
    nodeColor: '#E6B800',
  },
]

export const LOWER_SEC_MATH_FAQ = [
  {
    id: 'who-for',
    question: 'Who are the Mathematics classes for?',
    answer:
      'Our Lower Secondary Mathematics tuition classes are designed for Secondary 1 and Secondary 2 students.',
  },
  {
    id: 'where-when',
    question: 'Where and when are classes held?',
    answer:
      'Classes are held at Tuition @ Pioneer, just a 2-minute walk from Pioneer MRT. For class schedules and availability, please WhatsApp Teacher Karen at 9185 0641.',
  },
  {
    id: 'how-help',
    question: 'How does Teacher Karen help students improve?',
    answer:
      'Karen focuses on clear explanations, guided examples and independent practice. Her supportive relationships with students help create an environment where they feel comfortable asking questions and learning from mistakes.',
  },
]

export const LOWER_SEC_MATH_FAQ_WHATSAPP_MESSAGE =
  'Hi Teacher Karen, I have a question about Lower Secondary Math tuition.'
