import { IBaseService } from './BaseService';
import {ApiClient} from '@/network/ApiClient';
import {ProfileApi} from '@/network/api/Profile';
import {AdminApi} from "@/network/api/Admin";
import {injectable} from "inversify";

@injectable()
export default class SetSemifinalistService implements IBaseService {

  public async handle() {
    await ApiClient.shared.request(new AdminApi.SetSemifinalist());
  }
}
