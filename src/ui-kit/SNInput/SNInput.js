import './SNInput.css';

const SNInput = ({ label, errorList = [], ...etc }) => {
  const isErrorsExist = errorList.length !== 0;

  const rootClass = ['input', isErrorsExist ? 'is-error' : ''];

  return (
    <label className={rootClass.join(' ')}>
      <div>{label}</div>
      <input {...etc} />
      <div className="input-error">{errorList.join(', ')}</div>
    </label>
  );
};

export default SNInput;
