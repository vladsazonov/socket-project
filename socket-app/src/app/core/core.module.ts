import { NgModule } from '@angular/core';

import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsModule } from '@ngxs/store';

import { AuthService } from './services/auth.service';

import { AuthState } from './state/auth-state/auth.state';

@NgModule({
  imports: [
    NgxsModule.forRoot([AuthState]),
    NgxsStoragePluginModule.forRoot({
      key: ['auth']
    }),
    NgxsRouterPluginModule.forRoot()
  ],
  providers: [AuthService]
})
export class CoreModule {}