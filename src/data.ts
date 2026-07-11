export type Experience = {
  company: string;
  role: string;
  dates: string;
  location: string;
  signal: string;
  bullets: string[];
  tech: string[];
};

export type Project = {
  index: string;
  title: string;
  shortTitle: string;
  label: string;
  description: string;
  proof: string[];
  tech: string[];
  url: string;
  visual: "tracking" | "jepa" | "focal";
};

export const experiences: Experience[] = [
  {
    company: "Acquiso inc",
    role: "Full Stack & AI Engineer",
    dates: "2024 — 2026",
    location: "Montréal, CA",
    signal: "AI → production",
    bullets: [
      "Shipped marketplace and admin systems across Angular, .NET, SQL, and Azure.",
      "Integrated price prediction, multimodal recognition, and LLM text generation.",
      "Cut platform drag through EF Core tuning, caching, lazy loading, and query optimization.",
    ],
    tech: ["Angular", ".NET", "Azure", "SQL", "LLMs"],
  },
  {
    company: "Deloitte",
    role: "Analyst — Cyber Defense & Data Protection",
    dates: "2024 — 2025",
    location: "Montréal, CA",
    signal: "Billions of files",
    bullets: [
      "Automated vulnerability intelligence by connecting XSOAR, ServiceNow CMDB, and Lansweeper.",
      "Built decision dashboards for security risk in Power BI.",
      "Led sensitive-data discovery across 500+ servers and billions of files.",
    ],
    tech: ["XSOAR", "BigID", "Power BI", "ServiceNow", "Data protection"],
  },
  {
    company: "KAIST",
    role: "Bioinformatics Research Assistant",
    dates: "2023",
    location: "Daejeon, KR",
    signal: "Research → Nature",
    bullets: [
      "Processed genome-scale CRISPR knockout screens and FASTQ sequencing data with MAGeCK-VISPR.",
      "Co-authored a Scientific Data paper on CHO-cell knockout screening.",
    ],
    tech: ["CRISPR", "Bioinformatics", "FASTQ", "MAGeCK-VISPR"],
  },
  {
    company: "LABEO Technologies",
    role: "Software Engineer Intern",
    dates: "2022",
    location: "Montréal, CA",
    signal: "Code → physical world",
    bullets: [
      "Built Qt/C++ and Arduino software for technical automation.",
      "Designed the algorithm behind an automated mouse-weighing system.",
    ],
    tech: ["C++", "Qt", "Arduino", "Embedded systems"],
  },
];

export const projects: Project[] = [
  {
    index: "01",
    title: "Multi-Camera Football Intelligence",
    shortTitle: "Football Winners",
    label: "Computer vision / tracking",
    description:
      "One pitch. Two cameras. Persistent player identities. A pipeline that turns amateur footage into shared-coordinate trajectories.",
    proof: [
      "Fine-tuned YOLO26x for small-ball detection under blur and occlusion.",
      "Built lens correction, homography, ByteTrack, cross-camera fusion, and global-ID recovery.",
    ],
    tech: ["YOLO", "OpenCV", "ByteTrack", "Hungarian matching"],
    url: "https://github.com/Moa1er/Football-Winners",
    visual: "tracking",
  },
  {
    index: "02",
    title: "Causal JEPA Reproduction",
    shortTitle: "Object-centric world model",
    label: "Representation learning",
    description:
      "Mask the object, predict its latent state, test whether a model can learn the mechanics behind the pixels.",
    proof: [
      "Implemented latent-space object masking from scratch.",
      "Tests interaction reasoning, temporal prediction, and world-model learning.",
    ],
    tech: ["PyTorch", "JEPA", "Object masking", "World models"],
    url: "https://github.com/Moa1er/C-JEPA-Reproduction",
    visual: "jepa",
  },
  {
    index: "03",
    title: "FoCAL Reproduction",
    shortTitle: "Learned canonicalization",
    label: "Robust visual learning",
    description:
      "Instead of forcing invariance, learn the canonical view. Then pressure-test what robustness actually survives.",
    proof: [
      "Trained PRLC models with ResNet50 and ViT backbones.",
      "Extended the work with ablations and a Spatial Transformer Network.",
    ],
    tech: ["PRLC", "ResNet50", "ViT", "STN"],
    url: "https://github.com/Moa1er/FoCAL-reproduction",
    visual: "focal",
  },
];

export const capabilities = [
  {
    id: "vision",
    name: "Visual intelligence",
    headline: "Pixels into decisions.",
    copy: "Detection, tracking, field registration, multimodal recognition, and models that learn structure—not shortcuts.",
    tools: ["PyTorch", "OpenCV", "TensorFlow", "YOLO", "Transformers"],
  },
  {
    id: "systems",
    name: "Software systems",
    headline: "Prototype to production.",
    copy: "Full-stack products, tuned data access, cloud delivery, and embedded code that crosses into the physical world.",
    tools: ["Python", "C++", "C#", ".NET", "Angular", "SQL", "Azure"],
  },
  {
    id: "security",
    name: "Cyber + data",
    headline: "Find the signal in scale.",
    copy: "Vulnerability intelligence and sensitive-data discovery across complex estates with executive-grade reporting.",
    tools: ["XSOAR", "BigID", "Power BI", "ServiceNow", "Lansweeper"],
  },
  {
    id: "research",
    name: "Research",
    headline: "Reproduce. Question. Extend.",
    copy: "Paper reproduction, model evaluation, bioinformatics, and experiments designed to expose how a system really behaves.",
    tools: ["NumPy", "Pandas", "Hugging Face", "MAGeCK-VISPR", "Ablations"],
  },
];
