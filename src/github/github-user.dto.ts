export class GithubUserDto {
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