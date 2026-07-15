import React from 'react';
import { Link } from 'react-router-dom';
import GenericSection from '../components/sections/GenericSection';

const Worldview = () => {

  return (
    <>
      <GenericSection topDivider>
        <div className="container-xs">
          <h1 className="mt-0 mb-16">Worldview Trading</h1>
          <p className="m-0 mb-16">
            Worldview Trading is a product of Development House Inc.
          </p>
          <p className="m-0 mb-16">
            The platform provides subscription-based access to trading software and also provides metered AI usage consumed within
            the application.
          </p>
          <h2 className="mt-0 mb-16">Products and Services</h2>
          <ul className="m-0 mb-16">
            <li>Subscription access to the Worldview Trading platform</li>
            <li>Metered AI analysis and inference services consumed within the platform</li>
            <li>Software support and account management</li>
          </ul>
          <p className="m-0 mb-16">
            Support: <a href="mailto:support@development.house">support@development.house</a>
          </p>
          <p className="m-0 mb-16">
            Development House Inc. and Worldview Trading provide software tools and analytics for authorized users. The platform does
            not guarantee investment returns and does not provide investment management or financial advisory services.
          </p>
        </div>
      </GenericSection>
    </>
  );
}

export default Worldview;
