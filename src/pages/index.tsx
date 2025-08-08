import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/ares-os">
            Recommended: Ares OS →
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Guides for POCO X4 GT / Redmi Note 11T Pro (+) / K50i (xaga)">
      <HomepageHeader />
      <main>
        <section className="margin-vert--lg">
          <div className="container">
            <div className="row">
              <div className="col col--4 margin-bottom--lg">
                <div className="card">
                  <div className="card__header">
                    <Heading as="h3">Recommended ROM — Ares OS</Heading>
                  </div>
                  <div className="card__body">
                    <p>Watch the intro video and read why Ares OS is a great daily driver for xaga.</p>
                  </div>
                  <div className="card__footer">
                    <Link className="button button--primary button--sm" to="/docs/ares-os">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col col--4 margin-bottom--lg">
                <div className="card">
                  <div className="card__header">
                    <Heading as="h3">Unlocking bootloader</Heading>
                  </div>
                  <div className="card__body">
                    <p>First step before flashing custom ROMs or rooting your device.</p>
                  </div>
                  <div className="card__footer">
                    <Link className="button button--outline button--sm" to="/docs/Unlocking%20bootloader">
                      Read guide
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col col--4 margin-bottom--lg">
                <div className="card">
                  <div className="card__header">
                    <Heading as="h3">Rooting method</Heading>
                  </div>
                  <div className="card__body">
                    <p>Patch and flash boot image using Magisk/KernelSU.</p>
                  </div>
                  <div className="card__footer">
                    <Link className="button button--outline button--sm" to="/docs/Root">
                      Read guide
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col col--4 margin-bottom--lg">
                <div className="card">
                  <div className="card__header">
                    <Heading as="h3">Flashing stock ROM</Heading>
                  </div>
                  <div className="card__body">
                    <p>Official MIUI Fastboot ROM flashing steps with Mi Flash tool.</p>
                  </div>
                  <div className="card__footer">
                    <Link className="button button--outline button--sm" to="/docs/Stock">
                      Read guide
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col col--4 margin-bottom--lg">
                <div className="card">
                  <div className="card__header">
                    <Heading as="h3">Unbrick (CFW)</Heading>
                  </div>
                  <div className="card__body">
                    <p>Follow the maintained unbrick guide to recover your device.</p>
                  </div>
                  <div className="card__footer">
                    <Link className="button button--outline button--sm" to="/docs/Unbrick">
                      Read guide
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
