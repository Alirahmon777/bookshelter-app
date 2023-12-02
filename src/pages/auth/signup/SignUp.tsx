import { useState } from 'react';
import { Input, AuthCard } from '../../../components';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import axios from '../../../helpers/api';
import { v4 } from 'uuid';

const SignUp = () => {
  const [account, setAccount] = useState({ name: '', email: '', password: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        '/signup',
        {
          key: account.email + '_' + v4(),
          name: account.name,
          secret: account.password,
          email: account.email,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      localStorage.setItem('key', response.data.data.key);
      localStorage.setItem('secret', response.data.data.secret);
      setAccount({ email: '', name: '', password: '' });
      window.location.replace('/');
    } catch (error) {
      console.error('Error during request:', error);
    }
  };

  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '15px 0', minHeight: '100vh' }}
    >
      <AuthCard title='Sign Up'>
        <form onSubmit={handleSubmit}>
          <Input
            label='Your name'
            fullWidth
            value={account.name}
            onChange={(e) => setAccount({ ...account, name: e.target.value })}
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
            value={account.email}
            onChange={(e) => setAccount({ ...account, email: e.target.value })}
            sx={{ mt: '16px' }}
            type='email'
          />
          <Input
            label='Your password'
            fullWidth
            placeholder='Enter your password'
            id='password-input'
            sx={{ mt: '16px' }}
            type='password'
            value={account.password}
            onChange={(e) => setAccount({ ...account, password: e.target.value })}
          />
          <Button
            type='submit'
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
