import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { EnvConfigModule } from './shared/infrastructure/env-config/env-config.module'
import { CampanhaModule } from './campanha/infrastructure/campanha.module'

@Module({
  imports: [EnvConfigModule, CampanhaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
