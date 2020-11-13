import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportComponent } from './rapport.component';

describe('RapportComponent', () => {
  let component: RapportComponent;
  let fixture: ComponentFixture<RapportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
