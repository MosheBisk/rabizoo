import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeastPanelComponent } from './beast-panel.component';

describe('BeastPanelComponent', () => {
  let component: BeastPanelComponent;
  let fixture: ComponentFixture<BeastPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeastPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeastPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
