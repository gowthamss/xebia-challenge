import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import blogsReducer from './reducrer';

export const store = createStore(blogsReducer);

export const persistor = persistStore(store);