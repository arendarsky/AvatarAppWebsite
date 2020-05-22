import { IBaseService } from './BaseService';
import {ApiClient} from '@/network/ApiClient';
import {ProfileApi} from '../network/api/Profile';


export default class ProfileDescriptionService implements IBaseService {

  public async handle(description: string) {
    await ApiClient.shared.request(new ProfileApi.SetDescription(description));
  }
}
