import { applyMiddleware, createStore } from 'redux';
import { reducer } from '@store/reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '@common/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);