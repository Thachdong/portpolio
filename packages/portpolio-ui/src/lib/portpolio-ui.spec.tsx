import { render } from '@testing-library/react';

import PortpolioUi from './portpolio-ui';

describe('PortpolioUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PortpolioUi />);
    expect(baseElement).toBeTruthy();
  });
});
