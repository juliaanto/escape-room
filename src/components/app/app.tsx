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
        <Route exact path="/contacts">
          <Contacts />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
