import { OFFICIAL_SYLLABUS_PDF } from './constants'

export const LOWER_SEC_SCIENCE_RESOURCES = [
  {
    id: 'syllabus-pdf',
    title: 'Official Lower Secondary Science Syllabus',
    subtitle: 'MOE G2 & G3 Science',
    description:
      'Official learning outcomes organised by themes: Scientific Endeavour, Diversity, Models, Interactions and Systems.',
    buttonLabel: 'View / Download Syllabus',
    status: 'available',
    href: OFFICIAL_SYLLABUS_PDF,
    accent: 'orange',
    icon: '📋',
  },
  {
    id: 'revision-notes',
    title: 'Science Revision Notes',
    description: 'Consolidated notes for lower secondary Science themes and key concepts.',
    buttonLabel: 'Coming Soon',
    status: 'coming-soon',
    href: null,
    accent: 'blue',
    icon: '📒',
  },
  {
    id: 'papers',
    title: 'Secondary 1 & 2 Science Practice Papers & Solutions',
    description: 'Practice papers for Sec 1 and Sec 2 with worked solutions when available.',
    buttonLabel: 'Coming Soon',
    status: 'coming-soon',
    href: null,
    accent: 'pink',
    icon: '📝',
  },
]

export const TEACHING_TIMELINE_HEADING = 'Our 5-Step Science Mastery Journey'

export const TEACHING_TIMELINE_SUBTITLE =
  'Build foundations, reinforce concepts, practise questions, and grow examination confidence step by step.'

export const TEACHING_TIMELINE = [
  {
    step: 1,
    title: 'Start From Scratch',
    paragraphs: [
      'Students begin each new chapter by building foundational understanding and writing notes alongside their teacher.',
    ],
    icon: '📝',
    accent: '#FFE8CC',
    nodeColor: '#FF9933',
  },
  {
    step: 2,
    title: 'Learn Through Kahoot!',
    paragraphs: [
      'Students reinforce essential concepts through interactive quizzes and friendly competition.',
    ],
    icon: '🎮',
    accent: '#E8F4FF',
    nodeColor: '#66AAEE',
  },
  {
    step: 3,
    title: 'Build Confidence With Topical Practice',
    paragraphs: [
      'Students attempt carefully selected foundational Science questions to strengthen understanding.',
    ],
    icon: '📚',
    accent: '#E8FFE8',
    nodeColor: '#55BB77',
  },
  {
    step: 4,
    title: 'Master School Examination Questions',
    paragraphs: [
      'Students practise topical school examination questions, learning to interpret command words, explain scientific concepts and apply their knowledge.',
    ],
    icon: '📝',
    accent: '#FFF5CC',
    nodeColor: '#E6B800',
  },
  {
    step: 5,
    title: 'Challenge Yourself With School Papers',
    paragraphs: [
      'Students tackle challenging end-of-year and examination-style questions to strengthen their reasoning, application and answering techniques.',
    ],
    icon: '🏆',
    accent: '#FFE8F5',
    nodeColor: '#FF7799',
  },
]

export const LOWER_SEC_SCIENCE_FAQ = [
  {
    id: 'who-for',
    question: 'Who are the Science classes for?',
    answer:
      'Our Lower Secondary Science tuition classes are designed for Secondary 1 and Secondary 2 students.',
  },
  {
    id: 'who-teaches',
    question: 'Who teaches Lower Secondary Science?',
    answer:
      'Lower Secondary Science tuition is offered by Teachers Karen and Peng Rong. Contact either teacher to enquire about class arrangements.',
  },
  {
    id: 'where-when',
    question: 'Where and when are classes held?',
    answer:
      'Classes are held at Tuition @ Pioneer, just a 2-minute walk from Pioneer MRT. Please WhatsApp Teacher Karen or Teacher Peng Rong for specific class details.',
  },
]

export const LOWER_SEC_SCIENCE_FAQ_KAREN_MESSAGE =
  'Hi Teacher Karen, I have a question about Lower Secondary Science tuition.'

export const LOWER_SEC_SCIENCE_FAQ_PENG_RONG_MESSAGE =
  'Hi Teacher Peng Rong, I have a question about Lower Secondary Science tuition.'
