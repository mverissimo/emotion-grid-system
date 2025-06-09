import type { Meta, StoryObj } from '@storybook/react-vite';

import DevTools from './devtools';

const meta = {
  component: DevTools,
  title: 'DevTools/Overlay',
} satisfies Meta<typeof DevTools>;

export const Base: StoryObj<typeof meta> = {
  args: {
    isVisible: true,
  },
};

export default meta;
