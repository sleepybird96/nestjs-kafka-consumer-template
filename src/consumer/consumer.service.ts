import { Injectable, OnApplicationShutdown } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Consumer, ConsumerRunConfig, Kafka, KafkaMessage } from 'kafkajs';

@Injectable()
export class ConsumerService implements OnApplicationShutdown {
  private readonly consumer: Consumer;

  constructor(private readonly configService: ConfigService) {
    const brokers = configService.get<string>('BROKERS_HOSTS').split(',');
    const groupId = configService.get<string>('CONSUMER_GROUP_ID');

    const kafka = new Kafka({ brokers });
    this.consumer = kafka.consumer({ groupId });
  }

  async consume(topics: string[], config: ConsumerRunConfig) {
    await this.consumer.connect();
    await this.consumer.subscribe({ topics, fromBeginning: true });
    await this.consumer.run(config);
  }

  async commit(topic: string, partition: number, message: KafkaMessage) {
    await this.consumer.commitOffsets([
      { topic, partition, offset: (Number(message.offset) + 1).toString() },
    ]);
  }

  async onApplicationShutdown() {
    await this.consumer.disconnect();
  }
}
