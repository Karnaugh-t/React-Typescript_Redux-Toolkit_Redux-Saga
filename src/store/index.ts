import { configureStore, applyMiddleware, getDefaultMiddleware } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from '../reducers/rootReducer';
import mySaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer:{
        rootReducer
    },
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(mySaga);

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useCounterDispatch = () => useDispatch<AppDispatch>();
export const useCounterSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;