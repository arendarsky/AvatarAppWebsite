export interface IRegistrationState {
    isSuccess: boolean | null;
}

export const initialState = (): IRegistrationState => {
    return {
        isSuccess: null,
    };
};
