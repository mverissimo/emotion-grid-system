import type { Meta, StoryObj } from '@storybook/react-vite';

import { Col } from '../col';
import { Row } from '../row';
import Container from './container';

const meta = {
  component: Container,
  title: 'Components/Grid/Container',
  subcomponents: {
    //@ts-expect-error
    Row,
    //@ts-expect-error
    Col,
  },
} satisfies Meta<typeof Container>;

export const Base: StoryObj<typeof meta> = {};

export const Debug: StoryObj<typeof meta> = {
  args: {
    isDebug: true,
  },
  render: (args) => {
    return (
      <Container {...args}>
        <Row>
          <Col>col</Col>
        </Row>
      </Container>
    );
  },
};

export default meta;
