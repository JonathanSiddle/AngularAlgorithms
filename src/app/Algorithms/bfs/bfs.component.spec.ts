import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BFSComponent } from './bfs.component';

describe('BFSComponent', () => {
  let component: BFSComponent;
  let fixture: ComponentFixture<BFSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BFSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BFSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
