import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'
import ActiveBookReducer from './reducer_active_book';

//Calling the function in reducer_books.js
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer;
