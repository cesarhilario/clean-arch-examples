import { Kafka } from "kafkajs";
import { randomUUID } from "node:crypto";

async function bootstrap() {
  const kafka = new Kafka({
    clientId: "test-producer",
    brokers: ["famous-dragon-14416-us1-kafka.upstash.io:9092"],
    sasl: {
      mechanism: "scram-sha-256",
      username:
        "ZmFtb3VzLWRyYWdvbi0xNDQxNiQMc3kYWcI4Ur2v70KWwiFpYVOu2ViTutZu2mU",
      password: "fc0a1f4937e84ecb8e818a21656365eb",
    },
    ssl: true,
  });

  const producer = kafka.producer();

  await producer.connect();
  await producer.send({
    topic: "notifications.send-notification",
    messages: [
      {
        value: JSON.stringify({
          content: "Nova solicitação de amizade via kafka",
          category: "social",
          recipientId: randomUUID(),
        }),
      },
    ],
  });

  await producer.disconnect();
}

bootstrap();
