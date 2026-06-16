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
     videoUrl:
    "https://pub-72a4fda80f934f379e00068c9815bdf7.r2.dev/USED%3B%20BO%20great%20move%20leading%20to%20a%202v1%20vs%20GBR.mp4",
},
  {
    id: 2,
    title: "Under Pressure Wheel Leading to a 4 on 3 Attack",
    category: "Breakouts",
    opponent: "Austria",
    situation: "5v5",
    description:
      "Shaking off the forechecker, wheeling the puck, fake pass right, pass up leading to a 4on 3 attack. ",
    videoUrl: "https://pub-72a4fda80f934f379e00068c9815bdf7.r2.dev/USED%3B%20Wheel%20with%20deception%20move%20and%204vs3%20%20vs%20AUT.mp4",
  },
  {
    id: 3,
    title: "Reverse After Middle Ice Faceoff",
    category: "Breakouts",
    opponent: "Switzerland",
    situation: "5v5",
    description:
      "Beating the first layer of FC with a reverse, follow up the play.",
    videoUrl: "https://pub-72a4fda80f934f379e00068c9815bdf7.r2.dev/USED%3B%20BO%20reverse%20after%20middle%20FO%20vs%20SUI.mp4",
  },

  {
    id: 4,
    title: "Deception Move vs Hischier",
    category: "Breakouts",
    opponent: "Switzerland",
    situation: "5v4",
    description:
      "Deception move in the corner to escape pressure from the forechecker.",
    videoUrl: "https://pub-72a4fda80f934f379e00068c9815bdf7.r2.dev/USED%3B%20BO%20fake%20vs%20Hischier%20vs%20SUI.mp4",
  },
  {
    id: 5,
    title: "Corner Breakout Beating Two Forecheckers",
    category: "Breakouts",
    opponent: "Latvia",
    situation: "5v5",
    description:
      "Puck pickup after a bad pass, scans, first pass beating two forecheckers.",
    videoUrl: "https://pub-72a4fda80f934f379e00068c9815bdf7.r2.dev/USED%3B%20BO%20vs%20LAT.mp4",
  },
  {
    id: 6,
    title: "Deception Move vs Meier",
    category: "Breakouts",
    opponent: "Switzerland",
    situation: "5vs5",
    description:
      "Deception move vs Timo Meier, beating two forecheckers.",
    videoUrl: "https://pub-72a4fda80f934f379e00068c9815bdf7.r2.dev/USED%3B%20BO%20move%20vs%20Meier%20vs%20SUI.mp4",
  },

  {
    id: 7,
    title: "Reverse after Scrum",
    category: "Breakouts",
    opponent: "Great Britain",
    situation: "5v5",
    description:
      "Winning puck from a scrum, reverse pass to teammate.",
    videoUrl: "https://pub-72a4fda80f934f379e00068c9815bdf7.r2.dev/USED%3B%20BO%20Reverse%20after%20scrum%20vs%20GBR.mp4",
  },

  {
    id: 8,
    title: "Defending a 2 on 1, BO into Chance For",
    category: "Defending & Blocks",
    opponent: "Austria",
    situation: "5vs5",
    description:
      "Aggressive stick defending a 2 on 1, breakout, follow the attack, board pass, shot.",
    videoUrl: "https://pub-72a4fda80f934f379e00068c9815bdf7.r2.dev/Defending%20%26%20Blocks/USED%3B%201vs2%20into%20BO%20into%20shot%20vs%20AUT.mp4",
  },

  {
    id: 9,
    title: "DZ Pin vs Kirk",
    category: "Defending & Blocks",
    opponent: "Great Britain",
    situation: "5v5",
    description:
      "Pinning Liam Kirk, creating a scrum for overload.",
    videoUrl: "https://pub-72a4fda80f934f379e00068c9815bdf7.r2.dev/Defending%20%26%20Blocks/USED%3B%20DZ%20PIN%20vs%20GBR.mp4",
  },

  {
    id: 10,
    title: "Shot Block on a 4 on 2 Rush Against",
    category: "Defending & Blocks",
    opponent: "Switzerland",
    situation: "5v5",
    description:
      "Defending a 4 on 2 rush against, blocking the pass attempt from Hischier.",
    videoUrl: "https://pub-72a4fda80f934f379e00068c9815bdf7.r2.dev/Defending%20%26%20Blocks/USED%3B%202v4%20block%20vs%20Hischier%20vs%20SUI.mp4",
  },

  {
    id: 11,
    title: "Good Stickwork on Rush Against into Breakout",
    category: "Defending & Blocks",
    opponent: "Great Britain",
    situation: "5v5",
    description:
      "Defending a 2 on 1, winning puck with good stick, breakout under big pressure from 2 forecheckers",
    videoUrl: "https://pub-72a4fda80f934f379e00068c9815bdf7.r2.dev/Defending%20%26%20Blocks/USED%3B%20Stickwork%20%26%20UPBO%20vs%20GBR.mp4",
  },
  {
    id: 12,
    title: "Shot Block",
    category: "Defending & Blocks",
    opponent: "Great Britain",
    situation: "5v5",
    description:
      "Shot block from angle shot.",
    videoUrl: "https://pub-72a4fda80f934f379e00068c9815bdf7.r2.dev/Defending%20%26%20Blocks/USED%3B%20Shot%20block%20vs%20GBR.mp4",
  },

  {
    id: 13,
    title: "Good Stick vs Kirk",
    category: "Defending & Blocks",
    opponent: "Great Britain",
    situation: "5vs5",
    description:
      "Winning the puck from Liam Kirk with a good stickcheck.",
    videoUrl: "https://pub-72a4fda80f934f379e00068c9815bdf7.r2.dev/Defending%20%26%20Blocks/USED%3B%20Good%20stick%20vs%20Kirk%20vs%20GBR.mp4",
  },
  {
    id: 14,
    title: "Angeling vs Puljujärvi",
    category: "Defending & Blocks",
    opponent: "Finland",
    situation: "5vs5",
    description:
      "Angeling against Jesse Puljujärvi, making him rim the puck. ",
    videoUrl: "https://pub-72a4fda80f934f379e00068c9815bdf7.r2.dev/Defending%20%26%20Blocks/USED%3B%20Angling%20vs%20Puljujarvi%20vs%20FIN.mp4",
  },
  {
    id: 15,
    title: "Battle Win into OZ RIM",
    category: "Battles & Boxout",
    opponent: "Austria",
    situation: "5vs5",
    description:
      "Skating hard to get the inside line to the puck, winning the battle, go up and give option to the winger, OZ RIM.",
    videoUrl: "https://pub-72a4fda80f934f379e00068c9815bdf7.r2.dev/Battles%20%26%20Boxout/Battle%20won%20%26%20OZ%20RIM%20vs%20AUT.mp4",
  },

  {
    id: 16,
   title: "Boxout vs Jäger",
    category: "Battles & Boxout",
    opponent: "Switzerland",
    situation: "5vs5",
    description:
      "Boxing out Ken Jäger.",
    videoUrl: "https://pub-72a4fda80f934f379e00068c9815bdf7.r2.dev/Battles%20%26%20Boxout/BoxOut%20vs%20SUI.mp4",
   },

  {
    id: 17,
    title: "Boxout ",
    category: "Battles & Boxout",
    opponent: "Latvia",
    situation: "5vs5",
    description:
      "Boxout for no rebound.",
    videoUrl: "https://pub-72a4fda80f934f379e00068c9815bdf7.r2.dev/Battles%20%26%20Boxout/BoxOut%20vs%20LAT.mp4",
  },
  {
    id: 18,
    title: "Separating Man from the Puck ",
    category: "Battles & Boxout",
    opponent: "Austria",
    situation: "5vs5",
    description:
      "Working hard to separate the opponent from the puck. ",
    videoUrl: "https://pub-72a4fda80f934f379e00068c9815bdf7.r2.dev/Battles%20%26%20Boxout/Fronline%20battle%20win%20vs%20AUT.mp4",
  },

  {
    id: 19,
    title: "NZ Puck Pickup into Self Chip in OZ",
    category: "Transitions",
    opponent: "Switzerland",
    situation: "5v5",
    description:
      "Puck pickup in NZ, scans, skate, self dump.",
    videoUrl: "https://pub-72a4fda80f934f379e00068c9815bdf7.r2.dev/Transitions/NZ%20puck%20carry%20all%20the%20way%20vs%20SUI.mp4",
  },

  {
    id: 20,
    title: "NZ Escape Turn vs Meier into OZ Entry",
    category: "Transitions",
    opponent: "Switzerland",
    situation: "5v5",
    description:
      "Escape turn vs Timo Meier, puck protection, OZ rim, into lucky chance for.",
    videoUrl: "https://pub-72a4fda80f934f379e00068c9815bdf7.r2.dev/Transitions/NZ%20turn%20and%20ZoneEntry%20vs%20SUI.mp4",
  },

  {
    id: 21,
    title: "Hard Pass & Saving a Breakaway After a Turnover",
    category: "Transitions",
    opponent: "Great Britain",
    situation: "5v5",
    description:
      "Pick for D partner, scans, hard pass up, breakaway pass save after turnover.",
    videoUrl: "https://pub-72a4fda80f934f379e00068c9815bdf7.r2.dev/Transitions/Pick%20%26%20hard%20pass%20%26%20BA%20save%20vs%20GBR.mp4",
  },

  {
    id: 22,
    title: "OZ Entry Give and Go into Chance For",
    category: "Transitions",
    opponent: "Latvia",
    situation: "5v5",
    description:
      "OZ entry give and go, weakside rim, blueline one-timer.",
    videoUrl: "https://pub-72a4fda80f934f379e00068c9815bdf7.r2.dev/Transitions/ZoneEntry%20into%20CF%20vs%20LAT.mp4",
  },

  {
    id: 23,
    title: "Going Up with the Attack & OZ Puck Retrieval",
    category: "Transitions",
    opponent: "Great Britain",
    situation: "5v5",
    description:
      "Going up with the attack, scans, pick up dump under pressure, low to high pass.",
    videoUrl: "https://pub-72a4fda80f934f379e00068c9815bdf7.r2.dev/Transitions/Going%20up%20w%20the%20attack%20vs%20GBR.mp4",
  },

  {
    id: 24,
    title: "NZ Hinge FO Play",
    category: "Transitions",
    opponent: "Switzerland",
    situation: "5v5",
    description:
      "D-D pass, hinge option, no stickhandle hard pass up.",
    videoUrl: "https://pub-72a4fda80f934f379e00068c9815bdf7.r2.dev/Transitions/FO%20Hinge%20vs%20SUI.mp4",
  },

  {
    id: 25,
    title: "Turn back to Wait for Linechange",
    category: "Transitions",
    opponent: "Great Britain",
    situation: "5v5",
    description:
      "Communicate w d partner to leave the puck, skate up, turn back because of linechange, go up when everybody is ready.",
    videoUrl: "https://pub-72a4fda80f934f379e00068c9815bdf7.r2.dev/Transitions/Smart%20wait%20for%20change%20vs%20GBR.mp4",
  },

  {
    id: 26,
    title: "OZ Entry & Fake Shot & Chance For",
    category: "Transitions",
    opponent: "Austria",
    situation: "5v5",
    description:
      "Puck pickup behind the net, kick out, fake onetimer, D-D, chance for.",
    videoUrl: "https://pub-72a4fda80f934f379e00068c9815bdf7.r2.dev/Transitions/CBO%20%26%20fake%20shot%20into%20SCF%20vs%20AUT.mp4",
  },

  {
    id: 27,
    title: "Good Stick on Zone Entry Leading to a 2 on 1",
    category: "Penalty Killing",
    opponent: "Germany",
    situation: "4vs5",
    description:
      "Pressure on zone entry, good stickcheck, 2 on 1 shorthanded.",
    videoUrl: "https://pub-72a4fda80f934f379e00068c9815bdf7.r2.dev/PK/Stickwork%20leading%20to%20a%202v1%20in%20PK%20vs%20GER.mp4",
  },

  {
    id: 28,
    title: "Pressure after Faceoff",
    category: "Penalty Killing",
    opponent: "Austria",
    situation: "4vs5",
    description:
      "Pressure after a Faceoff loss, board battle win leading to a clear.",
    videoUrl: "https://pub-72a4fda80f934f379e00068c9815bdf7.r2.dev/PK/PK%20pressure%20after%20FO%20vs%20AUT.mp4",
  },

  {
    id: 29,
    title: "Good Gap Forcing a Dump",
    category: "Penalty Killing",
    opponent: "Finland",
    situation: "4vs5",
    description:
      "Good gap and angle forces a chip to the teammate.",
    videoUrl: "https://pub-72a4fda80f934f379e00068c9815bdf7.r2.dev/PK/PK%20good%20gap%20and%20force%20chip%20vs%20FIN.mp4",
  },

  {
    id: 30,
    title: "Hard Pressure on Rim & Battle",
    category: "Penalty Killing",
    opponent: "Austria",
    situation: "4vs5",
    description:
      "Hard pressure on a rim, winning the puck, battling to keep the puck after clear attempt,",
    videoUrl: "https://pub-72a4fda80f934f379e00068c9815bdf7.r2.dev/PK/PK%20battle%20and%20pressure%20vs%20AUT.mp4",
  },

  {
    id: 31,
    title: "Blue Line Deke & Shot & Multiple Chances For",
    category: "Offensive Plays",
    opponent: "Great Britain",
    situation: "5v5",
    description:
      "Get middle on blue line quick, deke to get past the winger, shot on net, regroup puck retrieval to pass up, slot shot, in position for empty net pass.",
    videoUrl: "https://pub-72a4fda80f934f379e00068c9815bdf7.r2.dev/Offensive%20Plays/BL%20move%20%26%20NZ%20pass%20into%20CHF%20vs%20GBR.mp4",
  },

  {
    id: 32,
    title: "Blue Line Movement & Shots",
    category: "Offensive Plays",
    opponent: "Finland",
    situation: "5v5",
    description:
      "Blue line shot blocked by teammate, get middle, D-D, shot from top of the circle.",
    videoUrl: "https://pub-72a4fda80f934f379e00068c9815bdf7.r2.dev/Offensive%20Plays/Blueline%20shots%20vs%20FIN.mp4",
  },

      {
    id: 33,
    title: "Board One-timer & Blue Line Shot",
    category: "Offensive Plays",
    opponent: "Austria",
    situation: "5v5",
    description:
      "One-timer from the boards leading to big rebound chance, quick shot from the blue line.",
    videoUrl: "https://pub-72a4fda80f934f379e00068c9815bdf7.r2.dev/Offensive%20Plays/Board%201T%20%26%20BL%20Shot%20vs%20AUT.mp4",
  },

  {
    id: 34,
    title: "Toedrag Slotshot",
    category: "Offensive Plays",
    opponent: "Austria",
    situation: "5v5",
    description:
      "Toedrag shot fom the slot.",
    videoUrl: "https://pub-72a4fda80f934f379e00068c9815bdf7.r2.dev/Offensive%20Plays/Toedrag%20shot%20vs%20AUT.mp4",
  },

  {
    id: 35,
    title: "Pinch & Puck Win & Shot Leading to Rebound Chance",
    category: "Offensive Plays",
    opponent: "Great Britain",
    situation: "5v5",
    description:
      "Pinch, self chip, board battle, escape high, shot, rebound chance, seem pass.",
    videoUrl: "https://pub-72a4fda80f934f379e00068c9815bdf7.r2.dev/Offensive%20Plays/Pinch%20into%20OZ%20%26%20Shot%20vs%20GBR.mp4",
  },

  {
    id: 36,
    title: "One-Timer",
    category: "Offensive Plays",
    opponent: "Switzerland",
    situation: "5v5",
    description:
      "One-timer from D-D pass.",
    videoUrl: "https://pub-72a4fda80f934f379e00068c9815bdf7.r2.dev/Offensive%20Plays/1T%20vs%20SUI.mp4",
  },

  {
    id: 37,
    title: "Blue Line D-D Leading to One-Timer from Middle",
    category: "Offensive Plays",
    opponent: "Austria",
    situation: "5v5",
    description:
      "Hard D-D pass, pass back to forward for one-timer.",
    videoUrl: "https://pub-72a4fda80f934f379e00068c9815bdf7.r2.dev/Offensive%20Plays/Blueline%20D-D%20vs%20AUT.mp4",
  },

  {
    id: 38,
    title: "Blue Line D-D ",
    category: "Offensive Plays",
    opponent: "Great Britain",
    situation: "5v5",
    description:
      "Hard D-D pass after moving in two shoot. ",
    videoUrl: "https://pub-72a4fda80f934f379e00068c9815bdf7.r2.dev/Offensive%20Plays/OZ%20D-D%20vs%20GBR.mp4",
  },

  {
    id: 39,
    title: "Pinch & Smart Touch Up",
    category: "Offensive Plays",
    opponent: "Finland",
    situation: "5v5",
    description:
      "Pinch on the rim, touch for teammate coming up.",
    videoUrl: "https://pub-72a4fda80f934f379e00068c9815bdf7.r2.dev/Offensive%20Plays/OZ%20pinch%20and%20smart%20touch%20vs%20FIN.mp4",
  },

  {
    id: 40,
    title: "Smart Pick After Pinch Leading to Chance For",
    category: "Picking for Teammates",
    opponent: "Finland",
    situation: "5v5",
    description:
      "Pinch, hit, pick for teammate to cut in.",
    videoUrl: "https://pub-72a4fda80f934f379e00068c9815bdf7.r2.dev/Picking%20for%20Teammates/Pinch%20and%20smart%20pick%20vs%20FIN.mp4",
  },

  {
    id: 41,
    title: "Pick vs Forechecker to an Easy Breakout",
    category: "Picking for Teammates",
    opponent: "Latvia",
    situation: "5v5",
    description:
      "Pick vs forechecker so teammate can skate up and make an easy pass.",
    videoUrl: "https://pub-72a4fda80f934f379e00068c9815bdf7.r2.dev/Picking%20for%20Teammates/Smart%20pick%20in%20BO%20vs%20LAT.mp4",
  },

  {
    id: 42,
    title: "Pick to Give D-Partner More Time",
    category: "Picking for Teammates",
    opponent: "Latvia",
    situation: "5v5",
    description:
      "Picking the forechecker to give more time to the d-partner",
    videoUrl: "https://pub-72a4fda80f934f379e00068c9815bdf7.r2.dev/Picking%20for%20Teammates/BO%20pick%20for%20garat%20vs%20LAT.mp4",
  },


];