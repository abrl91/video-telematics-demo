import { Injectable } from '@nestjs/common';
// @ts-ignore
import * as MOCK_VIDEO_DATA from '../data/video-data.json';
// @ts-ignore
import * as MOCK_CLIPS from '../data/event-clips.json';
// @ts-ignore
import * as MOCK_SESSION from '../data/live-session.json';

@Injectable()
export class AppService {
  getAllClips() {
    return MOCK_CLIPS;
  }
  getAllSessions() {
    return MOCK_SESSION;
  }
  getVideoData(vehicleNumber: string) {
    return MOCK_VIDEO_DATA[vehicleNumber];
  }
}
