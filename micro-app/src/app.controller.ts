import { Body, Controller, Logger, Post } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MathService } from './math/math.service';

@Controller()
export class AppController {
  private logger = new Logger('AppController')
  constructor(private mathService: MathService) {}

  @MessagePattern('add')
  accumulate(data: number[]) {
    this.logger.log('Adding ' + data.toString())
    return this.mathService.accumulate(data);
  }
}
