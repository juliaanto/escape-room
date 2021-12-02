import * as S from './quests-catalog.styled';

import {ConnectedProps, connect} from 'react-redux';

import { Actions } from 'types/action';
import { AppQuestTypes } from 'const';
import {Dispatch} from 'redux';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';
import { State } from 'types/state';
import { changeTab } from 'store/action';
import { useState } from 'react';

type TabsProps = {
  questTypes: (string | undefined)[];
}

const mapStateToProps = (state: State) => ({
  tab: state.tab,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onTabClick(item: string) {
    dispatch(changeTab(item));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & TabsProps;

function Tabs(props: ConnectedComponentProps): JSX.Element {
  const {questTypes, tab, onTabClick} = props;

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

      {questTypes.map((item, id) => {
        const keyValue = `${id}`;

        return (
          <S.TabItem
            key={keyValue}
            onClick={() => {
              if (item) {
                onTabClick(item);
              }
            }}
          >
            <S.TabBtn isActive={item === tab}>
              {getIcon(item)}
              <S.TabTitle>{item}</S.TabTitle>
            </S.TabBtn>
          </S.TabItem>
        )
      })}

    </S.Tabs>
  )
}

export {Tabs};
export default connector(Tabs);
