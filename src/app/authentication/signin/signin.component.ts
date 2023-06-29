import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit
{
  profileJson!: string;
  isAuthenticated:boolean;
  email!:string;

  constructor(
    private router: Router,
    public auth: AuthService,
  ) {
    super();
    this.isAuthenticated = false;
    this.email = "";
  }
  ngOnInit() {
    this.auth.isAuthenticated$.subscribe((authenticated) => {
      
      this.isAuthenticated = authenticated;
      
      console.log(authenticated);
      console.log("Auth changed");
      this.auth.handleRedirectCallback();
    });
    this.auth.user$.subscribe(
      (profile) => {
        this.profileJson = JSON.stringify(profile); 
        this.email = profile?.email || "";
        console.log(profile);
        console.log("Profile info changed ");      
      }
    );    
  }

  onSubmit() {    
    
    this.auth.loginWithRedirect({ 
      authorizationParams: {
          redirect_uri: window.location.origin,
          screen_hint: 'login',
          
        },
        appState: { target: '/admin/main' }});
  }

    
}

