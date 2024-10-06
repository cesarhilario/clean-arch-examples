import { SendNotification } from '@core/application/use-cases/send-notification';
import { ReadNotification } from '@core/application/use-cases/read-notification';
import { UnreadNotification } from '@core/application/use-cases/unread-notification';
import { GetRecipientNotifications } from '@core/application/use-cases/get-recipient-notifications';
import { CountRecipientNotifications } from '@core/application/use-cases/count-recipient-notifications';
import { CancelNotification } from '@core/application/use-cases/cancel-notification';

import { NotificationRepository } from '@core/application/repositories/notification-repository';
import { Provider } from '@nestjs/common/interfaces';

export const NotificationsProviders: Provider[] = [
  {
    provide: SendNotification,
    useFactory: (notificationRepository: NotificationRepository) => {
      return new SendNotification(notificationRepository);
    },
    inject: [NotificationRepository],
  },
  {
    provide: CancelNotification,
    useFactory: (notificationRepository: NotificationRepository) => {
      return new CancelNotification(notificationRepository);
    },
    inject: [NotificationRepository],
  },
  {
    provide: CountRecipientNotifications,
    useFactory: (notificationRepository: NotificationRepository) => {
      return new CountRecipientNotifications(notificationRepository);
    },
    inject: [NotificationRepository],
  },
  {
    provide: GetRecipientNotifications,
    useFactory: (notificationRepository: NotificationRepository) => {
      return new GetRecipientNotifications(notificationRepository);
    },
    inject: [NotificationRepository],
  },
  {
    provide: ReadNotification,
    useFactory: (notificationRepository: NotificationRepository) => {
      return new ReadNotification(notificationRepository);
    },
    inject: [NotificationRepository],
  },
  {
    provide: UnreadNotification,
    useFactory: (notificationRepository: NotificationRepository) => {
      return new UnreadNotification(notificationRepository);
    },
    inject: [NotificationRepository],
  },
];
