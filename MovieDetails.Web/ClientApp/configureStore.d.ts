import { Store } from 'redux';
import * as StoreModule from './store';
import { ApplicationState } from './store';
import { History } from 'history';
export default function configureStore(history: History, initialState?: ApplicationState): Store<StoreModule.ApplicationState>;
