import { Box } from '@mui/material';
import CardBtn from './CardBtn';
import { Icons } from '..';
interface ICardBtnsProps {
  showBtns: boolean;
  handleDelete: React.MouseEventHandler<HTMLButtonElement>;
  handleEdit: React.MouseEventHandler<HTMLButtonElement>;
}
const CardBtns = ({ showBtns, handleDelete, handleEdit }: ICardBtnsProps) => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      className='book-card-btns'
      position={'absolute'}
      zIndex={50}
      top={{ xs: 0, md: 16 }}
      sx={{
        pointerEvents: showBtns ? 'auto' : 'none',
        opacity: showBtns ? '1' : '0',
        right: { xs: 0, md: -33 },
        transition: 'all 0.2s linear',
      }}
    >
      <CardBtn
        sx={{
          bgcolor: '#FF4D4F',
          borderRadius: { xs: 0, md: '6px 6px 6px 0px;' },
          ':hover': { bgcolor: '#eb7172' },
        }}
        title='Delete'
        place='top'
        Icon={Icons.deleteIcon}
        onClick={handleDelete}
      />
      <CardBtn
        sx={{
          bgcolor: '#6200EE',
          borderRadius: { xs: 0, md: '0px 6px 6px 6px;' },
          ':hover': { bgcolor: '#8133F1' },
          mt: '2px',
        }}
        title='Edit'
        place='bottom'
        Icon={Icons.editIcon}
        onClick={handleEdit}
      />
    </Box>
  );
};

export default CardBtns;
