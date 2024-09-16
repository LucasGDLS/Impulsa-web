import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutweComponent } from './aboutwe.component';

describe('AboutweComponent', () => {
  let component: AboutweComponent;
  let fixture: ComponentFixture<AboutweComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutweComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
