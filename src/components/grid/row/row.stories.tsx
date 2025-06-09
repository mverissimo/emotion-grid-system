import type { Meta, StoryObj } from '@storybook/react-vite';

import Row from './row';

const meta = {
  component: Row,
  title: 'Components/Grid/Row',
} satisfies Meta<typeof Row>;

export const Base: StoryObj<typeof meta> = {};

export default meta;
