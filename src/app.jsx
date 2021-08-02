
import styles from'./app.module.css';
import Login from './components/login/login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './components/main/main';

function App({authService}) {

  return (
    <BrowserRouter>
      <div className={styles.app}>
      <Switch>
        <Route exact path={['',"/login"]}>
          <Login authService={authService} className={styles.Login} />
        </Route>
        <Route path="/main">
          <Main authService={authService}/>
        </Route>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
