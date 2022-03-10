import { createStore } from 'ice';
import show from './models/show';
import now from './models/now';
import menu from './models/menu';
import dialog from './models/dialog';
import user from './models/user';
import reward from './models/reward';

const store = createStore({
  show,
  now,
  menu,
  dialog,
  user,
  reward,
});

export default store;
