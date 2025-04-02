import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormParticipantSelectorComponent } from './form-participant-selector.component';

describe('FormParticipantSelectorComponent', () => {
  let component: FormParticipantSelectorComponent;
  let fixture: ComponentFixture<FormParticipantSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormParticipantSelectorComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FormParticipantSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
