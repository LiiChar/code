import { AppModule } from './app.module';
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';

async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('Изучение продвинутого бэкэнду по UlbiTV')
        .setDescription('Документация REST API CRUD')
        .setVersion('1.0.0')
        .addTag('Styde LiiChar')
        .build()
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document)

    await app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}

start()