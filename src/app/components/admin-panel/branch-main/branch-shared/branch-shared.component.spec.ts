import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchSharedComponent } from './branch-shared.component';

describe('BranchSharedComponent', () => {
  let component: BranchSharedComponent;
  let fixture: ComponentFixture<BranchSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchSharedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BranchSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
