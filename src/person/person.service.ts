import { Injectable } from '@nestjs/common';
import { PersonDto } from './person.dto';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { Person } from './person.entity';

@Injectable()
export class PersonService {
    constructor(private personRepository: InMemoryDBService<Person>) { }

    async find() {
        return this.personRepository.getAll()
    }

    async create(personDto: PersonDto) {
        return this.personRepository.create(personDto)
    }
}
