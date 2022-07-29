import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Home from '../../components/Details';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';

it('Builds the snapchot of the Home component Details', () => {
  const three = renderer
    .create(
      <Provider store={store}>
      <Router>
        <Home />
      </Router>
      </Provider>,
    )
    .toJSON();
  expect(three).toMatchSnapshot();
});