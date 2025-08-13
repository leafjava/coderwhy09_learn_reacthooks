import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import App from './02_计数器实现对比/App';
// import App from './03_useState的使用/App';
// import App from './04_useEffect的使用/App';
// import App from './05_useContext的使用/App';
import App from './06_useReducer的使用(了解)/App';


import {UserContext,ThemeContext} from "./05_useContext的使用/context"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <UserContext.Provider value={{name:"why",level:99}}>
      <ThemeContext.Provider value={{color:"red",size:30}}>
        <App />
      </ThemeContext.Provider>
    </UserContext.Provider>
  // </React.StrictMode>
);
