import manmaImage from "./manma.png";
import interviewAiImage from "./AiStrategy.png";
import rasoiMitraImage from "./rasoimitra.png";
import emotionImage from "./emotion.png";
import skycastImage from "./skycast.png";
import payrollImage from "./employe.png";

export const projects = [
  {
    id: "manma",
    title: "Manma — AI Portfolio Assistant",
    year: "2026",
    categories: ["Full Stack", "AI"],
    description:
  "An AI-powered portfolio assistant that uses RAG, embeddings, Qdrant, LangChain, and Google Gemini to answer questions about Mayank's skills, projects, experience, and technical background.",
  technologies: [
      "React",
      "Node.js",
      "LangChain",
      "Gemini",
      "RAG",
      "Qdrant",
      "Embeddings",
    ],
    image: manmaImage,
    liveUrl: "https://mayank-os-portfolio.vercel.app",
    githubUrl: "https://github.com/manohar-mayank/manma-backend",
    featured: true,
    highlights: [
      "RAG-based personal knowledge system",
      "Document chunking and embeddings",
      "Qdrant vector database retrieval",
      "Gemini-powered responses",
      "Custom portfolio chat interface",
    ],
  },

  {
    id: "interview-ai",
    title: "Interview AI Strategy Builder",
    year: "2026",
    categories: ["Full Stack", "AI"],
    description:
      "An AI-powered application designed to help users prepare for technical interviews through structured interview strategies and preparation guidance.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "LLM API",
      "MongoDB",
      "REST API",
    ],
    image: interviewAiImage,
    liveUrl: "https://interview-ai-strategy-builder.vercel.app",
    githubUrl: "https://github.com/manohar-mayank/interview-ai-strategy-builder",
    featured: false,
    highlights: [
      "AI-powered interview preparation",
      "React and Node.js architecture",
      "REST API integration",
      "Structured preparation workflow",
      "Deployed full-stack application",
    ],
  },

  {
    id: "rasoi-mitra",
    title: "RasoiMitra — Smart Recipe Companion",
    year: "2025",
    categories: ["Full Stack"],
    description:
      "A recipe discovery platform that helps users find recipes based on ingredients and explore nutrition, cooking instructions, and related food content.",
    technologies: [
      "JavaScript",
      "Node.js",
      "Spoonacular API",
      "REST API",
      "HTML",
      "CSS",
    ],
    image: rasoiMitraImage,
    liveUrl: "https://rasoi-mitra-web-app.vercel.app",
    githubUrl: "https://github.com/manohar-mayank/RasoiMitra-Web-App",
    featured: false,
    highlights: [
      "Ingredient-based recipe discovery",
      "External API integration",
      "Nutrition and recipe information",
      "Responsive interface",
      "Animated landing experience",
    ],
  },

  {
    id: "emotion-detection",
    title: "Emotion Detection System",
    year: "2026",
    categories: ["AI"],
    description:
      "A machine-learning application that analyzes text and predicts emotional categories through an interactive Streamlit interface.",
    technologies: [
      "Python",
      "NLP",
      "Machine Learning",
      "Pandas",
      "NumPy",
      "scikit-learn",
      "Streamlit",
    ],
    image: emotionImage,
    liveUrl: "https://real-time-emotions-detection.streamlit.app",
    githubUrl: "https://github.com/manohar-mayank/real-time-emotion-detection",
    featured: true,
    highlights: [
      "Text-based emotion classification",
      "NLP preprocessing workflow",
      "Machine-learning model pipeline",
      "Interactive Streamlit interface",
      "Deployed ML application",
    ],
  },

  {
    id: "skycast",
    title: "SkyCast — Weather Application",
    year: "2025",
    categories: ["Frontend"],
    description:
      "A responsive weather application that provides real-time weather information using the OpenWeatherMap API.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "OpenWeatherMap API",
    ],
    image: skycastImage,
    liveUrl: "https://sky-cast-eight-alpha.vercel.app",
    githubUrl: "https://github.com/manohar-mayank/SkyCast",
    featured: false,
    highlights: [
      "Real-time weather data",
      "OpenWeatherMap API integration",
      "Dynamic weather information",
      "Responsive interface",
    ],
  },

  {
    id: "payroll",
    title: "Employee Payroll Management System",
    year: "2025",
    categories: ["Backend"],
    description:
      "A Java desktop application for managing employee payroll, salary history, deductions, and department-level reporting.",
    technologies: [
      "Java",
      "Java Swing",
      "MySQL",
      "JFreeChart",
    ],
    image: payrollImage,
    liveUrl: "",
    githubUrl: "https://github.com/manohar-mayank/Employee-Payroll-System",
    featured: false,
    highlights: [
      "Employee CRUD operations",
      "Payroll and salary management",
      "MySQL database persistence",
      "Department-wise reporting",
      "CSV and payslip functionality",
    ],
  },
];

export const projectFilters = [
  "All",
  "Full Stack",
  "AI",
  "Frontend",
  "Backend",
];