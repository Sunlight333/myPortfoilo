/**
 * @fileoverview Project data for portfolio showcase
 */

import { Project, ProjectCategory } from "@/types/project";

export const projectCategories: ProjectCategory[] = [
  {
    id: "all",
    name: "All Projects",
    icon: "Code",
    description: "Complete portfolio showcase"
  },
  {
    id: "web",
    name: "Web Development",
    icon: "MonitorSmartphone",
    description: "Full-stack web applications"
  },
  {
    id: "ai",
    name: "AI & ML",
    icon: "Bot",
    description: "Artificial intelligence solutions"
  },
  {
    id: "mobile",
    name: "Mobile Apps",
    icon: "Smartphone",
    description: "Cross-platform mobile applications"
  },
  {
    id: "blockchain",
    name: "Blockchain",
    icon: "Database",
    description: "Decentralized applications"
  },
  {
    id: "iot",
    name: "IoT",
    icon: "Cpu",
    description: "Internet of Things solutions"
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Enterprise Order Management Platform",
    description: "A comprehensive B2B order management system with real-time inventory tracking, automated workflows, and advanced analytics.",
    longDescription: "Built a scalable enterprise platform serving 500+ clients with 10,000+ daily orders. The system features real-time inventory synchronization, automated order processing workflows, and comprehensive reporting dashboards. Implemented microservices architecture with event-driven communication for high availability and scalability.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    tags: ["React", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS", "Microservices"],
    code: "https://github.com/Sunlight333/enterprise-order-platform",
    liveDemo: "https://order-platform-demo.vercel.app",
    category: "web",
    featured: true,
    technologies: {
      frontend: ["React", "TypeScript", "Redux Toolkit", "Material-UI", "Chart.js"],
      backend: ["Node.js", "Express", "Socket.io", "JWT", "Bcrypt"],
      database: ["PostgreSQL", "Redis", "Prisma ORM"],
      deployment: ["AWS ECS", "Docker", "CloudFront", "RDS"]
    },
    features: [
      "Real-time order tracking and notifications",
      "Automated inventory management",
      "Advanced reporting and analytics",
      "Multi-tenant architecture",
      "API-first design with comprehensive documentation"
    ],
    challenges: [
      "Handling high-volume concurrent orders",
      "Ensuring data consistency across microservices",
      "Implementing real-time updates at scale"
    ],
    results: [
      "40% reduction in order processing time",
      "99.9% uptime achieved",
      "50% improvement in customer satisfaction"
    ],
    duration: "8 months",
    teamSize: 6,
    role: "Lead Full-Stack Developer"
  },
  {
    id: 2,
    title: "AI-Powered Customer Support System",
    description: "Intelligent customer support platform integrating multiple LLMs with context-aware conversation management and automated ticket routing.",
    longDescription: "Developed an AI-first customer support system that intelligently routes tickets, provides instant responses using multiple LLM providers, and learns from customer interactions. The system processes 10,000+ tickets daily with 85% automated resolution rate.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    tags: ["OpenAI", "Claude", "Gemini", "Python", "FastAPI", "React", "Vector DB"],
    code: "https://github.com/Sunlight333/ai-support-system",
    liveDemo: "https://ai-support-demo.vercel.app",
    category: "ai",
    featured: true,
    technologies: {
      frontend: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      backend: ["Python", "FastAPI", "Celery", "Redis"],
      database: ["PostgreSQL", "Pinecone", "MongoDB"],
      deployment: ["Docker", "AWS Lambda", "CloudFront"]
    },
    features: [
      "Multi-LLM integration with fallback mechanisms",
      "Context-aware conversation management",
      "Automated ticket classification and routing",
      "Real-time sentiment analysis",
      "Knowledge base integration with vector search"
    ],
    challenges: [
      "Managing costs across multiple LLM providers",
      "Ensuring consistent response quality",
      "Handling complex multi-turn conversations"
    ],
    results: [
      "85% automated ticket resolution",
      "60% reduction in response time",
      "90% customer satisfaction score"
    ],
    duration: "6 months",
    teamSize: 4,
    role: "AI/ML Engineer & Full-Stack Developer"
  },
  {
    id: 3,
    title: "Multi-Tenant SaaS Platform",
    description: "Complete SaaS solution with subscription billing, tenant isolation, and custom admin console for enterprise client management.",
    longDescription: "Built a comprehensive multi-tenant SaaS platform serving 200+ enterprise clients. Features include automated subscription management, tenant data isolation, custom branding, and advanced analytics. Implemented secure payment processing with Stripe and comprehensive admin tools.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "AWS", "Prisma"],
    code: "https://github.com/Sunlight333/saas-platform",
    liveDemo: "https://saas-platform-demo.vercel.app",
    category: "web",
    featured: false,
    technologies: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/ui"],
      backend: ["Node.js", "Express", "Prisma", "Stripe API"],
      database: ["PostgreSQL", "Redis"],
      deployment: ["Vercel", "AWS RDS", "CloudFront"]
    },
    features: [
      "Multi-tenant architecture with data isolation",
      "Automated subscription billing and management",
      "Custom branding and white-labeling",
      "Advanced analytics and reporting",
      "Role-based access control"
    ],
    challenges: [
      "Ensuring data isolation between tenants",
      "Scaling payment processing",
      "Managing complex subscription logic"
    ],
    results: [
      "200+ enterprise clients onboarded",
      "99.5% uptime maintained",
      "40% increase in MRR"
    ],
    duration: "10 months",
    teamSize: 8,
    role: "Senior Full-Stack Developer"
  },
  {
    id: 4,
    title: "E-commerce Marketplace Platform",
    description: "Full-stack marketplace with vendor management, payment processing, and advanced search capabilities.",
    longDescription: "Developed a comprehensive e-commerce marketplace connecting 500+ vendors with 10,000+ customers. Features include vendor onboarding, inventory management, secure payment processing, and advanced search with filtering.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Elasticsearch"],
    code: "https://github.com/Sunlight333/marketplace-platform",
    liveDemo: "https://marketplace-demo.vercel.app",
    category: "web",
    featured: false,
    technologies: {
      frontend: ["React", "Redux", "Material-UI", "Stripe Elements"],
      backend: ["Node.js", "Express", "Mongoose", "JWT"],
      database: ["MongoDB", "Elasticsearch", "Redis"],
      deployment: ["AWS EC2", "Docker", "Nginx"]
    },
    features: [
      "Multi-vendor marketplace functionality",
      "Advanced search with Elasticsearch",
      "Secure payment processing",
      "Real-time inventory management",
      "Comprehensive admin dashboard"
    ],
    challenges: [
      "Managing complex vendor relationships",
      "Implementing efficient search functionality",
      "Ensuring payment security"
    ],
    results: [
      "500+ active vendors",
      "10,000+ registered customers",
      "$2M+ in processed transactions"
    ],
    duration: "12 months",
    teamSize: 5,
    role: "Lead Developer"
  },
  {
    id: 5,
    title: "Cloud Migration & DevOps Platform",
    description: "Automated cloud migration platform with CI/CD pipelines and infrastructure as code for enterprise clients.",
    longDescription: "Built a comprehensive platform for migrating legacy systems to cloud-native environments. Features include automated migration tools, infrastructure as code templates, and monitoring dashboards.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    tags: ["AWS", "Terraform", "Docker", "Kubernetes", "Jenkins", "Python"],
    code: "https://github.com/Sunlight333/cloud-migration-platform",
    category: "web",
    featured: false,
    technologies: {
      frontend: ["React", "TypeScript", "Ant Design"],
      backend: ["Python", "FastAPI", "Celery"],
      database: ["PostgreSQL", "Redis"],
      deployment: ["AWS", "Terraform", "Docker", "Kubernetes"]
    },
    features: [
      "Automated migration assessment tools",
      "Infrastructure as Code templates",
      "CI/CD pipeline automation",
      "Cost optimization recommendations",
      "Real-time migration monitoring"
    ],
    challenges: [
      "Handling complex legacy system dependencies",
      "Ensuring zero-downtime migrations",
      "Optimizing cloud costs"
    ],
    results: [
      "50+ successful migrations completed",
      "40% average cost reduction",
      "99.9% migration success rate"
    ],
    duration: "8 months",
    teamSize: 6,
    role: "DevOps Engineer & Cloud Architect"
  },
  {
    id: 6,
    title: "Mobile-First React Native App",
    description: "Cross-platform mobile application with offline capabilities, push notifications, and real-time synchronization.",
    longDescription: "Developed a feature-rich mobile application for iOS and Android with offline-first architecture, real-time data synchronization, and comprehensive push notification system.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    tags: ["React Native", "TypeScript", "Redux", "Firebase", "Expo"],
    code: "https://github.com/Sunlight333/mobile-app",
    liveDemo: "https://expo.dev/@sunlight333/mobile-app",
    category: "mobile",
    featured: false,
    technologies: {
      frontend: ["React Native", "TypeScript", "Redux Toolkit"],
      backend: ["Node.js", "Express", "Socket.io"],
      database: ["MongoDB", "Redis"],
      deployment: ["Expo", "Google Play Store", "App Store"]
    },
    features: [
      "Offline-first architecture",
      "Real-time data synchronization",
      "Push notifications",
      "Biometric authentication",
      "Cross-platform compatibility"
    ],
    challenges: [
      "Managing offline data synchronization",
      "Optimizing performance across platforms",
      "Handling different screen sizes and orientations"
    ],
    results: [
      "10,000+ downloads",
      "4.8/5 app store rating",
      "95% crash-free sessions"
    ],
    duration: "6 months",
    teamSize: 3,
    role: "Mobile Developer"
  }
];
