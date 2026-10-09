export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  status: string;
  statusColor: string;
  tagline: string;
  heroImage: string;
  gallery: string[];
  tags: string[];
  highlights: string[];
  whatIsIt: string;
  whyBuilt: string;
  whatBuilt: string;
  whatMakesItInteresting: string;
  myRole: string;
  currentStatus: string;
  technologies: string[];
  links?: {
    repository?: string;
    website?: string;
    label?: string;
  };
}

export interface ResearchProject {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  domain: string;
  badge: string;
  tagline: string;
  previewImage: string;
  tags: string[];
  metrics: Array<{ label: string; value: string; context: string }>;
  coreTheory: string;
  psychologyAngle: string;
  empiricalFinding: string;
  technologies: string[];
  repositoryUrl: string;
}

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "aura",
    number: "01",
    title: "Aura",
    subtitle: "AI Dream Journal & Introspective Companion",
    category: "Flagship Product",
    status: "Pre-release · Android Build",
    statusColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
    tagline: "A private morning ritual combining voice capture, Jungian symbolic interpretation, and longitudinal personal memory.",
    heroImage: "/projects/aura-hero.webp",
    gallery: [
      "/projects/aura-hero.webp",
      "/projects/aura-feature-01.webp",
      "/projects/aura-feature-02.webp",
      "/projects/aura-feature-03.webp",
    ],
    tags: ["Google Gemini 3.5", "Voice Transcription", "Longitudinal Memory", "Next.js 16", "Capacitor"],
    highlights: [
      "Voice & audio-first morning dream capture pipeline with local audio retention",
      "Rigid JSON schema extraction enforcing Jungian archetypes, lucidity markers, and emotional counts",
      "Persistent dream-derived memory profile synthesizing recurring motifs across months",
      "Zero telemetry leakage with strict client-first encryption before cloud sync",
      "Android standalone APK compiled and verified via Capacitor hardware bridge",
    ],
    whatIsIt: "An introspective mobile and web journal that converts raw, fragmented morning voice notes into structured psychological profiles without clinical judgment.",
    whyBuilt: "Traditional journaling apps fail during the first 90 seconds after waking—the critical window where dream recall evaporates. Aura captures audio instantly and uses structured reasoning to extract archetypes before the conscious mind rationalizes the memory away.",
    whatBuilt: "A complete multi-screen mobile experience with instant voice recorder, structured dream detail view, recurring symbol radar, sleep hygiene correlation index, and native Android packaging.",
    whatMakesItInteresting: "Enforces strict emotional containment rules: the AI behaves as an introspective companion rather than a clinical therapist, deliberately avoiding generic motivational platitudes.",
    myRole: "Sole creator. Conceived the psychological framing, engineered the multi-turn Gemini prompt schema, authored the full Next.js/Tailwind frontend, and configured the Capacitor Android build pipeline.",
    currentStatus: "Pre-release candidate with working Android build, production web deployment, and tested voice ingestion.",
    technologies: ["Next.js 16", "TypeScript", "Tailwind CSS", "Capacitor", "Google Gemini 3.5 Flash", "Web Audio API", "IndexedDB"],
    links: {
      website: "https://aeternalabs.lat",
      label: "aeternalabs.lat",
    },
  },
  {
    id: "deep-rpg",
    number: "02",
    title: "Deep RPG Terminal",
    subtitle: "AI Game Master & CRT Engine",
    category: "Interactive Systems & Gaming",
    status: "Functional Prototype",
    statusColor: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
    tagline: "An old-school green phosphor CRT terminal governed by an autonomous AI Dungeon Master with authentic D20 tabletop rules.",
    heroImage: "/projects/deep-rpg-mockup-01-terminal.webp",
    gallery: [
      "/projects/deep-rpg-mockup-01-terminal.webp",
      "/projects/deep-rpg-mockup-02-d20-roll.webp",
      "/projects/deep-rpg-mockup-03-hero-forge.webp",
    ],
    tags: ["Flutter 3", "Dart BLoC", "Gemini 3.5 Flash-Lite", "D20 Tabletop Engine", "CRT Shaders"],
    highlights: [
      "Rigid mathematical game loop coupling AI prose with real D20 dice checks and inventory constraints",
      "Dynamic ASCII art scene synthesis generated in real time to accompany campaign milestones",
      "Authentic CRT terminal aesthetics: green/amber phosphor glow, curvature, scanline flicker, and monospaced typography",
      "Stateful inventory and HP persistence surviving session interruptions",
      "Optimized for sub-second turn latency using lightweight structured model calls",
    ],
    whatIsIt: "A tabletop roleplaying terminal that brings genuine pen-and-paper tabletop gaming to an authentic vintage mainframe display.",
    whyBuilt: "Most AI roleplaying games degrade into hallucinated wish fulfillment where choices have no mechanical weight. Deep RPG forces the AI to obey rigid mathematical game state: if you fail a DC 15 Dexterity check, you take damage, regardless of player persuasion.",
    whatBuilt: "A cross-platform Flutter application featuring custom CRT post-processing shaders, an autonomous Game Master prompt pipeline, an ASCII illustration generator, and stateful character sheet managers.",
    whatMakesItInteresting: "The game master engine operates in two phases: first, an invisible mathematical arbiter resolves the dice roll; second, a creative narrative engine paints the consequence in retro terminal prose.",
    myRole: "Game designer and systems programmer. Created the D20 rules engine, tuned the system prompt contracts, wrote the Flutter CRT rendering layers, and integrated asynchronous model streaming.",
    currentStatus: "Functional desktop and web prototype with complete multi-chapter campaign support.",
    technologies: ["Flutter 3.x", "Dart", "BLoC Pattern", "GLSL Shaders", "Gemini 3.5 Flash-Lite", "ASCII Pipeline"],
  },
  {
    id: "dualmind",
    number: "03",
    title: "DualMind",
    subtitle: "Cognitive Focus & Micro-Planning System",
    category: "Cognitive Productivity",
    status: "Functional Prototype",
    statusColor: "text-amber-400 border-amber-400/30 bg-amber-400/10",
    tagline: "An executive function support system designed to kill task paralysis by enforcing a hard ceiling of three active priorities.",
    heroImage: "/projects/dualmind-mockup-01-dashboard.webp",
    gallery: [
      "/projects/dualmind-mockup-01-dashboard.webp",
      "/projects/dualmind-mockup-02-gemini-breakdown.webp",
      "/projects/dualmind-mockup-03-focus-timer.webp",
    ],
    tags: ["React Native", "Expo SDK 54", "NativeWind", "Gemini 2.5 Flash", "Android Widgets"],
    highlights: [
      "Enforced 3-priority traffic light rule (High, Medium, Low) that blocks task hoarding",
      "Automated AI decomposition fracturing daunting projects into 1-to-5-minute atomic microsteps",
      "Immersive full-screen focus timer with haptic intervals and zero ambient distractions",
      "Home-screen Android widgets exposing the singular next action without opening the full app",
      "Offline-first architecture keeping local data synchronized without cloud lock-in",
    ],
    whatIsIt: "A daily executive function companion that prevents task paralysis through radical scope reduction and AI-assisted friction elimination.",
    whyBuilt: "Traditional task managers encourage unending backlog accumulation, leading to guilt and avoidance. DualMind physically restricts the active queue to three items, forcing clarity and immediate momentum.",
    whatBuilt: "A mobile React Native application featuring gesture-based task prioritization, an AI-powered recursive decomposition drawer that breaks abstract goals into tangible actions, an immersive focus timer, and Android home widgets.",
    whatMakesItInteresting: "The decomposition system is strictly tuned for cognitive friction reduction: steps are calibrated between 1 and 5 minutes so starting requires minimal cognitive inertia. It forbids patronizing advice or clinical lecturing.",
    myRole: "Product architect and mobile developer. Conceptualized the 3-task constraint model, built the Expo/NativeWind interface, integrated the Gemini microstep parsing pipeline, and implemented native Android widget hooks.",
    currentStatus: "Functional advanced prototype with full mobile workflow and production build bundles.",
    technologies: ["Expo SDK 54", "React Native", "NativeWind", "TypeScript", "Gemini 2.5 Flash", "react-native-android-widget", "Playwright"],
  },
  {
    id: "creator-tv",
    number: "04",
    title: "Creator TV",
    subtitle: "TV-First Interface for Google TV & Android TV",
    category: "Open Source Engineering",
    status: "Open Source · Verified on Chromecast",
    statusColor: "text-purple-400 border-purple-400/30 bg-purple-400/10",
    tagline: "An unofficial, open-source TV-first media interface tailored for the 10-foot living room experience and directional remote ergonomics.",
    heroImage: "/projects/creator-tv-home.webp",
    gallery: [
      "/projects/creator-tv-home.webp",
      "/projects/creator-tv-browse.webp",
      "/projects/creator-tv-miniplayer.webp",
      "/projects/creator-tv-audio.webp",
      "/projects/creator-tv-video.webp",
    ],
    tags: ["React 19", "Android TV / Google TV", "D-pad Navigation", "ADB Tooling", "Open Source"],
    highlights: [
      "Spatial focus management engine mapped natively to Android TV remote D-pad controls",
      "Seamless integration with native Google TV IME keyboard and Google Home phone-assisted typing",
      "Responsive 720p, 1080p, and 4K TV grid layout with safe-area and overscan preservation",
      "Native background audio playback and persistent playback session management across app restarts",
      "Automated APK consolidation, keystore signing, and physical Chromecast ADB test suite",
    ],
    whatIsIt: "An open-source TV client application engineered specifically for Android TV and Chromecast with Google TV, delivering a lean, remote-controlled media browsing experience.",
    whyBuilt: "Most web media platforms fail completely in the living room because they rely on touch or mouse pointers. Creator TV was built to prove that modern web frontends can run flawlessly on low-power TV hardware when spatial D-pad ergonomics are treated as first-class citizens.",
    whatBuilt: "A unified codebase combining a Vite React web client with a native Android TV WebView container, customized Android KeyEvent dispatching, IME suppression controls, and an automated Mac/Android SDK build pipeline.",
    whatMakesItInteresting: "Solves difficult Android TV web challenges: handling hardware DPAD_CENTER vs. virtual keyboards, supporting phone-assisted remote typing, preventing web view over-scroll, and handling the Android BACK button stack reliably.",
    myRole: "Open-source author and TV systems engineer. Conceived the spatial navigation layout, authored the native Android activity keyboard bindings, consolidated the Mac build toolchain, and verified live operation on physical Chromecast hardware.",
    currentStatus: "Public open-source repository on GitHub with verified physical Chromecast deployment and comprehensive test suites.",
    technologies: ["React 19", "TypeScript", "Vite", "Android SDK", "Java (Android Activity)", "ADB Shell", "Zsh Tooling"],
    links: {
      repository: "https://github.com/hectorx24/creator-tv",
      label: "github.com/hectorx24/creator-tv",
    },
  },
];

