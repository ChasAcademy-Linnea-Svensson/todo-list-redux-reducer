import { useEffect } from 'react';
import { useTodoList, setText, addItem } from './redux/todoList';
import TodoReduxItem from './TodoReduxItem';

function TodoRedux() {
  const { text, items } = useTodoList();

  useEffect(() => {
    localStorage.setItem('reduxItem', JSON.stringify(items));
  }, [items]);

  return (
    <div className='flex flex-col items-center justify-center gap-8'>
      <h1>Redux</h1>
      <div className='flex'>
        <input
          className='border-2 rounded-l-lg h-10 w-72 px-2'
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className='h-10 w-28 bg-green-300 rounded-r-lg'
          onClick={() => addItem()}
        >
          Add
        </button>
      </div>
      <ul className='flex flex-col gap-2'>
        {items.map((item) => {
          return <TodoReduxItem key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
}

export default TodoRedux;
