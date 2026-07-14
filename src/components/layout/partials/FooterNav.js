import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link className="bottom-link" to="/">Home</Link>
        </li>
        <li>
          <Link className="bottom-link" to="/about">About us</Link>
        </li>
        <li>
          <Link className="bottom-link" to="/worldview">Worldview Trading</Link>
        </li>
        <li>
          <Link className="bottom-link" to="/terms">Terms</Link>
        </li>
        <li>
          <Link className="bottom-link" to="/privacy">Privacy</Link>
        </li>
        <li>
          <Link className="bottom-link" to="/refunds">Refunds</Link>
        </li>
        <li>
          <Link className="bottom-link" to="/cancellation">Cancellation</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;