import * as S from './quests-catalog.styled';

import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import { LinkToQuestById } from 'const';
import { Quest } from 'types/quest';
import { getQuestLevel } from 'utils/quests';

type QuestItemProps = {
  quest: Quest;
}

function QuestItem(props: QuestItemProps): JSX.Element {
  const {quest} = props;

  return (
    <S.QuestItem>
      <S.QuestItemLink to={LinkToQuestById(quest.id)}>
        <S.Quest>
          <S.QuestImage
            src={`../${quest.coverImg}`}
            width="344"
            height="232"
            alt={`квест ${quest.title}`}
          />

          <S.QuestContent>
            <S.QuestTitle>{quest.title}</S.QuestTitle>

            <S.QuestFeatures>
              <S.QuestFeatureItem>
                <IconPerson />
                {`${quest.peopleCount[0]}–${quest.peopleCount[1]} чел`}
              </S.QuestFeatureItem>
              <S.QuestFeatureItem>
                <IconPuzzle />
                {getQuestLevel(quest.level)}
              </S.QuestFeatureItem>
            </S.QuestFeatures>
          </S.QuestContent>
        </S.Quest>
      </S.QuestItemLink>
    </S.QuestItem>
  );
}

export default QuestItem;
