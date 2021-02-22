import React from 'react';
import Greetings from './Greetings';

const App: React.FC = () => {
  const onClick = (name:string) => {
    console.log(name);
  }
  return (
    <Greetings name="타입스크립트" onClick={onClick}/>
  );
}

export default App;
