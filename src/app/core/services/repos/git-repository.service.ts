

import { GitHubRepository } from './models/apiReposModel';
import { HttpClient } from '@angular/common/http';
import { Injectable, Component } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL=`https://api.github.com/users/`

@Injectable({
  providedIn: 'root'
})
export class GitRepositoryService {

  constructor(private http:HttpClient) { }

  public getApiRepos(usuario:string):Observable<GitHubRepository[]>{
return this.http.get<GitHubRepository[]>(`${API_URL}/${usuario}/repos`)
  }
}

