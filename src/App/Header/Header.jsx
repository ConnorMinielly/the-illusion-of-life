import React from 'react';
import styled from 'styled-components';
import { Box, Anchor } from 'grommet';
import { Link } from '@reach/router';

const Header = props => (
  <Anchor as={Link} to="/">
    <Box
      tag="header"
      direction="row"
      align="center"
      justify="center"
      pad={{ left: 'medium', right: 'small', vertical: 'medium' }}
      style={{ zIndex: '1' }}
      {...props}
    />
  </Anchor>
);

export default styled(Header)`
  font-family: Montez;
  font-weight: 100;
  font-size: 3em;
`;
