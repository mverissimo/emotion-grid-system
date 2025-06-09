# Emotion grid system

A mobile-first responsive grid system built with @emotion/css.

## Installation

> Note: Emotion is listed as a peerDependency, so you’ll need to install it alongside emotion-grid-system.

```bash
pnpm add @emotion/css emotion-grid-system
```

## Basic Usage

To create a responsive layout, wrap your columns (Grid.Col) inside a row (Grid.Row), and the row inside a container (Grid.Container).

```tsx
import { Grid } from "emotion-grid-system";

function Page() {
  return (
    <Grid.Container>
      <Grid.Row>
        <Grid.Col
          size={{
            xs: 4,
            md: 6,
            xl: 12,
          }}
        >
          Col
        </Grid.Col>
        <Grid.Col
          size={{
            xs: 4,
            md: 6,
            xl: 12,
          }}
        >
          Col
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
}

export default Page;
```

## Development

```bash
pnpm storybook
```

## Looking for docs

You can check [here](https://emotion-grid-system.vercel.app/), guides and API reference.

## Built with

- [Emotion](https://emotion.sh/docs/introduction)
- [Storybook](https://storybook.js.org/docs)
- [Tsdown](https://tsdown.dev/guide/)
