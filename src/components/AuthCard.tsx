import { Card, Stack, CardContent, Button, Typography, Divider } from '@mui/material';
import { Icons } from '.';
import { IAuthCardProps } from '../types/interfaces';

export default function AuthCard({ title, children }: IAuthCardProps): React.JSX.Element {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 440, borderRadius: '12px', padding: '48px 28px' }}>
      <CardContent sx={{ padding: 0 }}>
        <Typography variant='h3' sx={{ fontSize: 36, color: '#151515' }} fontWeight={700} textAlign={'center'}>
          {title}
        </Typography>
        <Stack mt={'36px'} gap={'16px'} sx={{ fontWeight: 500, textTransform: 'none', color: '#151515' }}>
          <Button variant='outlined' sx={{}} startIcon={<Icons.google />} color='inherit'>
            Continue with Google
          </Button>
          <Button variant='outlined' sx={{}} startIcon={<Icons.facebook />} color='inherit'>
            Continue with Facebook
          </Button>
        </Stack>
        <Divider
          sx={{
            mt: '28px',
            textTransform: 'uppercase',
            fontSize: '12px',
            '&::before, &::after': {
              borderColor: 'inherit',
            },
          }}
        >
          Or
        </Divider>
      </CardContent>
      {children}
    </Card>
  );
}
