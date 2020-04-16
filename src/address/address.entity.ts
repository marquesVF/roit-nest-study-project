import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db'

export interface Address extends InMemoryDBEntity {
    cep: string
    street: string
    neighborhood: string
    city: string
    state: string
}
