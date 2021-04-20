import { Body, Controller, Logger, Post } from '@nestjs/common';
import { MathService } from './math/math.service';

@Controller()
export class AppController {
  private logger = new Logger('AppController')
  constructor(private mathService: MathService) {}

  @Post('add')
  accumulate(@Body('data') data: number[]) {
    this.logger.log('Adding ' + data)
    return this.mathService.accumulate(data);
  }
}
