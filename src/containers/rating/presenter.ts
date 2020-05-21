import RatingRepository from '@/repositories/RatingRepository';
import {IRatingItem} from '@/entities/Rating';


export interface IPresenter {
  ratingRepository: RatingRepository;
}

export interface IPresenterState {
  items: IRatingItem[];
}

export default ({ratingRepository}: IPresenter): IPresenterState => {
  return{
    items: ratingRepository.getItems(),
  };
};
