import createStore from 'unistore';
import { definePropInStore } from '@/store/Store/defineField';

export default class Store {
  static storeFabric(StoreClass) {
    const uniStore = createStore({});

    const storeInstance = new StoreClass(uniStore);

    const schemeKeys = Store.getScheme(storeInstance);
    const initialState = {};
    schemeKeys.forEach(key => {
      initialState[key] = storeInstance[key];
      definePropInStore(storeInstance, key);
    });

    storeInstance.setState(initialState);

    return storeInstance;
  }

  static getScheme(store) {
    return Object.keys(store).filter(key => {
      if (key === 'store') return false;
      if (typeof store[key] === 'function') return false;
      return true;
    });
  }

  constructor(store) {
    this.store = store;
  }

  setState(newState) {
    this.store.setState(newState);
  }

  getState() {
    return this.store.getState();
  }

  subscribe(cb) {
    this.store.subscribe(cb);
  }

  unsubscribe(cb) {
    this.store.unsubscribe(cb);
  }
}
