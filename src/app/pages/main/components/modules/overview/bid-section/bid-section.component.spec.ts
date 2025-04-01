import { ComponentFixture, TestBed } from '@angular/core/testing'

import { BidSectionComponent } from './bid-section.component'

describe('BidSectionComponent', () => {
  let component: BidSectionComponent
  let fixture: ComponentFixture<BidSectionComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BidSectionComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(BidSectionComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
