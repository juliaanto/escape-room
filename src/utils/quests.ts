import { questLevels, questTypes } from "const";

export const getQuestType = (typeFromServer: string) => questTypes.find((questType) => questType.typeFromServer === typeFromServer)?.typeInApp;

export const getQuestLevel = (levelFromServer: string) => questLevels.find((questLevel) => questLevel.levelFromServer === levelFromServer)?.levelInApp;
