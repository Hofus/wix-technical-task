import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursiveNodesComponent } from './recursive-nodes.component';

describe('RecursiveNodesComponent', () => {
  let component: RecursiveNodesComponent;
  let fixture: ComponentFixture<RecursiveNodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecursiveNodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursiveNodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
