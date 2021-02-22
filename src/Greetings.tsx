import React from 'react';

// props 받아올 떄
type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string;
  onClick: (name: string) => void;
  children?: React.ReactNode;
};


// const Greetings = React.FC<GreetingsProps> = ({children}) => null;
function Greetings({name, mark, optional, onClick, children}: GreetingsProps) {
  const handleClick = () => onClick(name);
  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
      {children}
      <div>
        <button onClick={handleClick}>Click me!</button>
      </div>
    </div>
    );
}

// props의 default값 설정할 때
Greetings.defaultProps = {
  mark: '!',
}

export default Greetings;