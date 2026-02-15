import { cx } from '@emotion/css';
import type { HTMLAttributes } from 'react';

import { useTheme } from '../../../hooks/use-theme';

import styles from './container.styles';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  isFluid?: boolean;
  isDebug?: boolean;
}

function Container(props: ContainerProps) {
  const { isFluid, isDebug, className, ...rest } = props;

  const theme = useTheme();

  return (
    <div
      data-grid="container"
      className={cx(
        styles.initial(theme, isFluid),
        styles.debug(isDebug),
        className,
      )}
      {...rest}
    />
  );
}

Container.displayName = '@Grid/Container';

export default Container;
