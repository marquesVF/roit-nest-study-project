import { Injectable } from '@nestjs/common';
import { PersonDto } from './person.dto';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { Person } from './person.entity';
import { AddressService } from 'src/address/address.service';

@Injectable()
export class PersonService {
    constructor(
        private personRepository: InMemoryDBService<Person>,
        private addressService: AddressService
    ) { }

    async find() {
        return this.personRepository.getAll()
    }

    async create(personDto: PersonDto) {
        const address = await this.addressService.create(personDto.cep)

        return this.personRepository.create({ ...personDto, address })
    }
}
