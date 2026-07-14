import React from 'react';
import GenericSection from '../components/sections/GenericSection';

const Refunds = () => {

  return (
    <>
      <GenericSection topDivider>
        <div className="container-xs">
          <h1 className="mt-0 mb-16">Refund Policy</h1>
          <p className="m-0 mb-16">Effective date: 2026-07-14</p>
          <p className="m-0 mb-16">
            AI usage charges are generally non-refundable once consumed.
          </p>
          <p className="m-0 mb-16">
            Subscription refunds are evaluated case-by-case.
          </p>
          <p className="m-0">
            Refund requests can be sent to <a href="mailto:support@development.house">support@development.house</a>.
          </p>
        </div>
      </GenericSection>
    </>
  );
}

export default Refunds;
