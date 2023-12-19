import { useFormik } from 'formik';

const Login = () => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      loginUserName: '',
      loginPassword: '',
    },
    validate: (values) => {
      const errors: { loginUserName?: string; loginPassword?: string } = {};
      if (!values.loginUserName) {
        errors.loginPassword = 'Required';
      }
      if (!values.loginPassword) {
        errors.loginPassword = 'Required';
      }
      return errors;
    },
    onSubmit: (values) => {
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(values, null));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        autoComplete='username'
        value={formik.values.loginUserName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <input
        autoComplete='password'
        value={formik.values.loginPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
    </form>
  );
};

export default Login;
