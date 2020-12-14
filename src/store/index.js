// import { create } from "mobx-persist";

import AuthStore from "./AuthStore";
import AppStore from "./AppStore";

// const hydrate = create();

class Store {
  constructor() {
    // this.AuthStore = new AuthStore(this);
    this.AppStore = new AppStore(this);
    // hydrate("AuthStore", this.AuthStore);
  }
}

export default new Store();
