import { IBaseService } from './BaseService';
import {ILike} from '@/entities/Casting';
import {ApiClient} from '@/network/ApiClient';
import {CastingApi} from '@/network/api/Casting';


export default class LikeService implements IBaseService {

  public async handle(like: ILike) {
    await ApiClient.shared.request(new CastingApi.SetLike(like));
  }
}
