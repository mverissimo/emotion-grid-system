import '@emotion/react';

import type { GridTheme } from '../theme';

declare module '@emotion/react' {
  export interface Theme extends GridTheme {}
}
