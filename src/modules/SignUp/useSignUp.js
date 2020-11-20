import { useCallback, useState } from 'react';
import { useInput } from '@/hooks/useInput';
import { signUpUser } from '@/services/user';

const useSignUp = () => {
  // TODO: extract from here out there
  const [isLoading, updateLoading] = useState(false);
  const { value: email, setErrors: setErrorsEmail, bind: bindEmail } = useInput(
    '',
  );
  const { value: login, setErrors: setErrorsLogin, bind: bindLogin } = useInput(
    '',
  );
  const { value: pwd, setErrors: setErrorsPwd, bind: bindPwd } = useInput('');

  const errorsMap = {
    email: setErrorsEmail,
    login: setErrorsLogin,
    pwd: setErrorsPwd,
  };

  // TODO: extract from here out there
  const setServerErrors = (serverErrorsMap = {}) => {
    Object.keys(errorsMap).forEach(errorKey => {
      const serverErrorsList = serverErrorsMap[errorKey] || [];
      errorsMap[errorKey](serverErrorsList);
    });
  };

  const user = {
    email,
    login,
    pwd,
  };

  const onSignUp = useCallback(async () => {
    setServerErrors();

    try {
      updateLoading(true);
      await signUpUser(user);
    } catch (internalError) {
      setServerErrors(internalError.errors);
    } finally {
      updateLoading(false);
    }
  }, [email, login, pwd]);

  const binds = {
    bindEmail,
    bindLogin,
    bindPwd,
  };

  return {
    isLoading,
    binds,
    onSignUp,
  };
};

export default useSignUp;
