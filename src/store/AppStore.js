import { makeAutoObservable } from "mobx";

import * as constants from "../constants";
import breakpoints from "styles/index.scss";

console.log("🚀 ~ file: AppStore.js ~ line 5 ~ constants", constants);

export default class AppStore {
  windowSize = {
    isMobile: false,
    isTablet: false,
    isLaptop: false,
    isDesktop: false,
  };

  constructor() {
    makeAutoObservable(this);
  }

  setWindowSize = () => {
    const currentWindowWidth = window.innerWidth;
    console.log("breakpoints", breakpoints);

    switch (true) {
      case currentWindowWidth <= constants.MAX_MOBILE_BREAKPOINT:
        this.windowSize.isMobile = true;
        console.log("store isMobile", true);
        break;
      case currentWindowWidth <= constants.MAX_TABLET_BREAKPOINT:
        this.windowSize.isTablet = true;
        console.log("store isTablet", true);
        break;
      case currentWindowWidth <= constants.MAX_LAPTOP_BREAKPOINT:
        this.windowSize.isLaptop = true;
        console.log("store isLaptop", true);
        break;
      case currentWindowWidth > constants.MAX_LAPTOP_BREAKPOINT:
        this.windowSize.isDesktop = true;
        console.log("store isDesktop", true);
        break;
      default:
        break;
    }
  };
}
