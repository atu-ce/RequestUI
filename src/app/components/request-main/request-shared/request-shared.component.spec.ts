import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestSharedComponent } from './request-shared.component';

describe('RequestSharedComponent', () => {
  let component: RequestSharedComponent;
  let fixture: ComponentFixture<RequestSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestSharedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
