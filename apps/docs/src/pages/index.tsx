import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import CodeBlock from "@theme/CodeBlock";
import { Button, Checkbox, Input, Stack } from "@milfushi/ui";

import styles from "./index.module.css";

function HomepageHero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className={styles.heroGlow} aria-hidden="true" />
      <div className={`container ${styles.heroInner}`}>
        <p className={styles.eyebrow}>
          <span className={styles.eyebrowDot} aria-hidden="true" />
          React · TypeScript · Monorepo
        </p>
        <Heading as="h1" className={styles.heroTitle}>
          Semantic React components for{" "}
          <span className={styles.heroAccent}>consistent interfaces</span>
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.heroActions}>
          <Link
            className="button button--primary button--lg"
            to="/docs/getting-started"
          >
            Get started
          </Link>
          <Link
            className="button button--secondary button--outline button--lg"
            to="/docs/components/button"
          >
            Browse components
          </Link>
        </div>
        <div className={styles.heroInstall}>
          <CodeBlock language="bash">npm install @milfushi/ui</CodeBlock>
        </div>
      </div>
    </header>
  );
}

const features = [
  {
    title: "Type-safe by construction",
    description:
      "Every component ships generated .d.ts declarations, so props and variants are checked in your editor.",
    icon: (
      <>
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
  {
    title: "Unstyled, not opinionated",
    description:
      "Components render native HTML with data-variant hooks, so your product keeps full control of appearance.",
    icon: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
        <circle cx="9" cy="7" r="2" fill="currentColor" stroke="none" />
        <circle cx="15" cy="12" r="2" fill="currentColor" stroke="none" />
        <circle cx="8" cy="17" r="2" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    title: "Accessible foundations",
    description:
      "Labels, ids and aria-describedby wiring are handled for you on top of real form elements.",
    icon: (
      <>
        <circle cx="16" cy="4" r="1" />
        <path d="m18 19 1-7-6 1" />
        <path d="m5 8 3-3 5.5 3-2.36 3.5" />
        <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
        <path d="M13.76 17.5a5 5 0 0 0-3.92-7.4" />
      </>
    ),
  },
  {
    title: "Tested and documented",
    description:
      "Vitest suites and Storybook stories live next to each component, and these docs are generated from the source.",
    icon: (
      <>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        <path d="m9 11 3 3 9-9" />
      </>
    ),
  },
];

function Features() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.featureGrid}>
          {features.map((feature) => (
            <article key={feature.title} className={styles.featureCard}>
              <span className={styles.featureIcon} aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {feature.icon}
                </svg>
              </span>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`}>
      <div className="container">
        <p className={styles.sectionLabel}>Component library</p>
        <Heading as="h2" className={styles.sectionTitle}>
          Live components, straight from the package
        </Heading>
        <p className={styles.sectionDescription}>
          Everything below is rendered by <code>@milfushi/ui</code> on this
          page, from the same build your application consumes. The package
          ships unstyled &mdash; the look here comes from this documentation
          site.
        </p>

        <div className={styles.showcaseGrid}>
          <div className={styles.showcaseCard}>
            <div className={styles.showcaseHeader}>
              <span className={styles.showcaseName}>Button</span>
              <Link className={styles.showcaseLink} to="/docs/components/button">
                Docs
              </Link>
            </div>
            <div className={`ds-preview ${styles.showcaseStage}`}>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="primary" disabled>
                Disabled
              </Button>
            </div>
          </div>

          <div className={styles.showcaseCard}>
            <div className={styles.showcaseHeader}>
              <span className={styles.showcaseName}>Input · Checkbox</span>
              <Link className={styles.showcaseLink} to="/docs/components/input">
                Docs
              </Link>
            </div>
            <div className={`ds-preview ${styles.showcaseStage} ${styles.showcaseStageForm}`}>
              <Input
                label="Email"
                type="email"
                placeholder="you@example.com"
                helperText="We never share your address."
              />
              <Checkbox label="Subscribe to release notes" defaultChecked />
            </div>
          </div>

          <div className={styles.showcaseCard}>
            <div className={styles.showcaseHeader}>
              <span className={styles.showcaseName}>Stack</span>
              <Link className={styles.showcaseLink} to="/docs/components/stack">
                Docs
              </Link>
            </div>
            <div className={`ds-preview ${styles.showcaseStage}`}>
              <Stack direction="vertical" gap="sm">
                <Button variant="secondary">First</Button>
                <Button variant="secondary">Second</Button>
                <Button variant="secondary">Third</Button>
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const paths = [
  {
    label: "Introduction",
    title: "How the system is put together",
    description: "The monorepo layout, the UI package and this docs app.",
    to: "/docs/introduction",
  },
  {
    label: "Getting started",
    title: "Install and render your first component",
    description: "Peer dependencies, imports and the integration guide.",
    to: "/docs/getting-started",
  },
  {
    label: "Foundations",
    title: "Tokens, color, type and spacing",
    description: "The CSS custom properties the components are built on.",
    to: "/docs/foundations/design-tokens",
  },
];

function Paths() {
  return (
    <section className={styles.section}>
      <div className="container">
        <p className={styles.sectionLabel}>Start here</p>
        <Heading as="h2" className={styles.sectionTitle}>
          Three ways in
        </Heading>
        <div className={styles.pathGrid}>
          {paths.map((path) => (
            <Link key={path.to} className={styles.pathCard} to={path.to}>
              <span className={styles.pathLabel}>{path.label}</span>
              <span className={styles.pathTitle}>{path.title}</span>
              <span className={styles.pathDescription}>{path.description}</span>
              <span className={styles.pathArrow} aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHero />
      <main>
        <Features />
        <Showcase />
        <Paths />
      </main>
    </Layout>
  );
}
