import React from 'react';
import GenericSection from '../components/sections/GenericSection';

const Privacy = () => {

  return (
    <>
      <GenericSection topDivider>
        <div className="container-xs">
          <h1 className="mt-0 mb-16">Privacy Policy</h1>
          <p className="m-0 mb-16">
            Development House Inc. may collect account, billing, and usage data necessary to operate Worldview Trading,
            provide support, and improve platform performance.
          </p>
          <p className="m-0 mb-16">
            We use information for service delivery, security, analytics, and required compliance processes.
          </p>
          <p className="m-0 mb-16">
            We do not sell personal information. We may share data with service providers as needed to process payments,
            run infrastructure, and comply with legal obligations.
          </p>
          <p className="m-0">
            Privacy requests can be sent to <a style={{ color: '#717D86' }} href="mailto:support@development.house">support@development.house</a>.
          </p>
        </div>
      </GenericSection>
    </>
  );
}

export default Privacy;
