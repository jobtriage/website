import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Router, { useRouter } from 'next/router';
import NavBar from '../NavBar';
import { withTheme } from '../../../test-utils';
import 'jest-prop-type-error';

afterAll(cleanup);

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        pathname: '/',
      };
    },
    push: jest.fn(),
  };
});

jest.mock('next/link', () => {
  return ({ children }) => {
    return children;
  };
});
describe('<NavBar /> Tests', () => {
  const Component = withTheme(NavBar);

  test('should render without crash', () => {
    const { container } = render(<Component />);
    expect(container).toBeInTheDocument();
  });

  test('should redirect to home page when click to logo', () => {
    const { getByAltText } = render(<Component />);
    const node = getByAltText('Job Triage Logo');
    fireEvent.click(node);
    expect(Router.push).toHaveBeenCalledWith('/');
  });

  test('should redirect to home when click to home', () => {
    const { getByTestId } = render(<Component />);
    const node = getByTestId('home');
    fireEvent.click(node);
  });
});
