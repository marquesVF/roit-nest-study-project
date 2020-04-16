import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db'

export interface Person extends InMemoryDBEntity {
    name: string
    birthDate: Date
}
