import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { HttpModule } from 'src/http/http.module';

@Module({
  imports: [
    InMemoryDBModule.forFeature('address'),
    HttpModule
  ],
  providers: [AddressService],
  exports: [AddressService]
})
export class AddressModule {}
