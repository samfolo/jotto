import { connectedSetup, findByTestAttr, storeFactory } from '../testHelpers';
import Input from './Input';

describe('<Input />', () => {
  let defaultProps = {};
  let wrapper;
  let inputComponent;

  beforeEach(() => {
    wrapper = connectedSetup(Input, defaultProps);
    inputComponent = findByTestAttr(wrapper, 'component-input');
  });

  describe('when the word has not been guessed', () => {
    it('renders without crashing', () => {
      console.log(wrapper.debug());
      expect(inputComponent).toHaveLength(1);
    });
    it('renders the input box', () => {

    });
    it('renders the submit button', () => {

    });
  });
  
  describe('when the word has been guessed', () => {
    it('renders without crashing', () => {
      expect(inputComponent).toHaveLength(1);
    });
    it('renders the input box', () => {

    });
    it('renders the submit button', () => {

    });
  });

  describe('updating state', () => {

  });
});
