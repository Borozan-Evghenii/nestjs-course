import type { ConfigService } from '@nestjs/config';
import type { TypeOrmModuleOptions } from '@nestjs/typeorm';

export async function getDatabaseConfig(
  configService: ConfigService
): Promise<TypeOrmModuleOptions> {
  return {
    type: 'postgres',
    username: configService.getOrThrow<string>('DATABASE_USER'),
    password: configService.getOrThrow<string>('DATABASE_PASSWORD'),
    port: configService.getOrThrow<number>('DATABASE_PORT'),
    host: configService.getOrThrow<string>('DATABASE_HOST'),
    database: 'nestjs_databse',
    autoLoadEntities: true,
    synchronize: true
  };
}
