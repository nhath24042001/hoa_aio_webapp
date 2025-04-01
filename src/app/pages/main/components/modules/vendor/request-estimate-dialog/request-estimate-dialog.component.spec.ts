import { ComponentFixture, TestBed } from '@angular/core/testing'

import { RequestEstimateDialogComponent } from './request-estimate-dialog.component'

describe('RequestEstimateDialogComponent', () => {
  let component: RequestEstimateDialogComponent
  let fixture: ComponentFixture<RequestEstimateDialogComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestEstimateDialogComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(RequestEstimateDialogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
