import {ICastingItem} from '@/entities/Casting';
import PrivateProfileRepository from '@/repositories/PrivateProfileRepository';
import {IPrivateProfile} from '@/entities/PrivateProfile';


export interface IPresenter {
  repository: PrivateProfileRepository;
}

export interface IPresenterState {
  item: IPrivateProfile | null;
}

export default ({repository}: IPresenter): IPresenterState => {
  return{
    item: repository.getItem(),
  };
};
