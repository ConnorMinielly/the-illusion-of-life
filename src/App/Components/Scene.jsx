import React from 'react';
import styled from 'styled-components';
import { Box } from 'grommet';

const SceneBox = styled(Box)`
  /* perspective: ${({ perspective }) => perspective}; */
`;

const Scene = ({ perspective, ...props }) => (
  <SceneBox perspective={perspective} align="center" justify="center" {...props} />
);

export default Scene;
