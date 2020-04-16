import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { AddressModule } from './address/address.module';
import { HttpModule } from './http/http.module';

@Module({
  imports: [PersonModule, AddressModule, HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
