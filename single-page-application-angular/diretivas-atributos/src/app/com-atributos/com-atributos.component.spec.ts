import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComAtributosComponent } from './com-atributos.component';

describe('ComAtributosComponent', () => {
  let component: ComAtributosComponent;
  let fixture: ComponentFixture<ComAtributosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComAtributosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComAtributosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
