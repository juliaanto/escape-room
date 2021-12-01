import * as S from './app.styled';

import {
  Route,
  BrowserRouter as Router,
  Switch,
} from '../common/common';

import { AppRoute } from '../../const';
import Contacts from '../contacts/contacts';
import DetailedQuest from '../detailed-quest/detailed-quest';
import Home from '../home/home';
import NotFound from 'components/not-found/not-found';
import { ThemeProvider } from 'styled-components';
import { appTheme } from './common';

const App = () => (
  <ThemeProvider theme={appTheme}>
    <S.GlobalStyle />
    <Router>
      <Switch>
        <Route exact path={AppRoute.DetailedQuest}>
          <DetailedQuest />
        </Route>
        <Route exact path={AppRoute.Contacts}>
          <Contacts />
        </Route>
        <Route exact path={AppRoute.Home}>
          <Home />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
