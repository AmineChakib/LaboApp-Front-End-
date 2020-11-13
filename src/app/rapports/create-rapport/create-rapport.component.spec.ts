import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRapportComponent } from './create-rapport.component';

describe('CreateRapportComponent', () => {
  let component: CreateRapportComponent;
  let fixture: ComponentFixture<CreateRapportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRapportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRapportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
