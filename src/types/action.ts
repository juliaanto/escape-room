import {changeTab} from '../store/action';

export enum ActionType {
  ChangeTab = 'quests/changeTab',
}

export type Actions = ReturnType<typeof changeTab>
