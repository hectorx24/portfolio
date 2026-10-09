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
    website?: string;
    repository?: string;
    label?: string;
  };
}

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "aura",
    number: "01",
    title: "Aura",
    subtitle: "AI Dream Journal & Introspective Companion",
    category: "Flagship Product",
    status: "Pre-release · Android Build",
    statusColor: "text-amber-400 border-amber-400/30 bg-amber-400/10",
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
      "Oto companion: conversational guide grounded in recent dreams and psychological patterns",
      "Tactile 'Liquid Glass' UI designed strictly around a 100vh viewport-first mobile experience",
    ],
    whatIsIt: "A contemplative personal dream journal that pairs audio recording with automated Jungian symbol analysis, persistent longitudinal memory, and a contextual companion named Oto.",
    whyBuilt: "Traditional dream journals are static notes where symbols and patterns across months get buried. Aura treats dreams as an evolving subconscious mirror, discovering recurring archetypes, lucidity triggers, and emotional motifs over time.",
    whatBuilt: "An end-to-end mobile web and native Android application featuring immediate wakeup voice capture, automated audio transcription, structured semantic extraction, a private dream memory store, dream postcard generation, and conversational companion interactions.",
    whatMakesItInteresting: "Rather than using generic chatbot prompts, Aura enforces strict JSON schemas (Zod/Gemini responseSchema) that separate transcriptions from psychological analysis. Oto's memory builder aggregates dream counts and recurring symbols to ground dialogues in authentic personal history.",
    myRole: "Founder, lead developer, and product designer. Architected the entire application from concept to Android build, designed the Liquid Glass aesthetic, implemented the Gemini structured output pipelines, and authored the persistent dream memory model.",
    currentStatus: "Functional advanced prototype compiled into a standalone signed Android APK (14 MB) and responsive web client. Pre-release testing phase.",
    technologies: ["Next.js 16", "React 19", "Capacitor 7", "TypeScript", "Tailwind CSS", "Gemini 3.5 Flash-Lite", "IndexedDB", "Framer Motion"],
    links: {
      website: "https://www.aeternalabs.lat",
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
    statusColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
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
      "Persistent campaign chronicle tracking player choices, inventory encumbrance, and character progression",
      "Strict separation between fictional narrative data and game engine rules to prevent prompt drift",
    ],
    whatIsIt: "A retro-cyberpunk terminal application where an AI Game Master orchestrates a narrative tabletop campaign with strict D&D 5e-inspired mechanics, real dice rolls, and real-time ASCII environment rendering.",
    whyBuilt: "Most LLM-based roleplaying experiences suffer from lack of consequence: players can declare impossible feats without resistance. Deep RPG Terminal grounds generative storytelling in rigid arithmetic rules, combat health pools, and unpredictable dice physics.",
    whatBuilt: "A cross-platform Flutter application featuring character creation, an inventory and economy ledger, animated D20 roll mechanics, dynamic narrative branching, and a retro CRT aesthetic complete with customizable phosphor palettes.",
    whatMakesItInteresting: "The engine enforces a structured JSON contract separating literary storytelling from arithmetic state deltas (HP, mana, gold, XP). The AI never rolls dice itself; it interprets the physical roll output returned by the engine.",
    myRole: "Game designer, systems architect, and Flutter developer. Built the BLoC state management system, designed the CRT terminal visual pipeline, engineered the LLM structured contracts, and modeled the D20 combat rules.",
    currentStatus: "Functional advanced prototype with working campaign loop and release APK export.",
    technologies: ["Flutter 3", "Dart", "BLoC Pattern", "Gemini 3.5 Flash-Lite", "Custom GLSL/Skia Shaders", "D&D 5e SRD Rules"],
  },
  {
    id: "dualmind",
    number: "03",
    title: "DualMind",
    subtitle: "Cognitive Focus & Micro-Planning System",
    category: "Cognitive Productivity",
    status: "Functional Prototype",
    statusColor: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
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
      "Native Android home-screen widget integration for ambient task awareness",
      "Hardware-level secure storage with zero cloud tracking for total personal privacy",
    ],
    whatIsIt: "A specialized productivity and execution application built for individuals experiencing ADHD or decision paralysis, enforcing radical constraint on concurrent goals.",
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

