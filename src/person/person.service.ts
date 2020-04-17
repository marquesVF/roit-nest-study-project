import { Injectable } from '@nestjs/common';
import { PersonDto } from './person.dto';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { Person } from './person.entity';
import { AddressService } from 'src/address/address.service';
import { GithubService } from 'src/github/github.service';

@Injectable()
export class PersonService {

    constructor(
        private personRepository: InMemoryDBService<Person>,
        private addressService: AddressService,
        private githubService: GithubService
    ) { }

    async find() {
        return this.personRepository.getAll()
    }

    async create(personDto: PersonDto) {
        const address = await this.addressService.create(personDto.cep)
        const githubAccount = await this
            .githubService
            .create(personDto.gitHubUser)

        return this
            .personRepository
            .create({ ...personDto, address, githubAccount })
    }

}
