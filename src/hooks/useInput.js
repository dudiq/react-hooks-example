import { useState } from 'react';

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const [errorList, setErrors] = useState([]);

  return {
    value,
    errorList,
    setValue,
    reset: () => setValue(''),
    setErrors,
    bind: {
      value,
      errorList,
      onChange: event => {
        setValue(event.target.value);
      },
    },
  };
};
