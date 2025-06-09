import type { Meta, StoryObj } from '@storybook/react-vite';

import ScreenClass from './screen-class';

const meta = {
  component: ScreenClass,
  title: 'Components/Display/ScreenClass',
} satisfies Meta<typeof ScreenClass>;

export const Base: StoryObj<typeof meta> = {
  args: {
    render: (screen) => (
      <span>
        Current screen is <mark>{screen}</mark>
      </span>
    ),
  },
};

export default meta;
