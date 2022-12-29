import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { storeDataMock } from './mockData';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
export const store = mockStore(storeDataMock);
