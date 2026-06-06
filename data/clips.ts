export type Clip = {
  id: number;
  title: string;
  category: string;
  opponent: string;
  situation: string;
  description: string;
  videoUrl?: string;
};

export type SkillCategory = {
  name: string;
  summary: string;
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Breakouts",
    summary:
      "Puck retrievals, shoulder checks, first-pass exits, controlled breakouts, and escaping forecheck pressure.",
  },
  {
    name: "Offensive Plays",
    summary:
      "Offensive-zone decisions, blue-line movement, shot creation, passing plays, and joining the attack.",
  },
  {
    name: "Transitions",
    summary:
      "Quick defense-to-offense plays, neutral-zone decisions, gap control, rush defense, and controlled exits.",
  },
  {
    name: "Defending & Blocks",
    summary:
      "Defensive reads, shot blocks, stick positioning, rush defending, and protecting dangerous areas.",
  },
  {
    name: "Penalty Killing",
    summary:
      "Penalty-kill positioning, shot blocking, stick details, clears, and defensive reads under pressure.",
  },
  {
    name: "Battles & Boxout",
    summary:
      "Wall battles, net-front boxouts, inside positioning, physical separation, and winning body leverage.",
  },
  {
    name: "Picking for Teammates",
    summary:
      "Opening lanes for teammates, supporting puck carriers, and creating space with smart positioning.",
  },
];

