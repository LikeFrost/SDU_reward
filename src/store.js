import { createStore } from 'ice';
import show from './models/show';
import now from './models/now';
import menu from './models/menu';
import dialog from './models/dialog';

const store = createStore({
  show,
  now,
  menu,
  dialog,
});

export default store;
