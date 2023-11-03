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
          <Link className="bottom-link" to="/investors">For investors</Link>
        </li>
        <li>
          <Link className="bottom-link" to="#0">FAQ's</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;