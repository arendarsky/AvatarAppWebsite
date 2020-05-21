export interface IVideo {
  name: string;
  isActive: boolean;
  isApproved: boolean | null;
  startTime: number;
  endTime: number;
}
