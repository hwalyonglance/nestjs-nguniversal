import { Controller, Get, Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';

@Controller()
export class AppController {
	@Get('hello')
	hello() {
		return { message: 'hello' };
	}
}

@Module({
	imports: [
	AngularUniversalModule.forRoot({
		viewsPath: join(process.cwd(), 'dist/browser'),
		bundle: require('../server/main'),
		liveReload: true
	})
	],
	controllers: [
		AppController
	]
})
export class ApplicationModule {}
