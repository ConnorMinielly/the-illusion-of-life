import React from 'react';
import {
  Box, Heading, Text, Anchor, Grid,
} from 'grommet';
import { Link } from '@reach/router';
import { Cube as Qube } from 'grommet-icons';
import Scene from '../Components/Scene';
import Cube from '../Components/Cube';

const Home = () => (
  <Box fill="vertical" background="dark-1" align="center" justify="center" gap="xlarge">
    <Scene height="200px" width="200px" perspective="500px">
      <Cube size={150} />
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
        So We've got this cube, Right?
      </Heading>

      <Text alignSelf="center" gridArea="subtext">
        It's a real cutie.
      </Text>
      <Anchor
        style={{ justifySelf: 'end' }}
        alignSelf="center"
        label="Let's see what it can do"
        gridArea="link"
        reverse
        icon={<Qube />}
        margin="xsmall"
        as={Link}
        to="/squash-n-stretch/"
      />
    </Grid>
  </Box>
);

export default Home;
