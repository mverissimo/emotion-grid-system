import { css } from '@emotion/css';
import type { CSSObject } from '@emotion/react';

import type { Breakpoint, GridTheme } from '../theme';

export function media(theme: GridTheme, breakpoint: Breakpoint) {
  const value = theme?.grid?.breakpoints?.[breakpoint];

  if (!value) {
    throw new Error(`Breakpoint '${breakpoint}' not found in theme.`);
  }

  return `@media (min-width: ${value})`;
}

export function mediaOnly(
  theme: GridTheme,
  token: object,
  mapper: (breakpoint: Breakpoint) => CSSObject,
) {
  return Object.keys(token).map((bp) => {
    const breakpoint = bp as Breakpoint;

    if (breakpoint === 'initial') {
      return css(mapper(breakpoint));
    }

    return css({
      [media(theme, breakpoint)]: mapper(breakpoint),
    });
  });
}

export function responsive(
  theme: GridTheme,
  mapper: (breakpoint: Breakpoint) => CSSObject,
) {
  return Object.keys(theme.grid?.breakpoints as Breakpoint[]).map((bp) => {
    const breakpoint = bp as Breakpoint;

    if (breakpoint === 'initial') {
      return css(mapper(breakpoint));
    }

    return css({
      [media(theme, breakpoint)]: mapper(breakpoint),
    });
  });
}
