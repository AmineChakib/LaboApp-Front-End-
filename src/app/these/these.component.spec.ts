import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheseComponent } from './these.component';

describe('TheseComponent', () => {
  let component: TheseComponent;
  let fixture: ComponentFixture<TheseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
