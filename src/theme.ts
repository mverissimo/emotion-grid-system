export const BREAKPOINTS = ['initial', 'sm', 'md', 'lg', 'xl', '2xl'] as const;
export type Breakpoint = (typeof BREAKPOINTS)[number];

export type ResponsiveValue<T> = Partial<Record<Breakpoint, T>>;

export const DEFAULT_THEME = {
  grid: {
    container: {
      initial: '100%',
      sm: '100%',
      md: '48rem',
      lg: '64rem',
      xl: '80rem',
      '2xl': '96rem',
    },
    padding: {
      initial: '2rem',
      sm: '2rem',
      md: '2rem',
      lg: '2rem',
      xl: '2rem',
      '2xl': '2rem',
    },
    columns: {
      initial: 4,
      sm: 8,
      md: 12,
      lg: 12,
      xl: 12,
      '2xl': 12,
    },
    gutter: {
      initial: '2rem',
      sm: '2rem',
      md: '2rem',
      lg: '2rem',
      xl: '2rem',
      '2xl': '2rem',
    },
    breakpoints: {
      initial: '0',
      sm: '40rem', // => @media (min-width: 640px)
      md: '48rem', // => @media (min-width: 768px)
      lg: '64rem', // => @media (min-width: 1024px)
      xl: '80rem', // => @media (min-width: 1280px)
      '2xl': '96rem', // => @media (min-width: 1536px)
    },
  },
} as const;

export type GridTheme = {
  grid?: {
    container: ResponsiveValue<string>;
    padding: ResponsiveValue<string>;
    columns: ResponsiveValue<number>;
    gutter: ResponsiveValue<string>;
    breakpoints: ResponsiveValue<string>;
  };
};
