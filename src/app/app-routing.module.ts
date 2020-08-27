import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { SequenceBuilderComponent } from './sequence-builder/sequence-builder.component';
import { SequenceEditorComponent } from './sequence-editor/sequence-editor.component';
import { PrintComponent } from './print/print.component';
import { OptionsComponent } from './options/options.component';


const routes: Routes = [
  { path: '', component: FileUploadComponent },
  { path: 'build', component: SequenceBuilderComponent },
  { path: 'edit', component: SequenceEditorComponent },
  { path: 'print', component: PrintComponent },
  { path: 'options', component: OptionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
