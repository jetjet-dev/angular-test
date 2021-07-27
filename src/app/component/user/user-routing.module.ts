import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { UserListComponent } from "./user-list/user-list.component";

const routes: Routes = [
  {
    path: 'detail',
    component: UserDetailComponent
  },
  {
    path: 'list',
    component: UserListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }