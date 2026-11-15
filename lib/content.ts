export const links = [
  { label: "resume", href: "/Koral_Resume.pdf" },
  { label: "github", href: "https://github.com/koralkulacoglu" },
  { label: "linkedin", href: "https://linkedin.com/in/koralkulacoglu" },
  { label: "email", href: "mailto:kulacoglukoral@gmail.com" },
];

export type Job = {
  company: string;
  logo: string;
  what?: string;
  when: string;
  incoming?: boolean;
};

export const jobs: Job[] = [
  { company: "Google", logo: "google", when: "Summer 2027", incoming: true },
  { company: "Baseten", logo: "baseten", what: "LLM inference performance", when: "Winter 2027", incoming: true },
  { company: "Waterloo Systems & Networking Group", logo: "waterloo", what: "kernel RPC scheduling", when: "Fall 2026" },
  { company: "Coinbase", logo: "coinbase", what: "risk infrastructure for cross-margin trading", when: "Summer 2026" },
  { company: "BitGo", logo: "bitgo", what: "static analysis for supply chain security", when: "Fall 2025" },
  { company: "AtoB", logo: "atob", what: "data pipelines for lead scoring", when: "Winter 2025" },
  { company: "D2L", logo: "d2l", what: "multi-agent simulation for course QA", when: "Summer 2024" },
];

export type Project = {
  name: string;
  stack: string;
  line: string;
  more?: string;
  image?: string;
  code?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    name: "FIX Exchange",
    stack: "C++ · AWS",
    line: "An equity exchange that speaks FIX 4.2 over TCP.",
    more: "Price-time priority matching engine, UDP multicast market data, and a SQLite event log for crash recovery. Benchmarked on bare-metal EC2 at 28µs p99 engine latency and 27K orders/sec.",
    image: "/fix-exchange.png",
    code: "https://github.com/koralkulacoglu/fix-exchange",
  },
  {
    name: "3D Octree Compression",
    stack: "C++ · OpenGL",
    line: "Octree compression for 3D objects, up to 99% smaller.",
    more: "Comes with a real-time OpenGL viewer to scrub through compression levels.",
    image: "/3d-octree-compression.gif",
    code: "https://github.com/koralkulacoglu/3d-octree-compression",
  },
  {
    name: "Macro Placement",
    stack: "Python · PyTorch",
    line: "Chip macro placement for the Partcl/HRT challenge; beat RePlAce by 30%.",
    more: "GPU-friendly, pure PyTorch/NumPy: FFT electrostatic global placement, then Lin-Kernighan k-opt and hierarchical late-acceptance hill climbing.",
    code: "https://github.com/koralkulacoglu/macro-place-challenge-2026",
  },
  {
    name: "FourSight",
    stack: "Python · TensorFlow",
    line: "Classifies 12 cancer types from microarray data at 95% accuracy.",
    more: "Won the Canada-Wide Science Fair and took 2nd for Canada at the EU Contest for Young Scientists.",
    image: "/foursight.png",
    code: "https://github.com/redmac135/foursight",
    live: "https://partner.projectboard.world/ysc/project/foursight-analysis-of-cancerous-genetic-profiles-with-artificial-neural-networks",
  },
  {
    name: "Sematic",
    stack: "TypeScript · AWS",
    line: "A whiteboard that turns voice and video into diagrams, live.",
    more: "Gemini 2.0 Flash on AWS Amplify Gen 2. Won AWS's Best Use of DynamoDB Streams at Hack the North.",
    image: "/sematic.gif",
    code: "https://github.com/koralkulacoglu/sematic",
    live: "https://sematic.ca",
  },
  {
    name: "Smart Order Router",
    stack: "Go",
    line: "Merges live order books across exchanges and trades the spread.",
    more: "Concurrent feeds build one thread-safe global book; arbitrage opportunities are executed as they appear, with a live dashboard on top.",
    image: "/smart-order-router.gif",
    code: "https://github.com/koralkulacoglu/smart-order-router",
  },
  {
    name: "Chess Puzzle Maker",
    stack: "Python · Stockfish",
    line: "Mines my own games for puzzles. It feeds the board on this page.",
    more: "Pulls every game from Lichess, runs Stockfish over each swing, and keeps positions where exactly one move wins. The best 100 are ranked and exported.",
    code: "https://github.com/koralkulacoglu/chess-puzzle-maker",
  },
];

export const olderProjects: Project[] = [
  {
    name: "PrsntAI",
    stack: "Python · React",
    line: "Turns a talk into slides as you give it.",
    image: "/prsntai.png",
    code: "https://github.com/prsntai",
  },
  {
    name: "SentiTrader",
    stack: "Python · Keras",
    line: "Trades on r/worldnews sentiment. 12% annualized, live.",
    image: "/sentitrader.png",
    code: "https://github.com/koralkulacoglu/SentiTrader",
  },
  {
    name: "Autonomous Car",
    stack: "Python · OpenCV",
    line: "Lane detection plus sign and vehicle tracking with YOLOv4-tiny.",
    image: "/autonomous-car.gif",
    code: "https://github.com/koralkulacoglu/AutonomousCar",
    live: "https://www.youtube.com/watch?v=I9cR4of2jlo&list=PL4iMkUwfSFa3LzvXLPlDLKk0EshU3x4gV",
  },
  {
    name: "Admini",
    stack: "React · AWS",
    line: "Government contracting platform; led a team of five.",
    image: "/admini.png",
    code: "https://github.com/admini-ca",
  },
  {
    name: "AirBoard",
    stack: "Python · MediaPipe",
    line: "Hands-free mouse and keyboard from hand tracking.",
    image: "/airboard.gif",
    code: "https://github.com/koralkulacoglu/AirBoard",
  },
  {
    name: "Songsnap",
    stack: "Python · Flask",
    line: "Photos in, Spotify playlist out. UofTHacks 2024.",
    image: "/songsnap.png",
    code: "https://github.com/SubwayMan/songsnap",
    live: "https://devpost.com/software/songsnap-p10xbc",
  },
  {
    name: "NoteBot Bryan",
    stack: "Python · Whisper",
    line: "Listens to lectures and writes notes. DeltaHacks 2024.",
    image: "/notebot-bryan.jpg",
    code: "https://github.com/romistaro/NoteBotBryan",
    live: "https://devpost.com/software/bryan",
  },
  {
    name: "Histopathology AI",
    stack: "Python · TensorFlow",
    line: "A from-scratch neural net for cancer in tissue and blood images.",
    image: "/histopathology-ai.jpg",
    code: "https://github.com/koralkulacoglu/ScienceFair2021",
  },
  {
    name: "COVIDTracker",
    stack: "Python · PyGame",
    line: "Simulates spread over 2008 Beijing taxi data.",
    image: "/covidtracker.png",
    code: "https://github.com/koralkulacoglu/COVIDTracker",
    live: "https://devpost.com/software/covid-2008-sim",
  },
  {
    name: "Competitive Programming",
    stack: "C++ · Python",
    line: "Contest solutions and templates. 17th in Canada, picoCTF 2022.",
    image: "/competitive-programming.jpg",
    code: "https://github.com/koralkulacoglu/CompetitiveProgramming",
  },
];

export const webring = {
  home: "https://se-webring.xyz",
  prev: "https://seanyang.ca/",
  next: "https://www.ekpraveen.ca/",
};
