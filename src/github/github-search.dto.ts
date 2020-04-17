import { JsonProperty } from "@roit/roit-model-mapper"

export class GithubSearchItemDto {

    login: string = undefined

}

export class GithubSearchDto {

    totalCount: number = undefined

    @JsonProperty({ clazz: GithubSearchItemDto })
    items: GithubSearchItemDto[] = undefined

}
