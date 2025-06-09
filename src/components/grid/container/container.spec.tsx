import { render } from '@testing-library/react';

import { Container } from '.';
import { Col } from '../col';
import { Row } from '../row';

describe('@Grid/Container', () => {
  it('should render with default styles', () => {
    const { container } = render(<Container>Container</Container>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with fluid styles when passed the isFluid prop', () => {
    const { container } = render(
      <Container isFluid={true}>Container fluid</Container>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with debug styles when passed the isDebug prop', () => {
    const { container } = render(
      <Container isDebug={true}>
        <Row>
          <Col>Col</Col>
        </Row>
      </Container>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with a custom className', () => {
    const { container } = render(
      <Container className="my-custom-class-name">Container</Container>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
