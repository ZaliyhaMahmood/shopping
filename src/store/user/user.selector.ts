import { createSelector } from "reselect";
import { RootState } from "../store";

// export const selectCurrentUser = (state) => state.user.currentUser;

export const selectUserReducer = (state: RootState) => state.user;

export const selectCurrentUser = createSelector(
  selectUserReducer,
  (user) => user.currentUser
);
