import ModerationRepository from '@/repositories/ModerationRepository';
import {IModerationItem} from '@/entities/Moderation';


export interface IPresenter {
  moderationRepository: ModerationRepository;
}

export interface IPresenterState {
  item: IModerationItem | null;
}

export default ({moderationRepository}: IPresenter): IPresenterState => {
  return{
    item: moderationRepository.getItem(),
  };
};
