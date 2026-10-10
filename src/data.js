import { Layout, Server, Database, Network, Wrench, Terminal } from 'lucide-react'

// TODO: replace the GitHub and LinkedIn URLs with your own profile links.
export const SOCIAL = {
  email: 'elyas@gmail.com',
  github: 'https://github.com/',
  linkedin: 'https://www.linkedin.com/',
}
export const NAV = ['About', 'Skills', 'Work', 'Journey', 'Contact']

export const SKILLS = [
  { icon: Layout, title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'Responsive design', 'Tailwind CSS'] },
  { icon: Server, title: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs'] },
  { icon: Database, title: 'Databases', items: ['MongoDB', 'SQL (fundamentals)'] },
  { icon: Terminal, title: 'Programming', items: ['Java'] },
  { icon: Network, title: 'Networking', items: ['CCNA coursework', 'Networking fundamentals'] },
  { icon: Wrench, title: 'Tools', items: ['Git', 'GitHub', 'VS Code'] },
]

// Descriptions are deliberately modest. Edit them and add repo URLs and screenshots
// (public/screens/<id>.png) once you have them.
export const PROJECTS = [
  { id: 'course-cards', title: 'Course Cards', live: 'https://elyas-react-proj.netlify.app/', repo: null,
    summary: 'A React interface that presents courses as reusable cards.',
    tech: ['React', 'JavaScript'],
    features: ['Reusable card component', 'Data-driven layout'],
    problem: 'Practice in building a UI from small, reusable React components instead of repeated markup.',
    context: 'Personal React project.' },
  { id: 'task-grid', title: 'Hospic', live: 'https://e-hospital-prj.netlify.app/', repo: null,
    summary: 'A hospital website layout built with react.',
    tech: ['HTML', 'CSS'],
    features: ['Grid-based layout', 'Responsive structure'],
    problem: 'Practice in arranging content with CSS Grid so it adapts to different screen sizes.',
    context: 'Coursework.' },
  { id: 'form', title: 'Form', live: 'https://form-elyas.netlify.app/', repo: null,
    summary: 'A form interface focused on clear structure and styling.',
    tech: ['HTML', 'CSS'],
    features: ['Structured input fields', 'Styled form controls'],
    problem: 'Practice in building accessible, readable forms.',
    context: 'Coursework.' },
  { id: 'basic-website', title: 'Basic Website', live: 'https://classpracticeelyas.netlify.app/', repo: null,
    summary: 'A multi-section practice website built in class.',
    tech: ['HTML', 'CSS'],
    features: ['Page structure with semantic sections', 'Styled layout'],
    problem: 'Practice in structuring and styling a complete web page from scratch.',
    context: 'Coursework.' },
]

export const JOURNEY = [
  { type: 'Education', title: 'BS in Computer Science, Kardan University', text: 'Studying software development, programming and networking. In progress.' },
  { type: 'Coursework', title: 'CCNA networking', text: 'Networking fundamentals through CCNA coursework.' },
  { type: 'Coursework', title: 'Frontend class projects', text: 'Task Grid, Form and Basic Website: HTML and CSS layout practice.' },
  { type: 'Personal project', title: 'Website Design', text: 'Moved from static pages to component-based UI with React.' },
  // { type: 'Employment', title: 'No professional roles listed yet', text: ' ' },
]
