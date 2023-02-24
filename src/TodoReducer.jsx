import React from 'react';
import { useReducer, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { setItems } from './redux/todoList';
import TodoReducerItem from './TodoReducerItem';

const reducer = (state, action) => {
  switch (action.type) {
    case 'setText':
      return { ...state, text: action.payload };
    case 'addItem':
      return {
        ...state,
        items: [
          ...state.items,
          { id: uuidv4(), text: state.text, done: false },
        ],
        text: '',
      };
    case 'deleteItem':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case 'setDone':
      return {
        ...state,
        items: state.items.map((item) => {
          return item.id === action.payload
            ? { ...item, done: item.done ? false : true }
            : item;
        }),
      };
    case 'setItems':
      return {
        ...state,
        items: JSON.parse(localStorage.getItem('reducerItem')),
      };
  }
};

function TodoReducer() {
  const initialState = {
    items:
      localStorage.getItem('reducerItem') === null
        ? []
        : JSON.parse(localStorage.getItem('reducerItem')),
    text: '',
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('reducerItem', JSON.stringify(state.items));
  }, [state.items]);

  return (
    <div className='flex flex-col items-center justify-center gap-8'>
      <h1>Reducer</h1>
      <div className='flex'>
        <input
          className='border-2 rounded-l-lg h-10 w-72 px-2'
          type='text'
          value={state.text}
          onChange={(e) =>
            dispatch({ type: 'setText', payload: e.target.value })
          }
        />
        <button
          className='h-10 w-28 bg-green-300 rounded-r-lg'
          onClick={() => dispatch({ type: 'addItem' })}
        >
          Add
        </button>
      </div>
      <ul className='flex flex-col gap-2'>
        {state.items.map((item) => {
          return (
            <TodoReducerItem
              key={item.id}
              item={item}
              setDone={() => dispatch({ type: 'setDone', payload: item.id })}
              deleteItem={() =>
                dispatch({ type: 'deleteItem', payload: item.id })
              }
            />
          );
        })}
      </ul>
    </div>
  );
}

export default TodoReducer;
