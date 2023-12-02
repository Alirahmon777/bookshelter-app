import { Icons, Input } from '../../components';
import BookCard from '../../components/book/BookCard';
import Header from '../../components/header/Header';
import { Box, Container, Button, Typography } from '@mui/material';

const books: Book[] = [
  {
    id: 1,
    title: 'Raspberry Pi User Guide',
    cover: '',
    author: 'Eben Upton',
    published: 2023,
    pages: 100,
  },
  {
    id: 1,
    title: 'Raspberry Pi User Guide',
    cover: '',
    author: 'Eben Upton',
    published: 2023,
    pages: 100,
  },
  {
    id: 1,
    title: 'Raspberry Pi User Guide',
    cover: '',
    author: 'Eben Upton',
    published: 2023,
    pages: 100,
  },
];

const Home = () => {
  return (
    <>
      <Container maxWidth='xl'>
        <Header />
        <main>
          <section>
            <Box display={'flex'} justifyContent={'space-between'} mt={'48px'}>
              <Typography
                variant='h1'
                fontSize={'36px'}
                fontWeight={700}
                sx={{ '& span': { color: '#6200EE' }, color: '#fefefe' }}
              >
                You’ve got <span>7 book</span>
              </Typography>
              <form
                action=''
                style={{ display: 'flex', alignItems: 'center', gap: '24px', justifyContent: 'flex-end' }}
              >
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
                >
                  Create Book
                </Button>
              </form>
            </Box>
            <Typography mt={'12px'} color={'#fefefe'} fontSize={20}>
              Your task today
            </Typography>
            <Box
              display={'grid'}
              gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }}
              gap={'24px'}
              mt={'36px'}
            >
              {books.map((book, index) => (
                <BookCard key={index} book={book} />
              ))}
            </Box>
          </section>
        </main>
      </Container>
    </>
  );
};

export default Home;
