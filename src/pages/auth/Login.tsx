import { useFormik } from 'formik';
import Card from '../../components/bootstrap/Card';
import Input from '../../components/bootstrap/forms/Input';
import Button from '../../components/bootstrap/Button';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      Username: undefined,
      Password: undefined,
    },
    onSubmit: (values) => {
      // eslint-disable-next-line no-console
      console.log(JSON.stringify(values, null));
    },
  });
  return (
    <div className='card-auth'>
      <Card className='auth'>
        <div className='auth-header h1-bold comicSansMs'>Welcome,</div>
        <div className='auth-header h4 SegoeUi'>Sign in to continue</div>
        <Input
          type='text'
          name='Username'
          onChange={formik.handleChange}
          value={formik.values.Username}
        />
        <Input
          type='password'
          name='Password'
          onChange={formik.handleChange}
          value={formik.values.Password}
        />
        <Button onClick={formik.handleSubmit}>Login</Button>
      </Card>
    </div>
  );
};

export default Login;
