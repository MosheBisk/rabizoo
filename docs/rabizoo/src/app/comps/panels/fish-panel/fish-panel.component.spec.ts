import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishPanelComponent } from './fish-panel.component';

describe('FishPanelComponent', () => {
  let component: FishPanelComponent;
  let fixture: ComponentFixture<FishPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
