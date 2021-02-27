import React from 'react';
// import CounterContainer from './Containers/CounterContainer';
import TodoApp from './Containers/TodoApp';
// import CounterContainer from './Containers/CounterContainer';
// import ReducerSample from './ReducerSample';
// import { SampleProvider } from './SampleContext';
// import Counter from './Counter';
// import Greetings from './Greetings';
// import MyForm from './MyForm';

const App: React.FC = () => {
  // const onClick = (name:string) => {
  //   console.log(name);
  // }
  // return (
  //   <Greetings name="타입스크립트" onClick={onClick}/>
  // );
  // return <Counter />

  // const onSubmit = (form: {name: string; description: string }) => {
  //   console.log(form);
  // }
  // return <MyForm onSubmit={onSubmit}/>

  // return (
  //   <SampleProvider>
  //     <ReducerSample />
  //   </SampleProvider>
  // );

  // return <CounterContainer />;
  
  return <TodoApp />;
  // return <CounterContainer />;
}

export default App;
