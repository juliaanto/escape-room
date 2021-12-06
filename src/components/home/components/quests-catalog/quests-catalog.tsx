import * as S from './quests-catalog.styled';

import { ConnectedProps, connect } from 'react-redux';
import { filterQuestsByType, getAllQuestTypes } from 'utils/quests';
import { useEffect, useState } from 'react';

import { APIRoute } from 'const';
import QuestItem from '../quest-item/quest-item';
import { Quests } from 'types/quest';
import { State } from 'types/state';
import Tabs from'../tabs/tabs';
import { api } from 'services/api';

const mapStateToProps = (state: State) => ({
  tab: state.tab,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function QuestsCatalog(props: PropsFromRedux): JSX.Element {
  const {tab} = props;
  const [quests, setQuests] = useState<Quests>([]);

  useEffect(() => {
    api.get<Quests>(APIRoute.Quests).then((response) => setQuests(response.data))
  }, [setQuests]);

  const filteredQuests = filterQuestsByType(quests, tab);

  return (
    <>
      <Tabs questTypes={getAllQuestTypes(quests)}/>

      <S.QuestsList>
        {filteredQuests.map((item) => {

          return (
            <QuestItem key={item.id} quest={item}/>
          )
        })}
      </S.QuestsList>
    </>
  )
};

export {QuestsCatalog};
export default connector(QuestsCatalog);
