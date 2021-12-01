import * as S from './quests-catalog.styled';

import { AppQuestTypes } from 'const';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';

type TabsProps = {
  questTypes: (string | undefined)[];
}

function Tabs(props: TabsProps): JSX.Element {
  const {questTypes} = props;

  const getIcon = (questType: string | undefined) => {
    if (questType === AppQuestTypes.AllQuests) {
      return <IconAllQuests />
    } else if (questType === AppQuestTypes.Adventures) {
      return <IconAdventures />
    } else if (questType === AppQuestTypes.Horror) {
      return <IconHorrors />
    } else if (questType === AppQuestTypes.Mystic) {
      return <IconMystic />
    } else if (questType === AppQuestTypes.Detective) {
      return <IconDetective />
    } else if (questType === AppQuestTypes.SciFi) {
      return <IconScifi />
    } else return;
  };

  return (
    <S.Tabs>

      {questTypes.map((item) => {
        return (
          <S.TabItem>
            <S.TabBtn>
              {getIcon(item)}
              <S.TabTitle>{item}</S.TabTitle>
            </S.TabBtn>
          </S.TabItem>
        )
      })}

    </S.Tabs>
  )
}

export default Tabs;
