import { CountState } from './countState';

class Store {
  public countState = new CountState();
}

export const store = new Store();
