import type { Meta, StoryObj } from '@storybook/react-vite';

import Col from './col';

const meta = {
  component: Col,
  title: 'Components/Grid/Col',
} satisfies Meta<typeof Col>;

export const Base: StoryObj<typeof meta> = {
  args: {
    size: {
      md: 1,
    },
  },
};

export default meta;
