import { Kafka } from 'kafkajs';
import { randomUUID } from 'node:crypto';

import env from 'dotenv';
env.config();

async function bootstrap() {
  const kafka = new Kafka({
    clientId: 'test-producer',
    brokers: [process.env.KAFKA_BROKER ?? ''],
    sasl: {
      mechanism: 'scram-sha-256',
      username: process.env.KAFKA_SASL_USERNAME ?? '',
      password: process.env.KAFKA_SASL_PASSWORD ?? '',
    },
    ssl: true,
  });

  const producer = kafka.producer();

  await producer.connect();
  await producer.send({
    topic: 'notifications.send-notification',
    messages: [
      {
        value: JSON.stringify({
          content: 'Nova solicitação de amizade via kafka',
          category: 'social',
          recipientId: randomUUID(),
        }),
      },
    ],
  });

  await producer.disconnect();
}

bootstrap();
