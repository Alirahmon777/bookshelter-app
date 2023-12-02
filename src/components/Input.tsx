import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';

interface IInputProps {
  id: string;
  label: string | null;
  placeholder: string;
  sx?: SxProps<Theme>;
  type: string;
  fullWidth?: boolean;
}
const Input = ({ label, id, placeholder, sx, type, fullWidth = false }: IInputProps) => {
  return (
    <FormControl variant='standard' sx={sx} fullWidth={fullWidth}>
      {label && (
        <InputLabel shrink htmlFor={id} sx={{ fontSize: '14px', fontWeight: 500, color: '#151515' }}>
          {label}
        </InputLabel>
      )}
      <TextField
        fullWidth={fullWidth}
        hiddenLabel
        id={id}
        type={type}
        placeholder={placeholder}
        sx={{
          mt: '16px',
          '& :focus': { borderColor: '#151515', outlineColor: '#151515' },
          '& .MuiInputBase-root': {
            borderRadius: '6px',
          },
          '& .MuiInputBase-input': {
            borderRadius: '6px',
            padding: '14px 16px',
            width: '100%',
            lineHeight: '19px',
            height: 'auto',
            bgcolor: '#FEFEFE',
            boxShadow: '0px 4px 18px 0px rgba(51, 51, 51, 0.04)',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#EBEBEB',
          },
        }}
      />
    </FormControl>
  );
};

export default Input;
