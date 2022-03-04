import { createStore } from 'ice';
import show from './models/show';
import now from './models/now';
import menu from './models/menu';
import dialog from './models/dialog';
import user from './models/user';

const store = createStore({
  show,
  now,
  menu,
  dialog,
  user,
});

export default store;
