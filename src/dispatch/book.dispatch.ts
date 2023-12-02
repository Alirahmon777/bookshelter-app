import BookService from '../service/book.service';
import {
  addBookFailure,
  addBookStart,
  addBookSuccess,
  deleteBookFailure,
  deleteBookStart,
  deleteBookSuccess,
  fetchBookByTitleSuccess,
  fetchBooksFailure,
  fetchBooksStart,
  fetchBooksSuccess,
  updateBookFailure,
  updateBookStart,
  updateBookSuccess,
} from '../slice/book.slice';
import { IBook } from '../types/interfaces';

export const fetchMyBooks = () => async (dispatch: any) => {
  try {
    dispatch(fetchBooksStart());
    const data = await BookService.getBook();
    dispatch(fetchBooksSuccess(data));
  } catch (error) {
    dispatch(fetchBooksFailure('Error fetching books'));
  }
};

export const SearchBooks = (title: string) => async (dispatch: any) => {
  try {
    dispatch(fetchBooksStart());
    const data = await BookService.getBookByTitle(title);
    dispatch(fetchBookByTitleSuccess(data));
  } catch (error) {
    dispatch(fetchBooksFailure('Error fetching books'));
  }
};

export const addBook = (formData: IBook) => async (dispatch: any) => {
  try {
    dispatch(addBookStart());
    const data = await BookService.postBook(formData);
    dispatch(addBookSuccess(data));
  } catch (error) {
    dispatch(addBookFailure('Error adding book'));
  }
};

export const updateBook = (id: number, updatedData: Partial<IBook>) => async (dispatch: any) => {
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
