import React from "react";
import category from "./category";
import dishe from "./dishe";
import receipt from "./receipt";

type ApiT = typeof category & typeof dishe & typeof receipt;

type ApiSelector<T> = T extends object
  ? { [K in keyof T]: K | ApiSelector<T[K]> }[keyof T]
  : never;

const Api = Object.assign(category, dishe, receipt);

function useApi<T> (api: ApiSelector<ApiT>, initialState?: any) {
  const [data, setData] = React.useState<T>(initialState);
  const [isLoading, setIsLoading] = React.useState<boolean>();
  const [error, setError] = React.useState<any>();

  React.useEffect(() => {
    setIsLoading(true);
    Api[api]().then((data: T) => {
       setData(data);
    }).catch((e) => {
        setError(e)
    }).finally(() => {
        setIsLoading(false);
    });
  }, []);

  return {
    data,
    isLoading,
    error
  };
}
export default useApi;