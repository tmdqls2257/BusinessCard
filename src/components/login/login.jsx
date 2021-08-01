import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';


const Login = ({authService}) => {
  const onLogin = (e) => {
    authService.login(e.currentTarget.textContent).then(console.log);
  }

  return(
    <div className="login">
      <Header />
      <section>
        <h1>Login</h1>
        <ul>
          <li><button onClick={onLogin}>Google</button></li>
          <li><button onClick={onLogin}>Github</button></li>
        </ul>
      </section>
      <Footer />
    </div>
  )
};

export default Login;