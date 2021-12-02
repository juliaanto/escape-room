import { ActionType, Actions } from "types/action";

import { AppQuestTypes } from "const";
import { State } from "types/state";

const initialState = {
  tab: AppQuestTypes.AllQuests,
}

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeTab:
      return {...state, tab: action.payload};
    default:
      return state;
  }
}

export {reducer};
