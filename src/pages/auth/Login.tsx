import FormGroup from '../../components/bootstrap/forms/FormGroup';
import Input from '../../components/bootstrap/forms/Input';

const Login = () => {
  return (
    <div>
      <FormGroup id='Username' isFloating label='Your username'>
        <Input type='email' autoComplete='email' />
      </FormGroup>
    </div>
  );
};

export default Login;
