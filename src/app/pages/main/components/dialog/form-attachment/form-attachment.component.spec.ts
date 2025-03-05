import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAttachmentComponent } from './form-attachment.component';

describe('FormAttachmentComponent', () => {
  let component: FormAttachmentComponent;
  let fixture: ComponentFixture<FormAttachmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAttachmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAttachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
