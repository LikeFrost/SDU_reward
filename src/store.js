import { createStore } from 'ice';
import show from './models/show';
import now from './models/now';
import menu from './models/menu';

const store = createStore({
  show,
  now,
  menu,
});

export default store;
