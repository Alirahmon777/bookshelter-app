import './style.css';
import notFound from '../../assets/images/not-found.png';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  const handleReload = () => window.location.reload();
  const handleHome = () => navigate('/');
  return (
    <div className='notfound'>
      <div className='notfound-wrapper'>
        <img src={notFound} alt='404 notfound image' />
        <div className='notfound-btns'>
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
            color='inherit'
            onClick={handleHome}
          >
            Go Home Page
          </Button>
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
            onClick={handleReload}
          >
            Reload Page
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
