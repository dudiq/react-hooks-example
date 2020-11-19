import { useState, useEffect } from 'react';

function useUniStore(store) {
  const [subscribedFields, setFields] = useState(store.getState());

  useEffect(() => {
    const handleChange = changedFields => {
      setFields(changedFields);
    };

    store.subscribe(handleChange);
    return () => {
      store.unsubscribe(handleChange);
    };
  }, []);

  return [subscribedFields, store];
}

export default useUniStore;