export const RESEARCH_PROJECTS: ResearchProject[] = [
  {
    id: "mmo-behavior-economy",
    number: "R1",
    title: "Virtual Economies & Player Behavior Engine",
    subtitle: "Agent-Based Macroeconomic Simulation & Churn Hazard Forecasting",
    domain: "Behavioral Economics · Game Systems · ABM",
    badge: "Python Engine · Open Source",
    tagline: "Agent-based simulation of virtual MMO economies analyzing currency faucets, auction liquidity sinks, and empirical player churn.",
    previewImage: "/projects/mmo-behavior-economy.webp",
    tags: ["Agent-Based Modeling", "Fisher Eq M·V=P·Y", "Kahneman Loss Aversion", "Pure-NumPy ML", "Streamlit"],
    metrics: [
      { label: "Inflation Reduction", value: "-95.3%", context: "Via algorithmic sink stabilization" },
      { label: "Gini Wealth Curve", value: "0.514", context: "Balanced vs 0.782 unregulated" },
      { label: "Predictive Churn AUC", value: "0.7431", context: "Early frustration hazard detection" },
      { label: "Simulated Cohort", value: "10,000", context: "Synthetic market agents" },
    ],
    coreTheory: "Integrates Fisher's Equation of Exchange (M·V = P·Y) with Gini inequality coefficients to model the 'gold faucet' dilemma in persistent online game worlds.",
    psychologyAngle: "Grounds player drop-off in Kahneman & Tversky's Prospect Theory (loss aversion λ ≈ 2.25) and Bartle player taxonomies, proving that economic wealth gaps trigger churn in casual cohorts.",
    empiricalFinding: "Algorithmic adjustments to transaction taxes and maintenance sinks reduce 90-day hyperinflation by 95% while improving cohort retention by +115.9%.",
    technologies: ["Python 3.10", "NumPy (Vectorized ABM)", "Pandas", "Streamlit", "Plotly", "Wilcoxon-Mann-Whitney AUC"],
    repositoryUrl: "https://github.com/hectorx24/mmo-behavior-economy",
  },
  {
    id: "circadian-cognitive-lab",
    number: "R2",
    title: "Circadian & Cognitive Endurance Lab",
    subtitle: "Longitudinal Sleep Architecture & Focus Optimization",
    domain: "Chronobiology · Pharmacokinetics · Cognitive Science",
    badge: "Research Lab · Open Source",
    tagline: "Physiological sleep stage modeling, caffeine clearance kinetics, and predictive machine learning for sustained software engineering velocity.",
    previewImage: "/projects/circadian-cognitive-lab.webp",
    tags: ["Borbély Two-Process Model", "Caffeine Pharmacokinetics", "Slow-Wave Sleep (SWS)", "Ridge Regression", "Plotly"],
    metrics: [
      { label: "Predictive R² Score", value: "0.8966", context: "Validated cognitive stamina model" },
      { label: "Deep SWS Impact", value: "+12.25 pts", context: "Dominant mental stamina biomarker" },
      { label: "Caffeine Clearance", value: "5.7h t₁/₂", context: "Metabolic half-life decay curve" },
      { label: "Optimal Focus Limit", value: "4.6 Hours", context: "Daily sustained deep work window" },
    ],
    coreTheory: "Implements Borbély's Two-Process Model of Sleep Regulation (homeostatic sleep pressure Process S + suprachiasmatic pacemaker Process C) and exponential caffeine clearance kinetics.",
    psychologyAngle: "Analyzes how sleep debt and adenosine receptor blockade compromise executive function, task-switching endurance, and deep code comprehension.",
    empiricalFinding: "Slow-wave deep sleep (SWS) is 3x more predictive of next-day coding stamina than total sleep duration alone; caffeine within 6 hours of sleep degrades SWS by 38.4%.",
    technologies: ["Python 3.10", "NumPy (Vectorized Ridge)", "Pandas", "Streamlit", "Plotly Express", "Pharmacokinetic Modeling"],
    repositoryUrl: "https://github.com/hectorx24/circadian-cognitive-lab",
  },
  {
    id: "creator-indiedev-economy",
    number: "R3",
    title: "Creator & Indie Economy Pulse Engine",
    subtitle: "Audience Retention Dynamics & Solo Dev Burnout Forecasting",
    domain: "Media Analytics · Developer Psychology · Econometrics",
    badge: "Telemetry Engine · Open Source",
    tagline: "Mathematical audience retention curves, developer context-switching penalties, and longitudinal burnout hazard tracking.",
    previewImage: "/projects/creator-indiedev-economy.webp",
    tags: ["Retention Decay R(t)", "Maslach Burnout Inventory", "Context-Switching Tax", "Indie SaaS MRR", "Streamlit"],
    metrics: [
      { label: "30s Hook Retention", value: "79.2%", context: "Top decile algorithmic benchmark" },
      { label: "Context Switch Tax", value: "23.2 min", context: "Lost focus per task interruption" },
      { label: "MRR Anxiety Buffer", value: "+62.0%", context: "Burnout reduction vs ad volatility" },
      { label: "Burnout Classifier", value: "Validated", context: "Early warning threshold engine" },
    ],
    coreTheory: "Models the structural tension between volatile algorithmic attention markets (YouTube/social RPMs) and the rigid focus requirements of software engineering.",
    psychologyAngle: "Adapts the Maslach Burnout Inventory (Emotional Exhaustion, Depersonalization, Inefficacy) and Self-Determination Theory to quantify solo creator fatigue.",
    empiricalFinding: "Videos maintaining ≥ 78% viewer retention through the first 30 seconds yield 3.4x higher organic watch time; coupling media ad volatility with predictable indie SaaS MRR reduces creator anxiety by 62%.",
    technologies: ["Python 3.10", "NumPy", "Pandas", "Streamlit", "Plotly", "Maslach Inventory Framework"],
    repositoryUrl: "https://github.com/hectorx24/creator-indiedev-economy",
  },
];

