import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './13_redux中的hooks/store'
// import App from './App';
// import App from './02_计数器实现对比/App';
// import App from './03_useState的使用/App';
// import App from './04_useEffect的使用/App';
// import App from './05_useContext的使用/App';
// import App from './06_useReducer的使用(了解)/App';
// import App from './07_useCallback和useMemo/App';
// import App from './08_useMemo的使用/App';
// import App from './09_useRef的使用/App';
// import App from './10_useImperativeHand/App';
// import App from './11_useLayoutEffect的使用/App';

// import App from './12_自定义Hooks/App';
// import App from './13_redux中的hooks/App';
import App from './14_useId的使用/App';

// import {UserContext,ThemeContext} from "./05_useContext的使用/context"
import { UserContext,TokenContext } from './12_自定义Hooks/context';
import { Provider} from "react-redux"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <UserContext.Provider value={{name:"why",level:99}}>
      <TokenContext.Provider value={'coderwhy'}>
        <Provider store={store}>
          <App />
        </Provider>
      </TokenContext.Provider>
    </UserContext.Provider>
  // </React.StrictMode>
);

// root.render(
//   // <React.StrictMode>
//     <UserContext.Provider value={{name:"why",level:99}}>
//       <ThemeContext.Provider value={{color:"red",size:30}}>
//         <App />
//       </ThemeContext.Provider>
//     </UserContext.Provider>
//   // </React.StrictMode>
// );