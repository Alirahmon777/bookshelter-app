import { AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from '../helpers/api';
import { IAxiosRes, IBook } from '../types/interfaces';
import { makeSign } from '../helpers/makeSign';

const handleRequest = async <T>(request: Promise<AxiosResponse<IAxiosRes<T>>>): Promise<T> => {
  try {
    const response = await request;

    return response.data.data;
  } catch (error) {
    console.error('Error occurred:', error);
    throw error;
  }
};

const config = (path: string = '/books', method: string, body?: IBook): AxiosRequestConfig => ({
  headers: { 'Content-Type': 'application/json', Key: localStorage.getItem('key'), Sign: makeSign(path, method, body) },
});

const BookService = {
  postBook: async (formData: IBook): Promise<IBook> => {
    const withISBN = { ...formData, isbn: '9781234567897' };
    return handleRequest<IBook>(axios.post('/books', withISBN, config('/books', 'POST', withISBN)));
  },

  getBook: async (): Promise<IBook[]> => {
    return handleRequest<IBook[]>(axios.get('/books', config('/books', 'GET')));
  },

  getBookByTitle: async (title: string): Promise<IBook[]> => {
    return handleRequest<IBook[]>(axios.get(`/books/${title}`, config(`/books${title ? `/${title}` : '/'}`, 'GET')));
  },

  updateBook: async (id: number, updatedData: Partial<IBook>): Promise<IBook> => {
    return handleRequest<IBook>(axios.put(`/books/${id}`, updatedData));
  },

  deleteBook: async (id: number): Promise<IBook[]> => {
    return handleRequest<IBook[]>(axios.delete(`/books/${id}`));
  },
};

export default BookService;
