import { render } from '@testing-library/react';

import { Row } from '.';
import { Col } from '../col';

describe('Row', () => {
  it('should render with default styles', () => {
    const { container } = render(<Row>Row</Row>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with reverse styles when passed the reverse prop', () => {
    const { container } = render(
      <Row
        reverse={{
          sm: true,
          xl: true,
        }}
      >
        Row reverse
      </Row>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render align styles when passed the align prop', () => {
    const { container } = render(
      <Row
        align={{
          md: 'center',
        }}
      >
        Row
      </Row>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render justify styles when passed the justify prop', () => {
    const { container } = render(
      <Row
        justify={{
          xl: 'space-between',
        }}
      >
        Row justify
      </Row>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with noGutters styles when passed the noGutters prop', () => {
    const { container } = render(
      <Row noGutters={true}>
        <Col>Col</Col>
      </Row>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
