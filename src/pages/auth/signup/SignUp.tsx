import { Input, AuthCard } from '../../../components';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '15px 0', minHeight: '100vh' }}
    >
      <AuthCard title='Sign Up'>
        <form>
          <Input
            label='Your name'
            fullWidth
            placeholder='Enter your name'
            id='name-input'
            sx={{ mt: '28px' }}
            type='text'
          />
          <Input
            label='Your email'
            fullWidth
            placeholder='Enter your email'
            id='email-input'
            sx={{ mt: '16px' }}
            type='email'
          />
          <Input
            label='Your username'
            fullWidth
            placeholder='Enter your username'
            id='username-input'
            sx={{ mt: '16px' }}
            type='text'
          />
          <Button
            variant='contained'
            sx={{
              mt: '36px',
              py: '10px',
              height: 'auto',
              lineHeight: 'normal',
              backgroundColor: '#6200EE',
              color: 'white',
              ':hover': { bgcolor: '#8133F1' },
              boxShadow: 'none',
            }}
            fullWidth
            color='inherit'
          >
            Sign Up
          </Button>
        </form>
        <Typography
          textAlign={'center'}
          mt={'12px'}
          fontSize={'14px'}
          fontWeight={300}
          lineHeight={'120%'}
          sx={{
            color: '#333',
            '& a': {
              color: '#6200EE',
            },
          }}
        >
          Already signed up? <Link to={'/signin'}>Go to sign in</Link>.
        </Typography>
      </AuthCard>
    </div>
  );
};

export default SignUp;
