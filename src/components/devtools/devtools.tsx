import React from 'react';
import type { HTMLAttributes, Ref } from 'react';

import { Col } from '../grid/col';
import { Container } from '../grid/container';
import { Row } from '../grid/row';

import { useBreakpoint } from '../../hooks/use-breakpoint';
import { useTheme } from '../../hooks/use-theme';

import styles from './devtools.styles';

export interface DevToolsProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Enable grid overlay
   */
  isVisible?: boolean;
}

function DevTools(props: DevToolsProps, ref?: Ref<HTMLDivElement>) {
  const { isVisible, className, ...rest } = props;

  const theme = useTheme();
  const bp = useBreakpoint();
  const [enableGrid, setEnableGrid] = React.useState(isVisible);

  const toggleEnable = () => setEnableGrid(!enableGrid);

  return (
    <>
      <div
        data-grid="overlay"
        className={styles.grid(enableGrid)}
        ref={ref}
        {...rest}
      >
        <Container>
          <Row>
            {new Array(theme.grid.columns[bp]).fill('').map(() => (
              <Col key={crypto.randomUUID()}>
                <div />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <button
        type="button"
        className={styles.button(enableGrid)}
        onClick={toggleEnable}
      >
        {bp}
      </button>
    </>
  );
}

export default DevTools;
