import React from 'react';
import ReactDOM from 'react-dom';
import ItemsList from './App';
import Item from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ItemsList data={propsValues} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
