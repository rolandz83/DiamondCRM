import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

declare const auth0: any;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth0 = new auth0.WebAuth({
    domain: 'dev-nbach3ycyxk5627q.us.auth0.com',
    clientID: 'pahMz4r1uN8B9nVzs1bxeySTLr1EktMf',
    redirectUri: window.location.origin,
    responseType: 'token id_token',
    scope: 'openid profile'
  });

  constructor(private jwtHelper: JwtHelperService) {}

  login(): void {
    this.auth0.authorize();
  }

  handleAuthentication(): void {
    this.auth0.parseHash((err: any, authResult: any) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        console.log(err);
      }
    });
  }

  private setSession(authResult: any): void {
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  isAuthenticated(): boolean {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '0');
    return new Date().getTime() < expiresAt;
  }

  logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  getAccessToken(): string | null {
    return localStorage.getItem('access_token');
  }

  getIdToken(): string | null {
    return localStorage.getItem('id_token');
  }

  decodeToken(token: string): any {
    return this.jwtHelper.decodeToken(token);
  }
}
