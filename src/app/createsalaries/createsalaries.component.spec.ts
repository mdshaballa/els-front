import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesalariesComponent } from './createsalaries.component';

describe('CreatesalariesComponent', () => {
  let component: CreatesalariesComponent;
  let fixture: ComponentFixture<CreatesalariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatesalariesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatesalariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
