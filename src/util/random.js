import _ from "lodash";
import constants from "../constants";

export const generateGameId = () =>
  _.sampleSize(constants.GAME_ID_DICTIONARY, constants.GAME_ID_LENGTH).join("");
