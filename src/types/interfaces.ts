interface IRoute {
  path: string;
  element: React.JSX.Element;
}

interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
  published: number;
  pages: number;
}

interface BookState {
  isLoading: boolean;
  books: Book[];
  book: Book | null;
  error: string | null;
}
