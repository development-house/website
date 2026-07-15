import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Title from '../layout/partials/Title';
// import Image from '../elements/Image';
// import Modal from '../elements/Modal';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {


  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-32 reveal-from-bottom" data-reveal-delay="200">
              <Title/>
            </h1>
            <div className="mt-32 container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Software Development Company
              </p>
              <p className="m-0 mb-16 reveal-from-bottom" data-reveal-delay="400">
                Development House Inc. develops and operates Worldview Trading, a software platform that provides quantitative trading tools,
                automated strategy execution, market analytics, and AI-assisted analysis for authorized users.
              </p>
              <p className="m-0 mb-16 reveal-from-bottom" data-reveal-delay="400">
                Customers are billed for subscription access and/or metered AI usage within the platform. AI usage charges are generally non-refundable
                once consumed; subscription refunds are evaluated case-by-case. Subscriptions may be canceled at any time and remain active through
                the end of the current billing period.
              </p>
              <p className="m-0 mb-16 reveal-from-bottom" data-reveal-delay="400">
                Support: <a className="" style={{ color: '#717D86' }} href="mailto:support@development.house">support@development.house</a>
              </p>
              <p className="m-0 mb-16 reveal-from-bottom" data-reveal-delay="400">
                Worldview Trading is software tooling and analytics and does not provide guaranteed returns, investment management, or financial advisory services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;