export const clips: Clip[] = [
  {
    id: 1,
    title: "Deception Move Leading to a 2 on 1 Attack",
    category: "Breakouts",
    opponent: "Great Britain",
    situation: "5v5",
    description:
      "Puck retrieval under pressure, shoulder check, deception move, first pass leading to a 2 on 1 attack.",
    videoUrl: "https://www.youtube.com/embed/gS16pq4PSdk",
  },
  {
    id: 2,
    title: "Under Pressure Wheel Leading to a 4 on 3 Attack",
    category: "Breakouts",
    opponent: "Austria",
    situation: "5v5",
    description:
      "Shaking off the forechecker, wheeling the puck, fake pass right, pass up leading to a 4on 3 attack. ",
    videoUrl: "https://www.youtube.com/embed/lVQ_d5nsTHI",
  },
  {
    id: 3,
    title: "Reverse After Middle Ice Faceoff",
    category: "Breakouts",
    opponent: "Switzerland",
    situation: "5v5",
    description:
      "Beating the first layer of FC with a reverse, follow up the play.",
    videoUrl: "https://www.youtube.com/embed/nYgSkmUqPws",
  },

  {
    id: 4,
    title: "Deception Move vs Hischier",
    category: "Breakouts",
    opponent: "Switzerland",
    situation: "5v4",
    description:
      "Deception move in the corner to escape pressure from the forechecker.",
    videoUrl: "https://www.youtube.com/embed/h2rWKR2yahc",
  },
  {
    id: 5,
    title: "Corner Breakout Beating Two Forecheckers",
    category: "Breakouts",
    opponent: "Latvia",
    situation: "5v5",
    description:
      "Puck pickup after a bad pass, scans, first pass beating two forecheckers.",
    videoUrl: "https://www.youtube.com/embed/vAn2T1lEUKk",
  },
  {
    id: 6,
    title: "Deception Move vs Meier",
    category: "Breakouts",
    opponent: "Switzerland",
    situation: "5vs5",
    description:
      "Deception move vs Timo Meier, beating two forecheckers.",
    videoUrl: "https://www.youtube.com/embed/ppeldMCEYQk",
  },

  {
    id: 7,
    title: "Reverse after Scrum",
    category: "Breakouts",
    opponent: "Great Britain",
    situation: "5v5",
    description:
      "Winning puck from a scrum, reverse pass to teammate.",
    videoUrl: "https://www.youtube.com/embed/Gb4TJ3eHA04",
  },

  {
    id: 8,
    title: "Defending a 2 on 1, BO into Chance For",
    category: "Defending & Blocks",
    opponent: "Austria",
    situation: "5vs5",
    description:
      "Aggressive stick defending a 2 on 1, breakout, follow the attack, board pass, shot.",
    videoUrl: "https://streamable.com/e/trbfn3",
  },

  {
    id: 9,
    title: "DZ Pin vs Kirk",
    category: "Defending & Blocks",
    opponent: "Great Britain",
    situation: "5v5",
    description:
      "Pinning Liam Kirk, creating a scrum for overload.",
    videoUrl: "https://www.youtube.com/embed/TiEEJ-23Fl0",
  },

  {
    id: 10,
    title: "Shot Block on a 4 on 2 Rush Against",
    category: "Defending & Blocks",
    opponent: "Switzerland",
    situation: "5v5",
    description:
      "Defending a 4 on 2 rush against, blocking the pass attempt from Hischier.",
    videoUrl: "https://www.youtube.com/embed/DTqjZy6je3M",
  },

  {
    id: 11,
    title: "Good Stickwork on Rush Against into Breakout",
    category: "Defending & Blocks",
    opponent: "Great Britain",
    situation: "5v5",
    description:
      "Defending a 2 on 1, winning puck with good stick, breakout under big pressure from 2 forecheckers",
    videoUrl: "https://streamable.com/e/g93qbc",
  },
  {
    id: 12,
    title: "Shot Block",
    category: "Defending & Blocks",
    opponent: "Great Britain",
    situation: "5v5",
    description:
      "Shot block from angle shot.",
    videoUrl: "https://www.youtube.com/embed/aPwxCicoIio",
  },

  {
    id: 13,
    title: "Good Stick vs Kirk",
    category: "Defending & Blocks",
    opponent: "Great Britain",
    situation: "5vs5",
    description:
      "Winning the puck from Liam Kirk with a good stickcheck.",
    videoUrl: "https://www.youtube.com/embed/LNilJvuyxBk",
  },
  {
    id: 14,
    title: "Angeling vs Puljujärvi",
    category: "Defending & Blocks",
    opponent: "Finland",
    situation: "5vs5",
    description:
      "Angeling against Jesse Puljujärvi, making him rim the puck. ",
    videoUrl: "https://www.youtube.com/embed/K0g7-5iY3jg",
  },
  {
    id: 15,
    title: "Battle Win into OZ RIM",
    category: "Battles & Boxout",
    opponent: "Austria",
    situation: "5vs5",
    description:
      "Skating hard to get the inside line to the puck, winning the battle, go up and give option to the winger, OZ RIM.",
    videoUrl: "https://streamable.com/e/fpl9i4",
  },

  {
    id: 16,
   title: "Boxout vs Jäger",
    category: "Battles & Boxout",
    opponent: "Switzerland",
    situation: "5vs5",
    description:
      "Boxing out Ken Jäger.",
    videoUrl: "https://www.youtube.com/embed/xZC137osVnM",
   },

  {
    id: 17,
    title: "Boxout ",
    category: "Battles & Boxout",
    opponent: "Latvia",
    situation: "5vs5",
    description:
      "Boxout for no rebound.",
    videoUrl: "https://www.youtube.com/embed/Sl7F0hJYM_I",
  },
  {
    id: 18,
    title: "Separating Man from the Puck ",
    category: "Battles & Boxout",
    opponent: "Latvia",
    situation: "5vs5",
    description:
      "Working hard to separate the opponent from the puck. ",
    videoUrl: "https://www.youtube.com/embed/szDMHPgcRHk",
  },

  {
    id: 19,
    title: "NZ Puck Pickup into Self Chip in OZ",
    category: "Transitions",
    opponent: "Switzerland",
    situation: "5v5",
    description:
      "Puck pickup in NZ, scans, skate, self dump.",
    videoUrl: "https://www.youtube.com/embed/Q8VqsGWYDlg",
  },

  {
    id: 20,
    title: "NZ Escape Turn vs Meier into OZ Entry",
    category: "Transitions",
    opponent: "Switzerland",
    situation: "5v5",
    description:
      "Escape turn vs Timo Meier, puck protection, OZ rim, into lucky chance for.",
    videoUrl: "https://www.youtube.com/embed/NoIMzUg6FT0",
  },

  {
    id: 21,
    title: "Hard Pass & Saving a Breakaway After a Turnover",
    category: "Transitions",
    opponent: "Great Britain",
    situation: "5v5",
    description:
      "Pick for D partner, scans, hard pass up, breakaway pass save after turnover.",
    videoUrl: "https://streamable.com/e/kt08zn",
  },

  {
    id: 22,
    title: "OZ Entry Give and Go into Chance For",
    category: "Transitions",
    opponent: "Latvia",
    situation: "5v5",
    description:
      "OZ entry give and go, weakside rim, blueline one-timer.",
    videoUrl: "https://www.youtube.com/embed/nmOOqN1T26U",
  },

  {
    id: 23,
    title: "Going Up with the Attack & OZ Puck Retrieval",
    category: "Transitions",
    opponent: "Great Britain",
    situation: "5v5",
    description:
      "Going up with the attack, scans, pick up dump under pressure, low to high pass.",
    videoUrl: "https://www.youtube.com/embed/Wb5EHq8se-Y",
  },

  {
    id: 24,
    title: "NZ Hinge FO Play",
    category: "Transitions",
    opponent: "Switzerland",
    situation: "5v5",
    description:
      "D-D pass, hinge option, no stickhandle hard pass up.",
    videoUrl: "https://www.youtube.com/embed/bgDZWNIOHNM",
  },

  {
    id: 25,
    title: "Turn back to Wait for Linechange",
    category: "Transitions",
    opponent: "Great Britain",
    situation: "5v5",
    description:
      "Communicate w d partner to leave the puck, skate up, turn back because of linechange, go up when everybody is ready.",
    videoUrl: "https://www.youtube.com/embed/wVbDrCyLVM8",
  },

  {
    id: 26,
    title: "OZ Entry & Fake Shot & Chance For",
    category: "Transitions",
    opponent: "Austria",
    situation: "5v5",
    description:
      "Puck pickup behind the net, kick out, fake onetimer, D-D, chance for.",
    videoUrl: "https://streamable.com/e/97gc2n",
  },

  {
    id: 27,
    title: "Good Stick on Zone Entry Leading to a 2 on 1",
    category: "Penalty Killing",
    opponent: "Germany",
    situation: "4vs5",
    description:
      "Pressure on zone entry, good stickcheck, 2 on 1 shorthanded.",
    videoUrl: "https://www.youtube.com/embed/esFDvqRpBCo",
  },

  {
    id: 28,
    title: "Pressure after Faceoff",
    category: "Penalty Killing",
    opponent: "Austria",
    situation: "4vs5",
    description:
      "Pressure after a Faceoff loss, board battle win leading to a clear.",
    videoUrl: "https://www.youtube.com/embed/Jfop57rLwug",
  },

  {
    id: 29,
    title: "Good Gap Forcing a Dump",
    category: "Penalty Killing",
    opponent: "Finland",
    situation: "4vs5",
    description:
      "Good gap and angle forces a chip to the teammate.",
    videoUrl: "https://www.youtube.com/embed/VzWz5kpH2No",
  },

  {
    id: 30,
    title: "Hard Pressure on Rim & Battle",
    category: "Penalty Killing",
    opponent: "Austria",
    situation: "4vs5",
    description:
      "Hard pressure on a rim, winning the puck, battling to keep the puck after clear attempt,",
    videoUrl: "https://www.youtube.com/embed/2RmjGVdoYpg",
  },

  {
    id: 31,
    title: "Blue Line Deke & Shot & Multiple Chances For",
    category: "Offensive Plays",
    opponent: "Great Britain",
    situation: "5v5",
    description:
      "Get middle on blue line quick, deke to get past the winger, shot on net, regroup puck retrieval to pass up, slot shot, in position for empty net pass.",
    videoUrl: "https://streamable.com/e/dy09mq",
  },

  {
    id: 32,
    title: "Blue Line Movement & Shots",
    category: "Offensive Plays",
    opponent: "Finland",
    situation: "5v5",
    description:
      "Blue line shot blocked by teammate, get middle, D-D, shot from top of the circle.",
    videoUrl: "https://www.youtube.com/embed/JTv-UPCqp5w",
  },

      {
    id: 33,
    title: "Board One-timer & Blue Line Shot",
    category: "Offensive Plays",
    opponent: "Austria",
    situation: "5v5",
    description:
      "One-timer from the boards leading to big rebound chance, quick shot from the blue line.",
    videoUrl: "https://www.youtube.com/embed/RDNEVfd2qkQ",
  },

  {
    id: 34,
    title: "Toedrag Slotshot",
    category: "Offensive Plays",
    opponent: "Austria",
    situation: "5v5",
    description:
      "Toedrag shot fom the slot.",
    videoUrl: "https://www.youtube.com/embed/_yWhdi4o4LU",
  },

  {
    id: 35,
    title: "Pinch & Puck Win & Shot Leading to Rebound Chance",
    category: "Offensive Plays",
    opponent: "Great Britain",
    situation: "5v5",
    description:
      "Pinch, self chip, board battle, escape high, shot, rebound chance, seem pass.",
    videoUrl: "https://streamable.com/e/ylpaig",
  },

  {
    id: 36,
    title: "One-Timer",
    category: "Offensive Plays",
    opponent: "Switzerland",
    situation: "5v5",
    description:
      "One-timer from D-D pass.",
    videoUrl: "https://www.youtube.com/embed/T8_313TaFl0",
  },

  {
    id: 37,
    title: "Blue Line D-D Leading to One-Timer from Middle",
    category: "Offensive Plays",
    opponent: "Austria",
    situation: "5v5",
    description:
      "Hard D-D pass, pass back to forward for one-timer.",
    videoUrl: "https://www.youtube.com/embed/zoSY5aQmKrU",
  },

  {
    id: 38,
    title: "Blue Line D-D ",
    category: "Offensive Plays",
    opponent: "Great Britain",
    situation: "5v5",
    description:
      "Hard D-D pass after moving in two shoot. ",
    videoUrl: "https://www.youtube.com/embed/Dcm8IARDGpY",
  },

  {
    id: 39,
    title: "Pinch & Smart Touch Up",
    category: "Offensive Plays",
    opponent: "Finland",
    situation: "5v5",
    description:
      "Pinch on the rim, touch for teammate coming up.",
    videoUrl: "https://www.youtube.com/embed/OaVSKNHWmvE",
  },

  {
    id: 40,
    title: "Smart Pick After Pinch Leading to Chance For",
    category: "Picking for Teammates",
    opponent: "Finland",
    situation: "5v5",
    description:
      "Pinch, hit, pick for teammate to cut in.",
    videoUrl: "https://www.youtube.com/embed/B8-Ib-_7abs",
  },

  {
    id: 41,
    title: "Pick vs Forechecker to an Easy Breakout",
    category: "Picking for Teammates",
    opponent: "Latvia",
    situation: "5v5",
    description:
      "Pick vs forechecker so teammate can skate up and make an easy pass.",
    videoUrl: "https://www.youtube.com/embed/fka-jQjAmhw",
  },

  {
    id: 42,
    title: "Pick to Give D-Partner More Time",
    category: "Picking for Teammates",
    opponent: "Latvia",
    situation: "5v5",
    description:
      "Picking the forechecker to give more time to the d-partner",
    videoUrl: "https://www.youtube.com/embed/KwkH1cyassw",
  },


];