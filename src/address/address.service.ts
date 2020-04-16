import { Injectable } from '@nestjs/common';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { Address } from './address.entity';
import { HttpService } from 'src/http/http.service';
import { ViacepDto } from './viacep.dto';

@Injectable()
export class AddressService {
    constructor(
        private addressRespository: InMemoryDBService<Address>,
        private httpService: HttpService
    ) {}

    async create(cep: string) {
        const viaCepResponse = await this
            .httpService
            .getRequest<ViacepDto>(`http://viacep.com.br/ws/${cep}/json`)

        const address: Partial<Address> = {
            cep,
            street: viaCepResponse.logradouro,
            neighborhood: viaCepResponse.bairro,
            city: viaCepResponse.localidade,
            state: viaCepResponse.uf
        }

        return this.addressRespository.create(address)
    }
}
