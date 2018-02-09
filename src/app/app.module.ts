import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';

import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DeployToTestComponent } from './deploy-to-test/deploy-to-test.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DeployToTestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DeployToTestComponent]
})
export class AppModule { }
