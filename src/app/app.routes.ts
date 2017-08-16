import { Routes } from '@angular/router';
import { NoteDetailComponent } from './notes/note-detail/note-detail.component';
import { MainViewComponent } from './main-view/main-view.component';

export const routes: Routes = [
  { path: '', component: MainViewComponent, },

  { path: 'notes/:id', component: NoteDetailComponent, },
  { path: '**', redirectTo: "/" },
];
