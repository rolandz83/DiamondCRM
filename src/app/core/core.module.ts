import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightSidebarService } from './service/rightsidebar.service';
//import { AuthGuard } from './guard/auth.guard';
import { AuthGuard } from "@auth0/auth0-angular";
//import { AuthService } from './service/auth.service';
import { AuthService } from '@auth0/auth0-angular';
import { throwIfAlreadyLoaded } from './guard/module-import.guard';
import { DirectionService } from './service/direction.service';
import { TranslateService, TranslateStore } from '@ngx-translate/core';


@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [DirectionService, AuthService, AuthGuard, RightSidebarService,TranslateStore, TranslateService],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