export const OTHER_PROJECTS = [
  {
    id: "aeterna",
    title: "Aeterna",
    subtitle: "Daily Curated Stoic Reflection",
    status: "Functional Prototype",
    tagline: "Daily philosophical reflections, customizable typography widgets, and high-resolution wallpaper postals.",
    image: "/projects/aeterna-mockup-01-daily-feed.webp",
    tags: ["React Native", "Next.js", "Cormorant Garamond", "Widgets", "Agora"],
    description: "An editorial philosophy application that delivers one curated reflection every 24 hours. Features high-res card exports for social sharing, personal quote collections, and native mobile widgets.",
  },
  {
    id: "brainfocus",
    title: "BrainFocus AI",
    subtitle: "Neuroacoustic Sound Engine",
    status: "Functional Prototype",
    tagline: "Pure in-browser DSP noise generator: zero sample loops, infinite pink/brownian noise textures.",
    image: "/projects/brainfocus-mockup-01-player.webp",
    tags: ["Web Audio API", "DSP", "IIR Brownian Filter", "Stereo Binaural", "Zero Dependencies"],
    description: "An audio synthesis lab engineered with zero external sound libraries. Implements Kellet pink noise filters and IIR Brownian curves directly in browser audio threads for deep focus stimulation.",
  },
  {
    id: "pomoduck",
    title: "Pomoduck",
    subtitle: "Playful Focus Companion",
    status: "Functional Prototype",
    tagline: "A playful study timer featuring an evolving duck mascot, ambient soundscapes, and local study room sessions.",
    image: "/projects/aeterna-mockup-02-widget-studio.webp",
    tags: ["Flutter 3", "Firebase Firestore", "Dart BLoC", "Gamified Study"],
    description: "A gamified Pomodoro timer featuring customizable work intervals, ambient study tracks, a reactive companion pet, and local session analytics.",
  },
];

