import type { ReactNode } from 'react';

import { useBreakpoint } from '../../../hooks/use-breakpoint';
import type { Breakpoint } from '../../../theme';

export interface VisibleProps {
  media: Breakpoint[];
  children: ReactNode;
}

function Visible(props: VisibleProps) {
  const { media, children } = props;

  const screen = useBreakpoint();

  return media.includes(screen) ? <>{children}</> : null;
}

export default Visible;
