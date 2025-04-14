import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTextareaComponent } from './dialog-textarea.component';

describe('DialogTextareaComponent', () => {
  let component: DialogTextareaComponent;
  let fixture: ComponentFixture<DialogTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogTextareaComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DialogTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
