import { Test, TestingModule } from '@nestjs/testing';
import { PersonService } from './person.service';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';

describe('PersonService', () => {
  let service: PersonService;
  const person = {
    name: 'Juca',
    birthDate: new Date('01/01/1990'),
    cep: '80040140',
    gitHubUser: 'marquesvf'
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonService, InMemoryDBService],
    }).compile();

    service = module.get<PersonService>(PersonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new person', () => {
    expect(service.create(person)).toBeTruthy()
  })

  it('should list the created people', async () => {
    await service.create(person)
    const people = await service.find()

    expect(people).toHaveLength(1)
  })
});
