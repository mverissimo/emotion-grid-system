import type { CSSProperties, HTMLAttributes, Ref } from 'react';

import { cx } from '@emotion/css';
import type { ResponsiveValue } from '../../../theme';

import { useTheme } from '../../../hooks/use-theme';

import styles from './row.styles';

export interface RowProps extends HTMLAttributes<HTMLDivElement> {
  /**
   *
   */
  align?: ResponsiveValue<CSSProperties['alignItems']>;

  /**
   *
   */
  justify?: ResponsiveValue<CSSProperties['justifyContent']>;

  /**
   *
   */
  reverse?: ResponsiveValue<boolean>;

  /**
   *
   */
  noGutters?: boolean;
}

function Row(props: RowProps, ref?: Ref<HTMLDivElement>) {
  const { align, justify, reverse, noGutters, className, ...rest } = props;

  const theme = useTheme();

  return (
    <div
      data-grid="row"
      className={cx(
        styles.base(theme),
        styles.align(theme, align),
        styles.justify(theme, justify),
        styles.reverse(theme, reverse),
        styles.noGutters(noGutters),
        className,
      )}
      ref={ref}
      {...rest}
    />
  );
}

export default Row;
