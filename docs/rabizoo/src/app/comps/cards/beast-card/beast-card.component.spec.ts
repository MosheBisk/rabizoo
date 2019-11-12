import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeastCardComponent } from './beast-card.component';

describe('BeastCardComponent', () => {
  let component: BeastCardComponent;
  let fixture: ComponentFixture<BeastCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeastCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeastCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
