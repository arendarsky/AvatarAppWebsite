import UserTokenRepository from "@/repositories/UserTokenRepository"

export interface IUserCredentials {
    email: string;
    password: string;
}

export interface IRegistrationData extends IUserCredentials {
    name: string
}

export interface IUserToken {
    token: string | null;
}

export class UserEntity {
    repository: UserTokenRepository;
    constructor() {
        this.repository = new UserTokenRepository();
    }

    async login(credentials: IUserCredentials) {
        const token = await this.repository.fetchItem(credentials);
        this.repository.saveItem(token);
    }

    logout(){
      this.repository.clearItem();
    }
}
