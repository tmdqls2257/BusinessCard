import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';


const Login = ({authService}) => {
  const onLogin = (e) => {
    authService.login(e.currentTarget.textContent).then(console.log);
  }

  return(
    <form className={styles.loginForm}>
      <Header className={styles.Header}/>
      <section className = {styles.section}>
        <h1 className = {styles.Login}>Login</h1>
        <ul className = {styles.ul}>
          <li><button type='button' className = {styles.site}onClick={onLogin}>Google</button></li>
          <li><button type='button' className = {styles.site}onClick={onLogin}>Github</button></li>
        </ul>
      </section>
      <Footer className={styles.Footer}/>
    </form>
  )
};

export default Login;