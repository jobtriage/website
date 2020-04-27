// https://github.com/zeit/next.js/pull/8558/commits/c0a41bb14513a5454018b2377d8822bb6d1b8a61

import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { Children } from 'react';
import PropTypes from 'prop-types';

const ActiveLink = ({
  children, activeClassName, href, ...props
}) => {
  const { pathname } = useRouter();
  const child = Children.only(children);

  const className = pathname === href
    ? `${child.props.className} ${activeClassName}`
    : child.props.className;

  return <Link {...props} href={href}>{React.cloneElement(child, { className })}</Link>;
};

export default ActiveLink;

ActiveLink.propTypes = {
  children: PropTypes.any.isRequired,
  activeClassName: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
