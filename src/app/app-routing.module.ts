import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileService } from './services/file.service';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { SequenceBuilderComponent } from './sequence-builder/sequence-builder.component';
import { SequenceEditorComponent } from './sequence-editor/sequence-editor.component';
import { PrintComponent } from './print/print.component';
import { OptionsComponent } from './options/options.component';
import { LevelCheckerComponent } from './level-checker/level-checker.component';


const routes: Routes = [
  {
    path: '', 
    component: FileUploadComponent },
  { 
    path: 'build', 
    component: SequenceBuilderComponent,
    canActivate: [FileService] 
  },
  { 
    path: 'edit', 
    component: SequenceEditorComponent,
    canActivate: [FileService]
  },
  { 
    path: 'print', 
    component: PrintComponent,
    canActivate: [FileService]
  },
  {
    path: 'check',
    component: LevelCheckerComponent,
    canActivate: [FileService]
  },
  { 
    path: 'options', 
    component: OptionsComponent 
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
