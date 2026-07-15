import React from 'react';
import GenericSection from '../components/sections/GenericSection';

const Terms = () => {

  return (
    <>
      <GenericSection topDivider>
        <div className="container-xs">
          <h1 className="mt-0 mb-16">Terms of Service</h1>
          <p className="m-0 mb-16">
            Development House Inc. operates software products including Worldview Trading for authorized users.
          </p>
          <p className="m-0 mb-16">
            Access may be offered by subscription and/or metered AI usage. Charges apply to active subscriptions and consumed AI usage.
          </p>
          <p className="m-0 mb-16">
            Users are responsible for account security and lawful use of the platform.
          </p>
          <p className="m-0 mb-16">
            The platform provides software tools and analytics only and does not guarantee outcomes or returns.
          </p>
          <p className="m-0">
            Questions about these terms can be sent to <a style={{ color: '#717D86' }} href="mailto:support@development.house">support@development.house</a>.
          </p>
        </div>
      </GenericSection>
    </>
  );
}

export default Terms;
