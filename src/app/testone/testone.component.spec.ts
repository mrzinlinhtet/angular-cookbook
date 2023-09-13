import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestoneComponent } from './testone.component';

describe('TestoneComponent', () => {
  let component: TestoneComponent;
  let fixture: ComponentFixture<TestoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestoneComponent]
    });
    fixture = TestBed.createComponent(TestoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
