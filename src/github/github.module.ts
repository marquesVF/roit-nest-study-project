import { Module } from '@nestjs/common';
import { GithubService } from './github.service';
import { HttpModule } from 'src/http/http.module';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';

@Module({
    imports: [
        InMemoryDBModule.forFeature('github'),
        HttpModule
    ],
    providers: [GithubService],
    exports: [GithubService]
})
export class GithubModule {}
