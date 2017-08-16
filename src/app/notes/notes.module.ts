import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NoteItemComponent } from './note-item/note-item.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { NoteAddComponent } from './note-add/note-add.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NotesListComponent,
    NoteDetailComponent,
    NoteItemComponent,
    NoteEditComponent,
    NoteAddComponent,
  ],
  exports: [
    NotesListComponent,
    NoteDetailComponent,
    NoteItemComponent,
    NoteEditComponent,
    NoteAddComponent
  ]
})
export class NotesModule { }
