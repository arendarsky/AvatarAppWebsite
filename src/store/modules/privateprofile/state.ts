import {IPrivateProfile} from '@/entities/PrivateProfile';

export interface IPrivateProfileState {
  item: IPrivateProfile | null;
}

export const initialState = (): IPrivateProfileState => {
  return {
    item: null,
  };
};
