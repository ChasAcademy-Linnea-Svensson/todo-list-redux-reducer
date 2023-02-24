import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';
import './App.css';
import TodoRedux from './TodoRedux';
import { Provider } from 'hooks-for-redux';
import TodoReducer from './TodoReducer';

function App() {
  return (
    <Provider>
      <div className='bg-green-100 p-8'>
        <Router>
          <div>
            <nav className='flex gap-8 items-center justify-center mb-10 bg-white p-4'>
              <NavLink
                to='/'
                className='h-10 w-40 rounded-lg flex items-center justify-center border-2 '
              >
                Redux
              </NavLink>
              <NavLink
                to='/reducer'
                className='h-10 w-40 rounded-lg flex items-center justify-center border-2'
              >
                Reducer
              </NavLink>
            </nav>
          </div>
          <div className='border-2 h-[76vh] rounded-lg bg-white py-8'>
            <h1 className='text-3xl'>Todo List</h1>
            <Routes>
              <Route path='/' element={<TodoRedux />} />
              <Route path='/reducer' element={<TodoReducer />} />
            </Routes>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
