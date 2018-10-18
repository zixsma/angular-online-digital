import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserCardComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", redirectTo: "user", pathMatch: "full" },
      { path: "user", component: UserListComponent },
      { path: "user-detail/:id", component: UserFormComponent },
      {
        path: "setting",
        loadChildren: "../setting/setting.module#SettingModule"
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
