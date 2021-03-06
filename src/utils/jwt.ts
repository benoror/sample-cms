const STORAGE_KEY = `${process.env.GATSBY_MY_APP_ID}:jwt`;

export const setJWT = (jwt: string) => {
  window.localStorage.setItem(STORAGE_KEY, jwt);
};

export const getJWT = (): string | null => {
  return window.localStorage.getItem(STORAGE_KEY);
};
