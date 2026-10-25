"use client";

import { useEffect, useState } from "react";

const phoneDisplay = "07424 824632";
const phoneHref = "tel:+447424824632";
const email = "guy312312@hotmail.com";

const services = [
  {
    number: "01",
    title: "Interior decorating",
    copy: "Walls, ceilings, woodwork and wallpapering, with careful preparation and a crisp, lasting finish.",
  },
  {
    number: "02",
    title: "Exterior decorating",
    copy: "Thoughtful exterior colour and durable paintwork that protects your home and lifts its kerb appeal.",
  },
  {
    number: "03",
    title: "Interior design",
    copy: "Practical help with colour, materials and finishing details to bring a room together beautifully.",
  },
  {
    number: "04",
    title: "Patios & decking",
    copy: "Well-planned outdoor spaces for relaxing, dining and making more of the garden you already have.",
  },
  {
    number: "05",
    title: "Flooring",
    copy: "Neat, considered flooring installation that gives the whole room a polished foundation.",
  },
  {
    number: "06",
    title: "Exterior design",
    copy: "Ideas and improvements that connect the house, garden and outdoor living space as one coherent whole.",
  },
];

const recentWork = [
  {
    image: "/work/1-Photo-1.jpg",
    title: "Colour with conviction",
    copy: "A jewel-green stove and expressive wallpaper make a traditional room feel unmistakably its own.",
    className: "gallery-feature",
  },
  {
    image: "/work/2-Photo-2.jpg",
    title: "Texture, warmth, calm",
    copy: "A softly layered bedroom scheme that pairs honest materials with a restorative mood.",
  },
  {
    image: "/work/3-Photo-3.jpg",
    title: "Utility, reimagined",
    copy: "A practical storage transformation with every shelf planned for everyday use.",
  },
  {
    image: "/work/4-Photo-4.jpg",
    title: "Stairway renewal",
    copy: "A considered before-and-after, bringing crisp paintwork and a tailored runner into focus.",
  },
  {
    image: "/work/5-Photo-5.jpg",
    title: "Tailored from the ground up",
    copy: "Detailed joinery, immaculate whitework and a runner chosen to lift the entire hall.",
  },
  {
    image: "/work/6-Photo-6.jpg",
    title: "Small room, big atmosphere",
    copy: "Inky walls, warm timber and graphic tile work give this compact bathroom real presence.",
    className: "gallery-tall",
  },
];

