import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from "./material/material.module";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PopupSuppressionSalarieComponent } from './popup-suppression-salarie/popup-suppression-salarie.component';
import { ToastrModule } from 'ngx-toastr';
import { SalariesComponent } from './salaries/salaries.component';
import { CreateSalariesComponent } from './createsalaries/createsalaries.component';

@NgModule({
  declarations: [
    AppComponent,
    PopupSuppressionSalarieComponent,
    SalariesComponent,
    CreateSalariesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  entryComponents: [PopupSuppressionSalarieComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }