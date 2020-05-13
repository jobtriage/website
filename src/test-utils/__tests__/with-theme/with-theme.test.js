import React from 'react';
import {render} from '@testing-library/react';
import withTheme from '../../withTheme';

const Header = () => {
    return (
        <h1>header</h1>
    )
}

describe('withTheme- a wrapper that passes the theme to component', ()=> {
  it('Should throw an errror for invalid component', () => {
      expect(() => {
        withTheme()
      }).toThrow('Invalid Component');
  });

  it('Should return a function', () => {
    expect(typeof withTheme(Header)).toBe('function')
  });

  it('Should render correctly', () => {
      const Component = withTheme(Header);
      render(<Component />)
  })
})