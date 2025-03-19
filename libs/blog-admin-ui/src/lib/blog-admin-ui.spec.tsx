import { render } from '@testing-library/react';

import BlogAdminUi from './blog-admin-ui';

describe('BlogAdminUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogAdminUi />);
    expect(baseElement).toBeTruthy();
  });
});
