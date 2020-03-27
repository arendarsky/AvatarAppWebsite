export interface IUserState {
    userToken: string | null;
    invalid: boolean;
}

export const initialState = (): IUserState => {
    const tokenStringFromStorage = sessionStorage.getItem("user-token");
    return {
        invalid: false,
        userToken: tokenStringFromStorage
    }
}
