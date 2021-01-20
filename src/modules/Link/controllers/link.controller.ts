import { Controller, Get, Render } from '@nestjs/common';
import { LinkService } from '../services/link.service';

@Controller('link')
export class LinkController {
  constructor(private readonly linkService: LinkService) {}

  @Get('encurtador')
  @Render('Link/index')
  getHello(): Object {
    return { message: this.linkService.getHello() };
  }
}
