import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import Worldview from './views/Worldview';
import Terms from './views/Terms';
import Privacy from './views/Privacy';
import Refunds from './views/Refunds';
import Cancellation from './views/Cancellation';

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    document.body.classList.add('is-loaded')
    childRef.current.init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/worldview" component={Worldview} layout={LayoutDefault} />
          <AppRoute exact path="/terms" component={Terms} layout={LayoutDefault} />
          <AppRoute exact path="/privacy" component={Privacy} layout={LayoutDefault} />
          <AppRoute exact path="/refunds" component={Refunds} layout={LayoutDefault} />
          <AppRoute exact path="/cancellation" component={Cancellation} layout={LayoutDefault} />
        </Switch>
      )} />
  );
}

export default App;