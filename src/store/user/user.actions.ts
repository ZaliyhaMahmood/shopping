import { UserData } from "../../utils/firebase/firebase.utils";
import {
  ActionWithPayload,
  withMatcher,
} from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";

export type SetCurrentUser = ActionWithPayload<
  USER_ACTION_TYPES.SET_CURRENT_USER,
  UserData
>;

export const setCurrentUser = withMatcher((user: UserData) => ({
  type: USER_ACTION_TYPES.SET_CURRENT_USER,
  payload: user,
}));
