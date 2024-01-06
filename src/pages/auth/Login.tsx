import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import Card from '../../components/bootstrap/Card';
import Input from '../../components/bootstrap/forms/Input';
import Button from '../../components/bootstrap/Button';
import useAuth from '../../hooks/SWR/useAuth';
// import useProvideAuth from '../../hooks/SWR/useAuthProvide';

const Login = () => {
  // const auth = useProvideAuth();

  const { login } = useAuth();
  const navigate = useNavigate();
  const navigateHome = useCallback(() => navigate('/'), [navigate]);
  const formik = useFormik({
    initialValues: {
      email: undefined,
      password: undefined,
    },
    onSubmit: async (values) => {
      login(values);
      navigateHome();
    },
  });
  return (
    <div className='card-auth'>
      <Card className='auth'>
        <div className='auth-header h1-bold comicSansMs'>Welcome,</div>
        <div className='auth-header h4 SegoeUi'>Sign in to continue</div>
        <Input
          type='text'
          name='email'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <Input
          type='password'
          name='password'
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <Button onClick={formik.handleSubmit}>Login</Button>
      </Card>
    </div>
  );
};

export default Login;
