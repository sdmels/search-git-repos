import { useEffect } from 'react';
import { Repo } from 'Repo';

const useObservable = (observable: any, setter: Function, loading: Function, errors: Function) => {
  useEffect(() => {
    const subscription = observable.subscribe((result: Repo[]) => {
      if (!result) {
        errors('Error fetching results');
        loading(false);
      } else {
        setter(result);
        loading(false);
        errors('');
      }
    });

    return () => subscription.unsubscribe();
  }, [observable, setter, loading, errors]);
};

export default useObservable;
