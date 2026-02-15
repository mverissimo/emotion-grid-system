import { cx } from '@emotion/css';
import type { HTMLAttributes } from 'react';
import { useTheme } from '../../../hooks/use-theme';
import type { Breakpoint } from '../../../theme';

import styles from './col.styles';

export interface ColProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Set the column size
   */
  size?: Partial<Record<Breakpoint, number | 'auto'>>;

  /**
   * Set the column offset
   */
  offset?: Partial<Record<Breakpoint, number>>;
}

function Col(props: ColProps) {
  const { size, offset, className, ...rest } = props;

  const theme = useTheme();

  return (
    <div
      data-grid="col"
      className={cx(
        styles.initial(theme),
        styles.size(theme, size),
        styles.offset(theme, offset),
        className,
      )}
      {...rest}
    />
  );
}

Col.displayName = '@Grid/Col';

export default Col;
