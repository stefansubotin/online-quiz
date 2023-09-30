import { NestFactory } from '@nestjs/core';
import { HomepageModule } from './homepage.module';

async function bootstrap() {
  const app = await NestFactory.create(HomepageModule);
  await app.listen(3000);
}
bootstrap();
