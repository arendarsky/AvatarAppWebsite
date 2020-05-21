import store from '@/store';


export interface IPresenterState {
  isSuccess: boolean | null;
}

export default (): IPresenterState => {
  return{
    isSuccess: store.state.registration.isSuccess,
  };
};
