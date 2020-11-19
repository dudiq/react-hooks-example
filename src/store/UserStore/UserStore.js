import Store from '@/store/Store';
import { saveUser } from '@/services/user';
import InternalError from '@/class/InternalError';

class UserStore extends Store {
  firstName = 'aha!';

  lastName = 'second';

  counter = 0;

  loadUser = async () => {
    console.log('load user', this.firstName);
  };

  saveFirstName = async firstName => {
    this.counter += 1;
    try {
      await saveUser({ firstName });
      const old = this.firstName;
      this.firstName = firstName;
      console.log(`[save firstName] old: ${old}; new: ${this.firstName}`);
      if (this.counter > 2) {
        throw new InternalError('counter incremented!', 101);
      }
    } catch (e) {

    }
  };


  saveLastName = async lastName => {
    this.counter += 1;
    try {
      await saveUser({ lastName });
      const old = this.lastName;
      this.lastName = lastName;
      console.log(`[save lastname] old: ${old}; new: ${this.lastName}`);
      if (this.counter > 2) {
        throw new InternalError('counter incremented!', 101);
      }
    } catch (e) {

    }
  };
}

export default Store.storeFabric(UserStore);
