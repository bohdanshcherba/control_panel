import React from 'react';
import './assets/css/App.css';
import {useAppDispatch} from "./store/store";
import {signIn} from "./store/app/action";

function App() {

  const dispatch = useAppDispatch()

  dispatch(signIn('tokenqwe'))

  return (
    <div className="App">

    </div>
  );
}

export default App;
