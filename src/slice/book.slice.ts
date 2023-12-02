import { createSlice } from '@reduxjs/toolkit';
import { IBookState } from '../types/interfaces';

const initialState: IBookState = {
  isLoading: false,
  books: [],
  searchedBooks: [],
  error: null,
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    fetchBooksStart: (state) => {
      state.isLoading = true;
    },
    fetchBooksSuccess: (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
      state.error = null;
    },
    fetchBookByTitleSuccess: (state, action) => {
      state.isLoading = false;
      state.searchedBooks = action.payload;
      state.error = null;
    },
    fetchBooksFailure: (state, action) => {
      state.isLoading = false;
      state.books = [];
      state.error = action.payload;
    },
    addBookStart: (state) => {
      state.isLoading = true;
    },
    addBookSuccess: (state, action) => {
      state.isLoading = false;
      state.books.push(action.payload);
      state.error = null;
    },
    addBookFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    updateBookStart: (state) => {
      state.isLoading = true;
    },
    updateBookSuccess: (state, action) => {
      state.isLoading = false;
      const updatedBook = action.payload;
      const index = state.books.findIndex((book) => book.id === updatedBook.id);
      if (index !== -1) {
        state.books[index] = updatedBook;
      }
      state.error = null;
    },
    updateBookFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    deleteBookStart: (state) => {
      state.isLoading = true;
    },
    deleteBookSuccess: (state, action) => {
      state.isLoading = false;
      const deletedBookId = action.payload;
      state.books = state.books.filter((book) => book.id !== deletedBookId);
      state.error = null;
    },
    deleteBookFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  
});

export const {
  fetchBooksStart,
  fetchBooksSuccess,
  fetchBookByTitleSuccess,
  fetchBooksFailure,
  addBookStart,
  addBookSuccess,
  addBookFailure,
  updateBookStart,
  updateBookSuccess,
  updateBookFailure,
  deleteBookStart,
  deleteBookSuccess,
  deleteBookFailure,
} = bookSlice.actions;

export default bookSlice.reducer;
