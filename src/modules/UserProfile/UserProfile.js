import Button from '@/ui-kit/Button';
import Loader from '@/ui-kit/Loader';
import Input from '@/ui-kit/SNInput';
import useUserProfile from './useUserProfile';

const UserProfile = () => {
  const {
    fields,
    isLoading,
    updateLastName,
    updateFirstName,
    bindFirstName,
  } = useUserProfile();

  const canUpdateFirstName = bindFirstName.value !== fields.firstName;

  return (
    <div>
      <div>first name: {fields.firstName}</div>
      <div>last name: {fields.lastName}</div>
      <hr />
      <label>
        first name:
        <Input disabled={isLoading} type="text" {...bindFirstName} />
        <div>
          <small>{bindFirstName.value}</small>
        </div>
      </label>
      <hr />
      <Button disabled={isLoading} onClick={updateLastName}>
        update last
      </Button>
      <Button
        disabled={isLoading || !canUpdateFirstName}
        onClick={updateFirstName}
      >
        update first
      </Button>
      {isLoading && <Loader />}
    </div>
  );
};

export default UserProfile;
