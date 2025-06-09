import { css, cx } from '@emotion/css';
import type { Theme } from '@emotion/react';

import { responsive } from '../../../utils/media';
import type { ContainerProps } from './container';

const initial = (theme: Theme, isFluid: ContainerProps['isFluid']) =>
  cx(
    css({
      label: isFluid ? 'grid-container--fluid' : 'grid-container',

      boxSizing: 'border-box',

      width: '100%',
      maxWidth: '100%',

      marginLeft: 'auto',
      marginRight: 'auto',
    }),
    responsive(theme, (breakpoint) => ({
      maxWidth: isFluid ? '100%' : `${theme.grid?.container[breakpoint]}`,
      paddingLeft: `calc(${theme.grid?.padding[breakpoint]} / 2)`,
      paddingRight: `calc(${theme.grid?.padding[breakpoint]} / 2)`,
    })),
  );

const debug = (isDebug: ContainerProps['isDebug']) => {
  if (isDebug) {
    return css({
      label: 'grid-container--debug',

      '[data-grid=row]': {
        background: '#2563eb0D',
      },

      '[data-grid=col]': {
        background: '#2563eb0D',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '#2563eb',
      },
    });
  }
};

export default {
  initial,
  debug,
};
