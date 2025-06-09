import { render } from '@testing-library/react';

import { Col } from '.';

describe('@Grid/Col', () => {
  it('should render with default styles', () => {
    const { container } = render(<Col>Col</Col>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with size styles', () => {
    const { container } = render(
      <Col
        size={{
          initial: 1,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 5,
        }}
      >
        Col
      </Col>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with offset styles', () => {
    const { container } = render(
      <Col
        offset={{
          initial: 1,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 5,
        }}
      >
        Col
      </Col>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with a custom className', () => {
    const { container } = render(
      <Col className="my-custom-class-name">Col</Col>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
