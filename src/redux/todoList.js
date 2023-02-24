import { createReduxModule } from 'hooks-for-redux';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  text: '',
  items:
    localStorage.getItem('reduxItem') === null
      ? []
      : JSON.parse(localStorage.getItem('reduxItem')),
};

export const [
  useTodoList,
  { setItems, setText, addItem, deleteItem, setDone },
] = createReduxModule('todoList', initialState, {
  setItems: (state) => {
    return { ...state, items: JSON.parse(localStorage.getItem('reduxItem')) };
  },
  setText: (state, newText) => {
    return { ...state, text: newText };
  },
  addItem: (state) => {
    return {
      ...state,
      items: [...state.items, { id: uuidv4(), text: state.text, done: false }],
      text: '',
    };
  },
  deleteItem: (state, id) => {
    return { ...state, items: state.items.filter((item) => item.id !== id) };
  },
  setDone: (state, id) => {
    return {
      ...state,
      items: state.items.map((item) => {
        return item.id === id
          ? { ...item, done: item.done ? false : true }
          : item;
      }),
    };
  },
});
