import { c, CV_HREF } from '../content.js';

export default function Hero() {
  return (
    <section id="top" className="container hero">
      <div className="hero__grid">
        <div className="hero__copy">
          <h1 className="display hero__name">
            <span data-content="hero.name">{c('hero.name')}</span>
            <span data-content="hero.name_line2">{c('hero.name_line2')}</span>
          </h1>
          <p className="hero__lede" data-content="hero.description">{c('hero.description')}</p>
          <div className="hero__ctas">
            <a href="#work" className="btn btn--primary">See Pantheon</a>
            <a href={CV_HREF} download className="btn btn--outline">Download CV</a>
          </div>
        </div>

        <figure className="figure">
          <img
            src="/images/pageflow-home-1600.jpg"
            srcSet="/images/pageflow-home-900.jpg 900w, /images/pageflow-home-1600.jpg 1600w"
            sizes="(max-width: 767px) 100vw, 50vw"
            width="1600"
            height="1000"
            alt="The page-flow homepage, headed: We build websites your business actually owns."
            fetchPriority="high"
          />
          <figcaption data-content="hero.image_caption">{c('hero.image_caption')}</figcaption>
        </figure>
      </div>
    </section>
  );
}
