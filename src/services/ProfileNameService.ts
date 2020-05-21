import { IBaseService } from './BaseService';
import {ApiClient} from '@/network/ApiClient';
import {ProfileApi} from '@/network/api/Profile';


export default class ProfileNameService implements IBaseService {

  public async handle(name: string) {
    await ApiClient.shared.request(new ProfileApi.SetName(name));
  }
}
