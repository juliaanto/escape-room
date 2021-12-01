import { AppQuestTypes, questLevels, questTypes } from "const";

import { Quests } from "types/quest";

export const getQuestType = (typeFromServer: string) => questTypes.find((questType) => questType.typeFromServer === typeFromServer)?.typeInApp;

export const getQuestLevel = (levelFromServer: string) => questLevels.find((questLevel) => questLevel.levelFromServer === levelFromServer)?.levelInApp;

export const getAllQuestTypes = (allQuests: Quests): (string | undefined)[] => {
  const questsFromServer = Array.from(new Set(allQuests.map((quest) => getQuestType(quest.type))));

  return [AppQuestTypes.AllQuests, ...questsFromServer];
}
