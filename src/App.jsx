import React from 'react';
import style from './app.module.css';
import logo from './logo.png';

const App = () => {
  return (
    <>
      <div className={style.test}>Hello world</div>;
      <img src={logo} alt='test' />
    </>
  );
};

export default App;
