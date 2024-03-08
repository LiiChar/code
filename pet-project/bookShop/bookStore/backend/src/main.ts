import * as path from 'path';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  const PORT = process.env.PORT || 8000;

  console.log( path.resolve(__dirname, 'static'));

  await app.listen(PORT, () => console.log(`Server benn started on ${PORT}`));
}
bootstrap();
