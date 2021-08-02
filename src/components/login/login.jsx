import React, { useEffect } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';
import { useHistory } from 'react-router-dom';


const Login = ({authService}) => {
  const onLogin = (e) => {
    authService.login(e.currentTarget.textContent)
    .then(data => goToMaker(data.user.uid));
  }

  const history = useHistory();
  const goToMaker = (userId) => {
    history.push({
      pathname: '/main',
      state: {id: userId},
    });
  }

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      user && goToMaker(user.uid);
  });
})

  return(
    <form className={styles.loginForm}>
      <Header className={styles.Header}/>
      <section className = {styles.section}>
        <h1 className = {styles.Login}>Login</h1>
        <ul className = {styles.ul}>
          <li>
            <button type='button'onClick={onLogin} 
            className = {styles.site}>Google</button>
          </li>
          <li>
            <button type='button' onClick={onLogin} 
            className = {styles.site}>Github</button>
          </li>
        </ul>
      </section>
      <Footer className={styles.Footer}/>
    </form>
  )
};

export default Login;