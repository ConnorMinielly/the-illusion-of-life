import React from 'react';
import {
  Box, Heading, Text, Anchor, Grid,
} from 'grommet';
import { css } from 'styled-components';
import { Link } from '@reach/router';
import { Cube as Qube } from 'grommet-icons';
import Scene from '../Components/Scene';
import Cube from '../Components/Cube';

const anticipation = css`
  animation: anticipation 3s linear normal infinite;

  @keyframes anticipation {
    0% {
      transform-origin: bottom right;
      transform: rotateZ(0deg) rotateX(-10deg);
    }
    5% {
      transform: rotateZ(9deg) rotateX(-10deg) skewX(-2deg);
    }
    10% {
      transform: rotateZ(0deg) rotateX(-10deg);
    }
    15% {
      transform-origin: bottom left;
      transform: rotateZ(-15deg) rotateX(-10deg) skewX(3deg);
    }
    20% {
      transform: rotateZ(0deg) rotateX(-10deg);
    }
    25% {
      transform-origin: bottom right;
      transform: rotateZ(25deg) rotateX(-10deg) skewX(-5deg);
    }
    30% {
      transform: rotateZ(0deg) rotateX(-10deg);
    }
    40% {
      transform-origin: bottom left;
      transform: rotateZ(-45deg) rotateY(-10deg);
    }
    42% {
      transform: rotateZ(-48deg) rotateY(-10deg);
    }
    45% {
      transform: rotateZ(-55deg) rotateY(-10deg);
    }
    50% {
      transform: rotateZ(-90deg) rotateY(-10deg) skewY(-10deg);
    }
    55% {
      transform: rotateZ(-90deg) rotateY(-10deg) skewY(5deg);
    }
    60% {
      transform: rotateZ(-90deg) rotateY(-10deg) skewY(-3deg);
    }
    65% {
      transform: rotateZ(-90deg) rotateY(-10deg);
    }
    100% {
      transform: rotateZ(-90deg) rotateY(-10deg);
    }
  }
`;

const Home = () => (
  <Box fill="vertical" background="dark-1" align="center" justify="center" gap="xlarge">
    <Scene height="100px" width="400px" perspective="500px">
      <Cube size={100} animation={anticipation} />
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
        Okay so it's not an expert at cartwheels...
      </Heading>
      <Text alignSelf="center" gridArea="subtext">
        It's doing it's best dammit!
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
        to="/next/"
      />
    </Grid>
  </Box>
);

export default Home;