export const TECHNICAL_STACK = {
  languages: [
    { name: "TypeScript", role: "Primary type-safe systems language across web & mobile", level: "Core" },
    { name: "Python", role: "Data science, AI evaluation, simulation models & automation", level: "Core" },
    { name: "JavaScript (ESNext)", role: "Modern web APIs, DOM performance & Web Audio DSP", level: "Core" },
    { name: "Dart", role: "Flutter cross-platform apps & BLoC state management", level: "Active" },
    { name: "SQL & Relational", role: "Structured schemas, relational queries & indexing", level: "Active" },
  ],
  frontend: [
    { name: "React 19 / 18", role: "Component architecture, hooks, concurrent features", level: "Expertise" },
    { name: "Next.js 16 / 15", role: "SSR/SSG, edge routing, performance optimization", level: "Expertise" },
    { name: "Vite", role: "Blazing fast builds, HMR, modern web bundling", level: "Core" },
    { name: "Tailwind CSS", role: "Design tokens, fluid typography, responsive breakpoints", level: "Expertise" },
    { name: "Framer Motion", role: "Fluid animations, spring physics & layout transitions", level: "Active" },
  ],
  dataAndAI: [
    { name: "NumPy & Pandas", role: "Vectorized mathematics, statistical modeling & data analysis", level: "Core" },
    { name: "Google Gemini (Flash)", role: "Structured JSON schema contracts, low-latency prompts", level: "Production" },
    { name: "Streamlit & Plotly", role: "Interactive research dashboards & data visualization", level: "Active" },
    { name: "Web Audio API (DSP)", role: "Procedural synthesis, audio nodes & IIR filters", level: "Specialized" },
    { name: "Anthropic Claude", role: "Prompt architecture & daily engineering workflow", level: "Daily Workflow" },
  ],
  platformsAndDevops: [
    { name: "Android TV / Google TV", role: "Spatial living-room UI, remote D-pad, IME bridges", level: "Specialized" },
    { name: "React Native / Expo", role: "Native mobile apps, NativeWind, secure storage", level: "Active" },
    { name: "Capacitor", role: "Web-to-native Android APK packaging & hardware plugins", level: "Active" },
    { name: "Flutter", role: "High-performance graphics & custom shaders", level: "Active" },
    { name: "ADB & Android SDK", role: "Device pairing, logcat telemetry & APK signing", level: "Active" },
  ],
};

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: string;
  badges: string[];
  summary: string;
  accomplishments: string[];
}

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "content-ai-producer",
    role: "Content Creator, Media Strategist & AI Producer",
    organization: "Independent Creator",
    period: "2022 — Present",
    location: "Remote · Sonora, Mexico",
    type: "Independent Practice",
    badges: ["YouTube & Media", "Generative AI", "Python Automation", "Video Storytelling"],
    summary: "End-to-end design and execution of high-retention multiplatform video content with technical automation.",
    accomplishments: [
      "Engineered high-retention video narratives across YouTube, TikTok, and Instagram with sustained organic engagement.",
      "Built custom Python automation scripts (SmartDownloader) for media curation, batch asset ingestion, and B-roll organization.",
      "Integrated generative AI pipelines (Claude, ChatGPT, Midjourney, ElevenLabs) to accelerate research, scripting, and voice synthesis.",
      "Mastered dynamic video pacing in Adobe Premiere Pro and CapCut, implementing structured storytelling and high-impact 3-second hooks.",
    ],
  },
  {
    id: "communications-lead",
    role: "Communications Lead & Campaign Strategist",
    organization: "Regional Campaign Directorate",
    period: "2022",
    location: "Sonora, Mexico",
    type: "Strategic Leadership",
    badges: ["Campaign Strategy", "Public Narrative", "Audience Analytics"],
    summary: "Directed public communication strategy and audiovisual production under rigorous publication schedules.",
    accomplishments: [
      "Led digital and territorial communication strategy, tailoring narratives to maximize resonance across demographic cohorts.",
      "Supervised multichannel publication schedules and audiovisual production under strict time constraints.",
      "Monitored engagement telemetry in real time to adjust strategic messaging and optimize organic reach.",
    ],
  },
  {
    id: "software-ai-consultant",
    role: "Software Engineer & Digital Systems Consultant",
    organization: "Aeterna Labs / Independent",
    period: "2022 — Present",
    location: "Remote · Sonora, Mexico",
    type: "Founder & Consultant",
    badges: ["Full-Stack AI", "Web Interfaces", "TV UX", "TypeScript / React"],
    summary: "Architecting interactive web systems, structured AI prompt contracts, and living-room TV applications.",
    accomplishments: [
      "Built modern responsive web applications (HTML5, CSS3, JavaScript, TypeScript, React) with user-first design and automated workflows.",
      "Designed and evaluated rigorous AI prompt pipelines, enforcing deterministic JSON schema contracts and empathetic persona tuning.",
      "Founded Aeterna Labs: delivering independent software products including Aura (voice dream journal), DualMind, and Creator TV (verified on real Chromecast hardware).",
    ],
  },
  {
    id: "ecommerce-mercadolibre",
    role: "E-Commerce & Digital Merchant Operations",
    organization: "MercadoLibre Merchant Operations",
    period: "2020 — 2022",
    location: "Sonora, Mexico",
    type: "Digital Commerce",
    badges: ["E-Commerce", "Consumer Psychology", "Inventory Analytics", "Operations"],
    summary: "Managed catalog optimization, commercial sales, and analytical inventory models on major e-commerce platforms.",
    accomplishments: [
      "Optimized product listings by applying consumer psychology and persuasive copywriting principles to maximize sales conversion.",
      "Managed pre- and post-sale customer channels, resolving commercial disputes and customer friction.",
      "Maintained operational inventory telemetry and sales forecasting using structured data models in Microsoft Excel.",
    ],
  },
];

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  status: string;
  badge: string;
  details: string[];
}

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "itson-administration",
    degree: "Bachelor of Business Administration (B.A.)",
    institution: "Instituto Tecnológico de Sonora (ITSON)",
    period: "2020 — 2024",
    status: "Graduated · Licensed",
    badge: "University Degree",
    details: [
      "Comprehensive training in strategic management, corporate finance, managerial economics, marketing strategy, and organizational behavior.",
      "Academic research in Consumer Psychology & Macroeconomics: investigating the relationship between consumer trends, audience psychology, and digital marketing effectiveness.",
      "Analytical foundation for assessing software product viability, unit economics, resource efficiency, and sustainable bootstrapping.",
    ],
  },
  {
    id: "linguatec-english",
    degree: "Advanced Bilingual English Certification (C1 Professional)",
    institution: "Linguatec Language Institute",
    period: "Bilingual Certified",
    status: "Full Professional Proficiency (C1)",
    badge: "Language Credential",
    details: [
      "Fluent verbal and written communication for international engineering environments, technical documentation, and remote collaboration.",
      "Demonstrated ability to author bilingual user interfaces, technical system specifications, and commercial communications.",
    ],
  },
];

