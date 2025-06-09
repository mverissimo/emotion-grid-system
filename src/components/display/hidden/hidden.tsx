import type { ReactNode } from 'react';

import { useBreakpoint } from '../../../hooks/use-breakpoint';
import type { Breakpoint } from '../../../theme';

export interface HiddenProps {
  media: Breakpoint[];
  children: ReactNode;
}

function Hidden(props: HiddenProps) {
  const { media, children } = props;

  const screen = useBreakpoint();

  return media.includes(screen) ? null : <>{children}</>;
}

export default Hidden;
