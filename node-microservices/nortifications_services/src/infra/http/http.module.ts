import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

import { NotificationsController } from './controllers/notifications.controller';
import { NotificationsProviders } from './providers/notifications.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    {
      provide: DatabaseModule,
      useClass: DatabaseModule,
    },
    ...NotificationsProviders,
  ],
})
export class HttpModule {}
