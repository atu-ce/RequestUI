import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './meterial.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { RequestMainComponent } from './components/request-main/request-main.component';
import { UserHistoryComponent } from './components/admin-panel/user-history/user-history.component';
import { UserMainComponent } from './components/admin-panel/user-main/user-main.component';
import { BranchMainComponent } from './components/admin-panel/branch-main/branch-main.component';
import { BranchAddComponent } from './components/admin-panel/branch-main/branch-add/branch-add.component';
import { BranchListComponent } from './components/admin-panel/branch-main/branch-list/branch-list.component';
import { BranchUpdateComponent } from './components/admin-panel/branch-main/branch-update/branch-update.component';
import { BranchSharedComponent } from './components/admin-panel/branch-main/branch-shared/branch-shared.component';
import { UserSharedComponent } from './components/admin-panel/user-main/user-shared/user-shared.component';
import { UserListComponent } from './components/admin-panel/user-main/user-list/user-list.component';
import { UserAddComponent } from './components/admin-panel/user-main/user-add/user-add.component';
import { UserUpdateComponent } from './components/admin-panel/user-main/user-update/user-update.component';
import { UserPasswordUpdateComponent } from './components/admin-panel/user-main/user-password-update/user-password-update.component';
import { RequestAddComponent } from './components/request-main/request-add/request-add.component';
import { RequestListComponent } from './components/request-main/request-list/request-list.component';
import { RequestSharedComponent } from './components/request-main/request-shared/request-shared.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ToastrModule } from 'ngx-toastr';
import { RequestDetaillistComponent } from './components/request-main/request-detaillist/request-detaillist.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AdminPanelComponent,
    RequestMainComponent,
    UserHistoryComponent,
    UserMainComponent,
    BranchMainComponent,
    BranchAddComponent,
    BranchListComponent,
    BranchUpdateComponent,
    BranchSharedComponent,
    UserSharedComponent,
    UserListComponent,
    UserAddComponent,
    UserUpdateComponent,
    UserPasswordUpdateComponent,
    RequestAddComponent,
    RequestListComponent,
    RequestSharedComponent,
    LoginComponent,
    RequestDetaillistComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    CdkAccordionModule,
    InputTextareaModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      extendedTimeOut: 3000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
      disableTimeOut: false,
      progressBar: true,
      progressAnimation: 'decreasing',
    }),

    
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
