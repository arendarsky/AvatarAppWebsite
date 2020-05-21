import { IVideo } from './Video';
import ProfileNameService from '@/services/ProfileNameService';
import ProfileDescriptionService from '@/services/ProfileDescriptionService';
import SendingVideoToCastingService from '@/services/SendingVideoToCastingService';
import RemovingVideoService from '@/services/RemovingVideoService';

export interface IPrivateProfile {
    id: number;
    name: string;
    description: string;
    profilePhoto: string;
    likesNumber: number;
    videos: IVideo[];
}

export class PrivateProfileEntity {
  private profileNameService: ProfileNameService;
  private profileDescriptionService: ProfileDescriptionService;
  private sendingVideoToCastingService: SendingVideoToCastingService;
  private removingVideoService: RemovingVideoService;

  constructor() {
    this.profileNameService = new ProfileNameService();
    this.profileDescriptionService = new ProfileDescriptionService();
    this.sendingVideoToCastingService = new SendingVideoToCastingService();
    this.removingVideoService = new RemovingVideoService();
  }

  public async saveProfile(name: string, description: string) {
    await this.profileNameService.handle(name);
    await this.profileDescriptionService.handle(description);
  }

  public async sendVideoToCasting(fileName: string) {
    await this.sendingVideoToCastingService.handle(fileName);
  }

  public async removeVideo(fileName: string){
    await this.removingVideoService.handle(fileName);
  }
}
