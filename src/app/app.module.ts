import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { CompanyManagementComponent } from './company-management/company-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { TemplateManagementComponent } from './template-management/template-management.component';
import { FileManagementComponent } from './file-management/file-management.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { SpeedoGridComponent } from './speedo-grid/speedo-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    MyprofileComponent,
    CompanyManagementComponent,
    UserManagementComponent,
    TemplateManagementComponent,
    FileManagementComponent,
    AnalyticsComponent,
    DialogBoxComponent,
    SpeedoGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
