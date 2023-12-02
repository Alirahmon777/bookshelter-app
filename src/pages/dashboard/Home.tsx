import { useEffect, useState } from 'react';
import { Icons, Input, Loader } from '../../components';
import BookCard from '../../components/book/BookCard';
import Header from '../../components/header/Header';
import { Box, Container, Button, Typography, Alert, AlertTitle, Snackbar } from '@mui/material';
import CreateBookModal from '../../components/book/CreateBookModal';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { fetchMyBooks } from '../../dispatch/book.dispatch';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const { searchedBooks, books, isLoading, error } = useSelector((state: RootState) => state.book);
  const dispatch = useDispatch();
  function getBooks() {
    fetchMyBooks()(dispatch);
  }
  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      {showModal && <CreateBookModal setShowModal={setShowModal} />}

      <Container maxWidth='xl'>
        <Header />
        <main style={{ overflowX: 'hidden' }}>
          <section style={{ paddingBottom: '20px' }}>
            <Box display={'flex'} justifyContent={'space-between'} mt={'48px'}>
              <Typography
                variant='h1'
                fontSize={'36px'}
                fontWeight={700}
                sx={{ '& span': { color: '#6200EE' }, color: '#fefefe' }}
              >
                You’ve got <span>{!books || !books?.length ? 0 : books.length} book</span>
              </Typography>
              <form style={{ display: 'flex', alignItems: 'center', gap: '24px', justifyContent: 'flex-end' }}>
                <Input
                  label={null}
                  id='name'
                  placeholder='Enter your name'
                  type='text'
                  sx={{ '& .MuiFormControl-root': { mt: 0 }, '& .MuiInputBase-root': { minWidth: '320px' } }}
                />
                <Button
                  variant='contained'
                  sx={{
                    py: '10px',
                    px: '24px',
                    height: 'auto',
                    lineHeight: 'normal',
                    backgroundColor: '#6200EE',
                    color: 'white',
                    ':hover': { bgcolor: '#8133F1' },
                    boxShadow: 'none',
                  }}
                  startIcon={<Icons.plusIcon />}
                  color='inherit'
                  onClick={() => setShowModal(true)}
                >
                  Create Book
                </Button>
              </form>
            </Box>
            <Typography mt={'12px'} color={'#fefefe'} fontSize={20}>
              Your task today
            </Typography>
            {!books || !books?.length ? (
              <Typography mt={'42px'} color={'#FF0000'} fontSize={20}>
                You have no books!
              </Typography>
            ) : null}

            <Typography mt={'20px'} color={'#fefefe'} fontSize={20}>
              My Books
            </Typography>
            <Box
              display={'grid'}
              gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }}
              gap={'24px'}
              mt={'16px'}
              mb={'10px'}
            >
              {isLoading && <Loader />}

              {books?.map((book: any, index) => (
                <BookCard key={index} book={book.book} />
              ))}
            </Box>
            {searchedBooks.length ? (
              <>
                <Typography mt={'10px'} color={'#fefefe'} fontSize={20}>
                  Searched Books
                </Typography>
                <Box
                  display={'grid'}
                  gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }}
                  gap={'24px'}
                  mt={'16px'}
                >
                  {isLoading && <Loader />}

                  {searchedBooks.map((book, index) => (
                    <BookCard key={index} book={book} isSearchCard />
                  ))}
                </Box>
              </>
            ) : null}
          </section>
        </main>
        {error && (
          <Snackbar open={!!error} autoHideDuration={2000} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
            <Alert severity='error'>
              <AlertTitle>Error</AlertTitle>
              {error} — <strong>check it out!</strong>
            </Alert>
          </Snackbar>
        )}
      </Container>
    </>
  );
};

export default Home;
