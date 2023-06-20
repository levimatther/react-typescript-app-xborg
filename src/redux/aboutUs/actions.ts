import axios from "axios";
import { playersMock } from "../../mocks/players";
import { teamMock } from "../../mocks/team";
import { GET_TEAM } from "./types";

const ActionCreators = {
  // Demo API call
  getTeam: () => ({
    type: GET_TEAM,
    // payload: axios.get("/get_team"),
    payload: Promise.resolve({
      team: teamMock,
      players: playersMock,
      passportSigns: 10000,
      tournamentsOrganized: 125,
      prizesPaid: 30000,
      participants: 8000,
      tournamentsWon: 34,
      tournamentWinning: 30000,
    }),
  }),
};

export { ActionCreators as AboutUsActions };
