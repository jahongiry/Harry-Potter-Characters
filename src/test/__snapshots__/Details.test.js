import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Details from '../../components/Details';
import store from '../../redux/configureStore';

it('Builds the snapchot of the Details component Details', () => {
  const three = renderer
    .create(
      <Provider store={store}>
        <Router>
          <Details />
        </Router>
      </Provider>,
    )
    .toJSON();
  expect(three).toMatchSnapshot();
});
