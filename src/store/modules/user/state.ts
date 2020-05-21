export interface IUserState {
  userToken: string | null;
  invalid: boolean;
  isConfirmed: boolean;
}

export const initialState = (): IUserState => {
  const tokenStringFromStorage = localStorage.getItem('user-token');
  return {
    invalid: false,
    userToken: tokenStringFromStorage,
    isConfirmed: false,
  };
};
