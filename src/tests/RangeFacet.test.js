import React from 'react';
import ReactDOM from 'react-dom';
import RangeFacet from '../components/RangeFacet';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RangeFacet />, div);
});
