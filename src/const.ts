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

export enum AppQuestTypes {
  AllQuests = 'Все квесты',
  Adventures = 'Приключения',
  Horror = 'Ужасы',
  Mystic = 'Мистика',
  Detective = 'Детектив',
  SciFi = 'Sci-fi',
}

export const questTypes = [
  {
    typeFromServer: 'adventures',
    typeInApp: AppQuestTypes.Adventures,
  },
  {
    typeFromServer: 'horror',
    typeInApp: AppQuestTypes.Horror,
  },
  {
    typeFromServer: 'mystic',
    typeInApp: AppQuestTypes.Mystic,
  },
  {
    typeFromServer: 'detective',
    typeInApp: AppQuestTypes.Detective,
  },
  {
    typeFromServer: 'sci-fi',
    typeInApp: AppQuestTypes.SciFi,
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

export enum MenuItems {
  Quests = 'Квесты',
  Beginners = 'Новичкам',
  Reviews = 'Отзывы',
  Promotions = 'Акции',
  Contacts = 'Контакты',
}
