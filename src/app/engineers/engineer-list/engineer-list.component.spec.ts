import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerListComponent } from './engineer-list.component';

describe('EngineersComponent', () => {
  let component: EngineerListComponent;
  let fixture: ComponentFixture<EngineerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
