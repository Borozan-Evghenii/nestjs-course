import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface'
import { ConfigService } from '@nestjs/config'

export function getCorsConfig(configService: ConfigService): CorsOptions {
	const corsOrigins = configService.getOrThrow<string>('HTTP_CORS')

	return {
		origin: corsOrigins === '*' ? true : corsOrigins.split(',')
	}
}