export default function Home() {
  const [showEntrance, setShowEntrance] = useState(true);
  const [musicEnabled, setMusicEnabled] = useState(false);
  const [musicUnavailable, setMusicUnavailable] = useState(false);

  useEffect(() => {
    const entrancePlayed = window.sessionStorage.getItem("ge-entrance-played");
    if (entrancePlayed) {
      setShowEntrance(false);
      return;
    }
    window.sessionStorage.setItem("ge-entrance-played", "yes");
    const timer = window.setTimeout(() => setShowEntrance(false), 2550);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!musicEnabled) return;
    let audioContext: AudioContext | undefined;
    let master: GainNode | undefined;
    let timer = 0;
    let noteIndex = 0;
    let stopped = false;

    try {
      const AudioContextConstructor = window.AudioContext;
      if (!AudioContextConstructor) throw new Error("Audio is unavailable");
      audioContext = new AudioContextConstructor();
      master = audioContext.createGain();
      master.gain.setValueAtTime(0, audioContext.currentTime);
      master.gain.linearRampToValueAtTime(0.022, audioContext.currentTime + 1.4);
      master.connect(audioContext.destination);
      void audioContext.resume();

      const chords = [
        [110, 130.81, 164.81, 196],
        [98, 123.47, 146.83, 174.61],
        [130.81, 155.56, 196, 233.08],
        [87.31, 110, 130.81, 164.81],
      ];
      const playNote = (frequency: number, start: number, length: number, volume: number, type: OscillatorType) => {
        if (!audioContext || !master) return;
        const oscillator = audioContext.createOscillator();
        const envelope = audioContext.createGain();
        oscillator.type = type;
        oscillator.frequency.value = frequency;
        envelope.gain.setValueAtTime(0, start);
        envelope.gain.linearRampToValueAtTime(volume, start + 0.018);
        envelope.gain.exponentialRampToValueAtTime(0.001, start + length);
        oscillator.connect(envelope);
        envelope.connect(master);
        oscillator.start(start);
        oscillator.stop(start + length + 0.03);
      };
      const scheduleBar = () => {
        if (!audioContext || stopped) return;
        const start = audioContext.currentTime + 0.05;
        const chord = chords[noteIndex % chords.length];
        chord.forEach((frequency, index) => playNote(frequency, start + index * 0.026, 2.7, 0.035, "sine"));
        playNote(chord[0] / 2, start, 2.8, 0.065, "triangle");
        playNote(chord[2] * 2, start + 1.25, 0.8, 0.012, "sine");
        noteIndex += 1;
        timer = window.setTimeout(scheduleBar, 2700);
      };
      scheduleBar();
    } catch {
      setMusicUnavailable(true);
      setMusicEnabled(false);
    }

    return () => {
      stopped = true;
      window.clearTimeout(timer);
      if (audioContext && master) {
        master.gain.cancelScheduledValues(audioContext.currentTime);
        master.gain.setTargetAtTime(0, audioContext.currentTime, 0.08);
        window.setTimeout(() => void audioContext?.close(), 350);
      }
    };
  }, [musicEnabled]);

  return (
    <main>
      {showEntrance && (
        <div className={`sovereign-entrance${showEntrance ? " is-visible" : " is-dismissed"}`} aria-hidden="true">
          <span className="deco-corner top-left" /><span className="deco-corner top-right" />
          <span className="deco-corner bottom-left" /><span className="deco-corner bottom-right" />
          <div className="sovereign-coin"><span>GE</span><small>Decorating &amp; Interiors</small></div>
          <p className="entrance-ornament">Tunbridge Wells · Est. with care</p>
        </div>
      )}
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Guy Elton home">
          <span className="brand-mark">GE</span>
          <span>
            <strong>Guy Elton</strong>
            <small>Decorating &amp; Interiors</small>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#reviews">Reviews</a>
        </nav>
        <div className="header-tools">
          <button className="music-toggle" type="button" aria-pressed={musicEnabled} onClick={() => setMusicEnabled((enabled) => !enabled)}>
            <span aria-hidden="true">{musicEnabled ? "♫" : "♪"}</span> {musicEnabled ? "Music on" : musicUnavailable ? "Music unavailable" : "Enable music"}
          </button>
          <a className="header-call" href={phoneHref}>Call {phoneDisplay}</a>
        </div>
      </header>

      <section className="hero" id="top">
        <span className="deco-corner top-left" aria-hidden="true" />
        <span className="deco-corner top-right" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">Tunbridge Wells · Decorating &amp; interiors</p>
          <h1>Rooms with rhythm.<br /><em>Finished with soul.</em></h1>
          <p className="hero-intro">
            Interior and exterior decorating, design-led improvements and
            practical craftsmanship—completed with care, clarity and pride.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={phoneHref}>Discuss your project</a>
            <a className="text-link" href="#work">View Guy&apos;s work <span aria-hidden="true">↘</span></a>
          </div>
          <div className="trust-line" aria-label="Key business qualities">
            <span>15+ years&apos; experience</span>
            <span>Local &amp; independent</span>
            <span>Reliable. Skilled. Trusted.</span>
          </div>
        </div>
        <figure className="hero-image">
          <img src="/work/6-Photo-6.jpg" alt="Dark, characterful bathroom with warm timber, patterned flooring and graphic artwork" />
          <figcaption>After dark: texture, timber and a little brass.</figcaption>
        </figure>
      </section>

      <section className="intro-strip" aria-label="About Guy Elton">
        <span className="panel-deco" aria-hidden="true" />
        <p className="section-label">The approach</p>
        <p className="intro-statement">
          Guy combines the eye of a decorator with the practical skill to make
          ideas real. From a single room to the spaces beyond your back door,
          every detail is considered: the depth of a colour, the line of a
          runner, the finish that makes a room feel like it has always belonged.
        </p>
      </section>

      <section className="services" id="services">
        <div className="section-heading">
          <div>
            <p className="section-label">What Guy does</p>
            <h2>Every room deserves<br />its own atmosphere.</h2>
          </div>
          <p>One trusted pair of hands for the projects that make home feel more like yours.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="work-feature" id="work">
        <div className="work-image" role="img" aria-label="Jewel-green stove in a colourful, characterful interior" />
        <div className="work-copy">
          <span className="panel-deco" aria-hidden="true" />
          <p className="section-label">Selected finish</p>
          <p className="project-kicker">Colour, proportion, detail</p>
          <h2>Let the room<br />take the spotlight.</h2>
          <p>
            A jewel-green stove, floral walls and a richly veined hearth make
            a familiar room feel composed rather than cautious. The work is
            confident, exacting and designed to hold its note for years.
          </p>
          <div className="project-tags">
            <span>Colour consultation</span>
            <span>Panelling</span>
            <span>Decorating</span>
            <span>Finishing</span>
          </div>
        </div>
      </section>

      <section className="gallery" aria-labelledby="gallery-title">
        <div className="section-heading gallery-heading">
          <div>
            <p className="section-label">Selected transformations</p>
            <h2 id="gallery-title">A well-made room<br />stays with you.</h2>
          </div>
          <p>From a tailored staircase to an expressive stove, every project is given a clear point of view and the care to carry it through.</p>
        </div>
        <div className="gallery-grid">
          {recentWork.map((project) => (
            <figure className={`gallery-card ${project.className ?? ""}`} key={project.title}>
              <img src={project.image} alt={project.title} />
              <figcaption>
                <span>Selected work</span>
                <h3>{project.title}</h3>
                <p>{project.copy}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="process">
        <div className="section-heading">
          <div>
            <p className="section-label">The set list</p>
            <h2>Easy from first<br />conversation to final coat.</h2>
          </div>
        </div>
        <ol className="process-grid">
          <li><span>01</span><h3>Talk it through</h3><p>Tell Guy what you want to change, your ideas and what matters most.</p></li>
          <li><span>02</span><h3>Plan it properly</h3><p>Agree the scope, materials, finish and a clear route through the work.</p></li>
          <li><span>03</span><h3>Make it happen</h3><p>Careful, tidy work with friendly communication as the project takes shape.</p></li>
        </ol>
      </section>

      <section className="reviews" id="reviews">
        <div className="reviews-title">
          <p className="section-label light">Client words</p>
          <h2>Kind words from<br />local customers.</h2>
          <p>Real comments shared by customers on Guy&apos;s local business profile.</p>
        </div>
        <div className="review-list">
          <blockquote>
            <p>“Efficient, professional, tidy and takes pride in his work. Guy explains things perfectly and is an expert in his field.”</p>
            <footer>C.M. · Westbourne</footer>
          </blockquote>
          <blockquote>
            <p>“A great job at a great price—and a lovely fella as well. I would definitely recommend Guy.”</p>
            <footer>A.W. · Ticehurst</footer>
          </blockquote>
          <blockquote>
            <p>“Quick and efficient, finished to a high standard. I was so impressed I booked Guy again for another job.”</p>
            <footer>J.S. · Tunbridge Wells</footer>
          </blockquote>
        </div>
      </section>

      <section className="ventures-banner" aria-label="James E Ventures website">
        <div><p className="section-label">A note from the studio</p><h2>Good work deserves<br />a good address.</h2></div>
        <p>Discover more from James E Ventures: a home for the ideas, projects and businesses we build.</p>
        <a className="button button-primary" href="https://www.jameseventures.com/" target="_blank" rel="noreferrer">Visit James E Ventures <span aria-hidden="true">↗</span></a>
      </section>

      <section className="contact" id="contact">
        <p className="section-label">Have a project in mind?</p>
        <h2>Let&apos;s make something<br /><em>beautiful.</em></h2>
        <p>Call or email Guy for an informal chat about your space and what you would like to achieve.</p>
        <div className="contact-actions">
          <a className="button button-primary" href={phoneHref}>Call {phoneDisplay}</a>
          <a className="button button-outline" href={`mailto:${email}`}>Email Guy</a>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#top" aria-label="Back to top">
          <span className="brand-mark">GE</span>
          <span><strong>Guy Elton</strong><small>Decorating &amp; Interiors</small></span>
        </a>
        <div><span>Tunbridge Wells &amp; surrounding areas</span><a href={phoneHref}>{phoneDisplay}</a><a href={`mailto:${email}`}>{email}</a></div>
        <div className="footer-credit">Created &amp; managed by <a href="https://www.jameseventures.com/" target="_blank" rel="noreferrer">James E Ventures</a></div>
        <a className="back-top" href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
