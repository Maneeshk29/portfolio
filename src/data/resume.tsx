import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

const logo = (domain: string) =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

export const DATA = {
  name: "Maneeshkumar Lillyprabhu",
  initials: "ML",
  url: "https://maneesh-lillyprabhu.vercel.app",
  location: "San Antonio, Texas",
  locationLink: "https://www.google.com/maps/place/San+Antonio,+TX",
  description:
    "Software Engineer, Data Engineer, Data Scientist and Entrepreneur. I build AI-powered products, scalable data systems, and technology that creates measurable impact.",
  summary:
    "I'm a senior Computer Science student at [the University of Texas at San Antonio](/#education), concentrating in Data Science with a minor in Business (expected May 2027). My interests sit where software engineering, AI, data science, business intelligence and entrepreneurship meet. I've worked across startups, private equity, nonprofits and enterprise technology: I built financial reporting tools at [the University of Texas System](/#work), automated social media data pipelines at [Forward Edge AI](/#work), and email infrastructure at 99 Tutors. Outside of work I [found ventures and compete in hackathons](/#projects). I believe technology is most valuable when it creates a positive, measurable impact.",
  avatarUrl: "/me.jpg",
  skills: [
    { name: "Python", icon: Python },
    { name: "TypeScript", icon: Typescript },
    { name: "JavaScript" },
    { name: "SQL" },
    { name: "Java", icon: Java },
    { name: "C++", icon: Csharp },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Node.js", icon: Nodejs },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Supabase" },
    { name: "Google Cloud" },
    { name: "Vercel" },
    { name: "Dagster" },
    { name: "ETL/ELT Pipelines" },
    { name: "REST APIs" },
    { name: "Pandas" },
    { name: "NumPy" },
    { name: "Scikit-learn" },
    { name: "TensorFlow" },
    { name: "PyTorch" },
    { name: "Computer Vision" },
    { name: "Financial Modeling" },
    { name: "Business Intelligence" },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "maneeshkumar.lillyprabhu@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Maneeshk29",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/maneesh-k29/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:maneeshkumar.lillyprabhu@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "99 Tutors.com, Inc.",
      href: "https://99tutors.com",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: logo("99tutors.com"),
      start: "Sep 2026",
      end: "Present",
      description:
        "Built email infrastructure for 58,735 recipients at 95.6% deliverability, with SendGrid authentication, template validation and automated suppression for 13,774 unsubscribed contacts. Cut pre-send processing from 14 minutes to 0.4 seconds across 250,000+ records. Added automatic retries, failure safeguards and 42 passing unit tests. Shipped a serverless analytics platform tracking 73 campaigns over 90 days, with campaign reporting, CSV upload and secure dispatch of up to 1,000 recipients per request. Python, SendGrid API, Vercel, REST APIs.",
    },
    {
      company: "The University of Texas System",
      href: "https://www.utsystem.edu",
      badges: [],
      location: "Austin, TX (Hybrid)",
      title: "Business Intelligence Intern",
      logoUrl: logo("utsystem.edu"),
      start: "May 2026",
      end: "Sep 2026",
      description:
        "Built a standardized Budget vs. Actuals dashboard turning 5,000+ PeopleSoft ledger transactions into cost-center reports. Analyzed a department with a $13.9M budget, $10.3M in expenses and $5.4M in recognized revenue across 15 cost centers and six account types. Created a reusable reporting model designed for 30 UT System Administration departments, improving visibility into expenses, revenue, transfers, encumbrances and remaining budgets.",
    },
    {
      company: "Forward Edge AI",
      href: "https://www.forwardedge.ai",
      badges: [],
      location: "Remote",
      title: "Data Engineer / AI Data Operations Engineer Intern",
      logoUrl: "/logos/forward-edge-ai.png",
      start: "Feb 2026",
      end: "Sep 2026",
      description:
        "Built production data pipelines for the Public Democracy social media intelligence platform. Deployed an Instagram discovery pipeline with Dagster, Apify and Google Cloud, ingesting posts into PostgreSQL. Built a TikTok comment scraper on the EnsembleData API with cursor pagination and daily scheduling. Sped up Instagram ingestion about 6x, from over two hours to about 21 minutes for 700 accounts. Added failure alerting, execution monitoring, API credit tracking and Dagster Cloud deployments.",
    },
    {
      company: "SBDC National Information Clearinghouse (SBDCNet)",
      href: "https://www.sbdcnet.org",
      badges: [],
      location: "San Antonio, TX",
      title: "Business Research Assistant",
      logoUrl: logo("sbdcnet.org"),
      start: "Sep 2025",
      end: "Feb 2026",
      description:
        "Delivered research and strategic insights for 60+ U.S. businesses across 10+ industries, in partnership with the U.S. Small Business Administration, America's SBDC network and UTSA's Institute for Economic Development. Conducted industry, market and competitor analysis with federal, commercial and economic data, and wrote custom reports supporting expansion and market-entry decisions.",
    },
    {
      company: "V68 Capital LLC",
      href: "https://v68capital.com",
      badges: [],
      location: "New York, NY",
      title: "Private Equity Intern, Data Analytics",
      logoUrl: "/logos/v68-capital.png",
      start: "Mar 2025",
      end: "Sep 2025",
      description:
        "Built a business intelligence report on 21,000+ private New York businesses using Data Axle data, segmenting acquisition targets by revenue ($2.5M–$10M), geography and headcount. Researched acquisition candidates, built machine-learning pipelines for valuation analysis and forecasting, and contributed to CRM and investor-relations workflows. Python, Pandas, TensorFlow, Scikit-learn.",
    },
    {
      company: "Najim Center, UT San Antonio",
      href: "https://www.utsa.edu",
      badges: [],
      location: "San Antonio, TX",
      title: "Strategist; Advocacy Intern (2026–2027 cohort)",
      logoUrl: logo("utsa.edu"),
      start: "Sep 2026",
      end: "Present",
      description:
        "Strategist Program (Sep–Nov 2026): worked with a student consulting team on a growth and strategy challenge for a nonprofit of roughly $30M in scale, covering research, organizational analysis, strategic planning and recommendations. Selected for the 2026–2027 Najim Advocacy Internship Program, with sessions beginning February 2027.",
    },
    {
      company: "Code Equity",
      href: "https://code-equity.org",
      badges: [],
      location: "San Antonio, TX",
      title: "Head of Business Strategy & Founder of UTSA Student Chapter",
      logoUrl: "/logos/code-equity.png",
      start: "Jul 2024",
      end: "Jan 2026",
      description:
        "Founded the Code Equity student chapter at UTSA and led business strategy for a nonprofit making software engineering education accessible to underserved communities. Recruited and managed software engineering and finance interns, led initiatives targeting $100,000 in annual fundraising, and led planning for a volunteer coordination and leadership platform.",
    },
    {
      company: "Sports Media Inc.",
      href: "https://sportsmedia.net",
      badges: [],
      location: "Severance, CO (Remote)",
      title: "Computer Science Intern",
      logoUrl: "/logos/sports-media.png",
      start: "Jul 2024",
      end: "Sep 2024",
      description:
        "Computer Science internship in the sports media industry, gaining early professional software engineering experience.",
    },
    {
      company: "Headstarter AI",
      href: "https://headstarter.co",
      badges: [],
      location: "New York, NY (Hybrid)",
      title: "Software Engineering Fellow",
      logoUrl: logo("headstarter.co"),
      start: "Jul 2024",
      end: "Sep 2024",
      description:
        "Software Engineering Fellowship focused on software engineering, artificial intelligence and technical development.",
    },
  ],
  education: [
    {
      school: "University of Texas at San Antonio",
      href: "https://www.utsa.edu",
      degree:
        "B.S. Computer Science, Data Science concentration, Business minor · GPA 3.79",
      logoUrl: logo("utsa.edu"),
      start: "2023",
      end: "2027 (expected)",
    },
  ],
  projects: [
    {
      title: "Float",
      href: "https://float-inky-alpha.vercel.app/",
      dates: "Nov 2026",
      active: true,
      description:
        "AI-powered flood prediction, disaster preparedness and emergency response platform. **1st place for impact at the Dell Social Impact AI Datathon.** It gives an eight-day flood-risk outlook and runs a computer-vision model trained on 1,193 labeled images (91.5% accuracy on an independent test set). It also covers evacuation routing, shelters and damage documentation, using NOAA/NWS, FEMA, USGS, Open-Meteo and Houston TranStar data.",
      technologies: ["Python", "PyTorch", "Computer Vision", "JavaScript", "Geospatial Analytics"],
      links: [
        {
          type: "Website",
          href: "https://float-inky-alpha.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Maneeshk29/Float",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/float.jpg",
      video: "",
    },
    {
      title: "Quickeer",
      href: "",
      dates: "May 2026 - Present",
      active: true,
      description:
        "Founder. An experiential learning platform that connects university students with nonprofits needing project-based support. Students get real-world, portfolio-building experience across majors, and nonprofits get technical and operational talent. Universities are the primary institutional partners.",
      technologies: ["React", "TypeScript", "Supabase", "PostgreSQL", "Vercel"],
      links: [],
      image: "/projects/quickeer.jpg",
      video: "",
    },
    {
      title: "LabOpen",
      href: "https://labopen-liard.vercel.app/",
      dates: "2026 - Present",
      active: true,
      description:
        "Co-founder, with Shreeshkumar Lillyprabhu. Helps students discover undergraduate research opportunities and connect with faculty mentors, through student and faculty portals, research-interest matching and faculty-initiated outreach. Now being tested in an initial UT San Antonio pilot with faculty and students.",
      technologies: ["Next.js", "TypeScript", "Supabase", "pgvector", "Machine Learning"],
      links: [
        {
          type: "Website",
          href: "https://labopen-liard.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/labopen.jpg",
      video: "",
    },
    {
      title: "RowdyPlan",
      href: "https://rowdy-plan-pitchdeck-35a446e4-c5c0.vercel.app/#9",
      dates: "2026 - Present",
      active: true,
      description:
        "Co-founder, with Ranya Bhartiya. An AI-powered career resource platform for UTSA students, started at a university hackathon. It offers personalized internship matching, skill-gap analysis, AI interview prep and career event discovery. The first prototype aggregated 48 local career and campus opportunities.",
      technologies: ["AI", "Next.js", "TypeScript", "Python"],
      links: [
        {
          type: "Pitch Deck",
          href: "https://rowdy-plan-pitchdeck-35a446e4-c5c0.vercel.app/#9",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/rowdyplan.jpg",
      video: "",
    },
    {
      title: "Shift",
      href: "https://shift-marketplace-demo-maneesh-port.vercel.app/",
      dates: "2026",
      active: true,
      description:
        "A student-only campus marketplace for buying and selling items during move-in and move-out. Features university email verification, search and filtering, peer-to-peer messaging and local exchange workflows, all built around reuse and lower student costs.",
      technologies: ["React", "TypeScript", "Vercel"],
      links: [
        {
          type: "Demo",
          href: "https://shift-marketplace-demo-maneesh-port.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/shift.jpg",
      video: "",
    },
    {
      title: "Monster Munch City",
      href: "",
      dates: "Oct 2026",
      active: true,
      description:
        "An interactive educational game that teaches students how AI learns from examples. Players build a training set, run a weighted k-nearest-neighbors prediction engine, test predictions and retrain the model. Includes pre- and post-surveys to measure learning and perceptions of AI.",
      technologies: ["TypeScript", "JavaScript", "k-Nearest Neighbors", "Data Analysis"],
      links: [],
      image: "/projects/monster-munch-city.jpg",
      video: "",
    },
    {
      title: "Private Equity Fund Return Predictor",
      href: "https://github.com/Maneeshk29/pe-fund-return-predictor",
      dates: "May 2025",
      active: false,
      description:
        "A machine-learning system for forecasting private equity fund returns from historical performance, financial ratios, market conditions and risk indicators, using Ridge Regression, Random Forest and XGBoost to support investment screening.",
      technologies: ["Python", "Pandas", "Scikit-learn", "TensorFlow", "XGBoost"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Maneeshk29/pe-fund-return-predictor",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/pe-fund-return-predictor.jpg",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "1st Place for Impact, Dell Social Impact AI Datathon",
      dates: "November 2026",
      location: "Dell Technologies / UT San Antonio",
      description:
        "Placed 1st out of 150 participants with Float, an AI-powered flood prediction and disaster response platform combining machine learning, computer vision, geospatial analytics and real environmental data.",
      image: logo("dell.com"),
      links: [
        {
          title: "Float",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://float-inky-alpha.vercel.app/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Maneeshk29/Float",
        },
      ],
    },
    {
      title: "USAA Ascent Scholar",
      dates: "",
      location: "USAA",
      description:
        "Selected as one of 30 scholars from approximately 5,500 applicants.",
      image: logo("usaa.com"),
      links: [],
    },
    {
      title: "RowdyPlan, UTSA Hackathon",
      dates: "2026",
      location: "UT San Antonio",
      description:
        "Built the first RowdyPlan prototype, an AI career resource platform for UTSA students, during a university hackathon.",
      image: logo("utsa.edu"),
      links: [
        {
          title: "Pitch Deck",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://rowdy-plan-pitchdeck-35a446e4-c5c0.vercel.app/#9",
        },
      ],
    },
  ],
  funProjects: [
    {
      title: "PointSwap: Loyalty Points Marketplace",
      href: "https://pointswap.vercel.app",
      dates: "2026",
      active: true,
      description:
        "A marketplace where people trade unused loyalty points for rewards they'll actually use. For example, if Chick-fil-A and Starbucks participated, one customer could trade Chick-fil-A points for another customer's Starbucks Stars. Customers get more choice, and participating brands could see more visits when customers redeem their new rewards.",
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [
        {
          type: "Website",
          href: "https://pointswap.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Maneeshk29/loyalty-points-marketplace",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/pointswap.jpg",
      video: "",
    },
    {
      title: "Closer: Long-Distance Couples App",
      href: "https://closer-ldr.vercel.app",
      dates: "2026",
      active: true,
      description:
        "An app that helps long-distance couples reconnect after an argument. If both partners opt in, the app can use audio from an in-app call to suggest a moment to pause and revisit a shared memory. It finds photos of the couple in albums they've approved and automatically creates a collage or a short video set to one of their favorite songs.",
      technologies: ["HTML", "CSS", "JavaScript", "Web Audio API", "Canvas"],
      links: [
        {
          type: "Website",
          href: "https://closer-ldr.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Maneeshk29/long-distance-couples-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/closer.jpg",
      video: "",
    },
    {
      title: "Twinder",
      href: "https://github.com/Maneeshk29/twinder",
      dates: "2026",
      active: true,
      description:
        "A social app that helps you find your look-alike. Upload a selfie and Twinder compares it with photos from other users who've opted in. You can see your closest matches side by side and connect if you both want to meet.",
      technologies: ["Computer Vision", "Web App"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Maneeshk29/twinder",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/twinder.jpg",
      video: "",
    },
  ],
};
