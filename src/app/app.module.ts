import { SelectionSortComponent } from './Algorithms/selection-sort/selection-sort.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BinarySearchComponent } from './Algorithms/binary-search/binary-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialImportsModule } from './material-imports.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { MergeSortComponent } from './Algorithms/merge-sort/merge-sort.component';
import { BubbleSortComponent } from './Algorithms/bubble-sort/bubble-sort.component';
import { QuickSortComponent } from './Algorithms/quick-sort/quick-sort.component';
import { NumberGenComponent } from './number-gen/number-gen.component';
import { BFSComponent } from './Algorithms/bfs/bfs.component';

const routes: Routes = [
  {path: 'App/BinarySearch', component: BinarySearchComponent },
  {path: 'App/BFSearch', component: BFSComponent },
  {path: 'App/BubbleSort', component: BubbleSortComponent },
  {path: 'App/SelectionSort', component: SelectionSortComponent },
  {path: 'App/MergeSort', component: MergeSortComponent },
  {path: 'App/QuickSort', component: QuickSortComponent },
  {path: 'App/Home', component: WelcomeComponent},
  {path: '', redirectTo: 'App/Home', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BinarySearchComponent,
    WelcomeComponent,
    SelectionSortComponent,
    MergeSortComponent,
    BubbleSortComponent,
    QuickSortComponent,
    NumberGenComponent,
    BFSComponent,
  ],
  exports: [NumberGenComponent],
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
