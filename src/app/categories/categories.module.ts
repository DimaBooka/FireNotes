import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesAddComponent } from './categories-add/categories-add.component';
import { CategoriesItemComponent } from './categories-item/categories-item.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CategoriesAddComponent,
    CategoriesItemComponent,
    CategoriesListComponent
  ],
  exports: [
    CategoriesAddComponent,
    CategoriesItemComponent,
    CategoriesListComponent,
  ]
})
export class CategoriesModule { }
