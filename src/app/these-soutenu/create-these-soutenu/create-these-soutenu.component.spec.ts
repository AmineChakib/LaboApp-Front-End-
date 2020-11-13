import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTheseSoutenuComponent } from './create-these-soutenu.component';

describe('CreateTheseSoutenuComponent', () => {
  let component: CreateTheseSoutenuComponent;
  let fixture: ComponentFixture<CreateTheseSoutenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTheseSoutenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTheseSoutenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
