import React from 'react';
import { Route } from 'react-router-dom';
import Calculator from './components/Calculator/Calculator';
import Header from './components/Header/Header';
import ThankYouPage from './components/ThankYouPage';

const App = (props) => {
  const [okUser, setOkUser] = React.useState()
  return (
    <div>
      <Header/>
      <Route path='/Calculator' render={() => <Calculator setOkUser={setOkUser} state={props.state}/>} />
      <Route path='/ThankYouPage' render={() => <ThankYouPage okUser={okUser}/>} />
    </div>
  )
}

export default App;
