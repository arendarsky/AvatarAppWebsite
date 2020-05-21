import CastingRepository from '@/repositories/CastingRepository';
import {ICastingItem} from '@/entities/Casting';


export interface IPresenter {
  castingRepository: CastingRepository;
}

export interface IPresenterState {
  item: ICastingItem | null;
}

export default ({castingRepository}: IPresenter): IPresenterState => {
  return{
    item: castingRepository.getItem(),
  };
};
