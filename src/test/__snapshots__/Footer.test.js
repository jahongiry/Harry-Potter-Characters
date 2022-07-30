import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Footer from '../../components/Footer';

it('Builds the snapchot of the footer component safely', () => {
  const three = renderer
    .create(
      <Router>
        <Footer />
      </Router>,
    )
    .toJSON();
  expect(three).toMatchSnapshot();
});
