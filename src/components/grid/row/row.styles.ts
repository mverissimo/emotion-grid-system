import { css, cx } from '@emotion/css';
import type { Theme } from '@emotion/react';

import { mediaOnly, responsive } from '../../../utils/media';
import type { RowProps } from './row';

const base = (theme: Theme) =>
  cx(
    css({
      label: 'grid-row',

      display: 'flex',
      flexWrap: 'wrap',

      boxSizing: 'border-box',
    }),
    responsive(theme, (breakpoint) => ({
      marginLeft: `calc((${theme.grid?.gutter?.[breakpoint]} / 2) * -1)`,
      marginRight: `calc((${theme.grid?.gutter[breakpoint]} / 2) * -1)`,
    })),
  );

const align = (theme: Theme, align: RowProps['align']) => {
  if (align) {
    return cx(
      css({
        label: 'grid-row--align',
      }),
      mediaOnly(theme, align, (breakpoint) => ({
        alignItems: align[breakpoint],
      })),
    );
  }
};

const justify = (theme: Theme, justify: RowProps['justify']) => {
  if (justify) {
    return cx(
      css({
        label: 'grid-row--justify',
      }),
      mediaOnly(theme, justify, (breakpoint) => ({
        justifyContent: justify[breakpoint],
      })),
    );
  }
};

const reverse = (theme: Theme, reverse: RowProps['reverse']) => {
  if (reverse) {
    return cx(
      css({
        label: 'grid-row--reverse',
      }),
      mediaOnly(theme, reverse, (breakpoint) => ({
        flexDirection: reverse[breakpoint] ? 'row-reverse' : 'row',
      })),
    );
  }
};

const noGutters = (noGutters: RowProps['noGutters']) => {
  if (noGutters) {
    return css({
      '[data-grid=col]': {
        paddingLeft: '0 !important',
        paddingRight: '0 !important',
      },
    });
  }
};

export default {
  base,
  align,
  justify,
  reverse,
  noGutters,
};
