import React from 'react';

import type { Breakpoint } from '../../theme';

import { getBreakpoint } from '../../utils/get-breakpoint';
import { useTheme } from '../use-theme';

function useBreakpoint(initial: Breakpoint = 'initial') {
  const theme = useTheme();

  const initialBreakpoint = getBreakpoint(theme.grid.breakpoints) ?? initial;

  const [screen, setScreen] = React.useState(initialBreakpoint);

  const handleResize = React.useCallback(() => {
    const currentScreen = getBreakpoint(theme.grid.breakpoints);

    setScreen((prev) => {
      const nextScreen = currentScreen || prev;

      if (nextScreen !== prev) {
        return nextScreen;
      }

      return prev;
    });
  }, [theme.grid.breakpoints]);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('orientationchange', handleResize, false);
      window.addEventListener('resize', handleResize, false);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('orientationchange', handleResize);
        window.removeEventListener('resize', handleResize);
      }
    };
  }, [handleResize]);

  return screen;
}

export default useBreakpoint;
