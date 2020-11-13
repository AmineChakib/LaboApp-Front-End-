import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTheseSoutenuComponent } from './update-these-soutenu.component';

describe('UpdateTheseSoutenuComponent', () => {
  let component: UpdateTheseSoutenuComponent;
  let fixture: ComponentFixture<UpdateTheseSoutenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTheseSoutenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTheseSoutenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
