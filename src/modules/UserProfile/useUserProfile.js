import { useCallback, useState } from 'react';
import useUniStore from '@/hooks/useUniStore';
import UserStore from '@/store/UserStore/UserStore';
import { useInput } from '@/hooks/useInput';

const useUserProfile = () => {
  const [isLoading, updateLoading] = useState(false);
  const [fields, userStore] = useUniStore(UserStore);

  const { value: firstName, bind: bindFirstName } = useInput(
    fields.firstName,
  );

  const updateFirstName = useCallback(async () => {
    updateLoading(true);
    await userStore.saveFirstName(firstName);
    updateLoading(false);
  }, [firstName]);

  const updateLastName = useCallback(async () => {
    updateLoading(true);
    await userStore.saveLastName('new last name');
    updateLoading(false);
  }, [userStore]);

  return {
    fields,
    isLoading,
    bindFirstName,
    updateFirstName,
    updateLastName,
  };
};

export default useUserProfile;
