import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoInsert from '../Components/TodoInsert';
import TodoList from '../Components/TodoList';
import { RootState } from '../Modules';
import { addTodo, removeTodo, toggleTodo } from '../Modules/todos';

function TodoApp() {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const onInsert = (text: string) => {
    dispatch(addTodo(text));
  }
  const onToggle = (id: number) => {
    dispatch(toggleTodo(id));
  }
  const onRemove = (id: number) => {
    dispatch(removeTodo(id));
  }

  return (
    <>
    <TodoInsert onInsert={onInsert} />
    <TodoList onRemove={onRemove} onToggle={onToggle} todos={todos}/>
    </>
  );
};

export default TodoApp;