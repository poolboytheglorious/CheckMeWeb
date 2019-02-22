import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgnineerAddComponent } from './egnineer-add.component';

describe('EgnineerAddComponent', () => {
  let component: EgnineerAddComponent;
  let fixture: ComponentFixture<EgnineerAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgnineerAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgnineerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
