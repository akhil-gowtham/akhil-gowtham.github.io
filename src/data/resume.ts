export const personalInfo = {
  name: "Gowtham Senthamilselvan",
  initials: "GS",
  title: "Senior Operations Executive",
  tagline:
    "Results-driven operations professional with 6+ years of experience in journal publication and logistics, specializing in process optimization, team leadership, and delivering exceptional quality at scale.",
  email: "akhilgowtham@gmail.com",
  location: "Chennai, India",
  linkedin: "https://www.linkedin.com/in/akhilgowtham",
};

export const stats = [
  { label: "Years Experience", value: "6+" },
  { label: "Journals Managed", value: "180+" },
  { label: "Pages Delivered", value: "340K+" },
  { label: "Team Members Led", value: "25+" },
];

export const aboutText = `Detail-oriented Senior Operations Executive with over 6 years of cross-industry experience spanning journal publication and logistics. Proven track record in managing large-scale production workflows, leading teams, and driving process improvements that boost efficiency and quality. Adept at stakeholder management, KPI tracking, and delivering projects on time with zero compromise on standards.`;

export interface Skill {
  name: string;
  category: string;
  icon: string;
}

export const skills: Skill[] = [
  { name: "Operations Management", category: "Operations", icon: "Settings" },
  {
    name: "Project Planning & Execution",
    category: "Operations",
    icon: "ClipboardList",
  },
  { name: "Process Improvement", category: "Operations", icon: "TrendingUp" },
  { name: "Quality Assurance", category: "Operations", icon: "ShieldCheck" },
  {
    name: "KPI Tracking & Reporting",
    category: "Analytics",
    icon: "BarChart3",
  },
  { name: "Data Analysis", category: "Analytics", icon: "PieChart" },
  { name: "Team Leadership", category: "Leadership", icon: "Users" },
  { name: "Stakeholder Management", category: "Leadership", icon: "Handshake" },
  { name: "Vendor Coordination", category: "Leadership", icon: "Link" },
  {
    name: "Client Relationship Management",
    category: "Leadership",
    icon: "UserCheck",
  },
  { name: "MS Office Suite", category: "Tools", icon: "Monitor" },
  { name: "ERP & Production Tools", category: "Tools", icon: "Wrench" },
];

export interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "TNQ Technologies",
    role: "Senior Executive, Operations",
    duration: "Nov 2020 – Present",
    location: "Chennai, India",
    type: "Journal Publication",
    highlights: [
      "Manage end-to-end production of 180+ academic journals, overseeing workflows from manuscript intake to final publication",
      "Lead a team of 25+ members across copyediting, typesetting, and quality control verticals",
      "Delivered 340,000+ pages with consistent adherence to publisher-specific quality standards",
      "Implemented process optimizations that reduced turnaround time by 15% across production cycles",
      "Coordinate with international publishers and editorial teams to ensure SLA compliance",
      "Drive weekly KPI reviews and performance dashboards to track team productivity and quality metrics",
      "Mentor and train new team members, fostering a culture of accountability and continuous improvement",
    ],
  },
  {
    id: 2,
    company: "Rivigo Services",
    role: "Operations Associate, Logistics",
    duration: "May 2019 – Jul 2020",
    location: "Chennai, India",
    type: "Logistics & Supply Chain",
    highlights: [
      "Managed daily logistics operations for relay trucking network, ensuring on-time delivery of shipments",
      "Coordinated with drivers, hub managers, and clients to optimize route efficiency and reduce transit times",
      "Monitored real-time shipment tracking and resolved operational escalations promptly",
      "Maintained operational reports and dashboards for regional performance analysis",
      "Contributed to process standardization initiatives across multiple hubs",
    ],
  },
];

export interface LeadershipItem {
  title: string;
  description: string;
  icon: string;
}

export const leadershipItems: LeadershipItem[] = [
  {
    title: "Team Building & Mentorship",
    description:
      "Built and led a team of 25+ professionals, implementing structured onboarding and training programs that improved new hire productivity by 30%.",
    icon: "Users",
  },
  {
    title: "Process Optimization",
    description:
      "Spearheaded workflow redesign initiatives that reduced production turnaround time by 15% while maintaining quality benchmarks.",
    icon: "Zap",
  },
  {
    title: "Stakeholder Communication",
    description:
      "Established effective communication channels with international publishers, resulting in improved SLA adherence and client satisfaction.",
    icon: "MessageSquare",
  },
  {
    title: "Quality at Scale",
    description:
      "Delivered 340,000+ pages across 180+ journals with consistent quality, earning recognition from major academic publishers.",
    icon: "Award",
  },
  {
    title: "Data-Driven Decisions",
    description:
      "Implemented KPI dashboards and performance tracking systems that enabled proactive issue resolution and resource optimization.",
    icon: "BarChart3",
  },
  {
    title: "Cross-Functional Coordination",
    description:
      "Orchestrated seamless collaboration between copyediting, typesetting, and QC teams to meet tight publication deadlines.",
    icon: "GitBranch",
  },
];

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  specialization: string;
}

export const education: Education[] = [
  {
    degree: "Master of Business Administration (MBA)",
    institution: "Rajalakshmi Engineering College",
    duration: "2016 – 2018",
    specialization: "Operations & Human Resources",
  },
  {
    degree: "Bachelor of Engineering (B.E.)",
    institution: "LOYOLA-ICAM College of Engineering and Technology",
    duration: "2011 – 2015",
    specialization: "Electronics and Communication Engineering (ECE)",
  },
];

export interface Publication {
  title: string;
  journal: string;
  type: string;
}

export const publications: Publication[] = [
  {
    title:
      "A Study on Employee Engagement with Reference to Rane Brake Lining Limited",
    journal: "International Journal of Applied Research",
    type: "Research Paper",
  },
  {
    title: "A Study on Inventory Management in Rane Brake Lining Limited",
    journal: "International Journal of Business and Management Invention",
    type: "Research Paper",
  },
];

export const achievements = [
  {
    title: "State Level Tennis Tournament",
    description:
      "Participated in state-level tennis tournament, demonstrating competitive spirit and discipline.",
    icon: "Trophy",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Leadership", href: "#leadership" },
  { label: "Education", href: "#education" },
  { label: "Publications", href: "#publications" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];
