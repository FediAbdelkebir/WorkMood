import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendRewardsComponent } from './send-rewards.component';

describe('SendRewardsComponent', () => {
  let component: SendRewardsComponent;
  let fixture: ComponentFixture<SendRewardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendRewardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendRewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
