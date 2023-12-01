import { createSlice } from '@reduxjs/toolkit';

const initialState: BookState = {
  isLoading: false,
  books: [],
  book: null,
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
    fetchBookByIdSuccess: (state, action) => {
      state.isLoading = false;
      state.book = action.payload;
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
  fetchBookByIdSuccess,
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
