import React from 'react';
import {
  Box, Heading, Text, Anchor, Grid,
} from 'grommet';
import { css } from 'styled-components';
import { Link } from '@reach/router';
import { Cube as Qube } from 'grommet-icons';
import Scene from '../Components/Scene';
import Cube from '../Components/Cube';

const squashAndStretch = css`
  animation: sqAndStr 1.2s linear normal infinite;

  @keyframes sqAndStr {
    0% {
      transform: translateZ(-50px) translateY(-170px) rotateY(-25deg) scale3D(0.5, 0.5, 0.5);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    20% {
      transform: translateZ(-50px) translateY(-140px) rotateY(-25deg) scale3D(0.5, 0.9, 0.5);
    }
    28% {
      transform: translateZ(-50px) translateY(-50px) rotateY(-25deg) scale3D(0.5, 2.5, 0.5);
    }
    40% {
      transform: translateZ(-50px) translateY(100px) rotateY(-25deg) scale3D(0.6, 0.4, 0.6);
    }
    45% {
      transform: translateZ(-50px) translateY(100px) rotateY(-25deg) scale3D(1.8, 0.2, 1.8);
    }
    50% {
      transform: translateZ(-50px) translateY(99px) rotateY(-25deg) scale3D(1.85, 0.15, 1.85);
    }
    55% {
      transform: translateZ(-50px) translateY(100px) rotateY(-25deg) scale3D(1.8, 0.2, 1.8);
    }
    60% {
      transform: translateZ(-50px) translateY(100px) rotateY(-25deg) scale3D(0.6, 0.4, 0.6);
    }
    72% {
      transform: translateZ(-50px) translateY(-50px) rotateY(-40deg) scale3D(0.5, 2.5, 0.5);
    }
    80% {
      transform: translateZ(-50px) translateY(-140px) rotateY(-155deg) scale3D(0.5, 0.9, 0.5);
    }
    100% {
      transform: translateZ(-50px) translateY(-170px) rotateY(-205deg) scale3D(0.5, 0.5, 0.5);
    }
  }
`;

const Home = () => (
  <Box fill="vertical" background="dark-1" align="center" justify="center" gap="xlarge">
    <Scene height="200px" width="200px" perspective="500px">
      <Cube size={50} animation={squashAndStretch} />
    </Scene>
    <Grid
      rows={['xsmall', 'xxsmall']}
      columns={['auto', 'auto']}
      gap="small"
      areas={[
        { name: 'text', start: [0, 0], end: [1, 0] },
        { name: 'subtext', start: [0, 1], end: [0, 1] },
        { name: 'link', start: [1, 1], end: [1, 1] },
      ]}
    >
      <Heading color="red" gridArea="text">
        It leaps, it squishes, it squashes!
      </Heading>
      <Text alignSelf="center" gridArea="subtext">
        It's an athlete, best in it's class.
      </Text>
      <Anchor
        style={{ justifySelf: 'end' }}
        alignSelf="center"
        label="what's next?"
        gridArea="link"
        reverse
        icon={<Qube />}
        margin="xsmall"
        as={Link}
        to="/anticipation/"
      />
    </Grid>
  </Box>
);

export default Home;
