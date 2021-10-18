import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelCheckerComponent } from './level-checker.component';

describe('LevelCheckerComponent', () => {
  let component: LevelCheckerComponent;
  let fixture: ComponentFixture<LevelCheckerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelCheckerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
