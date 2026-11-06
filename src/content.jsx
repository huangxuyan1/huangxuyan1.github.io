import { A } from './link'

/* All site content lives here; the page renders from these exports.
   To add an image, put the file in public/ and set the matching field:
   profile.headshot, or `figure` on a publication or project (e.g. '/headshot.jpg'). */

export const URLS = {
  brown: 'https://cs.brown.edu/',
  osu: 'https://www.osu.edu/',
  chao: 'https://sites.google.com/view/wei-lun-harry-chao',
  su: 'https://ysu1989.github.io/',
  lin: 'https://zhiqlin.github.io/',
  paper: 'https://arxiv.org/abs/2607.03633',
  paperPdf: 'https://arxiv.org/pdf/2607.03633',
  modular: 'https://github.com/huangxuyan1/Modular',
}

export const profile = {
  name: 'Xuyan Huang',
  role: 'M.S. Student in Computer Science',
  affiliation: 'Brown University',
  email: 'alvin4huang@gmail.com',
  headshot: '/headshot.jpg',
}

export const links = [
  { id: 'email', label: 'Email', href: `mailto:${profile.email}` },
  { id: 'github', label: 'GitHub', href: 'https://github.com/huangxuyan1' },
  { id: 'openreview', label: 'OpenReview', href: 'https://openreview.net/profile?id=~Xuyan_Huang1' },
  { id: 'cv', label: 'CV', href: '/Xuyan_Huang_CV.pdf' },
]

export const bio = [
  <>
    I am an M.S. student in Computer Science at <A href={URLS.brown}>Brown University</A>. I
    received my B.S. in Computer Science and Engineering from{' '}
    <A href={URLS.osu}>The Ohio State University</A> in May 2026, summa cum laude, with an AI
    specialization and a minor in General Psychology.
  </>,
  <>
    At Ohio State I did research with <A href={URLS.chao}>Wei-Lun Chao</A>,{' '}
    <A href={URLS.su}>Yu Su</A>, and <A href={URLS.lin}>Zhiqiang Lin</A>, working on motion cues in
    video re-identification, risky behaviors in LLM web agents, and fingerprinting in WeChat
    mini-apps. I am currently building <A href={URLS.modular}>Modular</A>, a node-based audio
    platform in C++20.
  </>,
]

export const interests = 'Multimodal representation learning, video generation, and creative AI'

export const news = [
  { date: 'Sep 2026', text: 'Started my M.S. in Computer Science at Brown University.' },
  {
    date: 'Jul 2026',
    text: (
      <>
        Our paper on identity-specific motion signatures and the BALLER120 benchmark is now
        on <A href={URLS.paper}>arXiv</A>.
      </>
    ),
  },
  {
    date: 'Jun 2026',
    text: (
      <>
        Started building <A href={URLS.modular}>Modular</A>, a node-based audio platform and AI
        coding-agent harness.
      </>
    ),
  },
  { date: 'May 2026', text: 'Graduated summa cum laude from The Ohio State University.' },
]

export const publications = [
  {
    id: 'baller120',
    short: 'BALLER120 paper',
    title: 'Probing Identity-Specific Motion Signatures: A Controlled Diagnostic Study',
    href: URLS.paper,
    date: 'Jul 2026',
    authors: [
      'Yingtie Lei',
      'Fangxun Liu',
      'Baicheng Wu',
      'Colin Lee',
      'Ziheng Zhang',
      'Junke Yang',
      'Zhiyuan Tao',
      'Xuyan Huang',
      'Shuheng Wang',
      'William Koran',
      'Kyle Park',
      'Elijah H. Buckwalter',
      'Cheng-Hsuan Chiang',
      'Tejas Naik',
      'Daniel Yi',
      'Wei-Lun Chao',
    ],
    venueShort: 'arXiv',
    year: 2026,
    summary:
      'Introduces BALLER120, a controlled benchmark of free throws by 120 professional basketball players, and shows that video models often identify players from faces and jerseys unless appearance cues are suppressed.',
    links: [
      { label: 'arXiv', href: URLS.paper },
      { label: 'PDF', href: URLS.paperPdf },
    ],
    figure: '/baller120-figure.jpg',
    figureAlt:
      'Saliency maps over a free throw: the appearance model attends to the jersey and face, while the silhouette model follows body motion.',
    figureCaption: 'Cropped from Fig. 1 of the paper.',
  },
]

export const research = [
  {
    id: 'mlb',
    short: 'ML as the Basis Lab',
    title: 'OSU Machine Learning as the Basis Lab',
    subtitle: (
      <>
        Undergraduate Researcher, advised by <A href={URLS.chao}>Wei-Lun Chao</A>
      </>
    ),
    date: 'Sep 2025 – May 2026',
    points: [
      <>
        Curated, labeled, and quality-checked video and segmentation data
        for <A href={URLS.paper}>BALLER120</A>, a benchmark of 4,583 free-throw clips across 120 NBA
        players, used to test whether video models recognize players by motion patterns or by faces
        and jerseys.
      </>,
      'Investigated synthetic music detection using audio foundation models in an independent research project.',
    ],
  },
  {
    id: 'seclab',
    short: 'Security Lab',
    title: 'OSU Computer Security Laboratory',
    subtitle: (
      <>
        Undergraduate Researcher, advised by <A href={URLS.lin}>Zhiqiang Lin</A>
      </>
    ),
    date: 'May 2024 – Apr 2025',
    points: [
      <>
        Defined WeChat API search criteria for the lab’s existing fingerprinting scanner; wrote
        hash-based script grouping and JSON summary code, and found a case later analyzed in the
        group’s <A href="https://frostwing98.com/papers/SATS25.pdf">SaTS 2025 paper</A>.
      </>,
    ],
  },
  {
    id: 'nlp',
    short: 'NLP Group',
    title: 'OSU Natural Language Processing Group',
    subtitle: (
      <>
        Undergraduate Researcher, advised by <A href={URLS.su}>Yu Su</A>
      </>
    ),
    date: 'Aug 2024 – Oct 2024',
    points: [
      <>
        Identified and annotated risky behaviors by LLM-based web agents for an early-stage guardrail
        project later developed into
        the <A href="https://arxiv.org/abs/2507.14293v1">WebGuard benchmark</A>.
      </>,
    ],
  },
]

