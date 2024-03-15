import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoGetComponent } from './compo-get.component';

describe('CompoGetComponent', () => {
  let component: CompoGetComponent;
  let fixture: ComponentFixture<CompoGetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompoGetComponent]
    });
    fixture = TestBed.createComponent(CompoGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
