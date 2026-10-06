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
  return (
    <main>
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
        <a className="header-call" href={phoneHref}>Call {phoneDisplay}</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Tunbridge Wells &amp; surrounding areas</p>
          <h1>Thoughtful spaces.<br /><em>Beautifully finished.</em></h1>
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
          <figcaption>A dark room with a pulse.</figcaption>
        </figure>
      </section>

      <section className="intro-strip" aria-label="About Guy Elton">
        <p className="section-label">A considered approach</p>
        <p className="intro-statement">
          Guy combines the eye of a decorator with the practical skill to make
          ideas real. From a single room to the spaces beyond your back door,
          every detail is approached with care. A bright new chapter and fresh
          perspective have only sharpened his instinct for rooms that bring joy.
        </p>
      </section>

      <section className="services" id="services">
        <div className="section-heading">
          <div>
            <p className="section-label">What Guy does</p>
            <h2>Inside, outside<br />and everything between.</h2>
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
          <p className="section-label">Selected finish</p>
          <p className="project-kicker">Colour, proportion, detail</p>
          <h2>Make the room<br />the main event.</h2>
          <p>
            A jewel-green stove, floral walls and a richly veined hearth turn
            a familiar room into a full expression of its owners. The finish
            is fearless, precise and built to last.
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
            <p className="section-label">Recent transformations</p>
            <h2 id="gallery-title">Character, colour<br />and a little theatre.</h2>
          </div>
          <p>From a precise staircase to a wildly joyful stove, the best homes have a point of view. Here are a few recent moments.</p>
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
            <p className="section-label">How it works</p>
            <h2>Straightforward from<br />first call to final coat.</h2>
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
          <h2>Recommended by<br />local customers.</h2>
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
        <a className="back-top" href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
