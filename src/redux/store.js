import { createStore ,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxSaga from 'redux-saga';
import rootReducer from './rootReducer'

const store  = createStore(rootReducer,applyMiddleware(thunk))
    
export default store;

