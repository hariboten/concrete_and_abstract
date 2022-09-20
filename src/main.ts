import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  // TODO ホワイトリストは最終的なフロントエンドのデプロイ先urlを指定
  app.enableCors({
    credentials: true,
    origin: [
      "http://localhost:8080",
    ],
  });
  await app.listen(3000);
}
bootstrap();
