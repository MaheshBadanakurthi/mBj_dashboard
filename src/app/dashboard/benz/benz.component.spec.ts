import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenzComponent } from './benz.component';

describe('BenzComponent', () => {
  let component: BenzComponent;
  let fixture: ComponentFixture<BenzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
