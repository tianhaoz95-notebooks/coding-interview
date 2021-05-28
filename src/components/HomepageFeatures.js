import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Navigate',
    Svg: require('../../static/img/branding/easy_to_navigate.svg').default,
    description: (
      <>
        This notebook aims to make it as effortless as possible
        to navigate from question to solution to implementation.
      </>
    ),
  },
  {
    title: 'Process First',
    Svg: require('../../static/img/branding/best_effort_explanation.svg').default,
    description: (
      <>
        This notebook puts the process of solving the problems over
        solutions themselves since the ability to make progress in
        under-defined environments is more important than memorizing
        implementations.
      </>
    ),
  },
  {
    title: 'Focus on Readability',
    Svg: require('../../static/img/branding/focus_on_readability.svg').default,
    description: (
      <>
        This notebook focuses on readbility over efficiency or
        simplicity meaning that code that is less efficient
        and longer will be still preferred as long as it's more
        readable.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
