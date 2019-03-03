import React from 'react';
import { Grommet, Box } from 'grommet';
import PropTypes from 'prop-types';
import Header from './Header/Header';

const theme = {
  global: {
    colors: {
      'light-1': '#dad6d6',
      'dark-1': '#3a405a',
      blue: '#30c5ff',
      red: '#e26d5a',
      green: '#74d3ae',
    },
    font: {
      family: 'Montserrat',
      size: '14px',
      height: '20px',
    },
  },
};

const App = ({ children }) => (
  <>
    <Grommet theme={theme} full>
      <Header background="red" color="dark-1">
        The Illusion of Cubes
      </Header>
      <Box fill="vertical" background="dark-1" align="center" justify="center" gap="xlarge">
        {children}
      </Box>
    </Grommet>
  </>
);

App.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default App;
