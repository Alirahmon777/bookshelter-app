import { CircularProgress } from '@mui/material';
import './style.css';

const Loader = () => {
  return (
    <div className='animation-wrapper'>
      <CircularProgress color='primary' size={60} />
    </div>
  );
};

export default Loader;
