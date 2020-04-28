import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'emotion-theming';
import serializer from 'jest-emotion';
import theme from '../../styles/theme';
import Footer from '../../components/Footer/Footer';


expect.addSnapshotSerializer(serializer);
test('should render without crash', () => {
  const tree = renderer.create(
    <ThemeProvider theme={theme}>
      <Footer />
    </ThemeProvider>,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
