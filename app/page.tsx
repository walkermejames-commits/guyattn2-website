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
          <img src="/work/bathroom-paneling.jpg" alt="Traditional bathroom finished with deep green panelling and precise painted woodwork" />
          <figcaption>Interiors with character, finished properly.</figcaption>
        </figure>
      </section>

      <section className="intro-strip" aria-label="About Guy Elton">
        <p className="section-label">A considered approach</p>
        <p className="intro-statement">
          Guy combines the eye of a decorator with the practical skill to make
          ideas real. From a single room to the spaces beyond your back door,
          every detail is approached with care.
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
        <div className="work-image" role="img" aria-label="Dark green wall panelling and carefully painted bathroom details" />
        <div className="work-copy">
          <p className="section-label">Selected finish</p>
          <p className="project-kicker">Colour, proportion, detail</p>
          <h2>A room with quiet confidence.</h2>
          <p>
            Deep green panelling, warm timber and traditional fittings turn a
            compact bathroom into something distinctive. The difference lives
            in the preparation, the straight lines and the final small details.
          </p>
          <div className="project-tags">
            <span>Colour consultation</span>
            <span>Panelling</span>
            <span>Decorating</span>
            <span>Finishing</span>
          </div>
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
