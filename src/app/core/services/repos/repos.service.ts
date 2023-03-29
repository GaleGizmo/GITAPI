import { ReposToShow, GitHubRepository } from './models/apiReposModel';
import { Observable, map, filter } from 'rxjs';
import { GitRepositoryService } from './git-repository.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReposService {

  constructor(private gitRepositoryService: GitRepositoryService) { }

  public getRepos(user:string):Observable<ReposToShow[]>{
    return this.gitRepositoryService.getApiRepos(user).pipe(
      map((apiRepos:GitHubRepository[])=>this.transformRepos(apiRepos)),
      filter((repos: ReposToShow[])=>{
        return repos.length>0
      })
    )
  }

  private transformRepos(apiRepos:GitHubRepository[]): ReposToShow[]{
    const repos=apiRepos.map((repo)=>({
      name:repo.name,
      full_name:repo.full_name,
      html_url:repo.html_url,
      description:repo.description

    }))
    return repos
  }
}
