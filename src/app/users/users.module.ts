import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    UsersListComponent,
    UserDetailComponent
  ],
  exports: [
    UsersListComponent
  ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        FormsModule
    ]
})
export class UsersModule { }
