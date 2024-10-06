import { Module } from '@nestjs/common';
import { NotificationRepository } from '@core/application/repositories/notification-repository';
import { PrismaNotificationRepository } from './prisma/repositories/prisma-notifications-repository';

import { PrismaService } from './prisma/prisma.service';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationRepository,
      useClass: PrismaNotificationRepository,
    },
  ],
  exports: [NotificationRepository],
})
export class DatabaseModule {}
