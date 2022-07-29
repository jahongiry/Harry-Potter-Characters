import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store'
import actions from './homeStore';

const middlewares = []
const mockStore = configureStore(middlewares)

const initial = () => ({ type: 'initial'})

it('should dispatch action', () => {
 
  const initialState = {}
  const store = mockStore(initialState)
 
  store.dispatch(initial())
 
  const actions = store.getActions()
  const expectedPayload = { type: 'initial' }
  expect(actions).toEqual([expectedPayload])
})