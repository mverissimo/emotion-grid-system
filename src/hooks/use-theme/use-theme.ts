import { useTheme } from '@emotion/react';
import type { GridTheme } from '../../theme';

import { DEFAULT_THEME } from '../../theme';

function useMergedTheme() {
  const theme = useTheme() as GridTheme;

  return {
    ...DEFAULT_THEME,
    ...theme,
  };
}

export default useMergedTheme;
