import { IBaseService } from "./BaseService";
import {ILike} from '@/entities/Casting';
import {ApiClient} from '@/network/ApiClient';
import {AdminApi} from '@/network/api/Admin';


export default class LikeService implements IBaseService {

  async handle(like: ILike) {
    await ApiClient.shared.request(new AdminApi.Moderate(like));
  }
}
