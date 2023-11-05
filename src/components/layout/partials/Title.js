import React from 'react';
import classNames from 'classnames';
import Image from '../../elements/Image';

const Title = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'title-brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0 ">
        <Image
          src={require('./../../../assets/images/title-logo.svg')}
          alt="Open"
          width={700}
          height={50} />
      </h1>
    </div>
  );
}

export default Title;