import { Module } from '@nestjs/common';

import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';

import { LinkModule } from '@module/Link/link.module';

@Module({
  imports: [LinkModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
