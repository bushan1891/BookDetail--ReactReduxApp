import { combineReducers } from 'redux';
import  BooksReduser from './reducer_books';
import ActiveBook from './reducer_active_book';

// this is stored in the Redux state with key books ..
const rootReducer = combineReducers({
  // books is the key and what ever is returend from the BookReduser is the value
  books: BooksReduser,
  activeBook:ActiveBook
});

export default rootReducer;
