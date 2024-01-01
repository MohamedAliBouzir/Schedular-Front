import { FC } from 'react';
import Card from '../../components/bootstrap/Card';
import Input from '../../components/bootstrap/forms/Input';

const Login: FC = () => {
  return (
    <div className='card-auth'>
      <Card className='auth'>
        <div className='auth-header h1-bold comicSansMs'>Welcome,</div>
        <div className='auth-header h4 SegoeUi'>Sign in to continue</div>
        <Input type='text' label='Username or Email' name='Username' />
        <Input type='password' label='Password' name='Password' />
      </Card>
    </div>
  );
};

export default Login;
