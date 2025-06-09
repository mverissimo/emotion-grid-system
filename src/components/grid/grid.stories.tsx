import type { Meta, StoryObj } from '@storybook/react-vite';

import { Grid } from '.';
import { Container } from './container';

const meta = {
  component: Container,
  title: 'Examples/Grid',
} satisfies Meta<typeof Grid.Container>;

export const Base: StoryObj<typeof meta> = {
  args: {
    isDebug: true,
  },
  render: (args) => {
    return (
      <Grid.Container {...args}>
        <Grid.Row>
          <Grid.Col>auto</Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col size={{ initial: 4, md: 4, lg: 6 }}>
            initial-4 md-4 lg-6
          </Grid.Col>
          <Grid.Col size={{ initial: 4, md: 8, lg: 6 }}>
            initial-4 md-8 lg-6
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col size={{ initial: 4, md: 4 }}>initial-4 md-4</Grid.Col>
          <Grid.Col size={{ initial: 4, md: 4 }}>initial-4 md-4</Grid.Col>
          <Grid.Col size={{ initial: 4, md: 4 }}>initial-4 md-4</Grid.Col>
        </Grid.Row>
      </Grid.Container>
    );
  },
};

export const Offset: StoryObj<typeof meta> = {
  args: {
    isDebug: true,
  },
  render: (args) => {
    return (
      <Grid.Container className="example--offset" {...args}>
        <Grid.Row>
          <Grid.Col offset={{ lg: 11 }} size={{ lg: 1 }} />
          <Grid.Col offset={{ lg: 10 }} size={{ lg: 2 }} />
          <Grid.Col offset={{ lg: 9 }} size={{ lg: 3 }} />
          <Grid.Col offset={{ lg: 8 }} size={{ lg: 4 }} />
          <Grid.Col offset={{ lg: 7 }} size={{ lg: 5 }} />
          <Grid.Col offset={{ lg: 6 }} size={{ lg: 6 }} />
          <Grid.Col offset={{ lg: 5 }} size={{ lg: 7 }} />
          <Grid.Col offset={{ lg: 4 }} size={{ lg: 8 }} />
          <Grid.Col offset={{ lg: 3 }} size={{ lg: 9 }} />
          <Grid.Col offset={{ lg: 2 }} size={{ lg: 10 }} />
          <Grid.Col offset={{ lg: 1 }} size={{ lg: 11 }} />
          <Grid.Col offset={{ lg: 0 }} size={{ lg: 12 }} />
        </Grid.Row>
      </Grid.Container>
    );
  },
};

export const AlignItems: StoryObj<typeof meta> = {
  args: {
    isDebug: true,
  },
  render: (args) => {
    return (
      <Container {...args}>
        <Grid.Row align={{ initial: 'flex-start' }}>
          <Grid.Col size={{ initial: 4, md: 6 }} style={{ height: '10rem' }}>
            start
          </Grid.Col>
          <Grid.Col size={{ initial: 4, md: 6 }}>start</Grid.Col>
        </Grid.Row>
        <Grid.Row align={{ lg: 'flex-end', xl: 'center' }}>
          <Grid.Col size={{ initial: 4, md: 6 }}>lg-end xl-center</Grid.Col>
          <Grid.Col size={{ initial: 4, md: 6 }} style={{ height: '10rem' }}>
            lg-end xl-center
          </Grid.Col>
        </Grid.Row>
        <Grid.Row align={{ lg: 'center', xl: 'flex-end' }}>
          <Grid.Col size={{ initial: 4, md: 6 }} style={{ height: '10rem' }}>
            lg-center xl-end
          </Grid.Col>
          <Grid.Col size={{ initial: 4, md: 6 }}>lg-center xl-end</Grid.Col>
        </Grid.Row>
      </Container>
    );
  },
};

