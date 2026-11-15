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
  image?: string;
  code?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    name: "FIX Exchange",
    stack: "C++ · AWS",
    line: "A persistent equity exchange using FIX 4.2 over TCP",
    image: "/fix-exchange.png",
    code: "https://github.com/koralkulacoglu/fix-exchange",
  },
  {
    name: "3D Octree Compression",
    stack: "C++ · OpenGL",
    line: "Octree compression for 3D objects, up to 99% smaller",
    image: "/3d-octree-compression.gif",
    code: "https://github.com/koralkulacoglu/3d-octree-compression",
  },
  {
    name: "Macro Placement",
    stack: "Python · PyTorch",
    line: "Chip macro placement for the Partcl/HRT challenge that beat RePlAce by 30%",
    code: "https://github.com/koralkulacoglu/macro-place-challenge-2026",
  },
  {
    name: "Smart Order Router",
    stack: "Go",
    line: "Merges live order books across exchanges and trades the spread",
    image: "/smart-order-router.gif",
    code: "https://github.com/koralkulacoglu/smart-order-router",
  },
  {
    name: "FourSight",
    stack: "Python · TensorFlow",
    line: "Classifies 12 cancer types from microarray data at 95% accuracy",
    image: "/foursight.png",
    code: "https://github.com/redmac135/foursight",
    live: "https://partner.projectboard.world/ysc/project/foursight-analysis-of-cancerous-genetic-profiles-with-artificial-neural-networks",
  },
  {
    name: "Sematic",
    stack: "TypeScript · AWS",
    line: "A whiteboard that turns voice and video into diagrams, live",
    image: "/sematic.gif",
    code: "https://github.com/koralkulacoglu/sematic",
    live: "https://sematic.ca",
  },
  {
    name: "Autonomous Car",
    stack: "Python · OpenCV",
    line: "Lane detection plus sign and vehicle tracking with YOLOv4-tiny",
    image: "/autonomous-car.gif",
    code: "https://github.com/koralkulacoglu/AutonomousCar",
    live: "https://www.youtube.com/watch?v=I9cR4of2jlo&list=PL4iMkUwfSFa3LzvXLPlDLKk0EshU3x4gV",
  },
  {
    name: "Chess Puzzle Maker",
    stack: "Python · Stockfish",
    line: "Mines my own games for the puzzles on this page",
    code: "https://github.com/koralkulacoglu/chess-puzzle-maker",
  },
  {
    name: "PrsntAI",
    stack: "Python · React",
    line: "Turns a talk into slides as you give it",
    image: "/prsntai.png",
    code: "https://github.com/prsntai",
  },
  {
    name: "SentiTrader",
    stack: "Python · Keras",
    line: "Trades on r/worldnews sentiment at 12% annualized",
    image: "/sentitrader.png",
    code: "https://github.com/koralkulacoglu/SentiTrader",
  },
  {
    name: "Admini",
    stack: "React · AWS",
    line: "A government contracting platform built with a team of five",
    image: "/admini.png",
    code: "https://github.com/admini-ca",
  },
  {
    name: "AirBoard",
    stack: "Python · MediaPipe",
    line: "Hands-free mouse and keyboard from hand tracking",
    image: "/airboard.gif",
    code: "https://github.com/koralkulacoglu/AirBoard",
  },
  {
    name: "Songsnap",
    stack: "Python · Flask",
    line: "Turns photos into Spotify playlists, built at UofTHacks 2024",
    image: "/songsnap.png",
    code: "https://github.com/SubwayMan/songsnap",
    live: "https://devpost.com/software/songsnap-p10xbc",
  },
  {
    name: "NoteBot Bryan",
    stack: "Python · Whisper",
    line: "Listens to lectures and writes notes, built at DeltaHacks 2024",
    image: "/notebot-bryan.jpg",
    code: "https://github.com/romistaro/NoteBotBryan",
    live: "https://devpost.com/software/bryan",
  },
  {
    name: "Histopathology AI",
    stack: "Python · TensorFlow",
    line: "A from-scratch neural net for cancer in tissue and blood images",
    image: "/histopathology-ai.jpg",
    code: "https://github.com/koralkulacoglu/ScienceFair2021",
  },
  {
    name: "COVIDTracker",
    stack: "Python · PyGame",
    line: "Simulates spread over 2008 Beijing taxi data",
    image: "/covidtracker.png",
    code: "https://github.com/koralkulacoglu/COVIDTracker",
    live: "https://devpost.com/software/covid-2008-sim",
  },
  {
    name: "Competitive Programming",
    stack: "C++ · Python",
    line: "Contest solutions and templates, including 17th in Canada at picoCTF 2022",
    image: "/competitive-programming.jpg",
    code: "https://github.com/koralkulacoglu/CompetitiveProgramming",
  },
];


export const webring = {
  home: "https://se-webring.xyz",
  prev: "https://seanyang.ca/",
  next: "https://www.ekpraveen.ca/",
};

export const slug = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

