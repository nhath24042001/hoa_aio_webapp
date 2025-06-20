import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskActionDialogComponent } from './task-action-dialog.component';

describe('TaskActionDialogComponent', () => {
  let component: TaskActionDialogComponent;
  let fixture: ComponentFixture<TaskActionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskActionDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskActionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
