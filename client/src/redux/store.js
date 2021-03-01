import { compose, applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers'

const middleware = [ thunk ];

const store = createStore( reducer, compose( applyMiddleware( ...middleware ) ) )

export default store;