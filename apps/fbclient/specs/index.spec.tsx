import React from 'react';
import { render } from '@testing-library/react';

import index from '../pages';

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Index />);
    expect(baseElement).toBeTruthy();
  });
});
