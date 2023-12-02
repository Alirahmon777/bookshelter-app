import { useEffect, useState } from 'react';
import { Card, Stack, CardContent, Typography, Chip, Tooltip } from '@mui/material';

import CardBtns from './CardBtns';

const BookCard = ({ book }: { book: Book }) => {
  const [showBtns, setShowBtns] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleMouse = (bool: boolean) => {
    if (windowWidth > 899) setShowBtns(bool);
  };

  const handleClick = () => {
    if (windowWidth < 900) setShowBtns(!showBtns);
  };

  const handleDelete = () => {
    confirm('Are you sure you want to delete this item?');
    setShowBtns(true);
  };

  const handleEdit = () => {
    setShowBtns(true);
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));

    return () => {
      window.removeEventListener('resize', () => setWindowWidth(window.innerWidth));
    };
  }, []);

  return (
    <Tooltip
      title={windowWidth > 899 ? 'Hover to show delete and edit buttons' : 'Click to show delete and edit buttons'}
      placement='top'
    >
      <Card
        sx={{
          position: 'relative',
          overflow: { xs: 'hidden', md: 'visible' },
          borderRadius: '12px',
          padding: '32px',
          cursor: 'pointer',
          boxShadow: '0px 4px 24px 0px rgba(51, 51, 51, 0.08)',
          '&:nth-child(3n) .book-card-btns': { right: { xs: 0, md: 'auto' }, left: { xs: 'auto', md: -33 } },
          '&:nth-child(3n) .book-card-btns button:first-child': { borderRadius: { xs: 0, md: '6px 6px 0px 6px;' } },
          '&:nth-child(3n) .book-card-btns button:last-child': { borderRadius: { xs: 0, md: '6px 0px 6px 6px;' } },
        }}
        onClick={handleClick}
        onMouseEnter={() => handleMouse(true)}
        onMouseLeave={() => handleMouse(false)}
      >
        <CardContent sx={{ padding: 0, pb: '0 !important' }}>
          <Typography variant='h3' sx={{ fontSize: 16, color: '#151515' }} fontWeight={700}>
            {book.title}
          </Typography>

          <Stack
            display={'flex'}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            mt={'18px'}
          >
            <Typography sx={{ fontSize: 14, color: '#333' }} fontWeight={500}>
              {book.author}: <span style={{ fontWeight: 400 }}>{book.published}-year</span>
            </Typography>
            <Chip
              label={`${book.pages} pages`}
              sx={{ bgcolor: '#EFE6FD', color: '#9654F4', p: '2px 0px', height: 'auto' }}
            />
          </Stack>
        </CardContent>
        <CardBtns showBtns={showBtns} handleDelete={handleDelete} handleEdit={handleEdit} />
      </Card>
    </Tooltip>
  );
};

export default BookCard;
