import { Button, Tooltip, TooltipProps, ButtonOwnProps } from '@mui/material';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';

interface ICardBtnProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  Icon: React.FC;
  title: string;
  place: TooltipProps['placement'];
  sx: SxProps<Theme>;
  color?: ButtonOwnProps['color'];
}
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
