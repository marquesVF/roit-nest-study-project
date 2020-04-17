import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { AddressModule } from 'src/address/address.module';
import { GithubModule } from 'src/github/github.module';

@Module({
    imports: [
        InMemoryDBModule.forFeature('person'),
        AddressModule,
        GithubModule
    ],
    providers: [PersonService],
    controllers: [PersonController]
})
export class PersonModule {}
