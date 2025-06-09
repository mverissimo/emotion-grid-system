import { css, cx } from '@emotion/css';
import type { DevToolsProps } from './devtools';

export const grid = (isVisible: DevToolsProps['isVisible']) => {
  return cx(
    css({
      label: 'grid-devtools',

      position: 'fixed',
      inset: 0,

      zIndex: 50,

      overflow: 'hidden',
      pointerEvents: 'none',
      transformOrigin: '50% 0%',

      '[data-grid=container]': {
        height: '100%',

        opacity: 0,
        transition: 'ease-in opacity 200ms',
      },

      '[data-grid=row]': {
        height: '100%',
        background: '#2563eb0D',
      },

      '[data-grid=col]': {
        height: '100%',

        paddingTop: 0,
        paddingBottom: 0,

        '& > div': {
          position: 'relative',

          width: '100%',
          height: '100%',

          '&::before, &::after': {
            content: "''",
            position: 'absolute',

            top: 0,
            left: 0,

            width: '100%',
            height: '100%',

            background: '#2563eb0D',
          },
        },
      },
    }),
    {
      [css({
        '[data-grid=container]': {
          opacity: 1,
        },
      })]: isVisible,
    },
  );
};

export const button = (isActive?: boolean) =>
  cx(
    css({
      label: 'grid-devtools--trigger',

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      position: 'fixed',
      right: '30px',
      bottom: '30px',
      zIndex: 100,

      width: '58px',
      height: '58px',

      margin: 0,
      padding: 0,

      overflow: 'hidden',
      boxSizing: 'border-box',

      color: '#fff',
      textTransform: 'uppercase',

      fontSize: '12px',
      fontWeight: 'bold',
      fontFamily:
        'font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',

      cursor: 'pointer',
      userSelect: 'none',
      pointerEvents: 'auto',

      transition: 'ease-in background, color 200ms',

      background: '#2563eb',

      border: 0,
      borderRadius: '50%',
      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.12)',
    }),
    {
      [css({
        color: '#2563eb',
        background: '#dbeafe',
      })]: isActive,
    },
  );

export default {
  grid,
  button,
};
