import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDetaillistComponent } from './request-detaillist.component';

describe('RequestDetaillistComponent', () => {
  let component: RequestDetaillistComponent;
  let fixture: ComponentFixture<RequestDetaillistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestDetaillistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestDetaillistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
