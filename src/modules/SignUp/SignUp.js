import Input from '@/ui-kit/SNInput';
import Button from '@/ui-kit/Button';
import useSignUp from '@/modules/SignUp/useSignUp';

import './SignUp.css';
import Header from '@/ui-kit/Header';
import FormField from '@/ui-kit/Form/FormField';

function SignUp() {
  const { isLoading, binds, onSignUp } = useSignUp();

  const onSubmit = e => {
    e.preventDefault();

    if (isLoading) return;
    onSignUp();
  };

  return (
    <div className="sign-up-module">
      <Header>Sign Up</Header>
      <form onSubmit={onSubmit}>
        <FormField>
          <Input label="login" type="text" {...binds.bindLogin} />
        </FormField>
        <FormField>
          <Input label="email" type="text" {...binds.bindEmail} />
        </FormField>
        <FormField>
          <Input label="password" type="password" {...binds.bindPwd} />
        </FormField>
        <Button disabled={isLoading} type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
}

export default SignUp;
