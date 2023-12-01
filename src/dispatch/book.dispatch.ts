import BookService from '../service/book.service';
import {
  addBookFailure,
  addBookStart,
  addBookSuccess,
  deleteBookFailure,
  deleteBookStart,
  deleteBookSuccess,
  fetchBookByIdSuccess,
  fetchBooksFailure,
  fetchBooksStart,
  fetchBooksSuccess,
  updateBookFailure,
  updateBookStart,
  updateBookSuccess,
} from '../slice/book.slice';

export const fetchBooks = () => async (dispatch: any) => {
  try {
    dispatch(fetchBooksStart());
    const data = await BookService.getBook();
    dispatch(fetchBooksSuccess(data));
  } catch (error) {
    dispatch(fetchBooksFailure('Error fetching books'));
  }
};

export const fetchBook = () => async (dispatch: any) => {
  try {
    dispatch(fetchBooksStart());
    const data = await BookService.getBook();
    dispatch(fetchBookByIdSuccess(data));
  } catch (error) {
    dispatch(fetchBooksFailure('Error fetching books'));
  }
};

export const addBook = (formData: FormData) => async (dispatch: any) => {
  try {
    dispatch(addBookStart());
    const data = await BookService.postBook(formData);
    dispatch(addBookSuccess(data));
  } catch (error) {
    dispatch(addBookFailure('Error adding book'));
  }
};

export const updateBook = (id: number, updatedData: Partial<Book>) => async (dispatch: any) => {
  try {
    dispatch(updateBookStart());
    const data = await BookService.updateBook(id, updatedData);
    dispatch(updateBookSuccess(data));
  } catch (error) {
    dispatch(updateBookFailure('Error updating book'));
  }
};

export const deleteBook = (id: number) => async (dispatch: any) => {
  try {
    dispatch(deleteBookStart());
    await BookService.deleteBook(id);
    dispatch(deleteBookSuccess(id));
  } catch (error) {
    dispatch(deleteBookFailure('Error deleting book'));
  }
};
