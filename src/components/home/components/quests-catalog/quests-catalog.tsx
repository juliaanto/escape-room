import * as S from './quests-catalog.styled';

import { useEffect, useState } from 'react';

import { APIRoute } from 'const';
import QuestItem from '../quest-item/quest-item';
import { Quests } from 'types/quest';
import Tabs from'../tabs/tabs';
import { api } from 'services/api';
import { getAllQuestTypes } from 'utils/quests';

;

function QuestsCatalog(): JSX.Element {
  const [quests, setQuests] = useState<Quests>([]);

  useEffect(() => {
    api.get<Quests>(APIRoute.Quests).then((response) => setQuests(response.data))
  }, [setQuests]);

  return (
    <>
      <Tabs questTypes={getAllQuestTypes(quests)}/>

      <S.QuestsList>
        {quests.map((item) => {
          return (
            <QuestItem quest={item}/>
          )
        })}
      </S.QuestsList>
    </>
  )
};

export default QuestsCatalog;
