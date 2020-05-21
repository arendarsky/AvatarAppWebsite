import { IBaseService } from './BaseService';
import {ApiClient} from '@/network/ApiClient';
import {ProfileApi} from '@/network/api/Profile';


export default class SendingVideoToCastingService implements IBaseService {

  public async handle(fileName: string) {
    await ApiClient.shared.request(new ProfileApi.SendVideoToCasting(fileName));
  }
}
