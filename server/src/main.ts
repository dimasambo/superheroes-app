import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";


export let app
async function bootstrap() {

  try {
    const PORT = process.env.port || 5000
    app = await NestFactory.create(AppModule);
    app.enableCors()

    const config = new DocumentBuilder()
        .setTitle('Eco-management')
        .setDescription('Docs REST API')
        .setVersion('1.0.0')
        .addTag('program')
        .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/api/docs', app, document)
    /*app.useGlobalGuards(JwtAuthGuard)*/

    await app.listen(PORT, () => console.log(`server started on port ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}
bootstrap();
