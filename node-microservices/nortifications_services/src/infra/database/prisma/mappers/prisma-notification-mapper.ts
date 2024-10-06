import { Notification as RawNotification } from '@prisma/client';
import { Notification } from 'src/core/entities/notification';
import { Content } from '@core/entities/content';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content.value,
      category: notification.category,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
    };
  }

  static toDomain(raw: RawNotification): Notification {
    return new Notification(
      {
        category: raw.category,
        content: new Content(raw.content),
        recipientId: raw.recipientId,
        createdAt: raw.createdAt,
        readAt: raw.readAt,
        canceledAt: raw.canceledAt,
      },
      raw.id,
    );
  }
}
