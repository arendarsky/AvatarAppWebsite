import UserTokenRepository from '@/repositories/UserTokenRepository';
import store from '@/store';


export interface IPresenter {
  repository: UserTokenRepository;
}

export interface IPresenterState {
  isLogin: boolean;
  invalid: boolean;
  isConfirmed: boolean;
}

export default ({repository}: IPresenter): IPresenterState => {
  return {
    isLogin: !!repository.getItem(),
    invalid: store.state.user.invalid,
    isConfirmed: store.state.user.isConfirmed,
  };
};
