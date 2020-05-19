import React from 'react';
import { shallow } from 'enzyme';
import Calendar from '.';

describe('Calendar component', () => {
  it('renders without crashing', () => {
    shallow(<Calendar />);
  });
});
