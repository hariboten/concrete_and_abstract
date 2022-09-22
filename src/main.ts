import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get<ConfigService>(ConfigService);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  // TODO ホワイトリストは最終的なフロントエンドのデプロイ先urlを指定
  app.enableCors({
    credentials: true,
    origin: [
      config.get("CORS_LOCAL"),
      config.get("CORS_DA_1"),
      config.get("CORS_DA_2"),
      config.get("CORS_PROD")
    ],
  });
  await app.listen(3000);
}
bootstrap();
