import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TododasboardComponent } from './tododasboard.component';

describe('TododasboardComponent', () => {
  let component: TododasboardComponent;
  let fixture: ComponentFixture<TododasboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TododasboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TododasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
