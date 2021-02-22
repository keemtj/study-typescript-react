import React from 'react';

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

Greetings.defaultProps = {
  mark: '!',
}

export default Greetings;