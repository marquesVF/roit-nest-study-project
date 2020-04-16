import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';

@Module({
    imports: [InMemoryDBModule.forFeature('person')],
    providers: [PersonService],
    controllers: [PersonController]
})
export class PersonModule {}
