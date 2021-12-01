import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';

function NotFound(): JSX.Element {
  return (
    <section>
      <h1>404 Not Found</h1>
      <Link to={AppRoute.Home}>Вернуться на главную</Link>
    </section>
  );
}

export default NotFound;
