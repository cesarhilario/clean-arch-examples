import { NotificationNotFound } from './errors/notification-not-found';
import { NotificationRepository } from '@core/application/repositories/notification-repository';

interface ReadNotificationRequest {
  notificationId: string;
}

type ReadNotificationResponse = void;

export class ReadNotification {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: ReadNotificationRequest,
  ): Promise<ReadNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.read();

    await this.notificationRepository.save(notification);
  }
}
