import React from 'react';
import GenericSection from '../components/sections/GenericSection';

const Cancellation = () => {

  return (
    <>
      <GenericSection topDivider>
        <div className="container-xs">
          <h1 className="mt-0 mb-16">Cancellation Policy</h1>
          <p className="m-0 mb-16">
            Subscriptions may be canceled at any time and remain active through the end of the current billing period.
          </p>
          <p className="m-0">
            For cancellation assistance, contact <a style={{ color: '#717D86' }} href="mailto:support@development.house">support@development.house</a>.
          </p>
        </div>
      </GenericSection>
    </>
  );
}

export default Cancellation;
