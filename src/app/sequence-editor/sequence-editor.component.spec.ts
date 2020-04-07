import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SequenceEditorComponent } from './sequence-editor.component';

describe('SequenceEditorComponent', () => {
  let component: SequenceEditorComponent;
  let fixture: ComponentFixture<SequenceEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SequenceEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SequenceEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
