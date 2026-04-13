export interface Rule {
  title: string;
  content: string;
}

export interface Competition {
  title: string;
  image: string;
  slug: string;
  category: string;
  date: string;
  details: string;
  subtitle: string;
  description: string;
  prizePool: string;
  location: string;
  teamSize: string;
  rules: Rule[];
}

export const COMPETITIONS_DATA: Competition[] = [
  {
    title: "Investor's Dilemma",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    slug: "investors-dilemma",
    category: "Finance / Strategy",
    date: "17th April, 2026",
    details: "Strategy-based financial simulation with multi-round portfolio decisions",
    subtitle: "Investment Strategy Simulation",
    description:
      "The event places participants in a simulated financial environment where they act as investors managing a virtual portfolio across multiple time periods. By responding to changing market conditions and structured news events, participants must make informed decisions to maximize returns.",
    prizePool: "Rs 8,000",
    location: "Mini Audi",
    teamSize: "1-3",
    rules: [
      {
        title: "Introduction",
        content:
          "Investor's Dilemma, conducted under Photon (Pre-Fest of Neutron 3.0), is a strategy-based financial simulation that tests decision-making, analytical thinking, and risk management.",
      },
      {
        title: "Eligibility",
        content:
          "Open to Rishihood University students. Participation allowed solo or in teams of 1 to 3 members.",
      },
      {
        title: "Mandatory Identity Verification",
        content:
          "Participants must present a valid institutional ID and a valid government ID (Aadhaar, PAN, Passport, or equivalent).",
      },
      {
        title: "Registration Details",
        content:
          "Registration mode is online. Deadline is 16th April 2026. Registration fee is Rs 0. Selection is first-come first-served.",
      },
      {
        title: "Simulation Overview",
        content:
          "This is a multi-round investment simulation where participants build and manage a virtual portfolio over time to achieve the highest value by the end.",
      },
      {
        title: "Simulation Structure",
        content:
          "All participants begin with equal virtual capital; each round features around five companies; participants may buy, sell, or hold.",
      },
      {
        title: "Timeline",
        content:
          "The simulation progresses through 2028, 2030, 2032, 2034, 2036, and 2038, with portfolios carried forward after every round.",
      },
      {
        title: "Round Flow - Market Setup",
        content:
          "At the start of each round, participants receive the current year, listed companies, and stock prices.",
      },
      {
        title: "Round Flow - Initial Investment Window",
        content:
          "Participants allocate capital, buy stocks, and may retain cash.",
      },
      {
        title: "Round Flow - News and Market Events",
        content:
          "Structured company, economic, or sector updates are released. News may have direct, indirect, delayed, or minimal impact.",
      },
      {
        title: "Round Flow - Trading Window",
        content:
          "Participants may buy additional shares, sell existing holdings, or hold positions during the designated trading window.",
      },
      {
        title: "Round Flow - Round Close",
        content:
          "Final prices are revealed, portfolio values are updated, and outcomes carry forward to the next round.",
      },
      {
        title: "Progression Across Rounds",
        content:
          "Market complexity increases over time; participants are expected to adapt strategy based on prior outcomes and new information.",
      },
      {
        title: "Final Evaluation",
        content:
          "At the end of 2038, all portfolios are evaluated and ranked by total final portfolio value.",
      },
      {
        title: "Winning Criteria",
        content:
          "The participant or team with the highest final portfolio value is declared the winner.",
      },
      {
        title: "Time Regulations",
        content:
          "Each round has fixed time windows for initial investment and trading decisions; exact timings are announced during the event and no actions are permitted after closure.",
      },
      {
        title: "Judging",
        content:
          "Primary metric is final portfolio value. Secondary metrics, if required, include consistency of performance and quality of decision-making.",
      },
      {
        title: "Tie-Break",
        content:
          "If final portfolio values are identical, the highest profit between any two consecutive rounds determines the winner. Organizer decisions are final and binding.",
      },
      {
        title: "Strategy Considerations",
        content:
          "Participants should balance risk and return, diversify where appropriate, adapt across rounds, and avoid overreaction to short-term events.",
      },
      {
        title: "Common Pitfalls",
        content:
          "Avoid over-concentration in one stock, ignoring market signals, panic selling after negative news, and failing to adapt strategy over rounds.",
      },
      {
        title: "General Rules",
        content:
          "Report at least 30 minutes before start, follow all organizer instructions, maintain appropriate conduct, and do not obstruct event operations.",
      },
      {
        title: "Permitted Items",
        content:
          "Laptop, internet access for platform use only, and personal notes are permitted.",
      },
      {
        title: "Prohibited Items",
        content:
          "External trading platforms, real-money transactions, hazardous materials, unauthorized devices/assistance, and any items prohibited by policy or law are not allowed.",
      },
      {
        title: "Gameplay Rules",
        content:
          "Trades must be executed within designated windows, decisions cannot be changed after round close, event-provided information must be used, and portfolios do not reset.",
      },
      {
        title: "Trading Constraints",
        content:
          "No short selling, no leverage or margin trading, no buying beyond available cash, and no selling beyond currently owned shares.",
      },
      {
        title: "Safety and Conduct",
        content:
          "Hazardous, reckless, discriminatory, harassing, or abusive behavior is prohibited and may lead to immediate removal or disciplinary action.",
      },
      {
        title: "Grounds for Disqualification",
        content:
          "Late reporting, eligibility breaches, unauthorized assistance, cheating, tampering, misconduct, safety violations, property damage, or non-compliance may result in disqualification.",
      },
      {
        title: "Prize Pool and Recognition",
        content:
          "Total prize pool is Rs 8,000: 1st place Rs 5,000 and 2nd place Rs 3,000. E-certificates are provided to winners and participants.",
      },
      {
        title: "Liability and Consent",
        content:
          "Participation is voluntary and at personal risk. Organizers and institution are not liable for injury, loss, or damage. Media capture and emergency first-aid consent apply.",
      },
      {
        title: "Code of Conduct",
        content:
          "Integrity, honesty, respect, non-discrimination, rule compliance, anti-cheating, and protection of event systems and property are mandatory.",
      },
      {
        title: "Appeals Process",
        content:
          "Escalation chain is Level 1 On-Ground Coordinator (verbal), Level 2 Competition Lead (written within 30 minutes with evidence), and Level 3 Photon Competitions Head Panel (final decision).",
      },
      {
        title: "Appeal Restrictions",
        content:
          "Appeals on subjective evaluation are not considered. Late, incomplete, or frivolous appeals are rejected and misuse may invite disciplinary action.",
      },
      {
        title: "Privacy and Data Handling",
        content:
          "Participant data may be collected for event operations, verification, scoring, communication, compliance, and archival use with reasonable safeguards and controlled disclosure.",
      },
      {
        title: "Contact and Support",
        content:
          "Coordinators: Yatin Sharma (9783204855, yatin.s25710@nst.rishihood.edu.in), Anjana Kamle (9886445802, anjana.k25059@nst.rishihood.edu.in), Deeksha Agrawal (7017658695, deeksha.a25133@nst.rishihood.edu.in). Availability: till the event.",
      },
    ],
  },
  
  {
    title: "Strudel Based Competition (Algo-Rythm)",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    slug: "algo-rythm",
    category: "Live Coding / Music Tech",
    date: "18th April, 2026",
    details: "Strudel-based competition fusing coding logic with musical creativity",
    subtitle: "Code the Beat, Perform the Logic",
    description:
      "Algo-Rythm explores the fusion of coding and music, where participants use Strudel to transform logic into sound. The competition focuses on both analytical problem-solving and creative expression, encouraging participants to build engaging audio experiences through live coding.",
    prizePool: "Rs 8,000",
    location: "A503",
    teamSize: "1-3",
    rules: [
      {
        title: "Introduction",
        content:
          "AlgoRhythm is a competitive event evaluating technical skill, creativity, analytical capability, and artistic merit.",
      },
      {
        title: "Eligibility",
        content:
          "Open to Rishihood University students only. Participation format is solo or teams of 1 to 3.",
      },
      {
        title: "Identity Verification",
        content:
          "Valid institutional ID and valid government ID are mandatory for participation.",
      },
      {
        title: "Registration",
        content:
          "Mode: Online. Deadline: 16th April 2026. Fee: Rs 0. Selection: First-Come First-Served.",
      },
      {
        title: "Round 1 - Decode the Beat",
        content:
          "Offline, 1 hour. Participants hear a looping track and fill/correct blanks or errors in provided Strudel code. AI tools are allowed. Submission via Google Form.",
      },
      {
        title: "Round 1 Evaluation",
        content:
          "Accuracy of submitted code is checked using an AI model and organizer verification when required.",
      },
      {
        title: "Round 2 - Theme-Based Music Creation",
        content:
          "Offline final, 2 hours. Participants get a theme (Lo-Fi, Cyberpunk, Horror, Retro, etc.) and create a Strudel composition with live performance.",
      },
      {
        title: "Round 2 Judging",
        content:
          "Weightage: Originality and Creativity 20%, Theme Relevance 20%, Time and Duration Compliance 20%, Sound Quality and Composition 20%, Code Analysis 20%.",
      },
      {
        title: "Time Regulations",
        content:
          "Round 1 is 60 minutes, Round 2 is 120 minutes, plus 10 minutes setup or buffer as per venue conditions.",
      },
      {
        title: "Tie-Breaker Round 1",
        content:
          "If the final qualifying rank is tied (example 8th and 9th), both tied participants qualify.",
      },
      {
        title: "Tie-Breaker Round 2",
        content:
          "Resolve ties by higher Originality and Creativity score, then higher Theme Relevance score, then final panel decision.",
      },
      {
        title: "General Rules",
        content:
          "Report at least 30 minutes before start. Follow all organizer, judge, and volunteer instructions.",
      },
      {
        title: "Permitted Items",
        content: "Laptop with internet access, headphones, and notes/reference material.",
      },
      {
        title: "Prohibited Items",
        content:
          "Hazardous materials, unauthorized devices/assistance, offensive props, and items prohibited by policy or law.",
      },
      {
        title: "Safety and Conduct",
        content:
          "Harassment, discrimination, coercion, and unsafe behavior are strictly prohibited and may lead to disqualification.",
      },
      {
        title: "Grounds for Disqualification",
        content:
          "Late reporting, eligibility breach, unauthorized assistance, cheating, plagiarism, tampering, misconduct, or non-compliance.",
      },
      {
        title: "Prize and Recognition",
        content:
          "Total prize pool is Rs 8,000: 1st place Rs 5,000, 2nd place Rs 3,000. E-certificates for winners and participants.",
      },
      {
        title: "Liability and Consent",
        content:
          "Participation is voluntary. Organizers and institution are not liable for injury, loss, or damage. Media capture consent applies.",
      },
      {
        title: "Code of Conduct",
        content:
          "Integrity, honesty, respect, non-discrimination, and rule compliance are mandatory for all participants and associated personnel.",
      },
      {
        title: "Appeals Process",
        content:
          "Level 1 verbal report to coordinator, Level 2 written appeal within 30 minutes, Level 3 panel review with final binding decision.",
      },
      {
        title: "Appeal Restrictions",
        content:
          "Subjective artistic-preference appeals are not considered. Late/incomplete/frivolous appeals are rejected.",
      },
      {
        title: "Privacy and Data Handling",
        content:
          "Participant data may be collected for administration, verification, scoring, communication, compliance, and event operations with safeguards.",
      },
      {
        title: "Contact and Support",
        content:
          "Coordinators: Nikith (8217728508, nikith.s2024@nst.rishihood.edu.in), Vibhu Kakkar (8533034934, vibhu.k25505@nst.rishihood.edu.in), Mukund (7302005800, mukund.h25285@nst.rishihood.edu.in). Availability: till the event.",
      },
    ],
  },



  {
    title: "1v1 Coding (Code Combat)",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
    slug: "code-combat",
    category: "Competitive Programming",
    date: "17th April, 2026",
    details: "Head-to-head coding duels with knockout brackets",
    subtitle: "Direct Duel Programming",
    description:
      `Code Combat is a high-intensity, head-to-head technical competition where participants compete in 1v1 battles to solve the same problem in real time. The event focuses on speed, accuracy, and problem-solving ability, creating a competitive and engaging environment.
      Participants will face challenges ranging from logic-based problems to coding tasks, progressing through elimination rounds until a final winner emerges.`,
    prizePool: "Rs 10000",
    location: "A-Block 504",
    teamSize: "1",
    rules: [
      {
        title: "Introduction",
        content:
          "Code Combat: 1v1 Programming Duel under Photon - Neutron 3.0 is a high-intensity coding event designed to evaluate analytical thinking, problem-solving, speed, and technical precision.",
      },
      {
        title: "Eligibility",
        content: "Open to students of Rishihood University. Participation format is solo.",
      },
      {
        title: "Registration Details",
        content:
          "Mode: Offline. Deadline: 16 April 2026. Fee: Rs 0. Selection: First-Come First-Served.",
      },
      {
        title: "Competition Flow",
        content:
          "Single-elimination 1v1 duel format. Two participants solve the same problem simultaneously, submissions are evaluated in real-time, winner advances and loser is eliminated.",
      },
      {
        title: "Round 1 - Elimination (32 to 16)",
        content:
          "Basic-level problems with focus on speed and accuracy. Duration: 10 minutes.",
      },
      {
        title: "Round 2 - Round of 16 (16 to 8)",
        content:
          "Moderate-difficulty problems with controlled background distraction (music). Duration: 15 minutes.",
      },
      {
        title: "Round 3 - Quarterfinals (8 to 4)",
        content:
          "Higher-difficulty problems. No rough sheets allowed. Duration: 20 minutes.",
      },
      {
        title: "Round 4 - Semifinals (4 to 2)",
        content:
          "High-pressure stage with strategic penalty system: incorrect submission requires either immediate continuation after lemon shot or a 2-minute cooldown. Duration: 20 minutes.",
      },
      {
        title: "Round 5 - 3rd Place Playoff",
        content: "Determines third-place ranking. Duration: 25 minutes.",
      },
      {
        title: "Final Round (2 to Winner)",
        content: "Championship match. Duration: 30 minutes.",
      },
      {
        title: "Scoring and Evaluation",
        content:
          "Submissions are evaluated on correctness (primary), time efficiency, and code quality. First correct solution wins. Incorrect submissions may incur penalties and partial scoring may apply.",
      },
      {
        title: "Time Regulations",
        content:
          "Each round has predefined duration with 5 minutes setup time. Late submissions are not accepted. Incomplete solutions are evaluated based on passed test cases.",
      },
      {
        title: "Platform and Technical Rules",
        content:
          "Competition runs on a custom coding platform with organizer-provided systems. Supported languages: C++, Java, Python.",
      },
      {
        title: "Strictly Prohibited",
        content:
          "Internet browsing (except the platform), external help, and AI tools (ChatGPT, Copilot, etc.) are prohibited. Violation leads to immediate disqualification.",
      },
      {
        title: "Tie-Breaker Protocol",
        content:
          "In case of identical performance: X-factor time increase with extra hints, then fewer incorrect submissions, then higher number of test cases passed, then sudden-death problem. No further appeals after final decision.",
      },
      {
        title: "General Rules",
        content:
          "Report 15 minutes before start. No collaboration is allowed. Any disruption or misconduct can result in penalty or disqualification. Judges' decisions are final.",
      },
      {
        title: "Permitted Items",
        content:
          "Organizer-provided systems and optional personal keyboard or mouse are permitted.",
      },
      {
        title: "Prohibited Items",
        content:
          "Mobile phones, smart devices, external storage devices, and any unfair assistance are prohibited.",
      },
      {
        title: "Grounds for Disqualification",
        content:
          "Use of unfair means, plagiarism or identical code, access to restricted resources, misconduct, disruption, or failure to follow official instructions.",
      },
      {
        title: "Prize Pool and Recognition",
        content:
          "1st Place: Rs 5,000. 2nd Place: Rs 3,000. 3rd Place: Rs 2,000.",
      },
      {
        title: "Liability and Consent",
        content:
          "Participation is voluntary and participants assume responsibility for personal injury, loss, or damage. Neutron 3.0 organizers and Rishihood University are not liable. Media usage consent applies.",
      },
      {
        title: "Code of Conduct",
        content:
          "Integrity, honesty, respect, non-discrimination, compliance with rules, and strict anti-cheating are mandatory. Violations may lead to disciplinary action or disqualification.",
      },
      {
        title: "Escalation Chain and Appeals",
        content:
          "Level 1: On-ground Coordinator (immediate verbal report). Level 2: Written appeal within 30 minutes. Level 3: Neutron Competitions Head Panel (final decision).",
      },
      {
        title: "Appeal Restrictions",
        content:
          "No appeals on subjective judgment. Late or incomplete appeals are rejected. Misuse of the appeal process may result in disciplinary action.",
      },
      {
        title: "Privacy and Data Policy",
        content:
          "Participant data may be collected for registration, scoring, communication, and media usage. Data is stored securely and used only for official purposes.",
      },
      {
        title: "Contact and Support",
        content:
          "Coordinators: Khanak Jain and Yatin Sharma. Phone: 9718621543, 9166291772. Help: khanak.j25219@nst.rishihood.edu.in | ankur.a25063@nst.rishihood.edu.in. Availability: during event hours.",
      },
    ],
  },




  {
    title: "Smash Karts",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&q=80&w=800",
    slug: "smash-karts",
    category: "Gaming / Esports",
    date: "17th April, 2026",
    details: "Arcade kart combat tournament with elimination heats",
    subtitle: "Kart Battle Championship",
    description:
      "Smash Karts is a chaotic, weapon-filled battle on wheels where survival matters more than speed. Grab power-ups, dodge incoming attacks, and take down your opponents in fast-paced, unpredictable matches. With rockets flying and chaos everywhere, every second counts—one perfect hit or last-second escape can turn the game around. So jump in, embrace the madness, and smash your way to the top.",
    prizePool: "Rs 5,000",
    location: "5th Floor",
    teamSize: "1",
    rules: [
      {
        title: "Introduction",
        content:
          "Smash Karts under Photon-Neutron 3.0 is a fast-paced browser-based kart racing and combat event where participants compete in real-time Free For All arenas using power-ups, eliminations, and survival strategy.",
      },
      {
        title: "Eligibility",
        content:
          "Open to inter-college and national-level participants. Format is solo only. Participants must be currently enrolled students with valid institutional and government IDs.",
      },
      {
        title: "Registration Details",
        content:
          "Registration deadline: 16 April 2026. Selection is first-come first-served with limited slots. Each participant must register once and use a unique Smash Karts account.",
      },
      {
        title: "Registration Validity",
        content:
          "Incomplete, duplicate, or fraudulent registrations are rejected and may lead to disqualification.",
      },
      {
        title: "Round Structure - Group Stage",
        content:
          "Round 1 is in-person group stage with 16 participants per group. Each participant plays 3 matches and cumulative points determine the top 4 advancing to semifinals.",
      },
      {
        title: "Round Structure - Semifinal",
        content:
          "Round 2 is an in-person semifinal match in larger lobbies. Scores reset for this stage and the top 3 participants are declared winners.",
      },
      {
        title: "Scoring System - Placement",
        content:
          "Per match points: 1st = 10, 2nd = 8, 3rd = 6, 4th = 4, and 5th to 8th = 2.",
      },
      {
        title: "Scoring System - Bonus Points",
        content:
          "Elimination bonus is +1 per confirmed kill. Survival bonus is +2 if a participant survives full match duration without death.",
      },
      {
        title: "Game Mode - Free For All",
        content:
          "All matches are played in FFA mode with no teams or alliances. Participants compete independently to maximize eliminations and final standing.",
      },
      {
        title: "FFA Restrictions",
        content:
          "No teaming or collusion. All power-ups are allowed. Maps and spawns are platform-determined. Match duration and kill limits follow organizer-configured private lobby defaults.",
      },
      {
        title: "Match and Lobby Regulations",
        content:
          "Matches are held on smashkarts.io using official private room codes. Participants must be ready 5 minutes before start. Failing to join within 3 minutes of lobby opening is treated as no-show and forfeits that match's points.",
      },
      {
        title: "Technical Continuity",
        content:
          "Matches are not restarted for participant-side disconnections, lag, or browser crashes.",
      },
      {
        title: "Time Regulations",
        content:
          "Each match session is organizer-timed. No extra time or replay is granted for participant technical issues. Organizers may substitute lobby/server if needed.",
      },
      {
        title: "Judging Criteria",
        content:
          "Rankings are determined only by cumulative scoring. There is no subjective judging component.",
      },
      {
        title: "Scoring Notes",
        content:
          "Kill counts are taken from in-game stats. Disputed kills may be reviewed if evidence is submitted within 5 minutes. Tampered screenshots or recordings lead to disqualification.",
      },
      {
        title: "Tie-Breaker Protocol",
        content:
          "Tie-break sequence: higher total kills, then more 1st-place finishes, then sudden-death additional match. Decisions are final and binding.",
      },
      {
        title: "Permitted Setup",
        content:
          "Permitted items include personal laptops/desktops or institution systems, modern browsers, and standard keyboard/mouse without macros.",
      },
      {
        title: "Prohibited Setup",
        content:
          "VPNs/proxies, behavior-altering browser extensions, multiple/shared accounts, real-time coaching or screen-share assistance, and macros or movement scripts are prohibited.",
      },
      {
        title: "General Rules",
        content:
          "Report at least 15 minutes before start, use registered username only, avoid participant communication during live matches, stop immediately when instructed, and follow all organizer directions.",
      },
      {
        title: "Grounds for Disqualification",
        content:
          "Use of hacks/mods, intentional disconnect abuse, collusion or match-fixing, harassment/disruption, account/eligibility violations, equipment interference, and repeated non-compliance after warning can result in disqualification.",
      },
      {
        title: "Prize Pool and Recognition",
        content:
          "Total prize pool is Rs 5,000: 1st place Rs 2,500, 2nd place Rs 1,500, and 3rd place Rs 1,000.",
      },
      {
        title: "Code of Conduct",
        content:
          "Integrity and fair play, respect and non-discrimination, full compliance with official instructions, anti-cheating, sportsmanship, and decision finality are mandatory.",
      },
      {
        title: "Appeals Process",
        content:
          "Level 1: immediate verbal report to on-ground coordinator. Level 2: written appeal within 20 minutes with evidence and participant details. Level 3: Neutron Competitions Head Panel final review.",
      },
      {
        title: "Appeal Restrictions",
        content:
          "No appeals for in-game randomness (power-up drops/spawns). Late, incomplete, or frivolous appeals are rejected. Misuse may lead to disqualification or suspension.",
      },
      {
        title: "Liability and Consent",
        content:
          "Participation is voluntary and at participant risk. Neutron 3.0, organizers, and Rishihood University bear no legal or financial liability. Media usage consent is granted upon participation.",
      },
      {
        title: "Contact and Support",
        content:
          "Coordinator: Ansh Singh. Phone: 7393928014. Help: ansh.s25070@nst.rushihood.edu.in. Availability: during event hours.",
      },
    ],
  },



  {
    title: "Clash Royale",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
    slug: "clash-royale",
    category: "Mobile Esports",
    date: "18th April, 2026",
    details: "Strategic deck battles in bracket play",
    subtitle: "Real-Time Deck Warfare",
    description:
      "Clash Royale is a fast-paced esports showdown where strategy meets split-second decision making. Build your deck, outplay your opponent, and turn the tide of battle with perfectly timed moves. Every troop placement and spell can change the game in an instant, making each match a test of skill, timing, and mind games. So bring your best deck, trust your instincts, and battle your way to the crown.",
    prizePool: "Rs 5,000",
    location: "5th Floor ",
    teamSize: "1",
    rules: [
      {
        title: "Introduction",
        content:
          "Clash Royale under Photon-Neutron 3.0 is a real-time 1v1 card strategy competition where players duel using 8-card decks, testing deck construction, card cycling, elixir management, and quick decision-making.",
      },
      {
        title: "Eligibility",
        content:
          "Open to inter-college and national-level participants. Format is solo 1v1 only. Participants must be enrolled students, register once, and present valid institutional and government IDs.",
      },
      {
        title: "Account Eligibility",
        content:
          "Clash Royale account must be at least King Level 9 and participants must provide their Player Tag at registration. Duplicate registrations or accounts are disqualified.",
      },
      {
        title: "Registration Details",
        content:
          "Registration deadline: 15 April 2026. Venue: 5th Floor. Selection is first-come first-served with limited slots.",
      },
      {
        title: "Tournament Structure",
        content:
          "Single-elimination bracket with random public draw seeding. One loss eliminates a participant. Walkover applies if a participant is absent 5 minutes after match call.",
      },
      {
        title: "Bracket Progression",
        content:
          "Matches progress from Round of 16 or 32 (depending on entries) to Quarterfinals, Semifinals, and Grand Final. Byes may be assigned where required.",
      },
      {
        title: "Match Format",
        content:
          "All rounds are 1v1 elimination. Match timing follows default Clash Royale timing: 3 minutes regular plus 1 minute overtime if tied.",
      },
      {
        title: "Match Resolution Rules",
        content:
          "If towers destroyed are equal, higher Crown Tower HP wins. If HP is also equal after overtime, sudden-death applies and first tower destruction wins.",
      },
      {
        title: "Deck Change Policy",
        content:
          "Players may switch decks freely between games within a series. Semifinal winners play for first place and semifinal losers play for third place.",
      },
      {
        title: "Tiebreaker - Deciding Game",
        content:
          "If match score is 1-1, deciding game is mandatory and immediate. Both players must use the same deck used in their previous game with no deck changes.",
      },
      {
        title: "Deck Regulations",
        content:
          "Each deck must contain exactly 8 cards. All cards must be unlocked on the participant's own account. No card bans apply, but challenge-only or non-permanently unlocked cards are prohibited.",
      },
      {
        title: "Match Procedure",
        content:
          "Participants exchange Player Tags with organizers, higher-seeded player sends friend request, Friendly Battle is started after settings confirmation, winner reports result immediately.",
      },
      {
        title: "Judging and Results",
        content:
          "Results are determined only by in-game outcomes. There is no subjective judging.",
      },
      {
        title: "Result Reporting",
        content:
          "Winner must submit victory screenshot within 5 minutes. Disputes must be raised immediately and before the next round begins. Organizer standings are final.",
      },
      {
        title: "Permitted Setup",
        content:
          "Permitted items: personal smartphones, chargers/power banks, and earphones or earbuds for music only.",
      },
      {
        title: "Prohibited Setup",
        content:
          "Emulators, modified APKs, rooted/jailbroken altered clients, macro/auto-click tools, account/device sharing during live matches, real-time coaching, and live casting to advisors are prohibited.",
      },
      {
        title: "General Rules",
        content:
          "Report 15 minutes before start, use only registered account, keep devices charged, follow organizer instructions, and avoid any active-match communication assistance from spectators.",
      },
      {
        title: "Disconnection Rule",
        content:
          "Participant-side disconnections are treated as losses unless organizer confirms a server-side fault.",
      },
      {
        title: "Grounds for Disqualification",
        content:
          "Modified clients or third-party tools, account misuse, intentional disconnect abuse, collusion/match-fixing, external coaching, misconduct, eligibility breach, or repeated non-compliance can lead to disqualification.",
      },
      {
        title: "Prize Pool and Recognition",
        content:
          "Total prize pool is Rs 5,000: 1st place Rs 3,000 and 2nd place Rs 2,000.",
      },
      {
        title: "Code of Conduct",
        content:
          "Integrity and fair play, respect and non-discrimination, rule compliance, anti-cheating, sportsmanship, and decision finality are mandatory.",
      },
      {
        title: "Appeals Process",
        content:
          "Level 1: immediate verbal report to on-ground coordinator. Level 2: written appeal within 20 minutes with evidence and registered Player Tag details. Level 3: Neutron Competitions Head Panel final review.",
      },
      {
        title: "Appeal Restrictions",
        content:
          "No appeals based on in-game RNG, card drop luck, or elixir management. Late, incomplete, or frivolous appeals are rejected. Misuse may cause disqualification or suspension.",
      },
      {
        title: "Liability and Consent",
        content:
          "Participation is voluntary and at participant risk. Neutron 3.0, organizers, and Rishihood University hold no legal or financial liability. Media usage consent is granted on registration.",
      },
      {
        title: "Contact and Support",
        content:
          "Coordinators: Ansh Singh and Shubham. Phone: 7393928014, 9988710705. Availability: during event hours.",
      },
    ],
  },

  {
    title: "BGMI",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
    slug: "bgmi",
    category: "Battle Royale",
    date: "17th April, 2026",
    details: "Custom-lobby battle royale with cumulative scoring",
    subtitle: "Tactical Survival Tournament",
    description:
      "BGMI is a high-energy esports showdown where squads drop in, gear up, and fight for ultimate bragging rights. From intense firefights to clutch final circles, every moment tests your reflexes, strategy, and teamwork. With a constantly shrinking battlefield and unpredictable encounters, only the smartest rotations and strongest squads survive. So rally your team, plan your moves, and battle your way to the top—because only one squad walks away as champions.",
    prizePool: "Rs 20,000",
    location: "5th Floor",
    teamSize: "4 - 6",
    rules: [
      {
        title: "Introduction",
        content:
          "BGMI Tournament under Photon-Neutron 3.0 is an officially sanctioned LAN esports competition focused on teamwork, strategy, communication, and in-game decision-making, culminating in on-site Grand Finals.",
      },
      {
        title: "Purpose and Theme",
        content:
          "The event promotes university esports culture, identifies top-performing teams for higher-level competition, and delivers a professional LAN tournament experience.",
      },
      {
        title: "Eligibility",
        content:
          "Open to Rishihood University students. Participation format is team-based with 4 to 6 players (4 active plus up to 2 substitutes).",
      },
      {
        title: "Identity and Device Restrictions",
        content:
          "Valid institutional ID is mandatory and government ID may be required. Only mobile devices are allowed. iPads and emulators are strictly prohibited. Only registered IDs may be used.",
      },
      {
        title: "Registration Details",
        content:
          "Registration mode is online. Deadline: 16th April 2026. Fee: Rs 0. Portal: to be shared. Selection is first-come first-served.",
      },
      {
        title: "Team Composition",
        content:
          "Team size must be minimum 4 and maximum 6 players. Manager or coach is optionally allowed.",
      },
      {
        title: "Rounds Matrix - Grand Finals",
        content:
          "Grand Finals are conducted offline in LAN mode with audience presence. Total 6 matches: 1 Rondo, 3 Erangel, and 2 Miramar. Match order is announced by organizers.",
      },
      {
        title: "Finals Evaluation",
        content:
          "Overall ranking is based on cumulative performance across all 6 matches, consistency, and the tournament points system.",
      },
      {
        title: "Submission Guidelines",
        content:
          "Submission format is Team Details Form on the official registration form. File naming convention is TeamName. Late submissions are strictly prohibited.",
      },
      {
        title: "Required Submission Details",
        content:
          "Each team must provide team name, captain name, player IDs, and contact details.",
      },
      {
        title: "Time Regulations",
        content:
          "Reporting time is 20 minutes before match. Match duration follows BGMI format. Time violations may lead to disqualification or match forfeit.",
      },
      {
        title: "Judging - Placement Points",
        content:
          "Placement points: 1st=10, 2nd=6, 3rd=5, 4th=4, 5th=3, 6th=2, 7th-8th=1, 9th-16th=0.",
      },
      {
        title: "Judging - Kill Points",
        content: "Each kill awards 1 point.",
      },
      {
        title: "Tie-Breaker Protocol",
        content:
          "Tie-break order: total kill points, highest match placement, then head-to-head performance. Decisions are final and binding.",
      },
      {
        title: "General Rules",
        content:
          "Players must report 30 minutes before match, only registered players are allowed, auto-heal is prohibited, assigned stations must be used, and organizer instructions must be followed.",
      },
      {
        title: "Recording Requirements",
        content:
          "Screen recording is mandatory for at least 2 players per team, and a screenshot of every match is required.",
      },
      {
        title: "Permitted Items",
        content: "Mobile phones, chargers, earphones, and backup devices are permitted.",
      },
      {
        title: "Prohibited Items",
        content:
          "iPads, emulators, third-party software, and unauthorized devices are prohibited.",
      },
      {
        title: "Safety and Conduct",
        content:
          "Participants must respect players and officials, avoid harassment or misconduct, follow tournament instructions, and maintain discipline.",
      },
      {
        title: "Grounds for Disqualification",
        content:
          "Unauthorized players, cheats/hacks/third-party software, glitch exploitation, teaming with other teams, match fixing/feeding, missing recordings, or unsportsmanlike behavior can result in disqualification.",
      },
      {
        title: "Prize Pool and Recognition",
        content:
          "Total prize pool is Rs 20,000: 1st place Rs 10,000, 2nd place Rs 6,000, and 3rd place Rs 4,000.",
      },
      {
        title: "Advancement Benefit",
        content: "Top 3 teams will go to the semifinals of Neutron 3.0.",
      },
      {
        title: "Liability and Consent",
        content:
          "Participation is voluntary. Organizers are not responsible for device damage, network issues, or personal belongings. Participants consent to media usage and emergency medical assistance.",
      },
      {
        title: "Code of Conduct",
        content:
          "Participants must maintain professionalism, respect players and officials, follow all rules, and avoid manipulation attempts. Organizer decisions are final and binding.",
      },
      {
        title: "Escalation and Appeals",
        content:
          "Level 1: immediate verbal report to on-ground coordinator. Level 2: written appeal within 30 minutes with grounds, evidence, and team identification. Level 3: Neutron Competitions Head Panel final review.",
      },
      {
        title: "Appeal Submission Details",
        content:
          "Appeals must include team name, match details, and supporting recording or screenshot evidence.",
      },
      {
        title: "Privacy and Data Handling",
        content:
          "Organizers may collect player names, IDs, match recordings, and screenshots for tournament operations, promotion, and record keeping.",
      },
      {
        title: "Contact and Support",
        content:
          "Coordinators: Ansh and Shubham. Phone: 7393928014, 9988710705. Availability: during event hours.",
      },
    ],
  },
  
];
