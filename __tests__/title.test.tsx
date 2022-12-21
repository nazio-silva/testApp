import React from 'react';
import { render } from '@testing-library/react-native';

import Title from './../src/components/Title/index';

describe('Title', () => {
  it('Check if Title renders correctly', () => {
    const { getByTestId } = render(<Title />);

    const id = getByTestId('title');

    expect(id).toBeTruthy();
  });
});
