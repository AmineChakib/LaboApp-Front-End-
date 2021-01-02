import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRapportProfComponent } from './create-rapport-prof.component';

describe('CreateRapportProfComponent', () => {
  let component: CreateRapportProfComponent;
  let fixture: ComponentFixture<CreateRapportProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRapportProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRapportProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
