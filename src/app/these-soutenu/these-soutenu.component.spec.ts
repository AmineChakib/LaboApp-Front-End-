import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheseSoutenuComponent } from './these-soutenu.component';

describe('TheseSoutenuComponent', () => {
  let component: TheseSoutenuComponent;
  let fixture: ComponentFixture<TheseSoutenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheseSoutenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheseSoutenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
