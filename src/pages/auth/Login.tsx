import { useFormik } from 'formik';
import Card from '../../components/bootstrap/Card';
import Input from '../../components/bootstrap/forms/Input';
import Button from '../../components/bootstrap/Button';
import { fetcher } from '../../helpers/helpers';
import useProvideAuth from '../../hooks/SWR/useAuthProvide';

const Login = () => {
  const auth = useProvideAuth();
  const formik = useFormik({
    initialValues: {
      email: undefined,
      password: undefined,
    },
    onSubmit: async (values) => {
      const data = await fetcher(`${import.meta.env.VITE_BACK_URL}/auth/sign-in`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(values),
      });
      auth.login(JSON.stringify(data.access_token));
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
