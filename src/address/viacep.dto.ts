import { JsonProperty } from "@roit/roit-model-mapper"

export class ViacepDto {

    cep: string = undefined

    @JsonProperty('logradouro')
    street: string = undefined

    @JsonProperty('bairro')
    neighborhood: string = undefined

    @JsonProperty('localidade')
    city: string = undefined

    @JsonProperty('uf')
    state: string = undefined

}
