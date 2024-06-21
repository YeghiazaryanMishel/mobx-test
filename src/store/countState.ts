import { action, autorun, computed, observable } from 'mobx';

export class CountState {
  @observable accessor count = 0;

  constructor() {
    autorun(() => {
      console.log('Count update:', this.count);
    });
  }

  @action
  increment() {
    this.count++;
  }

  @action
  decrement() {
    this.count--;
  }

  @computed
  get isPositive() {
    return this.count > 0;
  }
}
