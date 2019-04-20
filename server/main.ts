import { enableProdMode } from '@angular/core';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { ApplicationModule } from './app.module';

enableProdMode();

async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule);

	const options = new DocumentBuilder()
		.setTitle('Cats example')
		.setDescription('The cats API description')
		.setVersion('1.0')
		.addTag('cats')
		.build();
	const document = SwaggerModule.createDocument(app, options);
	SwaggerModule.setup('api-docs', app, document);

	await app.listen(4000, function() {
		console.log('server running on http://localhost:4000')
	});
}
bootstrap();
