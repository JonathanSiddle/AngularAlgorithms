import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberGenComponent } from './number-gen.component';

describe('NumberGenComponent', () => {
  let component: NumberGenComponent;
  let fixture: ComponentFixture<NumberGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
