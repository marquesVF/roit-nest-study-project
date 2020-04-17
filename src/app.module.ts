import { Module, CacheModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { AddressModule } from './address/address.module';
import { HttpModule } from './http/http.module';
import { GithubModule } from './github/github.module';

@Module({
  imports: [
    CacheModule.register(),
    PersonModule,
    AddressModule,
    HttpModule,
    GithubModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
