import { AppQuestTypes, questLevels, questTypes } from "const";

import { Quests } from "types/quest";

export const getAppQuestType = (typeFromServer: string) => questTypes.find((questType) => questType.typeFromServer === typeFromServer)?.typeInApp;

export const getServerQuestType = (appType: string) => questTypes.find((type) => type.typeInApp === appType)?.typeFromServer

export const getQuestLevel = (levelFromServer: string) => questLevels.find((questLevel) => questLevel.levelFromServer === levelFromServer)?.levelInApp;

export const getAllQuestTypes = (allQuests: Quests): (string | undefined)[] => {
  const questsFromServer = Array.from(new Set(allQuests.map((quest) => getAppQuestType(quest.type))));

  return [AppQuestTypes.AllQuests, ...questsFromServer];
}

export const filterQuestsByType = (allQuests: Quests, questType: string) => {

  if (questType === AppQuestTypes.AllQuests) {
    return allQuests;
  }

  return allQuests.filter((quest) => quest.type === getServerQuestType(questType));
}
