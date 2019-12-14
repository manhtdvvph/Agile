import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/modal/user';
import { OauthService } from 'src/app/service/oauth.service';

@Component({
  selector: 'app-homepage-login',
  templateUrl: './homepage-login.component.html',
  styleUrls: ['./homepage-login.component.scss']
})
export class HomepageLoginComponent implements OnInit {
  user: User = new User();
  account:string = "";
  constructor(
    private userService: UserService,
    private oauth: OauthService
  ) { }

  ngOnInit() {
  }
  
  Login(){
    this.oauth.login(this.user.username, this.user.password).subscribe(res =>{
      console.log(res)
    })
  }

}
