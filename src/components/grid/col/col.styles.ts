import { css, cx } from '@emotion/css';
import type { Theme } from '@emotion/react';

import { mediaOnly, responsive } from '../../../utils/media';
import type { ColProps } from './col';

const initial = (theme: Theme) =>
  cx(
    css({
      label: 'grid-col',

      flex: '1 0 0%',
      boxSizing: 'border-box',

      width: '100%',
      maxWidth: '100%',
    }),
    responsive(theme, (breakpoint) => ({
      paddingLeft: `calc(${theme.grid?.gutter[breakpoint]} / 2)`,
      paddingRight: `calc(${theme.grid?.gutter[breakpoint]} / 2)`,
    })),
  );

const size = (theme: Theme, size: ColProps['size']) => {
  if (size) {
    return cx(
      css({
        label: 'grid-col--size',
      }),
      mediaOnly(theme, size, (breakpoint) => ({
        flex: `${size[breakpoint] === 'auto' ? 'auto' : `0 0 calc((${size[breakpoint]} / ${theme.grid?.columns[breakpoint]}) * 100%)`}`,
      })),
    );
  }
};

const offset = (theme: Theme, offset: ColProps['offset']) => {
  if (offset) {
    return cx(
      css({
        label: 'grid-col--offset',
      }),
      mediaOnly(theme, offset, (breakpoint) => ({
        marginLeft: `calc((${offset[breakpoint]} / ${theme.grid?.columns[breakpoint]}) * 100%)`,
      })),
    );
  }
};

export default {
  initial,
  size,
  offset,
};
