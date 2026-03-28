export const projects = [
  {
    id: 1,
    title: "ShadowLens",
    image: "/images/projects/shadowlens.png",
    shortDesc: "AI-driven security analysis platform.",
    fullDesc:
      "ShadowLens is a security analysis platform that detects vulnerabilities by analyzing source code, logs, and network traffic using automated tools and AI-assisted correlation.",
    tech: [
      "FastAPI",
      "Python",
      "MongoDB",
      "Semgrep",
      "Docker",
      "Nginx",
    ],
    github: "https://github.com/Maurya-03/shadowlens",
    demo: "#",
    featured: true,
  },
  {
    id: 2,
    title: "BioNova",
    image: "/images/projects/bionova.png",
    shortDesc: "AI-powered livestock biosecurity system.",
    fullDesc:
      "BioNova helps farmers detect diseases early in livestock using computer vision and audio analysis, combined with expert guidance and real-time alerts.",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "YOLOv8",
      "OpenCV",
    ],
    github: "https://github.com/Maurya-03/bio_nova",
    demo: "#",
    featured: true,
  },
  {
    id: 3,
    title: "TaskFlow",
    image: "/images/projects/TaskFlow.png",
    shortDesc: "Modern real-time task management app.",
    fullDesc:
      "TaskFlow is a Kanban-based task management platform with real-time collaboration, timers, priority tracking, and smart task suggestions.",
    tech: [
      "Next.js",
      "TypeScript",
      "Firebase",
      "Tailwind CSS",
    ],
    github: "https://github.com/Maurya-03/taskflow",
    demo: null,
    featured: true,
  },
  {
    id: 4,
    title: "ToneVault",
    image: "/images/projects/tonevault.png",
    shortDesc: "Minimalist music streaming platform.",
    fullDesc:
      "ToneVault is a monochrome music streaming and library app supporting playlists, offline playback, and cross-platform mobile deployment.",
    tech: [
      "React",
      "TypeScript",
      "Supabase",
      "Capacitor",
    ],
    github: "https://github.com/Maurya-03/tone-vault",
    demo: "#",
    featured: true,
  },

  // Non-featured (View All only)

  {
    id: 5,
    title: "NeonGrid",
    image: "/images/projects/Neon-Grid.png",
    shortDesc: "Cyberpunk-themed real-time chat app.",
    fullDesc:
      "NeonGrid is a real-time chat platform with community rooms, admin moderation tools, and a neon-inspired UI focused on fast, persistent conversations.",
    tech: [
      "React",
      "TypeScript",
      "Firebase",
      "Tailwind CSS",
    ],
    github: "https://github.com/Maurya-03/neon-grid",
    demo: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Gesture Recognition System",
    image: "/images/projects/gesture.png",
    shortDesc: "Real-time hand gesture detection.",
    fullDesc:
      "A computer vision application that detects and classifies hand gestures from webcam input using real-time landmark tracking and gesture logic.",
    tech: [
      "Python",
      "OpenCV",
      "MediaPipe",
    ],
    github: "https://github.com/Maurya-03/The_bird",
    demo: null,
    featured: false,
  },
  {
    id: 7,
    title: "Second Brain OS",
    image: "/images/projects/Second_Brain.png",
    shortDesc: "Local-first RAG knowledge system with FastAPI, Next.js, ChromaDB, and Ollama.",
    fullDesc:
      "Second Brain OS lets you ingest documents, code, notes, and PDFs, then ask questions against your own data with a local LLM. Features include streaming chat, file management, session memory, and a knowledge graph view.",
    tech: [
      "FastAPI",
      "Next.js 14",
      "ChromaDB",
      "Ollama",
      "Python 3.10+",
      "Node.js 18+",
      "NetworkX",
      "D3.js"
    ],
    github: "https://github.com/Maurya-03/Second_Brain",
    demo: null,
    featured: false,
  }
];