import { Input, AuthCard } from '../../../components';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '15px 0', minHeight: '100vh' }}
    >
      <AuthCard title='Sign In'>
        <form>
          <Input
            label='Your email'
            placeholder='Enter your email'
            id='email-input'
            sx={{ mt: '28px' }}
            fullWidth
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
          <Input
            label='Your password'
            fullWidth
            placeholder='Enter your password'
            id='pass-input'
            sx={{ mt: '16px' }}
            type='password'
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
            Sign In
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
              transition: 'all 0.15s linear',
              color: '#1B28BC',
            },
            '& a:hover': {
              color: '#6200EE',
            },
          }}
        >
          Don't have an account? <Link to={'/signup'}>Sign up now.</Link>.
        </Typography>
      </AuthCard>
    </div>
  );
};

export default SignIn;
