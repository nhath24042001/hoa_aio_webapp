import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFileComponent } from './input-file.component';

describe('InputFileComponent', () => {
  let component: InputFileComponent;
  let fixture: ComponentFixture<InputFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputFileComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(InputFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
