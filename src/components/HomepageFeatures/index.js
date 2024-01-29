import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Facil de usar',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
      Docusaurus fue diseñado desde cero para ser fácilmente instalado y
        Se utiliza para que su sitio web esté en funcionamiento rápidamente.
      </>
    ),
  },
  {
    title: 'Contenido',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
     Aprenderemos a installar " Docker + GitLab + SSL "," Docker | Linux | SSL externo ", "Docker | GitLab | Opción SSL | Opción SSH "  de una manera rapida y sencilla
      </>
    ),
  },
  {
    title: 'Github ',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
       Tendremos enlaces a los repositorios de gitHub

       <a> https://github.com/dvd-2008 </a>

      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
