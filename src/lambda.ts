import { AppModule } from './app.module'
import { getCorsConfig } from './config/cors.config'
import serverlessExpress from '@codegenie/serverless-express'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { Context, Handler } from 'aws-lambda'
import type { Express } from 'express'

let server: Handler

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	app.setGlobalPrefix('api/v1')

	const configService = app.get(ConfigService)
	app.enableCors(getCorsConfig(configService))

	await app.init()

	const expressApp = app.getHttpAdapter().getInstance() as Express
	return serverlessExpress({ app: expressApp }) as Handler
}

export const handler = async (event: unknown, context: Context) => {
	server = server ?? (await bootstrap())
	return server(event, context, () => {})
}
