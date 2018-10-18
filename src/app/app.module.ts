import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserFormComponent } from './user-form/user-form.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserCardComponent,
    UserFormComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", redirectTo: "user", pathMatch: "full" },
      { path: "user", component: UserListComponent },
      { path: "user-detail/:id", component: UserFormComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
