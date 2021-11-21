import { cleanup, render } from '@testing-library/react';
import App from './App';
import ReactDOM from 'react-dom';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App/>, div);
});

it('renders correctly', () => {
  render(<App/>);
});

it('matches snapshot', () => {
  const { asFragment } = render(<App/>);
  expect(asFragment()).toMatchSnapshot();
});