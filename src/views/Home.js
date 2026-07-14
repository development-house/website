import React from 'react';
import { Link } from 'react-router-dom';
// import sections
import Hero from '../components/sections/Hero';
// import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import GenericSection from '../components/sections/GenericSection';
// import Testimonial from '../components/sections/Testimonial';
// import Cta from '../components/sections/Cta';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      {/* <FeaturesTiles /> */}
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <GenericSection topDivider>
        <div className="container-xs">
          <h2 className="mt-0 mb-16">Development House Inc.</h2>
          <p className="m-0 mb-16">
            Development House Inc. develops and operates Worldview Trading, a software platform that provides quantitative trading tools,
            automated strategy execution, market analytics, and AI-assisted analysis for authorized users.
          </p>
          <p className="m-0 mb-16">
            Customers are billed for subscription access and/or metered AI usage within the platform. AI usage charges are generally non-refundable
            once consumed; subscription refunds are evaluated case-by-case. Subscriptions may be canceled at any time and remain active through
            the end of the current billing period.
          </p>
          <p className="m-0 mb-16">
            Support: <a href="mailto:support@development.house">support@development.house</a>
          </p>
          <p className="m-0 mb-16">
            Worldview Trading is software tooling and analytics and does not provide guaranteed returns, investment management, or financial advisory services.
          </p>
          <p className="m-0">
            <Link to="/worldview">Worldview Trading</Link> | <Link to="/terms">Terms of Service</Link> | <Link to="/privacy">Privacy Policy</Link> |{' '}
            <Link to="/refunds">Refund Policy</Link> | <Link to="/cancellation">Cancellation Policy</Link>
          </p>
        </div>
      </GenericSection>
      {/* <Testimonial topDivider /> */}
      {/* <Cta split /> */}
    </>
  );
}

export default Home;