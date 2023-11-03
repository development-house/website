import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap ',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Working at Development House:',
    paragraph: 'Our mission is to cultivate an environment of excellence in engineering.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-01.svg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Game Loop Design
                    </h4>
                    <p className='text-xxs text-color-primary fw-600 tt-u mb-8'>Unleash Immersive Experiences</p>
                  <p className="m-0 text-sm">
                  Unlock the power of engaging gameplay with our meticulous game loop design. We craft interactive worlds that captivate players, focusing on every detail of the gaming experience to ensure players stay immersed and excited.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-02.svg')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Advanced Software Engineering
                    </h4>
                    <p className='text-xxs text-color-primary fw-600 tt-u mb-8'>Innovation Meets Precision</p>
                  <p className="m-0 text-sm">
                  Our team of expert engineers pushes the boundaries of technology to bring your open-world multiplayer games to life. Through cutting-edge software engineering, we enable seamless gameplay, stunning graphics, and dynamic environments.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-03.svg')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  DDD Microservice Architecture
                    </h4>
                    <p className='text-xxs text-color-primary fw-600 tt-u mb-8'>Scalable Foundations</p>
                  <p className="m-0 text-sm">
                  Harness the potential of Distributed Domain-Driven (DDD) Microservices. Our architecture empowers your games to scale effortlessly, supporting massive player populations while maintaining flexibility and robustness.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-04.svg')}
                      alt="Features tile icon 04"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Industry Leading Security
                    </h4>
                    <p className='text-xxs text-color-primary fw-600 tt-u mb-8'>Protecting Your World</p>
                  <p className="m-0 text-sm">
                  Security is paramount in the gaming industry. We take pride in our industry-leading security measures that safeguard player data, prevent cheating, and create a secure gaming environment, earning players' trust.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-05.svg')}
                      alt="Features tile icon 05"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Clean Code
                    </h4>
                    <p className='text-xxs text-color-primary fw-600 tt-u mb-8'>Elegance in Development</p>
                  <p className="m-0 text-sm">
                  Our commitment to clean code ensures maintainability and scalability, reducing the risk of bugs and making future updates smoother. We believe in the beauty of elegant, organized, and efficient code.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-06.svg')}
                      alt="Features tile icon 06"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Engineering Culture
                    </h4>
                    <p className='text-xxs text-color-primary fw-600 tt-u mb-8'>Collaboration, Innovation, Excellence</p>
                  <p className="m-0 text-sm">
                  We cultivate an engineering culture that fosters creativity, collaboration, and continuous improvement. Our passionate team of developers, designers, and experts work together to deliver excellence in game development technology.
                    </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;