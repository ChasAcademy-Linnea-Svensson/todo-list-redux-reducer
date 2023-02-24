import { setDone, deleteItem } from './redux/todoList';

function TodoReduxItem({ item }) {
  return (
    <li className='flex items-center justify-between px-4 rounded-lg border-2 h-10 w-96'>
      <div className='flex gap-4'>
        <input
          type='checkbox'
          checked={item.done ? true : false}
          onChange={() => setDone(item.id)}
        />
        <p>{item.text}</p>
      </div>
      <button onClick={() => deleteItem(item.id)}>X</button>
    </li>
  );
}

export default TodoReduxItem;