export const OTHER_PROJECTS = [
  {
    id: "aeterna",
    title: "Aeterna",
    subtitle: "Daily Curated Stoic Reflection",
    status: "Functional Prototype",
    tagline: "Daily philosophical reflections, customizable typography widgets, and high-resolution wallpaper postals.",
    image: "/projects/aeterna-mockup-01-daily-feed.webp",
    tags: ["React Native", "Next.js", "Cormorant Garamond", "Widgets", "Agora"],
    description: "An editorial philosophy application that delivers one curated idea every 24 hours. Features high-res card exports for social sharing, personal quote collections, and native mobile widgets.",
  },
  {
    id: "brainfocus",
    title: "BrainFocus AI",
    subtitle: "Neuroacoustic Sound Engine",
    status: "Functional Prototype",
    tagline: "Pure DSP sound synthesis using Vanilla Web Audio API to generate custom Brownian noise, Pink noise, and Binaural beats.",
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
    { name: "Python", role: "AI evaluation, prompt pipelines, scripting & automation", level: "Core" },
    { name: "JavaScript (ESNext)", role: "Modern web APIs, DOM, Web Audio DSP", level: "Core" },
    { name: "Dart", role: "Flutter cross-platform apps & BLoC state management", level: "Active" },
    { name: "Bash / Zsh", role: "Build orchestration, ADB automation, deployment CLI", level: "Active" },
  ],
  frontend: [
    { name: "React 19 / 18", role: "Component architecture, hooks, concurrent features", level: "Expertise" },
    { name: "Next.js 16 / 15", role: "Viewport-first layouts, SSR/SSG, edge routing", level: "Expertise" },
    { name: "Vite", role: "Blazing fast builds, HMR, lightweight web bundling", level: "Core" },
    { name: "Tailwind CSS", role: "Utility styling, design tokens, responsive breakpoints", level: "Expertise" },
    { name: "Framer Motion", role: "Microinteractions, layout transitions, physics", level: "Active" },
  ],
  mobileAndPlatforms: [
    { name: "Android TV / Google TV", role: "Spatial 10-foot TV UI, D-pad navigation, IME bridges", level: "Specialized" },
    { name: "React Native / Expo", role: "Native mobile apps, NativeWind, hardware secure storage", level: "Active" },
    { name: "Capacitor", role: "Web-to-native Android APK packaging & hardware plugins", level: "Active" },
    { name: "Flutter", role: "High-performance graphics, custom CRT shaders, BLoC", level: "Active" },
    { name: "ADB & Android SDK", role: "Device pairing, logcat telemetry, keystore signing", level: "Active" },
  ],
  aiAndSystems: [
    { name: "Google Gemini (Flash-Lite / Flash)", role: "Structured JSON schemas, system contracts, low latency", level: "Production" },
    { name: "Web Audio API (Pure DSP)", role: "Procedural noise synthesis, IIR filters, binaural nodes", level: "Specialized" },
    { name: "Anthropic Claude & Claude Code", role: "Daily engineering workflow, architectural evaluation", level: "Daily Workflow" },
    { name: "IndexedDB / SQLite / Hardware Storage", role: "Local-first persistence, privacy-focused offline data", level: "Core" },
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
    role: "Creador de Contenido, Estratega de Redes & Productor IA",
    organization: "Productor Independiente",
    period: "2022 — Presente",
    location: "Remoto · Sonora, México",
    type: "Freelance / Independiente",
    badges: ["YouTube & Redes", "IA Generativa", "Python CLI", "Video Editing"],
    summary: "Diseño y ejecución integral de contenido audiovisual multiplataforma con automatización técnica y modelos generativos.",
    accomplishments: [
      "Diseño y ejecución de estrategias audiovisuales en YouTube, TikTok e Instagram, logrando altos índices de retención y engagement orgánico sostenido.",
      "Implementación de pipelines con IA generativa (Claude, ChatGPT, Midjourney, ElevenLabs) para acelerar investigación de tendencias, generación de guiones y síntesis de voz.",
      "Edición de video de alta dinámica en Adobe Premiere Pro y CapCut, aplicando storytelling estructurado y ganchos visuales (hooks) en los primeros 3 segundos.",
      "Desarrollo de scripts en Python (SmartDownloader) para curaduría, descarga masiva y procesamiento automatizado por lotes de recursos multimedia y B-Roll.",
    ],
  },
  {
    id: "communications-lead",
    role: "Líder de Comunicaciones & Estrategia de Campaña",
    organization: "Coordinación Regional",
    period: "2022",
    location: "Sonora, México",
    type: "Liderazgo de Comunicación",
    badges: ["Estrategia Regional", "Comunicación Pública", "Analítica de Métricas"],
    summary: "Dirección de la narrativa pública territorial y digital bajo estrictos cronogramas de publicación y análisis de métricas.",
    accomplishments: [
      "Dirección de la estrategia de comunicación digital y territorial, adaptando narrativas públicas para maximizar la conexión con diversos segmentos demográficos.",
      "Supervisión del calendario de publicaciones y producción de materiales audiovisuales en redes sociales bajo cronogramas de alta exigencia.",
      "Análisis de métricas de interacción pública para ajustar mensajes estratégicos en tiempo real y optimizar el alcance orgánico de la campaña.",
    ],
  },
  {
    id: "software-ai-consultant",
    role: "Desarrollo de Software & Automatización Digital",
    organization: "Consultoría Independiente · Aeterna Labs",
    period: "2022 — Presente",
    location: "Remoto · Sonora, México",
    type: "Fundador & Consultor",
    badges: ["Interfaces Web", "Prompt Engineering", "Full-Stack AI", "React / TS"],
    summary: "Construcción de interfaces web interactivas, modelos de evaluación de prompts y clientes de televisión para sala.",
    accomplishments: [
      "Creación de interfaces web interactivas y responsivas (HTML5, CSS3, JavaScript, TypeScript, React) con diseño centrado en el usuario y captura de datos automatizada.",
      "Diseño y evaluación de prompts complejos de IA, entrenando modelos de lenguaje para generar respuestas estructuradas (JSON Schemas), coherentes y empáticas.",
      "Fundación de Aeterna Labs: arquitectura de productos independientes como Aura (diario onírico con memoria longitudinal), DualMind y Creator TV (cliente Android TV verificado en Chromecast).",
    ],
  },
  {
    id: "ecommerce-mercadolibre",
    role: "Operaciones Digitales & Comercio Electrónico",
    organization: "MercadoLibre Merchant Operations",
    period: "2020 — 2022",
    location: "Sonora, México",
    type: "Comercio Electrónico",
    badges: ["E-commerce", "Psicología del Consumidor", "Modelos Excel", "Operaciones"],
    summary: "Gestión comercial, optimización de publicaciones y control analítico de inventarios en la plataforma líder de comercio electrónico.",
    accomplishments: [
      "Gestión y optimización de publicaciones comerciales aplicando principios de psicología del consumidor y copywriting persuasivo para maximizar conversiones.",
      "Administración de canales de atención y resolución de objeciones comerciales críticas de compradores antes y después de la venta.",
      "Monitoreo analítico de inventarios y control operativo de ventas digitales mediante modelos de datos estructurados en Microsoft Excel.",
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
    degree: "Licenciatura en Administración de Empresas",
    institution: "Instituto Tecnológico de Sonora (ITSON)",
    period: "2020 — 2024",
    status: "Licenciado / Titulado",
    badge: "Grado Universitario",
    details: [
      "Formación integral en dirección estratégica, economía empresarial, finanzas corporativas, mercadotecnia estratégica y comportamiento organizacional.",
      "Investigación académica en Psicología del Consumidor & Macroeconomía: análisis sobre el impacto de las tendencias de consumo y psicología de audiencias en la efectividad del marketing digital.",
      "Sólida base analítica para entender viabilidad económica de productos, pricing, optimización de recursos y modelos de negocio en software.",
    ],
  },
  {
    id: "linguatec-english",
    degree: "Programa Avanzado de Idioma Inglés (Certificación Bilingüe Profesional)",
    institution: "Centro de Idiomas Linguatec",
    period: "Certificación Bilingüe",
    status: "Inglés Avanzado / C1 Profesional",
    badge: "Certificación de Idioma",
    details: [
      "Dominio fluido oral y escrito para entornos corporativos internacionales, documentación técnica en inglés y trabajo remoto con equipos globales.",
      "Capacidad demostrada para diseñar interfaces bilingües, redactar documentación técnica y liderar comunicaciones comerciales internacionales.",
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
    title: "Producto & Estrategia de Negocios",
    subtitle: "Visión administrativa, viabilidad comercial y psicología",
    iconName: "Briefcase",
    summary: "Integración de fundamentos de Administración de Empresas (ITSON), psicología del consumidor y liderazgo de producto para diseñar software comercialmente sostenible.",
    skills: [
      { name: "Administración de Empresas", context: "Dirección estratégica, finanzas y modelos de negocio" },
      { name: "Psicología del Consumidor", context: "Comportamiento de usuario y copywriting persuasivo" },
      { name: "Operaciones E-commerce", context: "Gestión de conversiones en MercadoLibre y tiendas digitales" },
      { name: "Estrategia de Campaña", context: "Coordinación regional y calendarios editoriales de alto ritmo" },
      { name: "Definición de Producto", context: "Del concepto abstracto a arquitecturas funcionales compilables" },
      { name: "Gestión de Recursos", context: "Desarrollo independiente (bootstrapped) con ejecución ágil" },
    ],
  },
  {
    id: "data-analytics",
    title: "Datos & Análisis Empírico",
    subtitle: "Modelado cuantitativo, métricas de retención y control operativo",
    iconName: "BarChart3",
    summary: "Uso riguroso de modelos analíticos en hojas de cálculo y telemetría de retención en plataformas digitales para toma de decisiones informadas.",
    skills: [
      { name: "Modelado en Excel Avanzado", context: "Control de inventarios, proyecciones y costos operativos" },
      { name: "Métricas de Audiencia & Retención", context: "Telemetría en YouTube Studio, TikTok Analytics e Instagram" },
      { name: "Análisis Macro & Microeconómico", context: "Investigación académica ITSON en comportamiento de mercado" },
      { name: "Esquemas Estructurados (JSON/Zod)", context: "Garantía de integridad de datos en pipelines de IA" },
      { name: "Optimización de Embudo (Funnel)", context: "A/B testing empírico en miniaturas, ganchos y conversiones" },
      { name: "Auditoría de Rendimiento", context: "Control de memoria, tasas de abandono y tiempos de carga" },
    ],
  },
  {
    id: "software-ai",
    title: "Software & Sistemas de Inteligencia Artificial",
    subtitle: "Ingeniería full-stack, contratos estrictos y clientes TV",
    iconName: "Cpu",
    summary: "Desarrollo técnico de extremo a extremo: pipelines de IA generativa con JSON estricto, interfaces reactivas modernas y adaptación a hardware de sala.",
    skills: [
      { name: "Python (Automatización & Scraping)", context: "Herramientas CLI, batch processing, SmartDownloader" },
      { name: "TypeScript & JavaScript (ESNext)", context: "Tipado estricto, Web APIs nativas, arquitecturas limpias" },
      { name: "React 19 / Next.js / Vite", context: "Componentes reactivos, SSR, empaquetado optimizado" },
      { name: "Modelos de Lenguaje (Claude, Gemini, GPT)", context: "Structured outputs, memory profiling, prompt tuning" },
      { name: "Android TV & Living Room UX", context: "Integración IME nativa, navegación D-pad, ADB tooling" },
      { name: "Web Audio API (DSP Puro)", context: "Síntesis procedural de ruido, filtros IIR, binaural stereo" },
    ],
  },
  {
    id: "content-media",
    title: "Contenido & Producción Audiovisual",
    subtitle: "Storytelling, retención en los primeros 3 segundos y pipelines multimedia",
    iconName: "Video",
    summary: "Experiencia probada en la economía de creadores: creación de video de alta retención, guiones estructurados y automatización con IA generativa.",
    skills: [
      { name: "Estrategia Audiovisual Multiplataforma", context: "Canales en YouTube, TikTok, Instagram con engagement orgánico" },
      { name: "Edición en Premiere Pro & CapCut", context: "Montaje de alta dinámica, pacing narrativo y transiciones" },
      { name: "Hooks & Retención de Audiencia", context: "Arquitectura de guiones enfocados en retención inicial de 3s" },
      { name: "IA de Voz & Gráfica (ElevenLabs, Midjourney)", context: "Generación de locución clonada, b-roll conceptual y arte" },
      { name: "Curaduría & Scraping de B-Roll", context: "Sistemas para recolección y etiquetado rápido de metraje" },
      { name: "Comunicación Pública & Storytelling", context: "Transmisión clara de conceptos técnicos a audiencias masivas" },
    ],
  },
];

