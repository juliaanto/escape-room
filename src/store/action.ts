import {ActionType} from '../types/action';

export const changeTab = (tab: string) => ({
  type: ActionType.ChangeTab,
  payload: tab,
} as const);
