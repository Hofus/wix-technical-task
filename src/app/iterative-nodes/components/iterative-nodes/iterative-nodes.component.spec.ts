import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IterativeNodesComponent } from './iterative-nodes.component';

describe('IterativeNodesComponent', () => {
  let component: IterativeNodesComponent;
  let fixture: ComponentFixture<IterativeNodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IterativeNodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IterativeNodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
