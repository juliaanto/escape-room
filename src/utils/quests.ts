import { AppQuestTypes, questLevels, questTypes } from "const";

import { Quests } from "types/quest";

export const getQuestType = (typeFromServer: string) => questTypes.find((questType) => questType.typeFromServer === typeFromServer)?.typeInApp;

export const getQuestLevel = (levelFromServer: string) => questLevels.find((questLevel) => questLevel.levelFromServer === levelFromServer)?.levelInApp;

export const getAllQuestTypes = (allQuests: Quests): (string | undefined)[] => {
  const questsFromServer = Array.from(new Set(allQuests.map((quest) => getQuestType(quest.type))));

  return [AppQuestTypes.AllQuests, ...questsFromServer];
}

export const filterQuestsByType = (allQuests: Quests, questType: string) => {
  const typeFromServer = questTypes.find((type) => type.typeInApp === questType)?.typeFromServer;

  if (questType === AppQuestTypes.AllQuests) {
    return allQuests;
  }
  
  return allQuests.filter((quest) => quest.type === typeFromServer);
}