export interface CapabilityGroup {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  summary: string;
  skills: Array<{ name: string; context: string }>;
}

export const CAPABILITIES_DATA: CapabilityGroup[] = [
  {
    id: "product-business",
    title: "Product & Business Strategy",
    subtitle: "Administrative foundation, unit economics & user psychology",
    iconName: "Briefcase",
    summary: "Applying formal Business Administration principles (ITSON) and consumer psychology to architect commercially sustainable software products.",
    skills: [
      { name: "Business Administration", context: "Strategic direction, corporate finance, and operating models" },
      { name: "Consumer Psychology", context: "User behavior, friction reduction, and persuasive architecture" },
      { name: "E-Commerce Operations", context: "Conversion optimization on MercadoLibre and digital storefronts" },
      { name: "Campaign Strategy", context: "Regional coordination and fast-paced editorial planning" },
      { name: "Product Architecture", context: "Transforming abstract ideas into compilable functional systems" },
      { name: "Resource Optimization", context: "Independent (bootstrapped) product development with lean execution" },
    ],
  },
  {
    id: "data-analytics",
    title: "Empirical Data & Systems Analysis",
    subtitle: "Quantitative modeling, retention telemetry & operational control",
    iconName: "BarChart3",
    summary: "Leveraging structured data models and multiplatform retention analytics to guide engineering and product decisions.",
    skills: [
      { name: "Advanced Spreadsheet Modeling", context: "Inventory forecasting, variance analysis, and unit economics" },
      { name: "Audience Retention Telemetry", context: "YouTube Studio, TikTok Analytics, and second-by-second drop-off modeling" },
      { name: "Economic & Behavior Modeling", context: "Academic research in market incentives, price shocks, and churn" },
      { name: "Structured JSON / Zod Schemas", context: "Data integrity guarantees across AI generation pipelines" },
      { name: "Funnel & A/B Optimization", context: "Empirical testing on hooks, video pacing, and conversion surfaces" },
      { name: "Performance Profiling", context: "Memory footprint analysis, bounce rates, and latency budgeting" },
    ],
  },
  {
    id: "software-ai",
    title: "Software & Artificial Intelligence",
    subtitle: "Full-stack engineering, strict contracts & living-room TV clients",
    iconName: "Cpu",
    summary: "Building complete client and server architectures: generative AI pipelines with structured schemas, reactive interfaces, and Android TV hardware adaptation.",
    skills: [
      { name: "Python Automation & ML", context: "CLI utilities, batch processing, NumPy modeling, SmartDownloader" },
      { name: "TypeScript & ESNext", context: "Strict typing, native Web APIs, clean maintainable architectures" },
      { name: "React 19 / Next.js / Vite", context: "Concurrent components, edge routing, optimized bundling" },
      { name: "Large Language Models", context: "Google Gemini & Claude, structured outputs, memory profiling" },
      { name: "Android TV & Living Room UX", context: "Native IME bridge, spatial D-pad navigation, ADB tooling" },
      { name: "Web Audio API (Pure DSP)", context: "Procedural noise synthesis, IIR filters, stereo binaural nodes" },
    ],
  },
  {
    id: "content-media",
    title: "Content & Audiovisual Production",
    subtitle: "High-retention storytelling, 3-second hooks & multimedia pipelines",
    iconName: "Video",
    summary: "Proven track record in digital content creation: high-retention video editing, structured storytelling, and AI-accelerated workflows.",
    skills: [
      { name: "Multiplatform Video Strategy", context: "Organic reach channels across YouTube, TikTok, and Instagram" },
      { name: "Premiere Pro & CapCut Editing", context: "Dynamic montage, narrative rhythm, sound design, and pacing" },
      { name: "Audience Hook Architecture", context: "Scripting frameworks specifically calibrated for 3-second hook retention" },
      { name: "AI Voice & Visual Synthesis", context: "ElevenLabs voice cloning, Midjourney conceptual art, and prompt pipelines" },
      { name: "Asset Curation & Ingestion", context: "Automated scraping and tagging systems for B-roll footage" },
      { name: "Technical Storytelling", context: "Translating complex engineering concepts into accessible media" },
    ],
  },
];
