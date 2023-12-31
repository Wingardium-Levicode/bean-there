//state manager
import { proxy } from 'valtio';

const state = proxy({
  homePage: true,
  login: false,
  register: false,
  postsPage: false,
  location: false,
  friendsPage: false,
  favPage: false,
  calendarPage: false,
  active: 0,
});

export default state;