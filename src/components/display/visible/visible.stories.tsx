import type { Meta, StoryObj } from '@storybook/react-vite';

import Visible from './visible';

const meta = {
  component: Visible,
  title: 'Components/Display/Visible',
} satisfies Meta<typeof Visible>;

export const Base: StoryObj<typeof meta> = {
  args: {
    media: ['sm', 'md'],
    children: (
      <img
        src="https://media4.giphy.com/media/8U8LDibipKRDq/giphy.gif?cid=ecf05e47tflyev8wj9swu0xye19zvj172dmx6ct7qwino34r&rid=giphy.gif&ct=g"
        alt="cat"
      />
    ),
  },
};

export default meta;
