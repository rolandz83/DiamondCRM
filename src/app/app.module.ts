import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { PageLoaderComponent } from './layout/page-loader/page-loader.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { RightSidebarComponent } from './layout/right-sidebar/right-sidebar.component';
import { AuthLayoutComponent } from './layout/app-layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layout/app-layout/main-layout/main-layout.component';
import { fakeBackendProvider } from './core/interceptor/fake-backend';
import { ErrorInterceptor } from './core/interceptor/error.interceptor';
import { JwtInterceptor } from './core/interceptor/jwt.interceptor';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClient,
} from '@angular/common/http';
import { WINDOW_PROVIDERS } from './core/service/window.service';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { AuthModule, AuthHttpInterceptor } from '@auth0/auth0-angular';

import { environment as env } from './authentication/environment';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageLoaderComponent,
    SidebarComponent,
    RightSidebarComponent,
    AuthLayoutComponent,
    MainLayoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarRouterModule,
    NgScrollbarModule,
    AuthModule.forRoot({
        // The domain and clientId were configured in the previous chapter
        domain: 'dev-nbach3ycyxk5627q.us.auth0.com',
        clientId: 'pahMz4r1uN8B9nVzs1bxeySTLr1EktMf',
      
        authorizationParams: {
          redirect_uri: window.location.origin,
          
          // Request this audience at user authentication time
          audience: 'https://dev-nbach3ycyxk5627q.us.auth0.com/api/v2/',
      
          // Request this scope at user authentication time
          scope: 'read:current_user email openid name picture',
        }
        ,
        httpInterceptor : {
          allowedList : [
            { uri: `${env.dev.apiUrl}/*`,
              tokenOptions : {
                authorizationParams : {
                  audience : env.auth.authorizationParams.audience,
                  scope : env.auth.authorizationParams.scope,
                  redirect_uri: window.location.origin,
                }
              }
            }
          ]
        }
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    CoreModule,
    SharedModule,
  ],
  providers: [
    
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthHttpInterceptor,
      multi : true,
    },    
    
    fakeBackendProvider,
    WINDOW_PROVIDERS,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
