import React from 'react';
import { shallow } from 'enzyme';
import Cells from '.';

describe('Cells component', () => {
  it('renders without crashing', () => {
    shallow(<Cells />);
  });
});