export const JustifyContent: StoryObj<typeof meta> = {
  args: {
    isDebug: true,
  },
  render: (args) => {
    return (
      <Container {...args}>
        <Grid.Row justify={{ initial: 'space-around' }}>
          <Grid.Col size={{ md: 3, lg: 3 }}>space around</Grid.Col>
          <Grid.Col size={{ md: 3, lg: 3 }}>space around</Grid.Col>
          <Grid.Col size={{ md: 3, lg: 3 }}>space around</Grid.Col>
        </Grid.Row>
        <Grid.Row justify={{ lg: 'flex-end', xl: 'center' }}>
          <Grid.Col size={{ md: 3, lg: 3 }}>lg-end xl-center</Grid.Col>
          <Grid.Col size={{ md: 3, lg: 3 }}>lg-end xl-center</Grid.Col>
          <Grid.Col size={{ md: 3, lg: 3 }}>lg-end xl-center</Grid.Col>
        </Grid.Row>
        <Grid.Row justify={{ lg: 'flex-start', xl: 'space-between' }}>
          <Grid.Col size={{ md: 3, lg: 3 }}>lg start xl-between</Grid.Col>
          <Grid.Col size={{ md: 3, lg: 3 }}>lg start xl-between</Grid.Col>
          <Grid.Col size={{ md: 3, lg: 3 }}>lg start xl-between</Grid.Col>
        </Grid.Row>
      </Container>
    );
  },
};

export const Reverse: StoryObj<typeof meta> = {
  args: {
    isDebug: true,
  },
  render: (args) => {
    return (
      <Container {...args}>
        <Grid.Row reverse={{ md: true, xl: false }}>
          <Grid.Col size={{ initial: 2, lg: 4 }}>
            col-initial-2 col-lg-4
          </Grid.Col>
        </Grid.Row>
        <Grid.Row reverse={{ xl: true }}>
          <Grid.Col size={{ initial: 2, lg: 6 }}>
            col-initial-2 col-lg-6
          </Grid.Col>
        </Grid.Row>
      </Container>
    );
  },
};

export const Nested: StoryObj<typeof meta> = {
  args: {
    isDebug: true,
  },
  render: (args) => {
    return (
      <Container {...args}>
        <Grid.Row>
          <Grid.Col size={{ initial: 8, lg: 12 }}>
            col-initial-8 col-lg-12
            <Grid.Row>
              <Grid.Col size={{ initial: 4, lg: 6 }}>
                col-initial-4 col-lg-6
              </Grid.Col>
              <Grid.Col size={{ initial: 4, lg: 6 }}>
                col-initial-4 col-lg-6
              </Grid.Col>
            </Grid.Row>
          </Grid.Col>
        </Grid.Row>
      </Container>
    );
  },
};

export const NoGutters: StoryObj<typeof meta> = {
  args: {
    isDebug: true,
  },
  render: (args) => {
    return (
      <Container {...args}>
        <Grid.Row noGutters={true}>
          <Grid.Col size={{ initial: 4, md: 4, lg: 6 }}>
            initial-4 md-4 lg-6
          </Grid.Col>
          <Grid.Col size={{ initial: 4, md: 8, lg: 6 }}>
            initial-4 md-8 lg-6
          </Grid.Col>
        </Grid.Row>
        <Grid.Row noGutters={true}>
          <Grid.Col size={{ initial: 2, md: 3, lg: 4 }}>
            initial-2 md-3 lg-4
          </Grid.Col>
          <Grid.Col size={{ initial: 2, md: 3, lg: 2 }}>
            initial-2 md-3 lg-2
          </Grid.Col>
          <Grid.Col size={{ initial: 2, md: 3, lg: 4 }}>
            initial-2 md-3 lg-4
          </Grid.Col>
          <Grid.Col size={{ initial: 2, md: 3, lg: 2 }}>
            initial-2 md-3 lg-2
          </Grid.Col>
        </Grid.Row>
      </Container>
    );
  },
};

export default meta;
