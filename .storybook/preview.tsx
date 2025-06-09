import type { Preview } from '@storybook/react-vite';

import { Global, css } from '@emotion/react';

const preview: Preview = {
  decorators: [
    (Story) => (
      <>
        <Global
          styles={css({
            '*, *::before, *::after': {
              boxSizing: 'border-box',
            },
            body: {
              fontFamily:
                'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans","Liberation Sans",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
            },
            '[data-grid=row]': {
              '&:not(:last-child)': {
                marginBottom: '8px',
              },
            },
            '[data-grid=col]': {
              padding: '16px',
              display: 'block',
              textAlign: 'center',
              verticalAlign: 'middle',
            },
            '.example--offset': {
              '[data-grid=col]': {
                '&:not(:last-child)': {
                  marginBottom: '8px',
                },
              },
            },
            '#story--devtools-overlay--base-inner': {
              height: '400px',
            },
          })}
        />
        <Story />
      </>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['Docs', 'Components', 'Examples', 'DevTools'],
      },
    },
  },
};

export default preview;
