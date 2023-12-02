import { Dispatch, SetStateAction } from 'react';
import { IBook } from '../../types/interfaces';
import { Input } from '..';
import { Button, Stack } from '@mui/material';

interface IFormModal {
  newBook: IBook;
  setNewBook: Dispatch<SetStateAction<IBook>>;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  handleSubmit: React.FormEventHandler;
}
const FormModal = ({ newBook, setNewBook, setShowModal, handleSubmit }: IFormModal) => {
  return (
    <form onSubmit={handleSubmit}>
      <Input
        label='Title'
        fullWidth
        value={newBook.title}
        onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        placeholder='Enter your title'
        id='title-input'
        sx={{ mt: '28px' }}
        type='text'
      />
      <Input
        label='Author'
        fullWidth
        value={newBook.author}
        onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        placeholder='Enter your author'
        id='author-input'
        sx={{ mt: '28px' }}
        type='text'
      />
      <Input
        label='Cover'
        fullWidth
        value={newBook.cover}
        onChange={(e) => setNewBook({ ...newBook, cover: e.target.value })}
        placeholder='Enter your cover'
        id='cover-input'
        sx={{ mt: '28px' }}
        type='text'
      />
      <Input
        label='Published'
        fullWidth
        value={newBook.published}
        onChange={(e) => setNewBook({ ...newBook, published: +e.target.value })}
        placeholder='Enter your published'
        id='published-input'
        sx={{ mt: '28px' }}
        type='number'
      />
      <Input
        label='Pages'
        fullWidth
        value={newBook.pages}
        onChange={(e) => setNewBook({ ...newBook, pages: +e.target.value })}
        placeholder='Enter your pages'
        id='pages-input'
        sx={{ mt: '28px' }}
        type='number'
      />

      <Stack direction={'row'} justifyContent={'space-between'} mt={'28px'}>
        <Button
          variant='outlined'
          sx={{
            py: '10px',
            px: '64px',
            height: 'auto',
            lineHeight: 'normal',
            borderColor: '#6200EE',
            color: '#6200EE',
            ':hover': { bgcolor: '#8133F1', color: 'white' },
            boxShadow: 'none',
          }}
          color='primary'
          onClick={() => setShowModal(false)}
        >
          Close
        </Button>
        <Button
          variant='contained'
          sx={{
            py: '10px',
            px: '64px',
            height: 'auto',
            lineHeight: 'normal',
            backgroundColor: '#6200EE',
            color: 'white',
            ':hover': { bgcolor: '#8133F1', boxShadow: 'none' },
            boxShadow: 'none',
            textTransform: 'none',
          }}
          type='submit'
          color='inherit'
        >
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default FormModal;
