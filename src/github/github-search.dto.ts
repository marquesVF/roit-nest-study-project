export class GithubSearchItemDto {
    login: string
}

export class GithubSearchDto {
    totalCount: number
    items: GithubSearchItemDto[]
}
