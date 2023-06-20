import { AboutUsReducer } from "./redux/aboutUs/reducers";

import { AboutUsInterface } from "./redux/aboutUs/types";

export interface GlobalState {
  aboutUs: AboutUsInterface;
}

export default {
  aboutUs: AboutUsReducer,
};
