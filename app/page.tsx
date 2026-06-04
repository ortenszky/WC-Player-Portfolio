"use client";

import { useEffect, useState } from "react";
import { Clip, clips, skillCategories } from "@/data/clips";

export default function Home() {
  const [openCategory, setOpenCategory] = useState<string>("Breakouts");
  const [selectedClip, setSelectedClip] = useState<Clip | null>(null);

  useEffect(() => {
  if (!window.location.hash) {
    window.scrollTo(0, 0);
  }
}, []);

  function toggleCategory(category: string) {
    setOpenCategory(openCategory === category ? "" : category);
  }

  return (
      <main className="site">
        <section className="hero">
          <div>
            <p className="eyebrow">2026 WC Portfolio</p>
            <h1>Tamás Ortenszky</h1>
            <p className="subtitle">
              Defenseman | Hungarian National Team | Swiss-licensed player
            </p>
            <p className="heroText">
              Reliable defenseman with strong 1v1 defending, calm puck
              decisions under pressure, clean breakouts, defensive-zone
              reliability, and a strong ability to contribute offensively.
            </p>

            <div className="heroButtons">
              <a href="#skills" className="primaryButton">
                View Skill Clips
              </a>
              <a href="#contact" className="secondaryButton">
                Contact
              </a>
            </div>
          </div>
        </section>

        <section className="dashboard" id="skills">
          <div className="skillsPanel">
            <div className="sectionHeader">
              <p className="eyebrow">Video Library</p>
              <h2>Skill Breakdown</h2>
              <p>
                Click a skill to open clips that show specific parts of my game.
              </p>
            </div>

            <div className="accordion">
              {skillCategories.map((skill) => {
                const isOpen = openCategory === skill.name;
                const categoryClips = clips.filter(
                    (clip) => clip.category === skill.name
                );

                return (
                    <div className="skillItem" key={skill.name}>
                      <button
                          className="skillHeader"
                          onClick={() => toggleCategory(skill.name)}
                      >
                        <div>
                          <h3>{skill.name}</h3>
                          <p>{skill.summary}</p>
                        </div>

                        <span>{isOpen ? "−" : "+"}</span>
                      </button>

                      {isOpen && (
                          <div className="clipList">
                            {categoryClips.length > 0 ? (
                                categoryClips.map((clip, index) => (
                                    <article className="clipRow" key={clip.id}>
                                      <div className="clipNumber">
                                        {String(index + 1).padStart(2, "0")}
                                      </div>

                                      <div className="clipInfo">
                                        <h4>{clip.title}</h4>
                                        <p className="clipMeta">
                                          {clip.opponent} · {clip.situation}
                                        </p>
                                        <p>{clip.description}</p>
                                      </div>

                                      <button
                                          className="watchButton"
                                          onClick={() => setSelectedClip(clip)}
                                      >
                                        Watch
                                      </button>
                                    </article>
                                ))
                            ) : (
                                <p className="emptyText">
                                  Clips for this category will be added soon.
                                </p>
                            )}
                          </div>
                      )}
                    </div>
                );
              })}
            </div>
          </div>

          <aside className="playerCard">
            <div className="playerPhoto">
              <img src="/player.jpg" alt="Tamás Ortenszky"/>
            </div>

            <div className="playerCardContent">
              <p className="eyebrow">Player Profile</p>
              <h2>Tamás Ortenszky</h2>
              <p className="playerType">Reliable two-way defenseman</p>

<div className="statsGrid">
  <div>
    <span>Date of Birth</span>
    <strong>05.01.2002</strong>
  </div>
  <div>
    <span>Age</span>
    <strong>24</strong>
  </div>
  <div>
    <span>Height</span>
    <strong>187 cm</strong>
  </div>
  <div>
    <span>Weight</span>
    <strong>95 kg</strong>
  </div>
  <div>
    <span>Position</span>
    <strong>Right D</strong>
  </div>
  <div>
    <span>Shoots</span>
    <strong>R</strong>
  </div>
  <div>
    <span>Nationality</span>
    <strong>Hungary</strong>
  </div>
  <div>
    <span>Team 26/27</span>
    <strong>Ferencvarosi TC (ICEHL)</strong>
  </div>
</div>
              <div className="seasonStats">
                <h3>2026 IIHF World Championship</h3>

                <div className="seasonRow">
                  <span>Team</span>
                  <strong>Hungary</strong>
                </div>
                <div className="seasonRow">
                  <span>GP</span>
                  <strong>7</strong>
                </div>
                <div className="seasonRow">
                  <span>G</span>
                  <strong>0</strong>
                </div>
                <div className="seasonRow">
                  <span>A</span>
                  <strong>1</strong>
                </div>
                <div className="seasonRow">
                  <span>PTS</span>
                  <strong>1</strong>
                </div>
                <div className="seasonRow">
                  <span>PIM</span>
                  <strong>2</strong>
                </div>
                <div className="seasonRow">
                  <span>+/-</span>
                  <strong>-4</strong>
                </div>
                <div className="seasonRow">
                  <span>SOG</span>
                  <strong>6</strong>
                </div>
                <div className="seasonRow">
                  <span>TOI</span>
                  <strong>129:31</strong>
                </div>
                <div className="seasonRow">
                  <span>TOI / GP</span>
                  <strong>18:30</strong>
                </div>
                <div className="seasonRow">
                  <span>Total Shifts</span>
                  <strong>179</strong>
                </div>
                <div className="seasonRow">
                  <span>Avg Shift</span>
                  <strong>0:43</strong>
                </div>
              </div>

              <div className="strengths">
                <h3>Main Strengths</h3>
                <div className="tags">
                  <span>1v1 Battles</span>
                  <span>Breakouts</span>
                  <span>Defensive Zone</span>
                  <span>First Pass</span>
                  <span>PK</span>
                  <span>Offensive Vision</span>
                </div>
              </div>

              <div className="cardButtons">
                <a
                    href="https://www.eliteprospects.com/player/505578/tamas-ortenszky"
                    className="primaryButton fullWidthButton"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  View EliteProspects Profile
                </a>
              </div>
            </div>
          </aside>
        </section>

        <section className="bottomSection contactSection" id="contact">
          <p className="eyebrow">Contact</p>
          <h2>For scouting inquiries, full games, or additional player information.</h2>

          <div className="contactGrid">
            <div className="contactCard">
              <span>Player</span>
              <h3>Tamás Ortenszky</h3>
              <p>
                <a href="tel:+41786843606">+41 78 684 36 06</a>
              </p>
              <p>
                <a href="mailto:ortenszkytomi@gmail.com">
                  ortenszkytomi@gmail.com
                </a>
              </p>
            </div>

            <div className="contactCard">
              <span>Agency</span>
              <h3>Platform International</h3>
              <p>
                <a href="mailto:holdener@platform-int.com">
                  holdener@platform-int.com
                </a>
              </p>
            </div>
          </div>
        </section>

        {selectedClip && (
            <div className="modalOverlay" onClick={() => setSelectedClip(null)}>
              <div className="modal" onClick={(event) => event.stopPropagation()}>
                <button
                    className="closeButton"
                    onClick={() => setSelectedClip(null)}
                >
                  ×
                </button>

                <div className="videoWrapper">
                  <iframe
                      src={selectedClip.videoUrl}
                      title={selectedClip.title}
                      loading="lazy"
                      allow="fullscreen; picture-in-picture"
                      allowFullScreen
                  />
                </div>

                <div className="modalText">
                  <h3>{selectedClip.title}</h3>
                  <p className="clipMeta">
                  {selectedClip.opponent} · {selectedClip.situation} ·{" "}
                    {selectedClip.category}
                  </p>
                  <p>{selectedClip.description}</p>
                </div>
              </div>
            </div>
        )}
      </main>
  );
}