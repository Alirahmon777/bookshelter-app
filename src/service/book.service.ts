import { AxiosResponse } from 'axios';
import axios from '../helpers/api';

const handleRequest = async <T>(request: Promise<AxiosResponse<T>>): Promise<T> => {
  try {
    const response = await request;
    return response.data;
  } catch (error) {
    console.error('Error occurred:', error);
    throw error;
  }
};

const BookService = {
  postBook: async (formData: FormData): Promise<Book> => {
    return handleRequest(axios.post('/books', formData));
  },

  getBook: async (): Promise<Book[]> => {
    return handleRequest(axios.get('/books'));
  },

  getBookById: async (id: number): Promise<Book> => {
    return handleRequest(axios.get(`/books/${id}`));
  },

  updateBook: async (id: number, updatedData: Partial<Book>): Promise<Book> => {
    return handleRequest(axios.put(`/books/${id}`, updatedData));
  },

  deleteBook: async (id: number): Promise<void> => {
    return handleRequest(axios.delete(`/books/${id}`));
  },
};

export default BookService;
