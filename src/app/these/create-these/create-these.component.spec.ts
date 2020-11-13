import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTheseComponent } from './create-these.component';

describe('CreateTheseComponent', () => {
  let component: CreateTheseComponent;
  let fixture: ComponentFixture<CreateTheseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTheseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTheseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
