import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db'

export interface GithubAccount extends InMemoryDBEntity {

    login: string

    name: string

    publicRepos: number

    publicGists: number

    followers: number

    following: number

    company?: string

    blog?: string

    location?: string

    bio?: string

}
