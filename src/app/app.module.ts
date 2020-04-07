import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SequenceBuilderComponent } from './sequence-builder/sequence-builder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MonitorComponent } from './monitor/monitor.component';
import { SequenceEditorComponent } from './sequence-editor/sequence-editor.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { PrintComponent } from './print/print.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SequenceBuilderComponent,
    MonitorComponent,
    SequenceEditorComponent,
    FileUploadComponent,
    PrintComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
