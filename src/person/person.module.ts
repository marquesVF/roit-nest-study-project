import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { AddressModule } from 'src/address/address.module';

@Module({
    imports: [
        InMemoryDBModule.forFeature('person'),
        AddressModule
    ],
    providers: [PersonService],
    controllers: [PersonController]
})
export class PersonModule {}
