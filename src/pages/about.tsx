import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from '@emotion/core';

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;

const About: React.FunctionComponent = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header css={[outer, SiteHeader]}>
        <div css={inner}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <article className="post page" css={[PostFull, NoImage]}>
          <PostFullHeader>
            <PostFullTitle>About</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <h2 id="me">Me</h2>

              <p>For anybody that doesn’t know me. I’m a 28 year old civil engineer from Essex with a love for adventure and extreme sports. I have decided to undertake the ultimate sailing adventure and join the Clipper Race to circumnavigate the world.</p>

              <h2 id="theclipperrace">The Clipper Race</h2>

              <p>Taken from the Clipper Race website</p>

              <p>The Clipper Race is one of the biggest challenges of the natural world and an endurance test like no other. With no previous sailing experience necessary, it’s a record breaking 40,000 nautical mile race around the world on a 70-foot ocean racing yacht.</p>

              <p>The brainchild of Sir Robin Knox-Johnston, the first person to sail solo non-stop around the world, the event is now on its eleventh edition, with the twelfth edition starting in 2019-20.</p>

              <p>Divided into eight legs and 13 to 16 individual races, you can choose to complete the full circumnavigation or select individual legs. It is the only race in the world where the organisers supply a fleet of eleven identical racing yachts, each with a fully qualified skipper to safely guide the crew.</p>

              <p>Normally the domain of seasoned pros, this supreme challenge is taken on by ordinary, everyday people. Having completed a rigorous training course, participants are suited and booted in the latest extreme protection gear to commence the race of their lives - an unparalleled challenge where taxi drivers rub shoulders with chief executives, vicars mix with housewives, students work alongside bankers, and engineers team up with rugby players.</p>

              <p>The sea does not distinguish between Olympians or novices. There is nowhere to hide - if Mother Nature throws down the gauntlet, you must be ready to face the same challenges as the pro racer. Navigate the Doldrums en route to South America, endure epic Southern Ocean storms, experience South African sunsets, face the mountainous seas of the North Pacific - and bond with an international crew creating lifelong memories before returning victorious.</p>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
