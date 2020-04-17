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

    private consumeAddressApi(cep: string) {
        return this
            .httpService
            .getRequest<ViacepDto>(`http://viacep.com.br/ws/${cep}/json`)
    }

    private async searchAddress(cep: string) {
        const viacepDto = await this.consumeAddressApi(cep)

        return {
            cep,
            street: viacepDto.logradouro,
            neighborhood: viacepDto.bairro,
            city: viacepDto.localidade,
            state: viacepDto.uf
        }
    }

    async create(cep: string) {
        const address = await this.searchAddress(cep)

        return this.addressRespository.create(address)
    }
}
