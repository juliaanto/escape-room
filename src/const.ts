export enum AppRoute {
  Home = '/',
  DetailedQuest = '/detailed-quest/:id',
  Contacts = '/contacts',
  NotFound = '/notfound',
}

export const LinkToQuestById = ((id: number): string => `/detailed-quest/${id}`);

export enum APIRoute {
  Quests = '/quests',
  Orders = '/orders',
}

export const APIRouteQuestById = ((id: number): string => `/quests/${id}`);

export const questTypes = [
  {
    typeFromServer: 'adventures',
    typeInApp: 'Приключения',
  },
  {
    typeFromServer: 'horror',
    typeInApp: 'Ужасы',
  },
  {
    typeFromServer: 'mystic',
    typeInApp: 'Мистика',
  },
  {
    typeFromServer: 'detective',
    typeInApp: 'Детектив',
  },
  {
    typeFromServer: 'sci-fi',
    typeInApp: 'Sci-fi',
  },
]

export const questLevels = [
  {
    levelFromServer: 'easy',
    levelInApp: 'простой',
  },
  {
    levelFromServer: 'medium',
    levelInApp: 'средний',
  },
  {
    levelFromServer: 'hard',
    levelInApp: 'сложный',
  },
]
