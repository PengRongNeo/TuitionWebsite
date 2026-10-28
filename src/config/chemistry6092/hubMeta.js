import { OFFICIAL_SYLLABUS_PDF, PERIODIC_TABLE_PDF } from './constants'

export const CHEMISTRY_RESOURCES = [
  {
    id: 'syllabus-pdf',
    title: '2026 O Level Chemistry Syllabus',
    subtitle: 'Singapore-Cambridge O Level Chemistry (6092)',
    description:
      'Access the official examination syllabus, learning objectives, and assessment structure.',
    buttonLabel: 'View / Download Syllabus',
    status: 'available',
    href: OFFICIAL_SYLLABUS_PDF,
    accent: 'orange',
    icon: '📋',
  },
  {
    id: 'periodic-table',
    title: 'Periodic Table of Elements',
    description: 'A convenient reference for Chemistry revision and problem-solving.',
    buttonLabel: 'View / Download Periodic Table',
    status: 'available',
    href: PERIODIC_TABLE_PDF,
    accent: 'blue',
    icon: '🧪',
  },
  {
    id: 'paper-2026',
    title: '2026 O Level Chemistry Paper & Solutions',
    description: 'Exam paper and worked solutions for revision and examination preparation.',
    buttonLabel: 'Coming Soon',
    status: 'coming-soon',
    href: null,
    accent: 'pink',
    icon: '📝',
  },
]

export const TEACHING_TIMELINE_HEADING = 'Our 5-Step Chemistry Mastery Journey'

export const TEACHING_TIMELINE_SUBTITLE =
  'From a blank sheet of paper to confidently tackling O Level examination questions.'

export const TEACHING_TIMELINE = [
  {
    step: 1,
    title: 'Start From Scratch',
    paragraphs: [
      'Every chapter begins with a blank sheet of paper. Students build their own notes alongside Teacher Peng Rong, learning each fundamental concept step by step.',
      'By writing, discussing and connecting ideas, students develop a strong foundation before moving on to questions.',
    ],
    icon: '📝',
    accent: '#FFE8CC',
    nodeColor: '#FF9933',
  },
  {
    step: 2,
    title: 'Learn Through Kahoot!',
    paragraphs: [
      'Time to put those new concepts to the test! Through interactive Kahoot quizzes, students reinforce key information, test their understanding and identify areas that need improvement.',
      'A little friendly competition keeps lessons lively, engaging and memorable.',
    ],
    icon: '🎮',
    accent: '#E8F4FF',
    nodeColor: '#66AAEE',
  },
  {
    step: 3,
    title: 'Build Confidence With Topical Practice',
    paragraphs: [
      'Students progress to carefully selected questions from the GLM Chemistry assessment book, which provides broad coverage of essential syllabus concepts.',
      'These exercises help students apply what they have learnt, strengthen their fundamentals and develop confidence in answering standard Chemistry questions.',
    ],
    icon: '📚',
    accent: '#E8FFE8',
    nodeColor: '#55BB77',
  },
  {
    step: 4,
    title: 'Master O Level Question Styles',
    paragraphs: [
      'Next, students tackle topical questions from the Ten-Year Series (TYS).',
      'Understanding how SEAB and Cambridge assess Chemistry is essential. Students learn to recognise common question patterns, interpret command words, structure their explanations and apply concepts in examination settings.',
    ],
    icon: '📝',
    accent: '#FFF5CC',
    nodeColor: '#E6B800',
  },
  {
    step: 5,
    title: 'Challenge Yourself With Top-School Papers',
    paragraphs: [
      'Finally, students tackle challenging end-of-year and preliminary examination papers from top Singapore schools.',
      'Through timed practice, complex application questions and lengthy data-based problems, students learn to think under pressure and tackle unfamiliar questions.',
      'The goal is to make students comfortable with challenging questions so they can approach their actual O Level examinations with greater confidence.',
    ],
    icon: '🏆',
    accent: '#FFE8F5',
    nodeColor: '#FF7799',
  },
]

export const CHEMISTRY_FAQ = [
  {
    id: 'who-for',
    question: 'Who are the Chemistry classes for?',
    answer: 'Our O Level Chemistry tuition classes are designed for Secondary 3 and Secondary 4 students.',
  },
  {
    id: 'where-when',
    question: 'Where and when are the classes held?',
    answer:
      'Our classes are held at Tuition @ Pioneer, located just a 2-minute walk from Pioneer MRT. For specific class schedules and availability, please WhatsApp Teacher Peng Rong at 9650 8879.',
  },
  {
    id: 'practical',
    question: 'Do you cover the Chemistry practical examination?',
    answer:
      'Yes! While we do not have the laboratory apparatus for hands-on practical sessions, we cover practical-related content using videos and guided explanations. We focus on understanding experimental procedures and developing effective answering techniques, including how to interpret observations and analyse results.',
  },
]

export const CHEMISTRY_FAQ_WHATSAPP_MESSAGE =
  'Hi Teacher Peng Rong, I have a question about O Level Chemistry tuition.'
