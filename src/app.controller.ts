import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('telematics')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('clips')
  getClips(): string {
    return this.appService.getAllClips();
  }
  @Get('sessions')
  getSessions() {
    return this.appService.getAllSessions();
  }
  @Get('clips/:vehicleNumber')
  getClipData(@Param('vehicleNumber') vehicleNumber: string) {
    return this.appService.getVideoData(vehicleNumber);
  }
  @Get('sessions/:vehicleNumber')
  getSessionData(@Param('vehicleNumber') vehicleNumber: string) {
    return this.appService.getVideoData(vehicleNumber);
  }
}
