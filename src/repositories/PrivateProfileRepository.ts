import { IBaseRepository } from "./BaseRepository"
import { IPrivateProfile } from "@/entities/PrivateProfile"
import { ApiClient } from "@/network/ApiClient"
import {PrivateProfileApi} from "@/network/api/PrivateProfile"

export default class PrivateProfileRepository implements IBaseRepository {
    constructor() { }

    async fetchItem(): Promise<IPrivateProfile> {
        return await ApiClient.shared.request(new PrivateProfileApi.GetPrivateProfile());
    }
}
