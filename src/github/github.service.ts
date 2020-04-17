import { Injectable } from '@nestjs/common';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { HttpService } from 'src/http/http.service';
import { GithubAccount } from './github-account.entity';
import { GithubSearchDto } from './github-search.dto';
import { GithubUserDto } from './github-user.dto';

@Injectable()
export class GithubService {

    constructor(
        private githubRespository: InMemoryDBService<GithubAccount>,
        private httpService: HttpService
    ) {}

    private consumeGithubApi<T>(url: string, clazz: new () => T) {
        return this
            .httpService
            .getRequest<T>(
                `https://api.github.com/${url}`,
                clazz
            )
    }

    private async getGithubUserInformation(user: string) {
        const githubSearchDto = await this.consumeGithubApi<GithubSearchDto>(
            `search/users?q=${user}`,
            GithubSearchDto
        )

        if (githubSearchDto.items.length > 1) {
            throw Error(`More than one github user found with login ${user}`)
        }
        if (githubSearchDto.items.length === 0) {
            throw Error(`No github account under login ${user}`)
        }

        return this.consumeGithubApi<GithubUserDto>(
            `users/${githubSearchDto.items[0].login}`,
            GithubUserDto
        )
    }

    async create(user: string) {
        const githubAccount = await this.getGithubUserInformation(user)

        return this.githubRespository.create(githubAccount)
    }

}
