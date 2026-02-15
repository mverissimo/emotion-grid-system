import { ThemeProvider } from '@emotion/react';
import { renderHook } from '@testing-library/react-hooks';
import type { ReactNode } from 'react';
import { DEFAULT_THEME } from '../../theme';
import { useTheme } from '.';

const theme = {
  color: 'blue',
};

const wrapper = (props: { children: ReactNode }) => {
  const { children } = props;

  //@ts-expect-error
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

describe('@hook/useTheme', () => {
  it('should render with default theme', () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current).toMatchObject(DEFAULT_THEME);
  });

  it('should render with custom theme', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper,
    });

    expect(result.current).toMatchObject(theme);
  });
});
