import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewStasComponent } from './overview-stas.component';

describe('OverviewStasComponent', () => {
  let component: OverviewStasComponent;
  let fixture: ComponentFixture<OverviewStasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewStasComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OverviewStasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
