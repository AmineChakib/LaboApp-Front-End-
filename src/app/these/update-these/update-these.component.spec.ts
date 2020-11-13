import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTheseComponent } from './update-these.component';

describe('UpdateTheseComponent', () => {
  let component: UpdateTheseComponent;
  let fixture: ComponentFixture<UpdateTheseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTheseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTheseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
