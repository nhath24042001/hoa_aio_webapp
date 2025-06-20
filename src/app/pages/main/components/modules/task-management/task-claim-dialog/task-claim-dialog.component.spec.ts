import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskClaimDialogComponent } from './task-claim-dialog.component';

describe('TaskClaimDialogComponent', () => {
  let component: TaskClaimDialogComponent;
  let fixture: ComponentFixture<TaskClaimDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskClaimDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskClaimDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
