import thunk from 'redux-thunk';
import { createMemoryHistory } from 'history';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import clientsReducer from '@/store/reducers/clientsReducer';

export const history = createMemoryHistory();

const rootReducer = combineReducers({
  clients: clientsReducer,
});

let composeEnhancers = compose;
if (typeof window !== 'undefined') {
  // @ts-ignore
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
const enhancer = composeEnhancers(applyMiddleware(thunk));

export type State = ReturnType<typeof rootReducer>;
export type Actions = any;

export default createStore(rootReducer, enhancer);
