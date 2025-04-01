import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ViolationDialogComponent } from './violation-dialog.component'

describe('ViolationDialogComponent', () => {
  let component: ViolationDialogComponent
  let fixture: ComponentFixture<ViolationDialogComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViolationDialogComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(ViolationDialogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
