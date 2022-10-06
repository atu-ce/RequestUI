import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { BranchAddComponent } from './components/admin-panel/branch-main/branch-add/branch-add.component';
import { BranchListComponent } from './components/admin-panel/branch-main/branch-list/branch-list.component';
import { BranchMainComponent } from './components/admin-panel/branch-main/branch-main.component';
import { BranchUpdateComponent } from './components/admin-panel/branch-main/branch-update/branch-update.component';
import { UserHistoryComponent } from './components/admin-panel/user-history/user-history.component';
import { UserAddComponent } from './components/admin-panel/user-main/user-add/user-add.component';
import { UserListComponent } from './components/admin-panel/user-main/user-list/user-list.component';
import { UserMainComponent } from './components/admin-panel/user-main/user-main.component';
import { UserPasswordUpdateComponent } from './components/admin-panel/user-main/user-password-update/user-password-update.component';
import { UserUpdateComponent } from './components/admin-panel/user-main/user-update/user-update.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { RequestAddComponent } from './components/request-main/request-add/request-add.component';
import { RequestListComponent } from './components/request-main/request-list/request-list.component';
import { RequestMainComponent } from './components/request-main/request-main.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'password-update', component: UserPasswordUpdateComponent },
  {
    path: '', component: MainComponent,
    children: [
      {
        path: 'admin-panel', component: AdminPanelComponent,
        children: [
          { path: 'user-history', component: UserHistoryComponent },
          {
            path: 'user-main', component: UserMainComponent,
            children: [
              { path: 'user-list', component: UserListComponent },
              { path: 'user-add', component: UserAddComponent },
              { path: 'user-update', component: UserUpdateComponent },
              { path: '', redirectTo: 'user-list', pathMatch: 'full' },
            ]
          },
          {
            path: 'branch-main', component: BranchMainComponent,
            children: [
              { path: 'branch-list', component: BranchListComponent },
              { path: 'branch-add', component: BranchAddComponent },
              { path: 'branch-update', component: BranchUpdateComponent },
              { path: '', redirectTo: 'branch-list', pathMatch: 'full' },
            ]
          },
          { path: '', redirectTo: 'user-history', pathMatch: 'full' },
        ]
      },
      {
        path: 'request-main', component: RequestMainComponent,
        children: [
          { path: 'request-list', component: RequestListComponent },
          { path: 'request-add', component: RequestAddComponent },
          { path: '', redirectTo: 'request-list', pathMatch: 'full' },
        ]
      },
      { path: '', redirectTo: 'request-main', pathMatch: 'full' },
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
