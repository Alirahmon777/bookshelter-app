import { useState } from 'react';
import { Card, Typography, Stack, Button, Box } from '@mui/material';
import CloseIcon from '../../assets/svgs/clear-icon.svg';
import { IBook } from '../../types/interfaces';
import FormModal from './FormModal';
import { useDispatch } from 'react-redux';
import { addBook } from '../../dispatch/book.dispatch';

type SetShowModalType = React.Dispatch<React.SetStateAction<boolean>>;

const CreateBookModal = ({ setShowModal }: { setShowModal: SetShowModalType }) => {
  const [newBook, setNewBook] = useState<IBook>({ title: '', author: '', cover: '', pages: null, published: null });
  const dispatch = useDispatch();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addBook(newBook)(dispatch);
    setShowModal(false);
  };
  return (
    <Box
      width={'100%'}
      minHeight={'100vh'}
      overflow={'auto'}
      bgcolor={'rgba(21, 21, 21, 0.48)'}
      zIndex={999}
      position={'fixed'}
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Box height={'100vh'} minHeight={'100vh'} py={'20px'} className={'create-modal-wrapper'}>
        <Card
          sx={{
            position: 'relative',
            overflow: 'auto',
            borderRadius: '12px',
            minWidth: 275,
            maxWidth: '430px',
            padding: '24px 28px',
            boxShadow: '0px 4px 32px 0px rgba(51, 51, 51, 0.04)',
          }}
        >
          <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Typography variant='h3' fontSize={20} fontWeight={600}>
              Create a book
            </Typography>
            <Button
              sx={{ height: 'auto', p: '6px', minWidth: 'auto' }}
              color='inherit'
              onClick={() => setShowModal(false)}
            >
              <img src={CloseIcon} alt={'close-icon'} />
            </Button>
          </Stack>
          <FormModal
            setNewBook={setNewBook}
            newBook={newBook}
            setShowModal={setShowModal}
            handleSubmit={handleSubmit}
          />
        </Card>
      </Box>
    </Box>
  );
};

export default CreateBookModal;
