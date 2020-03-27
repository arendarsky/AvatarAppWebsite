import { IVideo } from "./Video"

export interface IPrivateProfile {
    id: number;
    name: string;
    description: string;
    profilePhoto: string;
    likesNumber: number;
    videos: Array<IVideo>;
}