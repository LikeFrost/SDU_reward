import { createStore } from 'ice';
import show from './models/show';

const store = createStore({
  show,
});

export default store;
