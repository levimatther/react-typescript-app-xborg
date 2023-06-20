import { Action } from "redux";
import {
  AboutUsInterface,
  GET_TEAM_FULFILLED,
  GET_TEAM_REJECTED,
  STATUS_TYPE,
} from "./types";

const initialState: AboutUsInterface = {
  team: [],
  players: [],
  passportSigns: 0,
  tournamentsOrganized: 0,
  prizesPaid: 0,
  participants: 0,
  tournamentsWon: 0,
  tournamentWinning: 0,
  status: STATUS_TYPE.UNINITIALIZED,
};

const Reduction = {
  team: (
    state = initialState,
    data: { type: string; payload: AboutUsInterface },
  ) => {
    switch (data.type) {
      case GET_TEAM_FULFILLED:
        return {
          ...data.payload,
          status: STATUS_TYPE.FULFILLED,
        };
      case GET_TEAM_REJECTED:
        return {
          ...state,
          status: STATUS_TYPE.REJECTED,
        };

      default:
        return state;
    }
  },
};

const createReducer =
  <S = object>(initialState: S, handlers: any | Action<any>) =>
  (state = initialState, action: any) => {
    const { type } = action;
    if (!handlers.hasOwnProperty(type)) {
      return state;
    }

    return handlers[type](state, action);
  };

const reducer = createReducer(initialState, {
  [GET_TEAM_FULFILLED]: Reduction.team,
  [GET_TEAM_REJECTED]: Reduction.team,
});

export { reducer as AboutUsReducer };