export const experience = [
  {
    id: 'union',
    short: 'Union Mobile',
    title: 'Union Mobile Financial Technology, China',
    subtitle: 'Summer Intern',
    date: 'May 2025 – Jul 2025',
    points: [
      'Trained and evaluated five voice and music model architectures for an AI-powered visual novel game engine.',
      'Fine-tuned ACE-Step; found phase issues causing stereo bass in base and fine-tuned outputs.',
      'Designed evaluation pipelines for generated speech and music, comparing models for the team’s game-engine use cases.',
      'Authored LLM prompt templates to extract character and background descriptions from novel text for a text-to-visual-novel feature; templates were deployed by the end of the internship.',
    ],
  },
  {
    id: 'tutor',
    short: 'Math Tutor',
    title: 'Mathematics & Statistics Learning Center, OSU',
    subtitle: 'Math Tutor',
    date: 'Aug 2024 – Dec 2024',
    points: ['Organized tutoring sessions for Honors Calculus 1 and Calculus 1–3.'],
  },
  {
    id: 'autodrive',
    short: 'AutoDrive',
    title: 'Buckeye AutoDrive, The Ohio State University',
    date: 'Mar 2024 – Jun 2024',
    points: [
      'Integrated vehicle-to-everything (V2X) into a vehicle perception pipeline and predicted egress lanes from V2X and sensor waypoints.',
    ],
  },
  {
    id: 'tencent',
    short: 'Tencent SSV',
    title: 'Music Technology X Program, Tencent SSV',
    date: 'Jul 2023 – Aug 2023',
    points: [
      'Trained VISinger2 and SoftVC-VITS on Tencent Cloud; both models achieved the highest mean opinion score (MOS) among all program participants.',
      'Developed an inference tool that enabled VISinger2 to synthesize singing from DiffSinger (.ds) files.',
      'Assisted with recording and preparing a custom singing dataset for model training.',
    ],
  },
]

export const projects = [
  {
    id: 'modular',
    short: 'Modular',
    title: 'Modular',
    href: URLS.modular,
    subtitle: 'Node-based audio platform and AI coding-agent harness. C++20',
    date: 'Jun 2026 – Present',
    points: [
      'Built a node-based audio platform with typed audio and MIDI ports, graph persistence, and an interactive editor.',
      'Designed its graph runtime to flatten nested supernodes into a topological execution plan and preallocate buffers before block processing.',
      'Engineered an AI coding-agent harness with architecture decision records, specifications, dependency-aware tickets, and validation gates for MIDI timing and nested-graph equivalence.',
    ],
    figure: null,
  },
  {
    id: 'campus',
    short: 'Campus Events',
    title: 'Campus Event Discovery',
    subtitle: 'CSE 5914 team project. React, TypeScript, FastAPI, PostgreSQL',
    date: 'Jan 2026 – Apr 2026',
    points: [
      'Built profile and settings interfaces that let students manage their profiles and event preferences in a campus event-discovery app.',
      'Implemented preference APIs, parameterized SQL, upserts, and default initialization to persist event interests, availability, group size, and travel distance across sessions.',
    ],
    figure: null,
  },
]

export const education = [
  {
    id: 'brown',
    short: 'Brown University',
    school: 'Brown University',
    place: 'Providence, RI',
    degree: 'M.S. in Computer Science',
    date: 'Sep 2026 – May 2028 (expected)',
    notes: ['Coursework: Deep Learning, Self-Supervised Learning & World Models'],
  },
  {
    id: 'osu',
    short: 'The Ohio State University',
    school: 'The Ohio State University',
    place: 'Columbus, OH',
    degree: 'B.S. in Computer Science and Engineering, AI Specialization; Minor in General Psychology',
    date: 'Aug 2023 – May 2026',
    notes: [
      'GPA: 3.930/4.000; Summa Cum Laude',
      'Coursework: Machine Learning, Computer Vision, NLP, Neural Networks',
    ],
  },
]

export const honors = [
  { title: 'Summa Cum Laude, The Ohio State University', date: '2026' },
  { title: 'MakeOHI/O 2024, Human-Centered Computing Challenge Winner', date: 'Mar 2024' },
  { title: 'HackAI 2024, AI Club Track Champion', date: 'Feb 2024' },
  { title: 'Buckeye Programming Competition, 3rd Place', date: 'Feb 2024' },
  { title: 'ICPC North America Qualifier, OSU 9th Place', date: 'Sep 2023' },
]

export const lastUpdated = 'November 2026'
