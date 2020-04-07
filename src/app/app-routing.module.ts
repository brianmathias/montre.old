import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { SequenceBuilderComponent } from './sequence-builder/sequence-builder.component';
import { SequenceEditorComponent } from './sequence-editor/sequence-editor.component';
import { PrintComponent } from './print/print.component';


const routes: Routes = [
  { path: '', redirectTo: '/upload', pathMatch: 'full' },
  { path: 'upload', component: FileUploadComponent },
  { path: 'build', component: SequenceBuilderComponent },
  { path: 'edit', component: SequenceEditorComponent },
  { path: 'print', component: PrintComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
