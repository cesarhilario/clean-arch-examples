import { NotificationNotFound } from './errors/notification-not-found';
import { NotificationRepository } from '../repositories/notification-repository';

interface UnreadNotificationRequest {
  notificationId: string;
}

type ReadNotificationResponse = void;

export class UnreadNotification {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: UnreadNotificationRequest,
  ): Promise<ReadNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.unread();

    await this.notificationRepository.save(notification);
  }
}
