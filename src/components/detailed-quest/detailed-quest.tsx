import * as S from './detailed-quest.styled';

import { getQuestLevel, getQuestType } from 'utils/quests';
import { useEffect, useState } from 'react';

import { APIRouteQuestById } from 'const';
import { BookingModal } from './components/components';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import Loading from 'components/loading/loading';
import { MainLayout } from '../common/common';
import { Quest } from 'types/quest';
import { api } from 'services/api';
import { useParams } from 'react-router';

function DetailedQuest(): JSX.Element {
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);
  const [quest, setQuest] = useState<Quest>();

  const {id} = useParams<{id: string}>();

  useEffect(() => {
    api.get<Quest>(APIRouteQuestById(Number(id))).then((response) => setQuest(response.data));
  }, [id]);

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  if (!quest) {
    return <Loading />;
  }

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`../${quest.coverImg}`}
          alt={`Квест ${quest.title}`}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{quest.title}</S.PageTitle>
            <S.PageSubtitle>{getQuestType(quest.type)}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{quest.duration} мин</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{`${quest.peopleCount[0]}–${quest.peopleCount[1]} чел`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{getQuestLevel(quest.level)}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {quest.description}
            </S.QuestDescription>

            <S.QuestBookingBtn
              onClick={onBookingBtnClick}
            >
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal />}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
