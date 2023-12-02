import { TooltipProps, ButtonOwnProps } from '@mui/material';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';

export interface IRoutes {
  path: string;
  element: React.JSX.Element;
}

export interface IAxiosRes<T> {
  data: T;
  isOk: boolean;
  message: string;
}
export interface IBook {
  id?: number;
  title: string;
  author: string;
  cover: string;
  published: number | null;
  pages: number | null;
  isbn?: string;
}

export interface IBookState {
  isLoading: boolean;
  books: IBook[];
  searchedBooks: IBook[];
  error: string | null;
}

export interface IAuthCardProps {
  title: string;
  children?: React.ReactNode;
}

export interface ICardBtnProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  Icon: React.FC;
  title: string;
  place: TooltipProps['placement'];
  sx: SxProps<Theme>;
  color?: ButtonOwnProps['color'];
}

export interface ICardBtnsProps {
  showBtns: boolean;
  handleDelete: React.MouseEventHandler<HTMLButtonElement>;
  handleEdit: React.MouseEventHandler<HTMLButtonElement>;
}

export interface IInputProps {
  id: string;
  label: string | null;
  placeholder: string;
  sx?: SxProps<Theme>;
  type: string;
  fullWidth?: boolean;
  value?: string | undefined | null | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
