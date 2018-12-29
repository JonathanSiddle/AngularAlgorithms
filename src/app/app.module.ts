import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BinarySearchComponent } from './Algorithms/binary-search/binary-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialImportsModule } from './material-imports.module';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: 'App/BinarySearch', component: BinarySearchComponent },
  {path: 'App/Home', component: WelcomeComponent},
  {path: '', redirectTo: 'App/Home', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BinarySearchComponent,
    HomeComponent,
    WelcomeComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
