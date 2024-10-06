import { NotificationRepository } from '../repositories/notification-repository';

interface CountRecipientNotificationsRequest {
  recipientId: string;
}

interface CountRecipientNotificationsResponse {
  count: number;
}

export class CountRecipientNotifications {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: CountRecipientNotificationsRequest,
  ): Promise<CountRecipientNotificationsResponse> {
    const { recipientId } = request;

    const count = await this.notificationRepository.countManyByRecipientId(
      recipientId,
    );

    return { count };
  }
}
