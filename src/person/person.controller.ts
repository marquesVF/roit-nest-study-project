import { Controller, Body, Post, Get } from '@nestjs/common';
import { PersonDto } from './person.dto';
import { PersonService } from './person.service';

@Controller('person')
export class PersonController {

    constructor(private readonly personService: PersonService) {}

    @Get()
    find() {
        return this.personService.find()
    }

    @Post()
    create(@Body() personDto: PersonDto) {
        return this.personService.create(personDto)
    }

}
