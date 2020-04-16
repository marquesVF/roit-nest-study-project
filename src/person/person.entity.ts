import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db'
import { Address } from 'src/address/address.entity';

export interface Person extends InMemoryDBEntity {
    name: string
    birthDate: Date
    address: Address
}
