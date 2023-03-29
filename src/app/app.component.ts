import { Component } from '@angular/core';
import { ReposService } from './core/services/repos/repos.service';
import { ReposToShow } from './core/services/repos/models/apiReposModel';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'GIT-API';

  public userForm?: FormGroup;
  public user: string = '';
  public repos?: ReposToShow;

  constructor(private formBuilder: FormBuilder, reposService: ReposService) {}

    this.userForm = this.formBuilder.group({
      userName: new FormControl('', [Validators.required])
    });
  
  public getRepos(user: string) {
    this.reposService.getRepos(user).subscribe((repos: ReposToShow[]) => {
      this.repos = repos;
    });
  }
  public getUser() {
    this.user = this.userForm.get('userName')?.value;
  }

}
