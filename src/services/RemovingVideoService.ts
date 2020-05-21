import { IBaseService } from './BaseService';
import {ApiClient} from '@/network/ApiClient';
import {ProfileApi} from '@/network/api/Profile';


export default class RemovingVideoService implements IBaseService {

  public async handle(fileName: string) {
    await ApiClient.shared.request(new ProfileApi.RemoveVideo(fileName));
  }
}
