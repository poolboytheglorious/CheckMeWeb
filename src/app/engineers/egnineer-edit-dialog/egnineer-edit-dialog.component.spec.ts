import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgnineerEditDialogComponent } from './egnineer-edit-dialog.component';

describe('EgnineerEditComponent', () => {
  let component: EgnineerEditDialogComponent;
  let fixture: ComponentFixture<EgnineerEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgnineerEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgnineerEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
