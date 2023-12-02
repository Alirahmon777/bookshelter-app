import { Button, Tooltip } from '@mui/material';
import { ICardBtnProps } from '../../types/interfaces';

const CardBtn = ({ onClick, Icon, title, place, sx, color }: ICardBtnProps) => {
  return (
    <Tooltip title={title} placement={place}>
      <Button
        onClick={onClick}
        color={color}
        sx={{ minWidth: 'auto', p: '8px', boxShadow: '0px 6px 32px 0px rgba(21, 21, 21, 0.48)', ...sx }}
      >
        <Icon />
      </Button>
    </Tooltip>
  );
};

export default CardBtn;
