import type { Theme } from '@emotion/react';
import type { Breakpoint } from '../theme';

export function getBreakpoint(
  breakpoints: NonNullable<Theme['grid']>['breakpoints'],
) {
  let screen: Breakpoint | undefined;

  if (typeof window !== 'undefined' && window.matchMedia) {
    Object.entries(breakpoints).map(([bp, value]) => {
      const breakpoint = bp as Breakpoint;

      if (window.matchMedia(`(min-width: ${value})`).matches) {
        screen = breakpoint;
      }
    });
  }

  return screen;
}
