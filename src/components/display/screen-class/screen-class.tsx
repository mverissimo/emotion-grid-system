import type { ReactElement } from 'react';

import { useBreakpoint } from '../../../hooks/use-breakpoint';

export interface ScreenClassProps {
  render: (screen: string) => ReactElement;
}

function ScreenClass(props: ScreenClassProps) {
  const { render } = props;

  const screen = useBreakpoint();

  return render(screen);
}

ScreenClass.displayName = '@Grid/ScreenClass';

export default ScreenClass;
