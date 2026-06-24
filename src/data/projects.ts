export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  stack: string[];
  liveUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: "01",
    title: "NexusHR",
    subtitle: "HR Management Platform",
    description:
      "Full-stack enterprise HR platform with modules for employee management, attendance tracking, leave management, payroll processing, and reporting.",
    bullets: [
      "JWT-based authentication and role-based access control (RBAC) using Spring Security",
      "RESTful APIs with optimized MySQL queries for efficient large-scale organizational data handling",
      "Responsive dashboard with modular UI components and real-time insights for HR operations",
    ],
    stack: ["React.js", "Spring Boot", "MySQL", "Spring Security", "JWT", "Hibernate/JPA"],
    liveUrl: "https://hr-frontend-one-sepia.vercel.app/login",
    githubUrl: "https://github.com/PrathmEk/HR-Frontend",
  },
  {
    id: "02",
    title: "SwiftCart",
    subtitle: "Full-Stack E-Commerce Platform",
    description:
      "Scalable e-commerce platform with product catalog, shopping cart, and order management. Secure backend APIs with MongoDB persistence.",
    bullets: [
      "Secure backend APIs for authentication, product management, and order processing",
      "Modular architecture optimized for maintainability and scalability",
      "Seamless frontend-backend integration for smooth user experience",
    ],
    stack: ["React.js", "Spring Boot", "MongoDB", "REST APIs", "Java"],
    liveUrl: "https://swift-cart-frontend-gold.vercel.app",
    githubUrl: "https://github.com/PrathmEk/SwiftCart-Frontend",
  },
  {
    id: "03",
    title: "CredoWallet",
    subtitle: "Personal Finance Tracker",
    description:
      "Personal finance management system to track income, expenses, and financial records with categorized expense tracking and PostgreSQL persistence.",
    bullets: [
      "Full CRUD operations with categorized expense tracking and PostgreSQL-based persistence",
      "RESTful APIs ensuring efficient data handling and seamless frontend integration",
      "Clean, responsive UI for improved user experience and financial insights",
    ],
    stack: ["React.js", "Spring Boot", "PostgreSQL", "JWT", "REST APIs", "Render"],
    liveUrl: "https://money-manager-one-chi.vercel.app/login",
    githubUrl: "https://github.com/PrathmEk/Money-Manager-Frontend",
  },


];
