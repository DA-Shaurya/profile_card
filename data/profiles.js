/**
 * Profiles Dataset (Parent Data Source)
 * -------------------------------------
 * This array lives in the parent domain (App.jsx) and represents
 * dynamic user profile data passed down to child components via React props.
 */
export const profilesData = [
  {
    id: 1,
    name: "Dr. Sarah Jenkins",
    role: "Lead Systems Architect",
    location: "San Francisco, CA",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    description: "Specializes in microservices architecture, distributed cloud networks, and resilient enterprise infrastructure.",
    skills: ["Cloud Architecture", "Go", "Kubernetes", "GraphQL"],
    isOnline: true,
    projectsCount: 42,
    rating: "4.9"
  },
  {
    id: 2,
    name: "Alex Rivera",
    role: "Senior UI/UX Designer",
    location: "Austin, TX",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    description: "Passionate about human-centered design systems, modern visual ergonomics, and accessible web experiences.",
    skills: ["Figma", "Design Systems", "UI Animation", "User Research"],
    isOnline: true,
    projectsCount: 38,
    rating: "4.95"
  },
  {
    id: 3,
    name: "Elena Rostova",
    role: "Full Stack Engineer",
    location: "Seattle, WA",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    description: "Full-stack developer building performant web applications with React 19, TypeScript, and modern Node.js runtimes.",
    skills: ["React", "TypeScript", "Node.js", "Tailwind CSS"],
    isOnline: false,
    projectsCount: 29,
    rating: "4.88"
  },
  {
    id: 4,
    name: "Marcus Vance",
    role: "AI & ML Specialist",
    location: "Boston, MA",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    description: "Researches Deep Learning models and integrates intelligent LLM pipelines into consumer software products.",
    skills: ["PyTorch", "Python", "LLMs", "Vector DBs"],
    isOnline: true,
    projectsCount: 31,
    rating: "4.92"
  },
  {
    id: 5,
    name: "Priya Sharma",
    role: "DevOps & Security Lead",
    location: "Chicago, IL",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    description: "Ensures automated CI/CD compliance, zero-trust infrastructure security, and high-availability deployment pipelines.",
    skills: ["Docker", "Terraform", "AWS", "Security"],
    isOnline: true,
    projectsCount: 47,
    rating: "5.0"
  },
  {
    id: 6,
    name: "David Chen",
    role: "Principal Product Manager",
    location: "New York, NY",
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    description: "Bridging business vision and technical execution to deliver impactful products loved by thousands of active users.",
    skills: ["Product Strategy", "Agile", "Analytics", "Roadmapping"],
    isOnline: false,
    projectsCount: 54,
    rating: "4.91"
  }
];
