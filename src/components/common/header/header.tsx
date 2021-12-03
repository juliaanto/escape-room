import * as S from './header.styled';

import { AppRoute, MenuItems } from 'const';

import logo from 'assets/img/logo.svg';
import { useState } from 'react';

function Header(): JSX.Element {
  const [activeMenuItem, setActiveMenuItem] = useState(window.location.pathname === AppRoute.Contacts ? MenuItems.Contacts : MenuItems.Quests);

  return (
    <S.StyledHeader>
      <S.HeaderWrapper>
        <S.Logo>
          <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
        </S.Logo>

        <S.Navigation>
          <S.Links>
            <S.LinkItem>
              <S.Link
                to={AppRoute.Home}
                $isActiveLink={activeMenuItem === MenuItems.Quests}
                onClick={() => setActiveMenuItem(MenuItems.Quests)}
              >
                {MenuItems.Quests}
              </S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link
                to="#"
                $isActiveLink={activeMenuItem === MenuItems.Beginners}
                onClick={() => setActiveMenuItem(MenuItems.Beginners)}
              >
                {MenuItems.Beginners}
              </S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link
                to="#"
                $isActiveLink={activeMenuItem === MenuItems.Reviews}
                onClick={() => setActiveMenuItem(MenuItems.Reviews)}
              >
                {MenuItems.Reviews}
              </S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link
                to="#"
                $isActiveLink={activeMenuItem === MenuItems.Promotions}
                onClick={() => setActiveMenuItem(MenuItems.Promotions)}
              >
                {MenuItems.Promotions}
              </S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link
                to={AppRoute.Contacts}
                $isActiveLink={activeMenuItem === MenuItems.Contacts}
                onClick={() => setActiveMenuItem(MenuItems.Contacts)}
              >
                {MenuItems.Contacts}
              </S.Link>
            </S.LinkItem>
          </S.Links>
        </S.Navigation>
        <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
      </S.HeaderWrapper>
    </S.StyledHeader>
  )
}

export default Header;
