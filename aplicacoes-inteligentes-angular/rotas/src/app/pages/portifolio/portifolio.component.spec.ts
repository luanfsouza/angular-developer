import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortifolioComponent } from './portifolio.component';

describe('PortifolioComponent', () => {
  let component: PortifolioComponent;
  let fixture: ComponentFixture<PortifolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortifolioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortifolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
