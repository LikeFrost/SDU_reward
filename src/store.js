import { createStore } from 'ice';
import show from './models/show';
import now from './models/now';

const store = createStore({
  show,
  now,
});

export default store;
